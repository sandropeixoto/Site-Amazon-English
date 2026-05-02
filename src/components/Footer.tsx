import { GraduationCap, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050811] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center shadow-lg">
                <GraduationCap className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">Amazon <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">English</span></span>
            </a>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed text-sm">
              Dominando o Inglês no Ritmo da Vida Moderna. Adapte o aprendizado à sua rotina com nossa metodologia inovadora e prática.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors text-slate-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors text-slate-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors text-slate-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 transition-colors text-slate-400">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre o Professor</a></li>
              <li><a href="#curso" className="hover:text-emerald-400 transition-colors">Objetivo do Curso</a></li>
              <li><a href="#publico" className="hover:text-emerald-400 transition-colors">Público-Alvo</a></li>
              <li><a href="#metodologia" className="hover:text-emerald-400 transition-colors">Material e Metodologia</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>suporte@amazonenglish.com</li>
              <li>+55 (11) 99999-9999</li>
              <li>Av. Principal, 1000 - Centro</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Amazon English. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
