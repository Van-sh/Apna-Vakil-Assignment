type ErrorScreenProps = {
   message: string;
   onReload: () => void;
};

function ErrorScreen({ message, onReload }: ErrorScreenProps) {
   return (
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-3">
         <span className="text-7xl text-error">{message}</span>
         <button className="btn btn-error" onClick={onReload}>
            Reload
         </button>
      </div>
   );
}

export default ErrorScreen;
