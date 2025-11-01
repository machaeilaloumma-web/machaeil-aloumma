export default async function handler(req, res) {
  // ✅ السماح فقط بطريقة POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: '❌ الطريقة غير مسموح بها' });
  }

  try {
    const { email, password } = req.body;

    // ✅ تحميل المستخدمين المخزنين (مثلاً من ملف JSON أو قاعدة بيانات)
    // مؤقتًا لاختبار الوظيفة — يمكنك تعديل هذا لاحقًا
    const users = [
      {
        fullName: "مستخدم تجريبي",
        email: "test@mail.com",
        level: "الثانوي",
        institution: "ابن تيمية",
        province: "الجزائر",
        city: "براقي",
        gender: "ذكر",
        password: "123456",
      }
    ];

    // ✅ البحث عن المستخدم
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return res.status(401).json({ message: "❌ البريد الإلكتروني أو كلمة المرور غير صحيحة." });
    }

    // ✅ إرجاع البيانات إلى واجهة المستخدم
    return res.status(200).json({
      message: "تم تسجيل الدخول بنجاح!",
      user: user
    });

  } catch (error) {
    console.error("خطأ في تسجيل الدخول:", error);
    return res.status(500).json({ message: "❌ حدث خطأ أثناء تسجيل الدخول." });
  }
}
