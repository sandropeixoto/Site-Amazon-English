import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1e]/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/20 transition-all">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tight">Amazon <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">English</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre o Professor</a>
          <a href="#curso" className="hover:text-emerald-400 transition-colors">O Curso</a>
          <a href="#publico" className="hover:text-emerald-400 transition-colors">Público-Alvo</a>
          <a href="#metodologia" className="hover:text-emerald-400 transition-colors">Metodologia</a>
        </nav>

        <a 
          href="https://wa.me/5591991776453"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all text-sm font-semibold shadow-lg shadow-emerald-500/10"
        >
          Inscreva-se
        </a>
      </div>
    </motion.header>
  );
}
