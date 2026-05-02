import { motion } from "motion/react";
import { MessageCircle, Zap, Target, Users, Calendar, Clock, Award, Globe2 } from "lucide-react";

export function CourseOverview() {
  const advantages = [
    {
      icon: Zap,
      title: "Aprendizado Rápido",
      desc: "Curso desenhado para progresso rápido na fluência do inglês ao longo de 10 meses."
    },
    {
      icon: Clock,
      title: "Flexibilidade",
      desc: "Material online e lives quinzenais para se adaptar ao seu ritmo de vida."
    },
    {
      icon: MessageCircle,
      title: "Foco em Conversação",
      desc: "Ênfase na comunicação oral para situações reais do cotidiano."
    },
    {
      icon: Target,
      title: "Suporte Personalizado",
      desc: "Acompanhamento individualizado em todas as etapas do aprendizado."
    }
  ];

  return (
    <section id="curso" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        {/* Objective & Advantages */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Objetivo do <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Curso</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Equipar os alunos com habilidades práticas para se expressar fluentemente em inglês. 
              Desde situações rotineiras, como imigração e compras online, até expressar ideias complexas.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {advantages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center mb-6 group-hover:border-emerald-500/50 group-hover:scale-110 transition-all">
                <item.icon className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Course Structure Matrix */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-slate-900 border border-white/10 overflow-hidden relative flex flex-col md:flex-row"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
          
          <div className="p-12 md:w-1/2 relative z-10 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Estrutura do Curso</h3>
            <p className="text-slate-400 mb-8 max-w-md">
              As aulas são estruturadas para um aprendizado profundo. Cada minuto é otimizado para o máximo de aproveitamento.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">10</div>
                <div>
                  <p className="font-bold text-white">Meses de Duração</p>
                  <p className="text-sm text-slate-400">Aprendizado contínuo</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">45</div>
                <div>
                  <p className="font-bold text-white">Minutos por Aula</p>
                  <p className="text-sm text-slate-400">Média de duração ideal</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">120</div>
                <div>
                  <p className="font-bold text-white">Horas Totais</p>
                  <p className="text-sm text-slate-400">Carga horária completa</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-950 p-12 md:w-1/2 flex items-center justify-center relative z-10 border-l border-white/5">
              <div className="grid grid-cols-2 gap-4 w-full">
                 {[
                   { label: "Jovens Profissionais", icon: Users },
                   { label: "Universitários", icon: Award },
                   { label: "Amantes de Viagens", icon: Globe2 },
                   { label: "Iniciantes & Intermediários", icon: Target }
                 ].map((t, i) => (
                   <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                      <t.icon className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                      <p className="text-sm font-medium text-white">{t.label}</p>
                   </div>
                 ))}
              </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
