export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6">
      <img
        src="/loader.webp"
        alt="Loading…"
        width={240}
        height={135}
        className="rounded-2xl"
        style={{ imageRendering: "auto" }}
      />

      {/* Progress bar */}
      <div className="w-56 h-1.5 rounded-full bg-gray-100 overflow-hidden">
        <div className="h-full w-2/5 rounded-full bg-[#2e8b57] loading-bar" />
      </div>
    </div>
  );
}
