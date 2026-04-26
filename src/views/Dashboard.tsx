import { motion } from 'motion/react';
import { 
  AlertTriangle, 
  Clock, 
  CheckCircle2, 
  ClipboardList, 
  PlusCircle, 
  Plus, 
  Minus,
  Activity,
  Stethoscope,
  Utensils,
  Home,
  Truck,
  Droplets,
  Map as MapIcon
} from 'lucide-react';

export default function DashboardView() {
  const stats = [
    { label: 'بلاغات حرجة', value: '42', icon: AlertTriangle, color: 'text-urgent', bg: 'bg-urgent/10', sparkline: [40, 30, 35, 10, 25, 5, 15, 5, 20, 30, 10] },
    { label: 'قيد المعالجة', value: '156', icon: Clock, color: 'text-wesal-turquoise', bg: 'bg-wesal-turquoise/10', sparkline: [20, 25, 15, 35, 20, 25, 30, 15, 10, 15, 20] },
    { label: 'تم حلها', value: '1,204', icon: CheckCircle2, color: 'text-success', bg: 'bg-success/10', sparkline: [35, 30, 25, 20, 15, 10, 5, 10, 5, 10, 5] },
    { label: 'إجمالي البلاغات', value: '1,402', icon: ClipboardList, color: 'text-wesal-navy', bg: 'bg-wesal-navy/10', sparkline: [25, 25, 15, 20, 10, 15, 20, 25, 20, 25, 20] },
  ];

  const fieldPoints = [
    { name: 'ملجأ النور المركزي', status: 'مستقر', count: 12, admin: 'م. أحمد خالد', update: 'منذ دقيقتين', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=100' },
    { name: 'نقطة توزيع السلام', status: 'ضغط عالي', count: 28, admin: 'أ. سارة محمد', update: 'منذ 15 دقيقة', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100' },
    { name: 'المستشفى الميداني 04', status: 'حالة طوارئ', count: 8, admin: 'د. وليد عمر', update: 'منذ 5 ثواني', img: 'https://images.unsplash.com/photo-1538108176447-2805cb2203ce?auto=format&fit=crop&q=80&w=100' },
  ];

  const activities = [
    { title: 'نقص أدوية في النقطة 12', desc: 'تم إرسال بلاغ نقص الإنسولين لمركز الموارد المركزي.', time: '12:45 م - اليوم', icon: Stethoscope, color: 'bg-wesal-light' },
    { title: 'إتمام توزيع الوجبات', desc: 'تم توزيع 500 وجبة ساخنة في قطاع النور بنجاح.', time: '11:30 ص - اليوم', icon: Utensils, color: 'bg-success/20' },
    { title: 'طلب إخلاء فوري', desc: 'بلاغ عن مبنى آيل للسقوط في المنطقة الغربية.', time: '10:15 ص - اليوم', icon: Home, color: 'bg-urgent/20' },
    { title: 'انطلاق قافلة إغاثة', desc: 'تحرك 3 شاحنات محملة بالخيام نحو مخيم السلام.', time: '09:00 ص - اليوم', icon: Truck, color: 'bg-wesal-light' },
    { title: 'إصلاح شبكة مياه', desc: 'الفريق الفني بدأ صيانة الخط الرئيسي في الحي الثاني.', time: 'أمس، 08:20 م', icon: Droplets, color: 'bg-wesal-turquoise/20' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-wesal-navy font-display mb-2">لوحة العمليات المباشرة</h1>
          <p className="text-wesal-turquoise font-medium">مرحباً بك، سيتم تحديث البيانات بشكل لحظي من الميدان.</p>
        </div>
        <button className="bg-wesal-navy text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:shadow-xl hover:bg-wesal-turquoise transition-all font-bold">
          <PlusCircle className="w-5 h-5" />
          <span>إرسال بلاغ سريع</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-wesal-light p-6 rounded-3xl shadow-sm space-y-4"
          >
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className={`text-3xl font-black ${stat.color}`}>{stat.value}</span>
            </div>
            <h3 className="text-sm font-black text-wesal-turquoise">{stat.label}</h3>
            <div className="h-10 w-full pt-2">
               <svg className="w-full h-full" preserveAspectRatio="none">
                  <polyline
                    fill="none"
                    points={stat.sparkline.map((val, idx) => `${(idx / 10) * 200},${40 - val}`).join(' ')}
                    className={stat.color.replace('text-', 'stroke-')}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                  />
               </svg>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="bg-white border border-wesal-light rounded-[2.5rem] overflow-hidden shadow-sm">
              <div className="px-8 py-6 border-b border-wesal-light flex justify-between items-center bg-surface/50">
                <h2 className="text-xl font-black text-wesal-navy font-display">نقاط التبليغ الميدانية</h2>
                <button className="text-wesal-navy font-bold text-sm hover:underline">عرض الكل</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-right">
                   <thead className="bg-surface text-wesal-turquoise text-xs font-black uppercase tracking-wider">
                      <tr>
                        <th className="p-6">نقطة التوزيع / الملجأ</th>
                        <th className="p-6">الحالة</th>
                        <th className="p-6">البلاغات النشطة</th>
                        <th className="p-6">المسؤول الميداني</th>
                        <th className="p-6">تحديث</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-wesal-light">
                      {fieldPoints.map((point, i) => (
                        <tr key={i} className="hover:bg-surface/30 transition-colors group">
                           <td className="p-6">
                              <div className="flex items-center gap-4">
                                <img src={point.img} className="w-12 h-12 rounded-xl object-cover shadow-sm group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-wesal-navy">{point.name}</span>
                              </div>
                           </td>
                           <td className="p-6">
                              <span className={`px-4 py-1.5 rounded-full text-xs font-black border ${
                                point.status === 'مستقر' ? 'bg-success/10 text-success border-success/20' :
                                point.status === 'ضغط عالي' ? 'bg-amber-100 text-amber-700 border-amber-200' :
                                'bg-urgent/10 text-urgent border-urgent/20'
                              }`}>
                                {point.status}
                              </span>
                           </td>
                           <td className="p-6 font-mono font-bold text-wesal-navy">{point.count}</td>
                           <td className="p-6 text-sm font-medium text-wesal-turquoise">{point.admin}</td>
                           <td className="p-6 text-xs font-bold text-wesal-slate">{point.update}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
              </div>
           </div>

           <div className="relative h-96 rounded-[2.5rem] overflow-hidden border border-wesal-light/50 group">
              <div className="absolute inset-0 bg-blue-100/50" />
              <img 
                src="https://images.unsplash.com/photo-1548345680-f5475ee511d7?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover opacity-50 grayscale mix-blend-multiply" 
                alt="Map"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative">
                    <motion.div 
                      animate={{ scale: [1, 2, 1], opacity: [0.3, 0.1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="absolute inset-0 bg-wesal-navy rounded-full blur-xl"
                    />
                    <div className="relative bg-wesal-navy text-white p-4 rounded-3xl shadow-2xl border-4 border-white">
                       <MapIcon className="w-8 h-8" />
                    </div>
                 </div>
              </div>
              <div className="absolute top-6 right-6 flex flex-col gap-2">
                 <button className="bg-white/90 backdrop-blur p-3 rounded-2xl shadow-xl border border-wesal-light hover:bg-white transition-all"><Plus className="w-5 h-5 text-wesal-navy" /></button>
                 <button className="bg-white/90 backdrop-blur p-3 rounded-2xl shadow-xl border border-wesal-light hover:bg-white transition-all"><Minus className="w-5 h-5 text-wesal-navy" /></button>
              </div>
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-wesal-light">
                <div className="w-3 h-3 bg-urgent rounded-full animate-pulse shadow-[0_0_10px_#ba1a1a]" />
                <span className="text-xs font-black text-wesal-navy tracking-tight">تغطية ميدانية مباشرة</span>
              </div>
           </div>
        </div>

        <div className="lg:col-span-1">
           <div className="bg-white border border-wesal-light rounded-[2.5rem] shadow-sm flex flex-col h-full">
              <div className="px-8 py-6 border-b border-wesal-light">
                <h2 className="text-xl font-black text-wesal-navy font-display flex items-center gap-2">
                  <Activity className="w-6 h-6 text-wesal-turquoise" />
                  آخر النشاطات
                </h2>
              </div>
              <div className="p-8 flex-1 space-y-8 overflow-y-auto">
                 {activities.map((act, i) => (
                   <div key={i} className="flex gap-4 relative group">
                      {i < activities.length - 1 && (
                        <div className="absolute right-5 top-12 bottom-[-24px] w-0.5 bg-wesal-light/50 group-hover:bg-wesal-turquoise transition-colors" />
                      )}
                      <div className={`w-11 h-11 rounded-full ${act.color} flex items-center justify-center shrink-0 border-4 border-white shadow-sm z-10 group-hover:scale-110 transition-all`}>
                        <act.icon className="w-5 h-5 text-wesal-navy" />
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-black text-wesal-navy">{act.title}</p>
                        <p className="text-xs text-wesal-turquoise font-medium leading-relaxed">{act.desc}</p>
                        <span className="text-[10px] font-bold text-wesal-slate block pt-1">{act.time}</span>
                      </div>
                   </div>
                 ))}
              </div>
              <div className="p-6 bg-surface/50 border-t border-wesal-light">
                <button className="w-full py-3 text-wesal-navy font-black text-sm hover:bg-white rounded-2xl border border-wesal-navy/10 transition-all shadow-sm">
                  مشاهدة سجل النشاطات الكامل
                </button>
              </div>
           </div>
        </div>
      </div>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 left-8 bg-urgent text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center z-50 lg:hidden"
      >
        <PlusCircle className="w-7 h-7" />
      </motion.button>
    </div>
  );
}
