"use client";
import { useState } from "react";
import {
  Home,
  BookOpen,
  CalendarDays,
  Library,
  Lightbulb,
  Users2,
  ClipboardList,
  Moon,
  Sun,
  User,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronRight,
  X
} from "lucide-react";

// صور الشعار/البطل، استخدم WebP بصيغة محسنة
const HERO_IMAGE = "/alger.webp";
const LOGO_GIF = "/مشاعل الأمة.gif";

const levels = [
  {
    id: 1,
    name: "مشعل القدوة",
    icon: "👤",
    desc: "مدير المؤسسة — السلوك اليومي، أساس المبادرة",
    color: "from-yellow-200 to-yellow-500",
    badge: "١"
  },
  {
    id: 2,
    name: "مشعل السفير",
    icon: "🕊️",
    desc: "رئيس البلدية — قيادة محلية، مبادرات مجتمعية",
    color: "from-yellow-400 to-yellow-600",
    badge: "٢"
  },
  {
    id: 3,
    name: "مشعل القائد",
    icon: "🧭",
    desc: "والي الولاية — قيادة فرق، مشاريع وطنية",
    color: "from-yellow-500 to-yellow-700",
    badge: "٣"
  },
  {
    id: 4,
    name: "مشعل الرائد",
    icon: "🚀",
    desc: "والي الولاية — إشراف وتكامل مؤسسي",
    color: "from-yellow-600 to-orange-700",
    badge: "٤"
  },
  {
    id: 5,
    name: "مشعل الحكيم",
    icon: "🌟",
    desc: "رئيس الجمهورية — المرجع القيمي الأعلى",
    color: "from-yellow-700 to-yellow-900",
    badge: "٥"
  }
];

const categories = [
  { icon: "👶", name: "الأطفال", age: "6–11", to: "/categories/children", desc: "برامج لغرس الصدق والتعاون." },
  { icon: "🧒", name: "المراهقون", age: "12–17", to: "/categories/teens", desc: "التفكير النقدي، الهوية الوطنية." },
  { icon: "🧑‍🎓", name: "الشباب اليافعون", age: "18–24", to: "/categories/youth", desc: "القيادة المجتمعية، الأسرة القيمية." },
  { icon: "👨‍💼", name: "البالغون الشباب", age: "25–39", to: "/categories/youngadults", desc: "القدوة في العمل، الإرشاد." },
  { icon: "👩‍🏫", name: "منتصف العمر", age: "40–59", to: "/categories/adults", desc: "الخبرة، الإشراف، توجيه الأجيال." },
  { icon: "👴", name: "كبار السن", age: "60–74", to: "/categories/seniors", desc: "ذاكرة وطنية، التوجيه القيمي." },
  { icon: "👵", name: "الحكماء", age: "75+", to: "/categories/wise", desc: "حكمة استراتيجية، إشراف أعلى." }
];

const values = [
  { title: "أخلاقية", list: ["الصدق", "الأمانة", "النزاهة", "الاحترام"], color: "bg-yellow-800" },
  { title: "وطنية", list: ["الانتماء", "التضحية", "حب الجزائر", "حماية الهوية"], color: "bg-yellow-700" },
  { title: "إنسانية", list: ["التضامن", "الكرامة", "خدمة الإنسانية", "العدل"], color: "bg-yellow-600" },
  { title: "اجتماعية", list: ["التماسك الأسري", "التضامن المجتمعي"], color: "bg-yellow-500" },
  { title: "تربوية", list: ["ربط المعرفة بالسلوك", "القدوة لا التلقين", "التفكير النقدي"], color: "bg-yellow-400" }
];

