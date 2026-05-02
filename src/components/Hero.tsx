import { motion } from "motion/react";
import { ArrowRight, Globe, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Matrículas Abertas
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Dominando o Inglês no <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Ritmo da Vida Moderna
            </span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
            Bem-vindo ao Amazon English. O aprendizado transcende barreiras para se integrar 
            ao seu estilo de vida dinâmico. Aqui, você não apenas aprende inglês; você vive a língua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 font-semibold text-white hover:shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 group">
              Começar Jornada <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" /> Conhecer Método
            </button>
          </div>
        </motion.div>

        {/* Floating Element Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          {/* Main Floating Card */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl relative z-10 w-full max-w-sm mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 flex items-center justify-center border border-emerald-500/20">
                <Globe className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h3 className="font-bold text-xl">10 Meses</h3>
                <p className="text-slate-400 text-sm">Para a fluência prática</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-300">Foco em Conversação</span>
                  <span className="text-emerald-400 font-medium">100%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-sm text-slate-300 italic">
                  "Preparando você para situações reais do dia a dia, desde interações sociais até o ambiente profissional."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative small card */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-xl z-20 flex items-center gap-3"
          >
             <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
               <span className="text-cyan-400 font-bold">120h</span>
             </div>
             <div>
               <p className="text-xs text-slate-400">Carga Horária</p>
               <p className="text-sm font-bold text-white">Completa</p>
             </div>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 rounded-[3rem] transform translate-x-8 translate-y-8 -z-10 blur-2xl opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
