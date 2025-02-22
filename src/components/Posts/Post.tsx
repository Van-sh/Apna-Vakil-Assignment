import { useCallback } from "react";
import { useDataContext, type TPost } from "../../context";

type PostProps = TPost;

function Post({ id, title, body }: PostProps) {
   const postsContext = useDataContext();

   const handleDelete = useCallback(() => {
      postsContext.deletePost(id);
   }, [postsContext, id]);

   return (
      <div className="card w-full bg-base-200/75">
         <div className="card-body p-3">
            <h3 className="card-title">{title}</h3>
            <p>{body}</p>
            <div className="card-actions justify-end">
               <button className="btn btn-error" onClick={handleDelete}>
                  Delete
               </button>
            </div>
         </div>
      </div>
   );
}

export default Post;
