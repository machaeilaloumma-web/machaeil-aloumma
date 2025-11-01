export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, email, level, institution, province, city, gender, password } = req.body;

    console.log("📩 تسجيل جديد:", fullName, email, level, institution, province, city, gender);

    // يمكنك هنا لاحقاً ربط قاعدة بيانات أو إرسال بريد تأكيد
    return res.status(200).json({ message: "✅ تم التسجيل بنجاح! أهلاً بك في مشاعل الأمة 🌟" });
  } else {
    return res.status(405).json({ message: "❌ الطريقة غير مسموح بها" });
  }
}
