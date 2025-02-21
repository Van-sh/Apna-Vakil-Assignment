import { createContext, useContext } from "react";

export type TPost = {
   userId: number;
   id: number;
   title: string;
   body: string;
};

export type TDataState = {
   isLoading: boolean;
   posts: TPost[];
   error: string | null;
};

export const initialState: TDataState = {
   isLoading: true,
   posts: [],
   error: null,
};

export type TDataContext = TDataState & {
   setLoading: (isLoading: boolean) => void;
   fetchPosts: () => void;
   deletePost: (id: number) => void;
   setError: (message: string) => void;
};

export const DataContext = createContext<TDataContext | null>(null);

export function useDataContext() {
   const dataContext = useContext(DataContext);

   if (dataContext === null) {
      throw new Error("Data context is null - that should never happen");
   }

   return dataContext;
}
