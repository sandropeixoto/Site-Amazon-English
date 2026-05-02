import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Professor } from './components/Professor';
import { CourseOverview } from './components/CourseOverview';
import { Methodology } from './components/Methodology';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-50 overflow-x-hidden selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <Hero />
        <Professor />
        <CourseOverview />
        <Methodology />
      </main>
      <Footer />
    </div>
  );
}
