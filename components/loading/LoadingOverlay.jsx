const LoadingOverlay = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-opacity-75 bg-gray-400 z-50">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-[#1094F6] h-12 w-12"></div>
    </div>
  );
};

export default LoadingOverlay;
