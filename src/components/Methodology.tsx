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

             <a 
               href="https://wa.me/5591991776453"
               target="_blank"
               rel="noopener noreferrer"
               className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/20 transition-all font-semibold flex justify-center items-center gap-2"
             >
               Participar como Aluno
             </a>
          </motion.div>
        </div>

        {/* Certificate Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-emerald-900/40 to-cyan-900/40 border border-emerald-500/20 p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden relative"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:w-3/5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/10">
               <Award className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Reconhecimento do Esforço</h3>
              <p className="text-slate-300 leading-relaxed">
                Ao completar todas as etapas do curso e concluir todos os exercícios, você receberá um{" "}
                <strong className="text-emerald-400 font-medium">certificado de conclusão</strong>{" "}
                reconhecendo sua competência no idioma inglês.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative group max-w-md w-full rounded-2xl overflow-hidden border border-emerald-500/30 shadow-2xl shadow-emerald-950/50 bg-slate-900/80 backdrop-blur-md hover:border-emerald-400/60 transition-all duration-300">
              <img 
                src="certificado.jpg" 
                alt="Certificado de Conclusão Amazon English" 
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.triedPublic) {
                    target.dataset.triedPublic = 'true';
                    target.src = '/certificado.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity pointer-events-none" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
