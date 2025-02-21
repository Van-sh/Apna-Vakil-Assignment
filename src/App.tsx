import { useEffect } from "react";

import Loader from "./components/Loader";
import Posts from "./components/Posts";
import { useDataContext } from "./context";

function App() {
   const { isLoading, fetchPosts, setLoading } = useDataContext();

   useEffect(() => {
      const fetchData = async () => {
         console.log("Setting loading to true");
         setLoading(true);
         try {
            console.log("Fetching data...");
            await fetchPosts();
            console.log("Data fetched successfully");
         } catch (error) {
            console.error("Error fetching posts:", error);
         } finally {
            console.log("Setting loading to false");
            setLoading(false);
         }
      };

      fetchData();
   }, [fetchPosts, setLoading]);

   return (
      <>
         <main className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center">
            {isLoading && <Loader />}
            {!isLoading && <Posts />}
         </main>
      </>
   );
}

export default App;
