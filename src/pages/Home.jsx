import React from 'react';
import { Play, ArrowRight, Smartphone, Leaf, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] text-gray-900 selection:bg-[#00df81] selection:text-white">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[800px] z-0 opacity-60 mix-blend-multiply pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00df81] rounded-full filter blur-[100px] animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#34d399] rounded-full filter blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-[#10b981] rounded-full filter blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative mt-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-semibold mb-8 animate-float shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00df81] animate-pulse"></span>
              The Future of African Agriculture
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.05] text-gray-900">
              Farm to Table, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00df81] via-[#059669] to-[#047857]">
                Reimagined.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the first truly decentralized agricultural marketplace. Direct connections. Fair prices. Zero middlemen.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#download" className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 text-white font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 shadow-xl">
                <div className="absolute inset-0 bg-[#00df81] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10">Get Started Now</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button className="flex items-center gap-3 px-8 py-4 rounded-full glass-panel font-bold hover:bg-black/5 transition-colors shadow-sm">
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center backdrop-blur-md">
                  <Play size={16} className="text-[#059669] ml-1" />
                </div>
                Watch Manifest
              </button>
            </div>
          </div>

          {/* Abstract App Preview */}
          <div className="mt-24 max-w-5xl mx-auto relative perspective-1000">
            <div className="w-full aspect-video rounded-2xl glass-panel border border-black/5 shadow-2xl overflow-hidden relative glow-effect transform rotate-x-12 translate-y-10 scale-95 hover:rotate-x-0 hover:translate-y-0 hover:scale-100 transition-all duration-700 ease-out bg-white/80">
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-black/5 z-10"></div>
              <img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=1600&q=80" alt="Platform Dashboard Preview" className="w-full h-full object-cover opacity-80" />
              
              {/* Floating UI Elements inside preview */}
              <div className="absolute bottom-8 left-8 z-20 glass-panel px-6 py-4 rounded-2xl flex items-center gap-4 animate-float bg-white/90 shadow-lg" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 rounded-full bg-[#00df81] flex items-center justify-center text-white font-bold">✓</div>
                <div>
                  <div className="text-sm font-semibold text-gray-500">Payment Received</div>
                  <div className="text-xl font-bold text-gray-900">R 4,500.00</div>
                </div>
              </div>
              
              <div className="absolute top-8 right-8 z-20 glass-panel px-6 py-4 rounded-2xl flex flex-col gap-2 animate-float bg-white/90 shadow-lg" style={{ animationDelay: '2.5s' }}>
                <div className="text-sm font-semibold text-gray-500">Active Demand</div>
                <div className="flex items-end gap-2">
                  <div className="text-2xl font-bold text-[#059669]">High</div>
                  <div className="flex gap-1 mb-1">
                    <div className="w-1 h-3 bg-[#059669] rounded-full"></div>
                    <div className="w-1 h-5 bg-[#059669] rounded-full"></div>
                    <div className="w-1 h-8 bg-[#059669] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee */}
      <section className="py-12 border-y border-black/5 bg-white/50 overflow-hidden flex whitespace-nowrap relative">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#fafafa] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#fafafa] to-transparent z-10"></div>
        
        <div className="animate-marquee flex gap-12 items-center">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400">EMPOWERING FARMERS</span>
              <span className="text-[#00df81]">✦</span>
              <span className="text-3xl font-black text-gray-900">ZERO MIDDLEMEN</span>
              <span className="text-[#00df81]">✦</span>
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-400">NOURISHING COMMUNITIES</span>
              <span className="text-[#00df81]">✦</span>
              <span className="text-3xl font-black text-gray-900">FAIR TRADE APP</span>
              <span className="text-[#00df81]">✦</span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Bento Box Features */}
      <section className="py-32 relative bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Designed for <br/><span className="text-[#059669]">Growth.</span></h2>
            <p className="text-gray-600 font-medium text-xl max-w-xl">A powerful suite of tools built seamlessly into one platform. For the farmer, the buyer, and the community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Box 1 (Large) */}
            <div className="md:col-span-2 glass-panel rounded-[2rem] p-10 relative overflow-hidden group bg-gray-50/50">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#00df81]/10 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-[#00df81]/20 transition-colors duration-500"></div>
              <Smartphone size={40} className="text-[#059669] mb-8 relative z-10" />
              <h3 className="text-3xl font-bold mb-4 relative z-10 text-gray-900">One App. Total Control.</h3>
              <p className="text-gray-600 font-medium text-lg max-w-md relative z-10">Manage inventory, track logistics, and process payments all from the palm of your hand.</p>
            </div>
            
            {/* Box 2 (Tall) */}
            <div className="md:row-span-2 glass-panel rounded-[2rem] p-10 relative overflow-hidden group flex flex-col bg-gray-50/50">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#059669]/10 rounded-full filter blur-[60px] translate-y-1/2 -translate-x-1/4 group-hover:bg-[#059669]/20 transition-colors duration-500"></div>
              <Leaf size={40} className="text-[#059669] mb-8 relative z-10" />
              <h3 className="text-3xl font-bold mb-4 relative z-10 text-gray-900">Fresh from the Source</h3>
              <p className="text-gray-600 font-medium text-lg mb-8 relative z-10">Cut out the supply chain delays. Buyers get produce hours after harvest, not weeks.</p>
              <div className="mt-auto relative z-10 w-full h-48 bg-white rounded-xl border border-black/5 p-4 shadow-sm">
                 {/* Decorative chart */}
                 <div className="w-full h-full flex items-end gap-2">
                    <div className="w-1/4 bg-[#00df81]/20 h-1/3 rounded-t-sm"></div>
                    <div className="w-1/4 bg-[#00df81]/40 h-2/3 rounded-t-sm"></div>
                    <div className="w-1/4 bg-[#00df81]/60 h-1/2 rounded-t-sm"></div>
                    <div className="w-1/4 bg-[#00df81] h-full rounded-t-sm"></div>
                 </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="glass-panel rounded-[2rem] p-10 relative overflow-hidden group bg-gray-50/50">
              <ShieldCheck size={40} className="text-[#059669] mb-8 relative z-10" />
              <h3 className="text-2xl font-bold mb-3 relative z-10 text-gray-900">Secure Payments</h3>
              <p className="text-gray-600 font-medium relative z-10">Instant, verifiable escrow payments protecting both parties.</p>
            </div>

            {/* Box 4 */}
            <div className="glass-panel rounded-[2rem] p-10 relative overflow-hidden group bg-gray-50/50">
              <Zap size={40} className="text-[#059669] mb-8 relative z-10" />
              <h3 className="text-2xl font-bold mb-3 relative z-10 text-gray-900">Real-time Data</h3>
              <p className="text-gray-600 font-medium relative z-10">Market trends and demand forecasting built right in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Metrics */}
      <section className="py-24 border-y border-black/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            <div>
              <div className="text-5xl font-black text-gray-900 mb-2">10k+</div>
              <div className="text-[#059669] font-bold tracking-widest uppercase text-sm">Active Farmers</div>
            </div>
            <div>
              <div className="text-5xl font-black text-gray-900 mb-2">R5M+</div>
              <div className="text-[#059669] font-bold tracking-widest uppercase text-sm">Traded Monthly</div>
            </div>
            <div>
              <div className="text-5xl font-black text-gray-900 mb-2">48h</div>
              <div className="text-[#059669] font-bold tracking-widest uppercase text-sm">Farm to Table</div>
            </div>
            <div>
              <div className="text-5xl font-black text-gray-900 mb-2">0%</div>
              <div className="text-[#059669] font-bold tracking-widest uppercase text-sm">Middleman Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="py-32 relative overflow-hidden bg-[#fafafa]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00df81]/10 rounded-full filter blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-gray-900">
            Ready to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400">Transform?</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium mb-12 max-w-2xl mx-auto">
            Join thousands of farmers and buyers who are already shaping the future of agriculture.
          </p>
          <a href="#download" className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#00df81] hover:bg-[#00c974] text-white font-bold text-xl rounded-full transition-all hover:scale-105 shadow-xl hover:shadow-[0_10px_40px_rgba(0,223,129,0.4)]">
            Download Culti Mart
          </a>
        </div>
      </section>

    </div>
  );
}