const links = [
  { icon: <Home />, label: "الصفحة الرئيسية", to: "/" },
  { icon: <BookOpen />, label: "الدورات التدريبية", to: "/courses" },
  { icon: <CalendarDays />, label: "الورش والفعاليات", to: "/events" },
  { icon: <Library />, label: "المكتبة التعليمية", to: "/library" },
  { icon: <Lightbulb />, label: "المشاريع الطلابية", to: "/projects" },
  { icon: <Users2 />, label: "المجتمع والتواصل", to: "/community" },
  { icon: <ClipboardList />, label: "السجل والنشاط", to: "/honors" }
];

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [hoveredCat, setHoveredCat] = useState(null);

  return (
    <div dir="rtl" className="min-h-screen font-[Noto_Kufi_Arabic] bg-black text-white flex flex-col">
      {/* هيدر ثابت */}
      <header className="fixed top-0 right-0 left-0 z-40 h-16 bg-[#111] flex items-center justify-between px-6 shadow-xl" style={{height: 64}}>
        {/* زر القائمة للجوال */}
        <button className="lg:hidden text-white mr-2" onClick={() => setSidebarOpen(true)}>
          <span className="text-2xl font-bold">☰</span>
        </button>
        {/* شعار بحث مركزي */}
        <div className="w-full max-w-xl mx-auto relative flex items-center">
          <input
            type="search"
            placeholder="ابحث في المنصة..."
            className="w-full px-4 py-2 rounded-xl bg-black/70 text-white border-none placeholder:text-white/80 outline-none backdrop-blur-md"
          />
          <span className="absolute left-3 text-white"><Lightbulb size={20}/></span>
        </div>
        {/* أدوات تحكم */}
        <div className="flex items-center gap-4">
          {/* تبديل الوضع */}
          <button onClick={() => setIsDark(!isDark)} className="text-white">
            {isDark ? <Sun size={20}/> : <Moon size={20}/>}
          </button>
          {/* مستخدمي */}
          <div className="relative">
            <button onClick={() => setProfileMenu((v) => !v)} className="text-white"><User size={20}/></button>
            {profileMenu && (
              <ul className="absolute left-0 mt-2 w-40 bg-black/80 text-white rounded-xl p-2 shadow-xl backdrop-blur-lg z-50">
                <li className="cursor-pointer hover:bg-yellow-400/30 p-2 rounded">الملف الشخصي</li>
                <li className="cursor-pointer hover:bg-yellow-400/30 p-2 rounded">الإعدادات</li>
                <li className="cursor-pointer hover:bg-yellow-400/30 p-2 rounded">تسجيل الدخول / إنشاء حساب</li>
                <li className="cursor-pointer hover:bg-yellow-400/30 p-2 rounded">تسجيل الخروج</li>
              </ul>
            )}
          </div>
        </div>
      </header>

      {/* سايدبار جانبي */}
      <aside className={`sidebar fixed lg:right-0 top-0 z-30 h-screen bg-gradient-to-tl from-black via-[#222] to-[#111] w-[250px] pt-20 px-4 backdrop-blur-md shadow-2xl ${sidebarOpen ? '' : 'hidden lg:block'}`}>
      {/* زر اغلاق للجوال */}
      <button className="lg:hidden absolute top-4 left-4 text-white text-xl" onClick={() => setSidebarOpen(false)}>
        <X />
      </button>
        {/* شعار متحرك */}
        <div className="flex flex-col items-center">
          <img src={LOGO_GIF} alt="شعار مشاعل الأمة" loading="lazy" className="logo w-24 h-24 animate-pulse" />
          <h1 className="text-xl mt-2 font-bold tracking-wider">مشاعل الأمة</h1>
          <small className="text-yellow-400">سفراء القيم</small>
        </div>
        {/* قائمة تنقل */}
        <nav className="mt-10 space-y-2 flex flex-col">
          {links.map((l, idx) => (
            <a key={idx} href={l.to} className="flex items-center gap-3 py-2 px-3 rounded-xl transition hover:bg-yellow-400 hover:text-black hover:scale-105 text-white">
              <span className="text-xl">{l.icon}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Overlay للجوال عند فتح سايدبار */}
      {sidebarOpen && <div className="fixed inset-0 z-20 bg-black/70 backdrop-blur-md" onClick={() => setSidebarOpen(false}></div>}

      {/* القسم الرئيسي */}
      <main className="flex flex-col min-h-screen pt-16 lg:pl-[250px]">
        {/* hero section */}
        <section className="relative w-full h-[380px] lg:h-[460px]">
          <img src={HERO_IMAGE} alt="صورة وطنية للجزائر" className="object-cover w-full h-full z-0" loading="lazy" />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl font-bold mb-2">بالقيم نرتقي… وبالقدوات نبني الوطن</h2>
            <p className="max-w-xl mx-auto text-lg font-semibold mb-6">منارة وطنية تربط الماضي بالمستقبل وتلهم الأجيال لقيادة نهضة القيم في الجزائر الجديدة.</p>
            <div className="flex gap-4 justify-center">
              <a href="/register" className="px-6 py-2 rounded-2xl bg-black/60 text-yellow-400 border border-yellow-400 font-bold hover:bg-yellow-400 hover:text-black shadow-lg transition">✨ انضم الآن</a>
              <a href="/stars" className="px-6 py-2 rounded-2xl bg-black/60 text-yellow-400 border border-yellow-400 font-bold hover:bg-yellow-400 hover:text-black shadow-lg transition">🌟 اكتشف مشاعلك</a>
            </div>
          </div>
        </section>

        {/* مقدمة المشروع الوطنية */}
        <section className="py-12 bg-black text-center flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-6">📜 النداء الوطني</h3>
          <p className="text-lg max-w-2xl mx-auto mb-4">«الجزائر مسؤوليتنا… يقظتنا سلاحنا، ووحدتنا درعنا… معًا نحمي الوطن، نبني المستقبل، ونتصدّى لكل مؤامرة.»</p>
          <blockquote className="border-r-4 border-yellow-400 pr-5 italic font-semibold text-lg mb-2 max-w-lg mx-auto">
            «لسنا خالدين… سيأتي بعدنا جيل يحمل مشعل الثورة.»<br />— الشهيد ديدوش مراد
          </blockquote>
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="text-yellow-400 font-bold">🌍 الرؤية</div>
            <div className="max-w-lg">"الجزائر الجديدة: وطن واعٍ، مسؤول، قائم على القيم، متماسك في وحدته، يسعى نحو نهضة مستدامة."</div>
            <div className="text-yellow-400 font-bold mt-3">📜 الرسالة</div>
            <div className="max-w-lg">"تحويل القيم إلى ممارسة، والوعي إلى حركة، والتربية إلى نهضة."</div>
          </div>
        </section>

        {/* مخطط هرمي بصري للمشاعل */}
        <section className="py-10 bg-gradient-to-tl from-[#111] to-black flex flex-col items-center">
          <h3 className="text-2xl font-bold text-yellow-400 mb-8">🏆 المستويات القيادية لمشاعل الأمة</h3>
          <div className="flex flex-row justify-center items-end gap-4 max-w-4xl mx-auto">
            {levels.map((lv) => (
              <div key={lv.id} className="relative group flex flex-col items-center justify-end px-2">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-b ${lv.color} shadow-lg mb-2 border-2 border-yellow-400`}>
                  <span className="text-3xl">{lv.icon}</span>
                </div>
                <span className="block mt-1 font-bold text-lg group-hover:text-yellow-400 transition">{lv.name}</span>
                <span className="block text-xs text-white/90 group-hover:text-yellow-400" title={lv.desc}>{lv.desc}</span>
                <span className="absolute top-2 left-2 bg-yellow-400 text-black rounded-full w-7 h-7 flex items-center justify-center font-bold">{lv.badge}</span>
              </div>
            ))}
          </div>
          <span className="mt-6 block text-sm text-white/70">"كل من يتقلّد منصبًا في المشروع — مهما كان صغيرًا — يجب أن يكون مشعل قدوة على الأقل."</span>
        </section>

        {/* الفئات العمرية المستهدفة */}
        <section className="py-10 bg-black">
          <h3 className="text-2xl text-yellow-400 font-bold text-center mb-8">👥 الفئات العمرية المستهدفة</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, idx) => (
              <a
                href={cat.to}
                key={idx}
                className={`flex flex-col items-center p-4 rounded-xl bg-[#222] text-white shadow-lg border border-yellow-400/40 hover:bg-yellow-400 hover:text-black hover:scale-105 transition relative`}
                onMouseEnter={() => setHoveredCat(idx)}
                onMouseLeave={() => setHoveredCat(null)}
              >
                <span className="text-3xl mb-1">{cat.icon}</span>
                <span className="font-bold mb-1">{cat.name}</span>
                <span className="text-xs mb-1">{cat.age}</span>
                {/* وصف موجز عند المرور */}
                {hoveredCat === idx && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black text-yellow-400 rounded-lg px-2 py-1 text-xs z-10 shadow-xl" style={{minWidth: "130px"}}>
                    {cat.desc}
                  </div>
                )}
              </a>
            ))}
          </div>
          <p className="mt-6 text-center text-yellow-400 font-bold">
            "المشروع لكل فئات المجتمع الجزائري والعربي بلا استثناء."
          </p>
        </section>

        {/* الركائز الخمس للمشروع */}
        <section className="py-8 bg-[#111]">
          <h3 className="text-2xl text-yellow-400 font-bold text-center mb-8">✨ الركائز الخمس للقيم</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {values.map((v, idx) => (
              <div key={idx} className={`min-w-[175px] rounded-xl border border-yellow-400/30 shadow-lg p-4 hover:scale-110 hover:shadow-yellow-400 transition bg-black text-yellow-400 flex flex-col items-center`}>
                <h4 className="font-bold text-lg mb-2">{v.title}</h4>
                <ul className="flex flex-col gap-1">
                  {v.list.map((item, i) => <li key={i} className="text-sm">{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* أزرار تفاعلية رئيسية */}
        <section className="py-8 flex gap-4 justify-center bg-black">
          <a href="/register" className="px-7 py-3 rounded-2xl bg-black/60 border border-yellow-400 text-white font-bold hover:bg-yellow-400 hover:text-black shadow-lg transition">✨ انضم الآن</a>
          <a href="/login" className="px-7 py-3 rounded-2xl bg-black/60 border border-yellow-400 text-white font-bold hover:bg-yellow-400 hover:text-black shadow-lg transition">🔑 تسجيل الدخول</a>
          <a href="/library" className="px-7 py-3 rounded-2xl bg-black/60 border border-yellow-400 text-white font-bold hover:bg-yellow-400 hover:text-black shadow-lg transition">📚 اكتشف المكتبة</a>
          <a href="/stars" className="px-7 py-3 rounded-2xl bg-black/60 border border-yellow-400 text-white font-bold hover:bg-yellow-400 hover:text-black shadow-lg transition">🌟 تعرف على القدوات</a>
        </section>

        {/* الدعم المؤسسي والوطني */}
        <section className="py-10 bg-gradient-to-tr from-[#111] via-black to-[#222] text-center">
          <h3 className="text-2xl text-yellow-400 font-bold mb-4">⚡ الدعم المؤسسي والوطني</h3>
          <ul className="flex flex-wrap justify-center gap-8 text-white font-bold mb-3">
            <li>المدارس والجامعات</li>
            <li>الجمعيات الوطنية</li>
            <li>المراكز الثقافية والرياضية</li>
            <li>المراكز الإصلاحية والسجون</li>
          </ul>
          <span className="block mt-4 font-semibold text-yellow-400">"الرفع من مناعة المؤسسات القيمية دون التدخل في خصوصياتها."</span>
        </section>

        {/* قسم النجوم (قلب المشروع التحفيزي) */}
        <section className="py-10 bg-black text-center">
          <h3 className="text-3xl text-yellow-400 font-bold mb-6">🌟 نجوم مشاعل الأمة</h3>
          <p className="max-w-2xl mx-auto mb-6 text-lg">
            منصة رقمية وطنية تعرض المشاعل المكرّمين بأسمائهم، صورهم، وبياناتهم القيمية،
            مع شهادات رقمية ورموز QR تبرز التزامهم الحي بالقيم الخمس. النجم في مشاعل الأمة هو قدوة تُحتفى بها على المستوى الوطني والمحلي.
          </p>
          <div className="flex flex-wrap gap-6 justify-center mb-6">
            {/* أقسام النجوم الرئيسية */}
            <div className="flex-1 min-w-[220px] bg-[#1e1e1e] rounded-xl border border-yellow-400/20 p-4 shadow-lg hover:scale-105">
              <h4 className="font-bold text-lg text-yellow-400 mb-2">نجوم القدوة</h4>
              <p className="text-white text-sm mb-2">طلاب، معلمين، أولياء أثبتوا السلوك القيمي اليومي.</p>
              <span className="text-xs text-yellow-400">بطاقة تقييم + رمز QR للإنجاز</span>
            </div>
            <div className="flex-1 min-w-[220px] bg-[#1e1e1e] rounded-xl border border-yellow-400/20 p-4 shadow-lg hover:scale-105">
              <h4 className="font-bold text-lg text-yellow-400 mb-2">سفراء القيم</h4>
              <p className="text-white text-sm mb-2">مكرّمون محليًا — مشاريع وورش مجتمعية.</p>
              <span className="text-xs text-yellow-400">شهادة رقمية + فيديو تكريم</span>
            </div>
            <div className="flex-1 min-w-[220px] bg-[#1e1e1e] rounded-xl border border-yellow-400/20 p-4 shadow-lg hover:scale-105">
              <h4 className="font-bold text-lg text-yellow-400 mb-2">قادة النهضة</h4>
              <p className="text-white text-sm mb-2">قادة المشاريع في الولايات، دعم الجمعيات.</p>
              <span className="text-xs text-yellow-400">مؤشرات أداء وطنية</span>
            </div>
            <div className="flex-1 min-w-[220px] bg-[#1e1e1e] rounded-xl border border-yellow-400/20 p-4 shadow-lg hover:scale-105">
              <h4 className="font-bold text-lg text-yellow-400 mb-2">حكّام القيم</h4>
              <p className="text-white text-sm mb-2">الحكماء في سجل الشرف الوطني.</p>
              <span className="text-xs text-yellow-400">شهادات رئاسية + خطاب تكريمي</span>
            </div>
          </div>
          <a href="/stars" className="inline-block px-7 py-3 mt-2 rounded-2xl bg-black/60 border border-yellow-400 text-white font-bold hover:bg-yellow-400 hover:text-black shadow-lg transition">🌟 تصفح جميع النجوم</a>
          <div className="mt-8 text-sm text-yellow-400">
            <span>كل نجم له ملف تفصيلي، شهادة رقمية، رمز QR، وخاتم افتراضي — يمكن مشاركتها مجتمعيًا وتحفيز الجيل القادم.</span>
          </div>
        </section>

      </main>
      {/* فوتر */}
      <footer className="bg-black/80 backdrop-blur-md py-7 px-4 mt-auto w-full shadow-lg border-t border-yellow-400/20">
        <div className="flex justify-between items-center flex-wrap gap-3">
          <span className="font-semibold text-white">© 2025 مشاعل الأمة – جميع الحقوق محفوظة</span>
          <div className="flex gap-3 items-center">
            <a href="#" className="transition hover:text-yellow-400 hover:-translate-y-1"><Facebook size={22}/></a>
            <a href="#" className="transition hover:text-yellow-400 hover:-translate-y-1"><Twitter size={22}/></a>
            <a href="#" className="transition hover:text-yellow-400 hover:-translate-y-1"><Instagram size={22}/></a>
            <a href="#" className="transition hover:text-yellow-400 hover:-translate-y-1"><Youtube size={22}/></a>
          </div>
        </div>
        <div className="mt-4 text-yellow-400 text-center font-bold">«حين نُوقد شعلة… تضيء وطنًا اسمه الجزائر.»</div>
      </footer>
    </div>
  );
}
