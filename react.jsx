// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* صورة الجزائر */}
      <img
        src="https://machaeil-aloumma.vercel.app//alger.jpg"
        alt="الجزائر"
        className="hero-image"
      />

      {/* شعار مشاعل الأمة (GIF) */}
      <img
        src="https://machaeil-aloumma.vercel.app//%D9%85%D8%B4%D8%A7%D8%B9%D9%84%20%D8%A7%D9%84%D8%A3%D9%85%D8%A9.gif"
        alt="شعار مشاعل الأمة"
        className="logo"
      />

      {/* العنوان */}
      <h1>مشاعل الأمة  مشروع نهضة - سفراء القيم</h1>

      {/* الوصف */}
      <p className="tagline">
        منصة وطنية لتأهيل القدوات وغرس القيم في الأجيال القادمة و التي ستحمش مشعل الامة و تحفظ العهد.
      </p>

      {/* أزرار */}
      <div className="index-container">
        <a href="/register" className="btn">
          إنشاء حساب جديد
        </a>
        <a href="/login" className="btn">
          تسجيل الدخول
        </a>
        <a href="/about" className="secondary-link">
          تعرف أكثر عن المشروع
        </a>
      </div>

      {/* التذييل */}
      <footer>
        © 2025 مشاعل الأمة – جميع الحقوق محفوظة ·{' '}
        <a href="/about">من نحن</a> · <a href="/contact">اتصل بنا</a>
      </footer>
    </div>
  );
}

export default App;
