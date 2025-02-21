import { useDataContext } from "../../context";
import Post from "./Post";

function Posts() {
   const { posts } = useDataContext();

   return (
      <div>
         <h1 className="text-4xl my-4 text-center">Mock Posts</h1>
         <div className="max-w-[80vw] md:max-w-[60vw] lg:max-w-[50vw] flex flex-col items-center justify-center gap-3">
            {posts.map((post) => (
               <Post key={post.id} {...post} />
            ))}
         </div>
      </div>
   );
}

export default Posts;
