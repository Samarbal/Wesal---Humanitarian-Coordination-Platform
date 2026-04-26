import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Search, 
  Layers, 
  Droplets, 
  Stethoscope, 
  X, 
  Share2, 
  ChevronLeft,
  Settings2,
  Info,
  CheckCircle2
} from 'lucide-react';
import { useState } from 'react';

export default function InteractiveMapView() {
  const [selectedPin, setSelectedPin] = useState<boolean>(true);

  return (
    <div className="fixed inset-0 top-16 right-0 left-0 bg-wesal-light/10 overflow-hidden">
      {/* Map Content Layer */}
      <div className="absolute inset-0 grayscale opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      <div className="absolute inset-0 bg-[#e5e7eb] -z-10" />
      
      {/* Simulated Map Markers */}
      <div className="relative w-full h-full">
         <motion.div 
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           className="absolute top-[30%] left-[45%] cursor-pointer group"
           onClick={() => setSelectedPin(true)}
         >
           <div className="relative">
              <motion.div 
                animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 bg-urgent rounded-full blur-md"
              />
              <div className="relative w-10 h-10 bg-urgent rounded-full flex items-center justify-center text-white shadow-2xl border-2 border-white">
                 <MapPin className="w-5 h-5" />
              </div>
           </div>
         </motion.div>

         <div className="absolute top-[65%] left-[55%]">
            <div className="w-8 h-8 bg-wesal-navy rounded-full flex items-center justify-center text-white border-2 border-white shadow-xl animate-bounce">
               <WaterDrop className="w-4 h-4" />
            </div>
         </div>
      </div>

      {/* Floating Filter UI */}
      <div className="absolute top-8 right-8 z-20 space-y-4">
        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white/90 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-white/50 w-64 space-y-6"
        >
           <div className="space-y-4">
              <p className="text-xs font-black text-wesal-navy border-b border-wesal-light pb-3">عوامل التصفية</p>
              
              <div className="flex items-center justify-between">
                 <span className="text-sm font-bold text-wesal-turquoise">عرض الحرارة</span>
                 <div className="w-12 h-6 bg-wesal-navy rounded-full relative p-1 cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full mr-auto" />
                 </div>
              </div>

              <button className="text-right text-[10px] font-black text-wesal-navy hover:underline">تركيز على أعلى المناطق احتياجاً</button>
           </div>
        </motion.div>

        <motion.div 
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white/90 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-white/50 space-y-4"
        >
           {[
             { label: 'أولوية قصوى (24)', color: 'bg-urgent' },
             { label: 'متوسطة (142)', color: 'bg-amber-500' },
             { label: 'مستقرة (89)', color: 'bg-wesal-turquoise' },
           ].map((item, i) => (
             <div key={i} className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <span className="text-xs font-bold text-wesal-turquoise">{item.label}</span>
             </div>
           ))}
        </motion.div>
      </div>

      {/* Selected Entity Details */}
      <AnimatePresence>
        {selectedPin && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="absolute bottom-12 right-12 left-12 lg:left-auto lg:w-[450px] z-30"
          >
             <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(26,55,77,0.3)] overflow-hidden border border-white">
                <div className="bg-wesal-navy p-6 text-white flex justify-between items-center">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-urgent/20 rounded-2xl flex items-center justify-center">
                         <MapPin className="w-6 h-6 text-urgent" />
                      </div>
                      <div>
                         <h3 className="font-black text-xl font-display">منطقة خان يونس - قطاع 4</h3>
                         <p className="text-[10px] font-bold opacity-70 mt-1 uppercase tracking-wide">تحديث: منذ 14 دقيقة</p>
                      </div>
                   </div>
                   <button onClick={() => setSelectedPin(false)} className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                      <X className="w-4 h-4" />
                   </button>
                </div>

                <div className="p-8 space-y-8">
                   <div className="grid grid-cols-2 gap-4">
                      <div className="bg-surface p-4 rounded-3xl border border-wesal-light">
                         <p className="text-wesal-turquoise text-[10px] font-black mb-2 uppercase">نوع الحالة</p>
                         <p className="font-black text-wesal-navy">نقص إمدادات المياه</p>
                      </div>
                      <div className="bg-surface p-4 rounded-3xl border border-wesal-light">
                         <p className="text-wesal-turquoise text-[10px] font-black mb-2 uppercase">متضررين</p>
                         <p className="font-black text-wesal-navy">1,250+ فرد</p>
                      </div>
                   </div>

                   <div className="flex items-center justify-between bg-wesal-light/10 p-6 rounded-[2rem] border border-wesal-light/50">
                      <div className="space-y-1">
                         <div className="flex items-center gap-2 text-[10px] font-black text-wesal-turquoise uppercase">
                            <Settings2 className="w-3 h-3" />
                            AI Priority Score
                         </div>
                         <span className="text-4xl font-black text-wesal-navy font-display">92%</span>
                      </div>
                      <div className="text-right">
                         <p className="text-[10px] font-black text-wesal-turquoise uppercase mb-1">معدل الدقة</p>
                         <div className="flex items-center justify-end gap-1 text-success font-black text-xs">
                            <CheckCircle2 className="w-3 h-3" />
                            موثوقية عالية
                         </div>
                      </div>
                   </div>

                   <div className="flex gap-4">
                      <button className="flex-1 bg-wesal-navy text-white py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl hover:bg-wesal-turquoise transition-all">
                         عرض التفاصيل الكاملة
                         <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button className="w-14 h-14 bg-surface flex items-center justify-center rounded-2xl text-wesal-navy border border-wesal-light hover:bg-wesal-light/10 transition-colors shadow-sm">
                         <Share2 className="w-6 h-6" />
                      </button>
                   </div>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Status Bar */}
      <div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-wesal-light h-12 flex items-center px-10 z-20">
         <div className="flex items-center gap-6 overflow-hidden">
            <span className="flex items-center gap-2 text-xs font-black text-urgent whitespace-nowrap">
               <div className="w-2 h-2 rounded-full bg-urgent animate-pulse" />
               مباشر: 4 حالات جديدة في قطاع الشمال
            </span>
            <div className="h-4 w-px bg-wesal-light" />
            <span className="text-xs font-bold text-wesal-turquoise whitespace-nowrap">تم توزيع 45,000 لتر مياه اليوم</span>
            <div className="h-4 w-px bg-wesal-light" />
            <span className="text-xs font-bold text-success whitespace-nowrap">تنسيق نشط: 12 منظمة دولية</span>
         </div>
      </div>
    </div>
  );
}

// Sub-component wrapper for Lucide icons used in the HTML but not natively available
function WaterDrop({ className }: { className?: string }) { return <Droplets className={className} />; }
