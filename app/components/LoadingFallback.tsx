export default function LoadingFallback() {
    return (
      <div className="flex-1 flex w-full mx-auto items-center justify-center lg:max-w-4xl sm:max-w-3xl px-4 h-screen">
        <div className="text-center">
          <div className="w-24 h-24 border-8 border-stone-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-stone-800 text-2xl font-extrabold">Loading...</p>
        </div>
      </div>
    );
  }