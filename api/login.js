let users = []; // قاعدة بيانات مؤقتة داخل الذاكرة (تُعاد ضبطها بعد كل نشر جديد)

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "❌ الطريقة غير مسموح بها" });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "⚠️ يرجى إدخال البريد الإلكتروني وكلمة المرور." });
    }

    // نستخدم globalThis لمشاركة المستخدمين بين register.js و login.js
    if (!globalThis.__users) {
      globalThis.__users = [];
    }

    const user = globalThis.__users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return res.status(401).json({ message: "❌ البريد الإلكتروني أو كلمة المرور غير صحيحة." });
    }

    return res.status(200).json({
      success: true,
      message: "✅ تم تسجيل الدخول بنجاح!",
      user,
    });

  } catch (error) {
    console.error("خطأ أثناء تسجيل الدخول:", error);
    return res.status(500).json({
      message: "❌ حدث خطأ أثناء تسجيل الدخول. حاول مرة أخرى لاحقًا.",
    });
  }
}
