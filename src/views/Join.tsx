import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Handshake, 
  Send, 
  Smartphone, 
  Globe, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  TrendingUp,
  ShieldCheck,
  Zap,
  BoxSelect
} from 'lucide-react';

export default function JoinView() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-3 text-wesal-navy bg-wesal-light/30 px-5 py-2 rounded-full border border-wesal-light/50">
            <Handshake className="w-5 h-5" />
            <span className="text-sm font-black">شراكة إنسانية</span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl font-black text-wesal-navy font-display leading-[1.1]">انضم إلى شبكة وصال للتنسيق الإغاثي</h1>
            <p className="text-lg text-wesal-turquoise font-medium leading-relaxed max-w-md">
              نعمل معاً لضمان وصول المساعدات لمستحقيها بأعلى معايير الشفافية والسرعة. انضم كجهة معتمدة لتنسيق الجهود الميدانية.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { title: 'استجابة سريعة', desc: 'تواصل مباشر مع غرف العمليات المركزية.', icon: Zap },
              { title: 'إدارة الموارد', desc: 'تتبع لحظي للمخزون والاحتياجات الميدانية.', icon: BoxSelect },
            ].map((feature, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="w-14 h-14 bg-wesal-light/20 rounded-2xl flex items-center justify-center shrink-0 border border-wesal-light/30 group-hover:bg-wesal-navy group-hover:text-white transition-all shadow-inner">
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-wesal-navy mb-1">{feature.title}</h3>
                  <p className="text-sm font-medium text-wesal-turquoise">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-10 flex items-center gap-4 border-t border-wesal-light">
             <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" />
             </div>
             <div>
                <p className="font-black text-wesal-navy">د. سامر العلي</p>
                <p className="text-xs font-bold text-wesal-turquoise">منسق العمليات الميدانية</p>
             </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-wesal-light rounded-[3rem] p-8 lg:p-12 shadow-[0_32px_64px_-12px_rgba(26,55,77,0.15)]"
              >
                <div className="mb-10 text-right">
                  <h2 className="text-3xl font-black text-wesal-navy font-display mb-2">طلب انضمام منظمة</h2>
                  <p className="text-sm font-medium text-wesal-turquoise">يرجى ملء البيانات التالية بدقة، سيقوم فريقنا بمراجعة الطلب خلال 24 ساعة.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-black text-wesal-navy">الاسم الكامل للمسؤول</label>
                      <input required className="w-full bg-surface border-2 border-wesal-light rounded-2xl px-5 py-4 focus:border-wesal-navy focus:ring-0 transition-all font-medium text-wesal-navy" placeholder="أدخل اسمك الثلاثي" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-black text-wesal-navy">البريد الإلكتروني</label>
                      <input required type="email" className="w-full bg-surface border-2 border-wesal-light rounded-2xl px-5 py-4 focus:border-wesal-navy focus:ring-0 transition-all font-medium text-wesal-navy" placeholder="name@org.org" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-black text-wesal-navy">رقم الهاتف</label>
                      <div className="relative">
                        <input required className="w-full bg-surface border-2 border-wesal-light rounded-2xl px-5 py-4 pr-12 focus:border-wesal-navy focus:ring-0 transition-all font-medium text-wesal-navy" placeholder="05xxxxxxxx" />
                        <Smartphone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-wesal-turquoise" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-black text-wesal-navy">اسم المركز / المنظمة</label>
                      <input required className="w-full bg-surface border-2 border-wesal-light rounded-2xl px-5 py-4 focus:border-wesal-navy focus:ring-0 transition-all font-medium text-wesal-navy" placeholder="مثال: جمعية الأمل" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-black text-wesal-navy">ملاحظات إضافية</label>
                    <textarea rows={4} className="w-full bg-surface border-2 border-wesal-light rounded-2xl px-5 py-4 focus:border-wesal-navy focus:ring-0 transition-all font-medium text-wesal-navy resize-none" placeholder="اكتب أي تفاصيل أخرى ترغب في مشاركتها..." />
                  </div>

                  <div className="flex items-center gap-4">
                    <input type="checkbox" required className="w-5 h-5 rounded border-2 border-wesal-light text-wesal-navy focus:ring-0" id="terms" />
                    <label htmlFor="terms" className="text-xs font-bold text-wesal-turquoise cursor-pointer">أوافق على سياسة الخصوصية وشروط الاستخدام الخاصة بمركز وصال.</label>
                  </div>

                  <button className="w-full bg-wesal-navy text-white font-black text-xl py-5 rounded-[2rem] hover:shadow-2xl hover:bg-wesal-turquoise group transition-all flex items-center justify-center gap-3">
                    إرسال طلب الانضمام
                    <Send className="w-6 h-6 group-hover:translate-x-[-10px] group-hover:translate-y-[-10px] transition-transform" />
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white border border-wesal-light rounded-[3rem] p-12 lg:p-20 shadow-2xl text-center space-y-8"
              >
                <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto border-4 border-success/20">
                  <CheckCircle2 className="w-12 h-12 text-success" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-black text-wesal-navy font-display">تم استلام طلبك بنجاح</h2>
                  <p className="text-lg text-wesal-turquoise font-medium max-w-sm mx-auto">
                    شكراً لاهتمامك بالانضمام، سيتواصل معك فريقنا المختص لمراجعة الطلب خلال 24 ساعة القادمة.
                  </p>
                </div>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-wesal-navy font-black border-b-2 border-wesal-navy hover:text-wesal-turquoise hover:border-wesal-turquoise transition-all"
                >
                  العودة للصفحة السابقة
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 relative h-[300px] rounded-[2.5rem] overflow-hidden shadow-xl border border-wesal-light group">
          <img src="https://images.unsplash.com/photo-1542601280-d9962a1a8904?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-wesal-navy/20" />
          <div className="absolute bottom-8 right-8 text-white space-y-2">
            <h4 className="text-2xl font-black font-display">نطاق التغطية</h4>
            <p className="text-sm font-bold opacity-80">نغطي أكثر من 45 منطقة ميدانية نشطة حالياً.</p>
          </div>
        </div>
        <div className="bg-wesal-light/20 rounded-[2.5rem] p-10 flex flex-col justify-center items-center text-center space-y-6 border border-wesal-light">
          <div className="text-6xl font-black text-wesal-navy font-display">98%</div>
          <div className="space-y-2">
            <h4 className="text-xl font-black text-wesal-navy">دقة البيانات</h4>
            <p className="text-xs font-bold text-wesal-turquoise leading-relaxed">نستخدم خوارزميات تحقق ذكية لضمان جودة المعلومات الميدانية المرسلة عبر شركائنا.</p>
          </div>
        </div>
      </section>

      <footer className="mt-24 pt-12 border-t border-wesal-light flex flex-col md:flex-row justify-between items-center gap-8">
         <div className="flex gap-12 font-bold text-wesal-turquoise text-sm">
            <a href="#" className="hover:text-wesal-navy">الأسئلة الشائعة</a>
            <a href="#" className="hover:text-wesal-navy">مركز المساعدة</a>
            <a href="#" className="hover:text-wesal-navy">تواصل معنا</a>
         </div>
         <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-wesal-light/10 flex items-center justify-center text-wesal-turquoise"><Smartphone className="w-5 h-5" /></div>
            <div className="w-10 h-10 rounded-xl bg-wesal-light/10 flex items-center justify-center text-wesal-turquoise"><Globe className="w-5 h-5" /></div>
            <div className="w-10 h-10 rounded-xl bg-wesal-light/10 flex items-center justify-center text-wesal-turquoise"><Mail className="w-5 h-5" /></div>
         </div>
      </footer>
    </div>
  );
}
