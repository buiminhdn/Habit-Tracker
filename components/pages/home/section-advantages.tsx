import { Activity, ChevronRight, Layers, Shield } from 'lucide-react'

function SectionAdvantages() {
  return (
    <section id="advantage" className="px-6 mt-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-4 h-80 bg-zinc-50 border border-zinc-100 rounded-[2.5rem] p-12 flex flex-col justify-between group overflow-hidden relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-emerald-400/10 transition-colors duration-700"></div>
               <div className="space-y-4 relative z-10">
                  <h3 className="text-2xl font-black uppercase tracking-tight">Systemic Intelligence</h3>
                  <p className="text-zinc-500 max-w-sm font-medium">Automated analysis of your behavioral patterns. Identifying bottlenecks before they become obstacles.</p>
               </div>
               <button className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-zinc-900 group-hover:gap-5 transition-all">Explore Insights <ChevronRight size={14} /></button>
            </div>
            
            <div className="md:col-span-2 bg-black text-white rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center group">
               <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Shield size={32} className="text-emerald-400" />
               </div>
               <h4 className="text-lg font-black uppercase tracking-widest mb-4">Zero-Leak Privacy</h4>
               <p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Local-First Architecture</p>
            </div>

            <div className="md:col-span-3 bg-zinc-900 text-white rounded-[2.5rem] p-12 flex flex-col justify-between h-96">
               <div className="flex justify-between items-start">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center"><Activity size={24} /></div>
                  <span className="text-[9px] font-black uppercase tracking-widest px-4 py-1.5 bg-emerald-400 text-black rounded-full">Live Analytics</span>
               </div>
               <div className="space-y-6">
                  <h3 className="text-3xl font-black uppercase tracking-tight leading-none">Momentum<br/>Tracking</h3>
                  <div className="flex items-center gap-1">
                     {[1,2,3,4,5,6,7,8].map(i => <div key={i} className={`h-8 w-full rounded-md ${i < 6 ? 'bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)]' : 'bg-white/5'}`}></div>)}
                  </div>
               </div>
            </div>

            <div className="md:col-span-3 bg-zinc-100 rounded-[2.5rem] p-12 flex flex-col justify-between h-96 group">
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center"><Layers size={24} /></div>
                  <h3 className="text-2xl font-black uppercase tracking-tight">Hierarchical Depth</h3>
                  <p className="text-zinc-500 font-medium">From decade roadmaps to today's deep work blocks. Every layer is connected through strategic integrity.</p>
               </div>
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-zinc-100 bg-zinc-200 group-hover:translate-x-2 transition-transform" style={{ transitionDelay: `${i*100}ms` }}></div>)}
               </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SectionAdvantages