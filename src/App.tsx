import { useCallback, useEffect } from "react";

import ErrorScreen from "./components/ErrorScreen";
import Loader from "./components/Loader";
import Posts from "./components/Posts";
import { useDataContext } from "./context";

function App() {
   const { isLoading, error, fetchPosts, setLoading } = useDataContext();

   const fetchData = useCallback(async () => {
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
   }, [fetchPosts, setLoading]);

   useEffect(() => {
      fetchData();
   }, [fetchData]);

   return (
      <>
         <main className="min-h-screen bg-base-100 text-base-content flex flex-col items-center">
            {isLoading && <Loader />}
            {!isLoading && !error && <Posts />}
            {error && <ErrorScreen message={error} onReload={fetchData} />}
         </main>
      </>
   );
}

export default App;
