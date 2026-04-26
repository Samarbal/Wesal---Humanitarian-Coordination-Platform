import { motion } from 'motion/react';
import { 
  Brain, 
  Filter, 
  Layers, 
  Droplets, 
  Stethoscope, 
  ShoppingBag, 
  Home, 
  TrendingUp, 
  MapPin, 
  CheckCircle,
  FileText,
  AlertTriangle,
  History,
  Info
} from 'lucide-react';

export default function PriorityCenterView() {
  const reports = [
    { id: '#WR-102', region: 'حي الأمل، قطاع الشمال', type: 'نقص مياه حاد', icon: Droplets, source: 'متطوع ميداني', time: '09:12', status: 'عاجل جدًا', score: '98%', color: 'border-urgent', iconColor: 'text-blue-500' },
    { id: '#WR-103', region: 'مركز التدريب، الوسط', type: 'إصابات ميدانية', icon: Stethoscope, source: 'تطبيق الجمهور', time: '08:45', status: 'قيد المعالجة', score: '82%', color: 'border-transparent', iconColor: 'text-green-500' },
    { id: '#WR-104', region: 'مخيم النازحين 2', type: 'طلب مواد غذائية', icon: ShoppingBag, source: 'الهلال الأحمر', time: '22:15', status: 'في الانتظار', score: '65%', color: 'border-transparent', iconColor: 'text-amber-500' },
    { id: '#WR-105', region: 'منطقة الشجاعية', type: 'صيانة مأوى', icon: Home, source: 'أهالي المنطقة', time: '18:30', status: 'معلق', score: '42%', color: 'border-transparent', iconColor: 'text-purple-500' },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-3xl font-black text-wesal-navy font-display mb-1">مركز إدارة الأولويات الذكي</h2>
          <p className="text-sm font-medium text-wesal-turquoise">تحليل البلاغات وتوجيه الموارد بناءً على كثافة الاحتياج والذكاء الاصطناعي</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <div className="flex items-center gap-2 bg-white border border-wesal-light px-4 py-2 rounded-2xl shadow-sm">
            <Filter className="w-4 h-4 text-wesal-turquoise" />
            <select className="bg-transparent border-none text-xs font-black focus:ring-0">
               <option>جميع المناطق</option>
               <option>قطاع الشمال</option>
               <option>قطاع الوسط</option>
               <option>قطاع الجنوب</option>
            </select>
          </div>
          <div className="flex items-center gap-2 bg-white border border-wesal-light px-4 py-2 rounded-2xl shadow-sm">
            <Layers className="w-4 h-4 text-wesal-turquoise" />
            <select className="bg-transparent border-none text-xs font-black focus:ring-0">
               <option>نوع الحالة</option>
               <option>نشط</option>
               <option>معلق</option>
               <option>مكتمل</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 space-y-8">
           <div className="bg-white rounded-3xl border border-wesal-light overflow-hidden shadow-sm">
              <div className="px-8 py-6 bg-surface/50 border-b border-wesal-light flex justify-between items-center">
                 <div className="flex items-center gap-3">
                    <span className="text-sm font-black text-wesal-navy font-display">قائمة البلاغات النشطة</span>
                    <span className="text-[10px] bg-wesal-navy text-white px-3 py-1 rounded-full font-black">24 بلاغ جديد</span>
                 </div>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-right text-sm">
                    <thead>
                       <tr className="bg-surface text-wesal-turquoise text-xs font-black uppercase text-center">
                          <th className="px-6 py-4">ID</th>
                          <th className="px-6 py-4">المنطقة</th>
                          <th className="px-6 py-4">نوع البلاغ</th>
                          <th className="px-6 py-4">المصدر</th>
                          <th className="px-6 py-4">التاريخ</th>
                          <th className="px-6 py-4">الحالة</th>
                          <th className="px-6 py-4 text-left">AI Score</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-wesal-light">
                       {reports.map((report) => (
                         <tr key={report.id} className={`hover:bg-wesal-light/10 transition-colors cursor-pointer border-r-4 ${report.color}`}>
                            <td className="px-6 py-5 font-black text-wesal-navy">{report.id}</td>
                            <td className="px-6 py-5 font-bold text-wesal-navy">{report.region}</td>
                            <td className="px-6 py-5">
                               <div className="flex items-center gap-3 justify-center">
                                  <report.icon className={`w-4 h-4 ${report.iconColor}`} />
                                  <span className="font-bold">{report.type}</span>
                               </div>
                            </td>
                            <td className="px-6 py-5 font-medium text-wesal-turquoise">{report.source}</td>
                            <td className="px-6 py-5 text-wesal-slate font-bold">{report.time}</td>
                            <td className="px-6 py-5">
                               <span className={`px-3 py-1 rounded-lg text-[10px] font-black border ${
                                 report.status === 'عاجل جدًا' ? 'bg-urgent/10 text-urgent border-urgent/20' :
                                 report.status === 'قيد المعالجة' ? 'bg-amber-100 text-amber-700 border-amber-200' :
                                 report.status === 'في الانتظار' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                                 'bg-wesal-light/30 text-wesal-turquoise border-wesal-light'
                               }`}>
                                  {report.status}
                               </span>
                            </td>
                            <td className="px-6 py-5 text-left">
                               <span className={`font-black text-sm px-4 py-1 rounded-full border ${
                                 parseInt(report.score) > 90 ? 'text-urgent bg-urgent/5 border-urgent/10' :
                                 parseInt(report.score) > 70 ? 'text-amber-600 bg-amber-50 border-amber-100' :
                                 'text-wesal-turquoise bg-wesal-light/20 border-wesal-light'
                               }`}>
                                  {report.score}
                               </span>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: 'إجمالي البلاغات', value: '1,248', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
                { label: 'تمت معالجتها', value: '856', icon: CheckCircle, color: 'text-success', bg: 'bg-success/5' },
                { label: 'عجز الموارد', value: '12%', icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50' },
                { label: 'وقت الاستجابة', value: '45m', icon: History, color: 'text-wesal-turquoise', bg: 'bg-wesal-light/10' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-5 rounded-[2rem] border border-wesal-light flex items-center justify-between">
                   <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6" />
                   </div>
                   <div className="text-left">
                      <p className="text-[10px] font-black text-wesal-slate uppercase mb-1">{stat.label}</p>
                      <p className={`text-2xl font-black font-display ${stat.color === 'text-wesal-turquoise' ? 'text-wesal-navy' : stat.color}`}>{stat.value}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-8">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             className="bg-wesal-navy text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden"
           >
              <div className="relative z-10 space-y-6">
                 <div className="flex items-center justify-between">
                    <div className="bg-white/10 px-3 py-1 rounded-full border border-white/10 flex items-center gap-2">
                       <Brain className="w-4 h-4 text-wesal-light" />
                       <span className="text-[10px] uppercase font-black tracking-widest text-wesal-light">AI Insight Engine</span>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <h3 className="text-xl font-black font-display">تحليل البلاغ #WR-102</h3>
                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-[2rem] border border-white/10 space-y-4">
                       <p className="text-sm font-medium leading-relaxed opacity-90">
                          "تم رفع الأولوية للدرجة القصوى (98%) بسبب رصد كثافة سكانية عالية ووجود <span className="text-amber-400 font-black underline">50+ طفل</span> في المنطقة المتضررة يعانون من انقطاع المياه الصالحة للشرب لمدة تتجاوز 48 ساعة."
                       </p>
                       <div className="flex items-center gap-2 text-xs font-bold text-wesal-light/60">
                          <TrendingUp className="w-4 h-4" />
                          <span>مستوى الخطورة: متزايد</span>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-black">
                       <span className="opacity-60">ثقة النموذج الذكي</span>
                       <span className="text-wesal-light">99.2%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         animate={{ width: '99%' }}
                         transition={{ duration: 1, delay: 0.5 }}
                         className="h-full bg-wesal-light" 
                       />
                    </div>
                 </div>
              </div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-wesal-light/5 rounded-full blur-3xl" />
           </motion.div>

           <div className="bg-white rounded-[2.5rem] border border-wesal-light p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                 <Info className="w-5 h-5 text-wesal-turquoise" />
                 <h4 className="text-sm font-black text-wesal-navy font-display uppercase">توجيه ذكي مقترح</h4>
              </div>

              <div className="flex items-start gap-5">
                 <div className="w-14 h-14 bg-wesal-light/20 rounded-3xl flex items-center justify-center text-wesal-navy shadow-inner border border-wesal-light/50">
                    <MapPin className="w-7 h-7" />
                 </div>
                 <div className="space-y-1">
                    <p className="text-[10px] font-bold text-wesal-slate uppercase">أفضل جهة للاستجابة:</p>
                    <p className="text-md font-black text-wesal-navy leading-tight">مؤسسة المياه - وحدة الطوارئ</p>
                 </div>
              </div>

              <div className="space-y-3 pt-4">
                 <button className="w-full bg-wesal-navy text-white py-4 rounded-2xl font-black text-sm active:scale-95 transition-all shadow-lg hover:shadow-wesal-navy/20">اعتماد التوجيه الفوري</button>
                 <button className="w-full bg-white text-wesal-navy border-2 border-wesal-navy/10 py-4 rounded-2xl font-black text-sm hover:bg-surface transition-all">توجيه يدوي لجهة أخرى</button>
              </div>
           </div>

           <div className="rounded-[2.5rem] overflow-hidden h-40 border border-wesal-light shadow-sm relative group cursor-crosshair">
              <img src="https://images.unsplash.com/photo-1524311583145-d44933994341?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-wesal-navy/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <MapPin className="w-10 h-10 text-urgent" fill="#ba1a1a" />
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-[9px] font-black text-wesal-navy border border-wesal-light">
                 إحداثيات: 31.5017° N, 34.4668° E
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
