import { motion } from "motion/react";
import { BookOpen, Globe2, Landmark } from "lucide-react";

export function Professor() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-slate-950/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* The image placeholder */}
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative bg-slate-900 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
                alt="Professor José Regis Junior" 
                className="w-full h-full object-cover opacity-80"
              />
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <h3 className="text-2xl font-bold mb-1">José Regis Junior</h3>
                <p className="text-emerald-400 font-medium">Head Instructor & Founder</p>
              </div>
            </div>

            {/* Floating indicator */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-1/4 p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl hidden md:flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-lg">30+</span>
              </div>
              <div>
                <p className="text-sm text-slate-400">Anos de</p>
                <p className="font-bold text-white">Experiência</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre o <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Professor</span>
            </h2>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              "Um apaixonado por idiomas e culturas, que traz uma rica experiência de mais de três décadas em ensino de inglês. Formado pelo Centro Cultural Brasil-Estados Unidos (CCBEU), ele se destaca pela sua abordagem prática e envolvente no ensino do idioma."
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Globe2,
                  title: "Vivência Internacional",
                  desc: "Experiências marcantes em Covington (OH), Dallas (TX) e Sioux Falls (ND)."
                },
                {
                  icon: Landmark,
                  title: "Exchange Student (1974)",
                  desc: "Participou de programas de intercâmbio fundamentais para sua imersão cultural."
                },
                {
                  icon: BookOpen,
                  title: "Experiência Corporativa",
                  desc: "Consultoria para a Daktronics, liderando projetos internacionais no norte do Brasil."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 transition-colors">
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
