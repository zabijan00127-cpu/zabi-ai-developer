export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#faf9f7]">

      {/* TOP NAV */}
      <div className="flex items-center gap-2 px-4 py-4">
        <div className="text-2xl">≡</div>
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-xl">💗</span>
          Zabi AI Developer
        </div>
      </div>

      {/* TOP SOFT GLOW */}
      <div className="absolute -top-64 left-1/2 -translate-x-1/2
        w-[600px] h-[600px]
        bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300
        rounded-full blur-[140px] opacity-60">
      </div>

      {/* CENTER */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 mt-20">

        <div className="mb-6 text-sm bg-white/70 px-5 py-2 rounded-full shadow">
          Your 2025 Zabi AI vibes are here →
        </div>

        <h1 className="text-2xl font-semibold mb-8">
          Got an idea, zabi?
        </h1>

        {/* PROMPT CARD */}
        <div className="w-full max-w-xl bg-white/80 backdrop-blur-xl
          rounded-2xl shadow-xl p-3 flex items-center gap-2">

          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            +
          </button>

          <input
            className="flex-1 px-3 py-3 bg-transparent outline-none text-sm"
            placeholder="Ask Zabi AI to create a landing page for my..."
          />

          <button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
            ↑
          </button>
        </div>
      </div>

      {/* BOTTOM GLOW */}
      <div className="absolute bottom-[-300px] left-1/2 -translate-x-1/2
        w-[800px] h-[800px]
        bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400
        rounded-full blur-[160px] opacity-70">
      </div>

      {/* BOTTOM TABS */}
      <div className="relative z-10 flex justify-center gap-2 mt-24 pb-6">
        <div className="bg-white px-4 py-2 rounded-full shadow text-sm">
          Recently viewed
        </div>
        <div className="bg-white px-4 py-2 rounded-full shadow text-sm">
          My projects
        </div>
        <div className="bg-white px-4 py-2 rounded-full shadow text-sm">
          Templates
        </div>
      </div>
    </div>
  );
}
