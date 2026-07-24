import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5591991776453"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/40 border border-emerald-400/30 backdrop-blur-md group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
      <span className="hidden sm:inline text-sm font-medium pr-1">Falar no WhatsApp</span>
    </motion.a>
  );
}
