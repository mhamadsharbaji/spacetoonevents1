export default function CinematicCollagePage() {
  const images = [
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop'
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 w-[40rem] h-[40rem] bg-pink-500/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse delay-700" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[20rem] h-[20rem] bg-purple-500/20 blur-[100px] rounded-full animate-ping opacity-30" />
      </div>

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage:
            'url(https://grainy-gradients.vercel.app/noise.svg)'
        }}
      />

      {/* Main Layout */}
      <div className="relative z-10 flex flex-col h-full p-4 md:p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 lg:mb-6 animate-[fadeIn_1.2s_ease]">
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none">
              VISUAL
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-white to-cyan-400">
                EXPERIENCE
              </span>
            </h1>
          </div>

          <button className="hidden md:flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            Explore
          </button>
        </div>

        {/* Collage Grid */}
        <div className="grid flex-1 grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-3 lg:gap-4 min-h-0">
          {images.map((img, index) => {
            const styles = [
              'col-span-1 row-span-2',
              'col-span-1 row-span-1',
              'col-span-1 row-span-1',
              'col-span-2 md:col-span-1 row-span-2',
              'col-span-1 row-span-1',
              'col-span-1 row-span-1',
              'col-span-1 row-span-2',
              'col-span-1 row-span-1'
            ];

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 backdrop-blur-md ${styles[index]} animate-[fadeUp_0.8s_ease]`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Image */}
                <img
                  src={img}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[2500ms] ease-out"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Hover Blur Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/10 backdrop-blur-[2px]" />

                {/* Floating Glass Card */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-xs uppercase tracking-[0.3em] text-white/60 mb-1">
                    Featured
                  </div>
                  <div className="text-lg md:text-xl font-semibold leading-tight">
                    Creative Motion & Visual Energy
                  </div>
                </div>

                {/* Animated Shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
                  <div className="absolute -left-[120%] top-0 h-full w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[150%] transition-all duration-[1400ms]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Floating Stats */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 md:gap-5 px-4 py-3 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl animate-[float_5s_ease-in-out_infinite]">
          <div>
            <div className="text-xl md:text-2xl font-black">08</div>
            <div className="text-[10px] uppercase tracking-widest text-white/60">Scenes</div>
          </div>

          <div className="w-px h-10 bg-white/10" />

          <div>
            <div className="text-xl md:text-2xl font-black">4K</div>
            <div className="text-[10px] uppercase tracking-widest text-white/60">Visuals</div>
          </div>

          <div className="w-px h-10 bg-white/10" />

          <div>
            <div className="text-xl md:text-2xl font-black">Live</div>
            <div className="text-[10px] uppercase tracking-widest text-white/60">Motion</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateX(-50%) translateY(0px);
          }
          50% {
            transform: translateX(-50%) translateY(-8px);
          }
        }

        * {
          -webkit-tap-highlight-color: transparent;
        }

        body {
          overflow: hidden;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-rows: repeat(4, minmax(0, 1fr));
          }
        }
      `}</style>
    </div>
  );
}
