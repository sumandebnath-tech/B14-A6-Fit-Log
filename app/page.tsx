import Image from "next/image";

export default function Home() {
  return (
    /* 1. Main page container with dark background matching Figma theme */
    <div className="min-h-screen bg-slate-950 text-white font-sans">

      {/* 2. Navigation bar component containing logo and navigation links */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-800">

        {/* 3. Logo section with brand name FITLOG */}
        <div className="text-xl font-extrabold tracking-wider text-yellow-400">
          FITLOG
          </div>

          {/* 4. Navigation links for switching pages or sections */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <span className="cursor-pointer hover:text-white">Home</span>
            <span className="cursor-pointer hover:text-white">Workouts</span>
            <span className="cursor-pointer hover:text-white">My Plan</span>          
        </div>
      </nav>

      {/* 5. Hero section container for the main banner text and CTA */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-xl">

          <div className="max-w-xl z-10">

            {/* 6. Main heading text: TRAIN WITH INTENT. LOG EVERY SET. */}
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-4 text-white">
              Train with intent. Log every set.
            </h1>

            {/* 7. Description text explaining the purpose of Fit-Log */}
            <p className="text-slate-400 text-sm md:text-base mb-8">
              Fit-Log is a dark, no-nonsense gym companion app. Lift, lock it into today&apos;s plan, and watch the week&apos;s work add up. 
            </p>

            {/* 8. Call to action button to start logging workouts */}
            <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-950 front-bold px-6 py-3 rounded-lg transition-colors cursor-pointer shadow-lg">
              Get Started
            </button>
          </div>


        </div>
      </section>

      {/* 9. Workout library section placeholder for displaying exercise cards */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold mb-6 text-slate-200">THE LIBRARY</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Exercise cards will be rendered here */}
        </div>
      </section>

      </div>
  );
}
