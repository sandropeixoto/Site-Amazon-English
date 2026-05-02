import { motion } from "motion/react";
import { Headphones, Download, Play, FileText, CheckCircle2, Award } from "lucide-react";

export function Methodology() {
  return (
    <section id="metodologia" className="py-24 relative overflow-hidden bg-slate-950/50">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Title Section */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Metodologia</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg max-w-2xl"
          >
            Uma abordagem cuidadosa e multifacetada desenhada para máxima absorção, prática constante e suporte próximo.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Methodology specific points */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                 <FileText className="w-24 h-24 text-emerald-400" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Material Didático</h3>
               <p className="text-slate-300 mb-6 relative z-10">
                 Trabalhamos com recursos na plataforma online, essenciais para a pronúncia e compreensão oral e escrita, disponíveis quando você precisar.
               </p>
               <ul className="space-y-3 relative z-10">
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> PDFs escritos de apoio</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Áudios para prática de pronúncia</li>
                 <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Exercícios para download</li>
               </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
               <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                 <Headphones className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                 <h4 className="font-bold mb-1">Prática de Escuta</h4>
                 <p className="text-xs text-slate-400">Compreensão auditiva</p>
               </div>
               <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                 <FileText className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                 <h4 className="font-bold mb-1">Quizzes</h4>
                 <p className="text-xs text-slate-400">Testes interativos</p>
               </div>
            </div>
          </motion.div>

          {/* Lives Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-[#0a0f1e] border border-white/10 relative overflow-hidden"
          >
             <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mb-8">
                <Play className="w-8 h-8 text-cyan-400 ml-1" />
             </div>
             
             <h3 className="text-3xl font-bold mb-4">Lives Interativas</h3>
             <p className="text-slate-300 mb-8 leading-relaxed">
               A cada 15 dias, realizo lives de uma hora para acompanhar o progresso dos alunos, 
               responder suas dúvidas e proporcionar um ambiente de aprendizado interativo e dinâmico.
             </p>

             <div className="space-y-4 mb-8">
               <div className="flex bg-white/5 rounded-xl p-4 border border-white/5 border-l-4 border-l-cyan-500">
                  <div className="mr-4 text-cyan-400 font-bold">15</div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Dias</h5>
                    <p className="text-xs text-slate-400">Frequência das aulas interativas</p>
                  </div>
               </div>
               <div className="flex bg-white/5 rounded-xl p-4 border border-white/5 border-l-4 border-l-emerald-500">
                  <div className="mr-4 text-emerald-400 font-bold">1h</div>
                  <div>
                    <h5 className="font-bold text-white text-sm">Duração</h5>
                    <p className="text-xs text-slate-400">Tempo para resolução e prática</p>
                  </div>
               </div>
             </div>

             <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white/10 transition-colors font-semibold flex justify-center items-center gap-2">
               Participar como Aluno
             </button>
          </motion.div>
        </div>

        {/* Certificate Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-emerald-900/40 to-cyan-900/40 border border-emerald-500/20 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
               <Award className="w-10 h-10 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Reconhecimento do Esforço</h3>
              <p className="text-slate-300 max-w-xl">
                Ao completar todas as etapas do curso e concluir todos os exercícios, você receberá um 
                <strong className="text-emerald-400 font-medium"> certificado de conclusão</strong> 
                reconhecendo sua competência no idioma inglês.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
