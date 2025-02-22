function Loader() {
   return (
      <div className="w-full h-full absolute top-0 left-0 overflow-visible">
         <div className="aspect-square w-[20vmin] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-t-4 border-t-blue-400 animate-[spin_1s_linear_infinite] drop-shadow-[0px_0px_3px_var(--color-blue-400)] overflow-visible"></div>
         <div className="aspect-square w-[15vmin] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-t-4 border-t-green-400 animate-[spin_1s_linear_infinite_reverse] drop-shadow-[0px_0px_2px_var(--color-green-400)] overflow-visible"></div>
      </div>
   );
}

export default Loader;
