// api/register.js
let users = []; // قاعدة بيانات مؤقتة داخل الذاكرة (ستُمسح بعد كل إعادة نشر)

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "❌ الطريقة غير مسموح بها" });
  }

  try {
    const { fullName, email, level, institution, province, city, gender, password } = req.body;

    // ✅ التحقق من وجود كل الحقول المطلوبة
    if (!fullName || !email || !level || !gender || !password) {
      return res.status(400).json({ message: "⚠️ يرجى ملء جميع الحقول المطلوبة." });
    }

    // ✅ التحقق من أن البريد غير مستخدم سابقًا
    const existing = users.find(u => u.email === email);
    if (existing) {
      return res.status(409).json({ message: "❌ هذا البريد مستخدم بالفعل." });
    }

    // ✅ إنشاء المستخدم الجديد
    const newUser = { fullName, email, level, institution, province, city, gender, password };
    users.push(newUser);

    console.log("📦 المستخدمون المسجلون:", users);

    return res.status(201).json({ 
      success: true,
      message: "✅ تم التسجيل بنجاح!",
      user: newUser 
    });

  } catch (error) {
    console.error("خطأ أثناء التسجيل:", error);
    return res.status(500).json({ message: "❌ حدث خطأ أثناء التسجيل، حاول لاحقًا." });
  }
}
