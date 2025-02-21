import axios, { AxiosError } from "axios";
import { useCallback, useReducer, type ReactNode } from "react";

import { DataContext, initialState, type TDataContext, type TDataState, type TPost } from ".";

type DataContextProviderProps = {
   children: ReactNode;
};

enum ActionEnum {
   SetLoading = "TOGGLE_LOADING",
   FetchPostsSuccess = "FETCH_POSTS_SUCCESS",
   FetchPostsFailure = "FETCH_POSTS_FAILURE",
   DeletePost = "DELETE_POST",
   SetError = "SET_ERROR",
}

type SetLoadingAction = {
   type: ActionEnum.SetLoading;
   payload: boolean;
};

type FetchPostsSuccessAction = {
   type: ActionEnum.FetchPostsSuccess;
   payload: TPost[];
};

type FetchPostsFailureAction = {
   type: ActionEnum.FetchPostsFailure;
   payload: string;
};

type DeletePostAction = {
   type: ActionEnum.DeletePost;
   payload: {
      id: number;
   };
};

type SetErrorAction = {
   type: ActionEnum.SetError;
   payload: string;
};

type Action =
   | SetLoadingAction
   | FetchPostsSuccessAction
   | FetchPostsFailureAction
   | DeletePostAction
   | SetErrorAction;

function dataReducer(state: TDataState, action: Action): TDataState {
   if (action.type === ActionEnum.SetLoading) {
      return {
         ...state,
         isLoading: action.payload,
      };
   } else if (action.type === ActionEnum.FetchPostsSuccess) {
      return {
         ...state,
         posts: action.payload,
      };
   } else if (action.type === ActionEnum.FetchPostsFailure) {
      return {
         ...state,
         error: action.payload,
      };
   } else if (action.type === ActionEnum.DeletePost) {
      return {
         ...state,
         posts: state.posts.filter((post) => post.id != action.payload.id),
      };
   } else {
      return state;
   }
}

export default function DataContextProvider({ children }: DataContextProviderProps) {
   const [postsState, dispatch] = useReducer(dataReducer, initialState);

   const setLoading: TDataContext["setLoading"] = useCallback((isLoading: boolean) => {
      dispatch({
         type: ActionEnum.SetLoading,
         payload: isLoading,
      });
   }, []);

   const fetchPosts: TDataContext["fetchPosts"] = useCallback(async () => {
      try {
         const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
         dispatch({ type: ActionEnum.FetchPostsSuccess, payload: posts.data });
      } catch (error) {
         dispatch({
            type: ActionEnum.FetchPostsFailure,
            payload: (error as AxiosError<TPost[]>).message,
         });
      }
   }, []);

   const deletePost: TDataContext["deletePost"] = useCallback((id: number) => {
      dispatch({ type: ActionEnum.DeletePost, payload: { id } });
   }, []);

   const setError: TDataContext["setError"] = useCallback((message: string) => {
      dispatch({ type: ActionEnum.SetError, payload: message });
   }, []);

   const ctx: TDataContext = {
      isLoading: postsState.isLoading,
      posts: postsState.posts,
      error: postsState.error,
      setLoading,
      fetchPosts,
      deletePost,
      setError,
   };

   return <DataContext.Provider value={ctx}>{children}</DataContext.Provider>;
}
