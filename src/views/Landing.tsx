import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  MapPin, 
  FileCheck, 
  ChevronLeft, 
  Building2, 
  Users2, 
  BarChart4,
  ExternalLink,
  MessageSquareShare
} from 'lucide-react';

export default function LandingView({ onJoinClick }: { onJoinClick: () => void }) {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-wesal-light/30 px-4 py-2 rounded-full border border-wesal-light">
            <ShieldCheck className="w-5 h-5 text-wesal-turquoise" />
            <span className="text-sm font-bold text-wesal-turquoise">منصة معتمدة للتنسيق الإنساني</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-wesal-navy font-display leading-[1.2]">
            منصة ذكية لربط الاحتياجات الإنسانية بالاستجابة الفعلية
          </h1>
          <p className="text-lg text-wesal-turquoise max-w-lg leading-relaxed font-medium">
            نعمل في "وصال" على سد الفجوة بين النداء والاستجابة من خلال منظومة تقنية متكاملة تضمن وصول المساعدات لمستحقيها بأعلى معايير الشفافية والكفاءة.
          </p>
          <div className="flex gap-4 pt-4">
            <button 
              onClick={onJoinClick}
              className="bg-wesal-navy text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:bg-wesal-turquoise transition-all active:scale-95"
            >
              طلب انضمام
            </button>
            <button className="border-2 border-wesal-navy text-wesal-navy px-8 py-4 rounded-2xl font-bold text-lg hover:bg-wesal-light/20 transition-all active:scale-95">
              كيف يعمل وصال؟
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative group"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(26,55,77,0.3)] aspect-[4/3] sm:aspect-square lg:aspect-auto h-[400px] lg:h-[500px]">
             <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200" 
              alt="Humanitarian Coordination" 
              className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wesal-navy/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 right-8 left-8">
              <div className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-urgent rounded-xl flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-wesal-navy">بلاغ نشط: مركز الشمال</span>
                </div>
                <div className="h-2 bg-wesal-light rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-full bg-wesal-turquoise" 
                  />
                </div>
                <p className="text-xs text-wesal-turquoise mt-3 font-semibold">تم تلبية 75% من الاحتياجات العاجلة</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'مؤسسة إغاثية مسجلة', value: '+120', icon: Building2, color: 'text-wesal-turquoise' },
          { label: 'منطقة مغطاة جغرافياً', value: '45', icon: MapPin, color: 'text-white', bg: 'bg-wesal-navy' },
          { label: 'تقرير استجابة مكتمل', value: '+15,000', icon: FileCheck, color: 'text-wesal-turquoise' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8 }}
            className={`p-10 rounded-[2rem] border border-wesal-light flex flex-col items-center text-center shadow-xl transition-all ${stat.bg || 'bg-white'}`}
          >
            <div className={`p-4 rounded-2xl mb-6 ${stat.bg ? 'bg-white/10' : 'bg-wesal-light/20'}`}>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
            <h3 className={`text-4xl font-black mb-2 ${stat.bg ? 'text-white' : 'text-wesal-navy'}`}>{stat.value}</h3>
            <p className={`font-bold ${stat.bg ? 'text-white/70' : 'text-wesal-turquoise'}`}>{stat.label}</p>
          </motion.div>
        ))}
      </section>

      {/* Flow Section */}
      <section className="bg-wesal-light/10 rounded-[3rem] p-8 lg:p-20 border border-wesal-light/30 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-wesal-light/20 rounded-full blur-3xl -mr-32 -mt-32" />
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-wesal-light/20 rounded-full blur-3xl -ml-32 -mb-32" />
         
         <div className="text-center mb-20 relative">
            <h2 className="text-4xl font-bold text-wesal-navy font-display mb-4">رحلة التنسيق في وصال</h2>
            <p className="text-wesal-turquoise font-medium">محرك ذكي يعمل في الخلفية لضمان الدقة والسرعة</p>
         </div>

         <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0 max-w-5xl mx-auto relative">
            {[
              { label: 'المجتمع', desc: 'رفع الاحتياج الميداني', icon: Users2 },
              { label: 'محرك التنسيق الذكي', desc: 'تحليل وتوجيه البيانات', icon: BarChart4, main: true },
              { label: 'المؤسسات', desc: 'الاستجابة والتدخل المباشر', icon: Building2 }
            ].map((node, i) => (
              <div key={i} className="flex flex-col lg:flex-row items-center flex-1">
                <div className="flex flex-col items-center gap-6 relative z-10">
                   <div className={`rounded-full flex items-center justify-center shadow-2xl border-4 border-white transform transition-transform hover:scale-105 ${node.main ? 'w-40 h-40 bg-wesal-navy text-white' : 'w-32 h-32 bg-white text-wesal-navy'}`}>
                     <node.icon className={node.main ? 'w-12 h-12' : 'w-10 h-10'} />
                   </div>
                   <div className="text-center">
                     <h4 className="font-bold text-wesal-navy">{node.label}</h4>
                     <p className="text-xs text-wesal-turquoise font-medium mt-1">{node.desc}</p>
                   </div>
                </div>
                {i < 2 && (
                  <div className="hidden lg:flex flex-1 h-px bg-wesal-light items-center justify-center relative translate-y-[-24px]">
                     <ChevronLeft className="w-5 h-5 text-wesal-light" />
                  </div>
                )}
              </div>
            ))}
         </div>
      </section>

      {/* Map Preview */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
           <div className="absolute inset-0 bg-[#e5e7eb] flex items-center justify-center">
              {/* This mimics the satellite map look from the design */}
              <div className="absolute inset-0 grayscale opacity-40 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                 <motion.div 
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="w-4 h-4 bg-urgent rounded-full shadow-[0_0_20px_#ba1a1a]" 
                 />
                 <div className="absolute top-[30%] right-[40%] bg-white p-3 rounded-2xl shadow-xl border border-wesal-light flex items-center gap-3">
                    <div className="w-3 h-3 bg-urgent rounded-full" />
                    <span className="text-xs font-bold text-wesal-navy">احتياج مائي عاجل</span>
                 </div>
              </div>
           </div>
           <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur px-6 py-3 rounded-full flex items-center gap-2 shadow-xl border border-white">
              <div className="w-2 h-2 bg-urgent animate-pulse rounded-full" />
              <span className="text-xs font-black text-wesal-navy">تغطية ميدانية مباشرة</span>
           </div>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-wesal-light flex flex-col justify-between shadow-xl">
           <div>
              <h3 className="text-3xl font-black text-wesal-navy font-display mb-4">التغطية الميدانية</h3>
              <p className="text-wesal-turquoise font-medium mb-10 leading-relaxed">رؤية حية وشاملة لجميع مناطق التدخل والاحتياج في الوقت الحقيقي.</p>
              
              <div className="space-y-4">
                 {[
                   { label: 'المنطقة الوسطى', status: 'نشط', color: 'text-wesal-turquoise' },
                   { label: 'المنطقة الشمالية', status: 'طوارئ', color: 'text-urgent' },
                   { label: 'المنطقة الشرقية', status: 'مستقر', color: 'text-wesal-slate' },
                 ].map((region, i) => (
                   <div key={i} className="flex justify-between items-center p-4 bg-surface rounded-2xl border border-wesal-light/50">
                      <span className="font-bold text-wesal-navy">{region.label}</span>
                      <span className={`font-black text-sm ${region.color}`}>{region.status}</span>
                   </div>
                 ))}
              </div>
           </div>
           <button className="w-full py-4 text-wesal-navy font-bold hover:bg-surface rounded-2xl transition-all mt-8 border-2 border-wesal-navy/10">
              فتح الخريطة التفاعلية ←
           </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-wesal-navy rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl lg:text-5xl font-black text-white font-display">هل أنت مستعد لتكون جزءاً من الحل؟</h2>
          <p className="text-xl text-wesal-light/80 font-medium leading-relaxed">
             انضم إلى شبكة "وصال" وساهم في تحويل البيانات إلى أثر ملموس على الأرض. نرحب بالمؤسسات والجهات الراغبة في التنسيق المشترك.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={onJoinClick}
              className="bg-white text-wesal-navy px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
            >
              سجل مؤسستك الآن
            </button>
            <button className="border-2 border-wesal-light/30 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
              تواصل مع فريقنا
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 border-t border-wesal-light">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-3xl font-black text-wesal-navy tracking-tight font-display">وصال</span>
            <p className="text-wesal-turquoise text-sm leading-relaxed font-medium">
              منصة تقنية رائدة في مجال التنسيق الإنساني وإدارة الكوارث، تهدف لتعزيز كفاءة العمل الإغاثي العالمي.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-wesal-navy mb-6">الروابط السريعة</h4>
            <ul className="space-y-4 text-sm font-medium text-wesal-turquoise">
              <li><a href="#" className="hover:text-wesal-navy transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-wesal-navy transition-colors">التقارير السنوية</a></li>
              <li><a href="#" className="hover:text-wesal-navy transition-colors">شركاء النجاح</a></li>
              <li><a href="#" className="hover:text-wesal-navy transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-wesal-navy mb-6">قوانين وسياسات</h4>
            <ul className="space-y-4 text-sm font-medium text-wesal-turquoise">
              <li><a href="#" className="hover:text-wesal-navy transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-wesal-navy transition-colors">شروط الاستخدام</a></li>
              <li><a href="#" className="hover:text-wesal-navy transition-colors">ميثاق العمل الإنساني</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-wesal-navy mb-6">تابعونا</h4>
            <div className="flex gap-4">
              {[ExternalLink, MessageSquareShare, Users2].map((Icon, k) => (
                <button key={k} className="w-12 h-12 rounded-2xl bg-wesal-light/10 flex items-center justify-center text-wesal-turquoise hover:bg-wesal-navy hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-wesal-light/50 gap-4">
          <p className="text-xs font-bold text-wesal-turquoise opacity-60">© 2024 وصال - منصة الاستجابة الإنسانية الذكية. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2 px-4 py-2 bg-wesal-light/10 rounded-full border border-wesal-light/30">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-success">جميع الأنظمة تعمل بكفاءة</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
