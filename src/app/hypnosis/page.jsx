"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// کامپوننت انیمیشن
function AnimateSection({ dir, className, id, children }) {
  return (
    <motion.div
      className={className}
      id={id}
      initial={dir == "left" ? { opacity: 0, x: -50 } : { opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

// کامپوننت آیکون SVG برای مدیریت راحت‌تر
const Icon = ({ path, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor"
    className={className}
  >
    <path d={path} />
  </svg>
);

export default function MinimalPsychoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 selection:bg-sky-200 selection:text-sky-900 overflow-x-hidden">
      {/* نوار ناوبری */}
      <header className="fixed top-0 w-full bg-slate-50/80 backdrop-blur-lg z-50 border-b border-slate-200/50 transition-all duration-300">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          {/* لوگو */}
          <div className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white">
              <Icon
                path="M469.6 227.4c-10.8-24.3-29.1-46.7-53.1-64.7c-23.6-17.7-51.8-30.3-81.5-36.5c-1.9-9.3-6.6-17.9-13.6-24.9c-9.4-9.4-21.9-14.6-35.2-14.6s-25.8 5.2-35.2 14.6L241.4 112.3c-9.4 9.4-14.6 21.9-14.6 35.2s5.2 25.8 14.6 35.2l9.6 9.6L128 315.3 48.5 235.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l79.5 79.5c6.2 6.2 16.4 6.2 22.6 0l122.9-122.9 9.6 9.6c9.4 9.4 21.9 14.6 35.2 14.6s25.8-5.2 35.2-14.6l9.6-9.6c31.8 6.3 61.8 19.8 86.8 38.6c25.6 19.2 45.3 43.3 57.1 69.6c11.7 26.1 14.8 54.3 9.1 81.8c-5.7 27.5-20.3 52.8-42.2 73.1c-21.9 20.3-48.6 33.3-77.2 37.6c-28.6 4.3-57.8-1.1-83.3-15.4c-25.5-14.3-46.6-36.3-60.9-63.3c-14.3-27-20.7-57.6-18.4-87.8c2.3-30.2 13.2-59.3 31.4-83.4l-17.6-13.4c-20.8 27.4-33.4 60.4-36.1 94.9c-2.7 34.5 4.7 69.1 21 99.6c16.3 30.5 40.5 55.7 69.8 72.2c29.3 16.5 63.1 22.7 96.1 17.6c33-5.1 63.6-20.2 88.3-43.1c24.7-22.9 41.8-52.3 48.3-84.6c6.5-32.3 2.9-65.8-10.3-96.1z"
                className="w-4 h-4"
              />
            </div>
            <span>روانکاوی</span>
          </div>

          {/* منوی دسکتاپ */}
          <nav className="hidden md:flex gap-10 text-sm font-medium text-slate-500">
            <a href="#home" className="hover:text-sky-600 transition-colors">
              خانه
            </a>
            <a
              href="#services"
              className="hover:text-sky-600 transition-colors"
            >
              خدمات ما
            </a>
            <a
              href="#approach"
              className="hover:text-sky-600 transition-colors"
            >
              رویکرد ما
            </a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">
              تماس
            </a>
            <a href="#faq" className="hover:text-sky-600 transition-colors">
              سوالات متداول
            </a>
          </nav>

          <div className="flex items-center gap-4">
            {/* دکمه رزرو (مخفی در موبایل) */}
            <button className="hidden md:block text-sm font-semibold text-slate-900 hover:text-sky-600 transition-colors">
              رزرو نوبت
            </button>

            {/* دکمه منوی همبرگری (نمایش در موبایل) */}
            <button
              className="md:hidden text-slate-900 hover:text-sky-600 focus:outline-none p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-6 h-6 fill-current"
              >
                {isMenuOpen ? (
                  // آیکون ضربدر (بستن)
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                ) : (
                  // آیکون همبرگری
                  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* منوی موبایل (کشویی) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-slate-50 border-b border-slate-200 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-4 text-center">
            <a
              href="#home"
              className="block py-2 text-slate-600 hover:text-sky-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              خانه
            </a>
            <a
              href="#services"
              className="block py-2 text-slate-600 hover:text-sky-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              خدمات ما
            </a>
            <a
              href="#approach"
              className="block py-2 text-slate-600 hover:text-sky-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              رویکرد ما
            </a>
            <a
              href="#contact"
              className="block py-2 text-slate-600 hover:text-sky-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              تماس
            </a>
            <a
              href="#faq"
              className="block py-2 text-slate-600 hover:text-sky-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              سوالات متداول
            </a>
            <button className="mt-2 w-full bg-sky-500 text-white py-3 rounded-xl font-bold hover:bg-sky-600 transition-colors">
              رزرو نوبت
            </button>
          </div>
        </div>
      </header>

      {/* بخش قهرمان */}
      <AnimateSection
        dir="right"
        className="min-h-screen flex items-center pt-20 container mx-auto px-6"
        id="home"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-bold tracking-widest uppercase mb-4"
          >
            کلینیک تخصصی ذهن و روان
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            آرامش در <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-blue-600">
              عمق وجود
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            ما با ترکیب هنر روانکاوی و علم هیپنوتیزم، پلی به سوی درک خویشتن
            می‌سازیم. سفری به درون برای زندگی شفاف‌تر در بیرون.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="group bg-slate-900 text-white px-8 py-4 rounded-full font-medium hover:bg-sky-600 transition-all duration-300 shadow-xl shadow-slate-200 flex items-center justify-center gap-2">
              شروع سفر درمان
              {/* آیکون فلش راست */}
              <Icon
                path="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button className="px-8 py-4 rounded-full font-medium text-slate-600 hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100">
              درباره روش ما
            </button>
          </div>
        </div>
      </AnimateSection>

      {/* بخش خدمات ما - طراحی مدرن و مینیمال */}
      <section
        className="py-32 bg-white relative overflow-hidden"
        id="services"
      >
        {/* المان تزئینی پس‌زمینه */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-50/50 skew-x-12 translate-x-20 z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <AnimateSection dir="up">
              <span className="text-sky-500 font-bold tracking-widest text-xs uppercase mb-2 block">
                خدمات تخصصی
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                مسیرهای شفابخش
              </h2>
              <p className="text-slate-500 font-light leading-relaxed">
                ما مجموعه‌ای از روش‌های درمانی را ارائه می‌دهیم که هر کدام به
                شکلی منحصر‌به‌فرد به شما کمک می‌کنند تا به تعادل و آرامش برسید.
              </p>
            </AnimateSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* کارت ۱: روانکاوی */}
            <AnimateSection
              dir="right"
              className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(14,165,233,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-sky-500 mb-8 group-hover:scale-110 transition-transform duration-300">
                  {/* آیکون مغز/شبکه */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    className="w-8 h-8 fill-current"
                  >
                    <path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48 21.5-48 48s21.5 48 48 48H80c26.5 0 48-21.5 48-48V224c0-26.5-21.5-48-48-48H48zM592 224c-26.5 0-48 21.5-48 48V464c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48s-21.5-48-48-48H608V224h-16z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  روانکاوی عمیق
                </h3>
                <p className="text-slate-500 font-light leading-relaxed mb-6">
                  کاوش در لایه‌های ناخودآگاه ذهن برای درک ریشه‌های واقعی
                  رفتارها، احساسات و الگوهای تکراری در زندگی.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sky-600 font-bold text-sm group-hover:gap-2 transition-all"
                >
                  اطلاعات بیشتر
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-3 h-3 mr-2 fill-current"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                </a>
              </div>
            </AnimateSection>

            {/* کارت ۲: هیپنوتیزم */}
            <AnimateSection
              dir="up"
              className="group relative bg-slate-900 rounded-[2.5rem] p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl shadow-inner flex items-center justify-center text-sky-400 mb-8 group-hover:scale-110 transition-transform duration-300">
                  {/* آیکون چشم/هیپنوتیزم */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-8 h-8 fill-current"
                  >
                    <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  هیپنوتیزم بالینی
                </h3>
                <p className="text-slate-400 font-light leading-relaxed mb-6">
                  استفاده از حالت تغییر یافته هوشیاری برای دسترسی مستقیم به
                  زیرساخت‌های ذهن و درمان سریع‌تر ترس‌ها و عادات.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sky-400 font-bold text-sm group-hover:gap-2 transition-all"
                >
                  اطلاعات بیشتر
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-3 h-3 mr-2 fill-current"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                </a>
              </div>
            </AnimateSection>

            {/* کارت ۳: مشاوره فردی */}
            <AnimateSection
              dir="left"
              className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(14,165,233,0.15)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-sky-500 mb-8 group-hover:scale-110 transition-transform duration-300">
                  {/* آیکون قلب/صدا */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-8 h-8 fill-current"
                  >
                    <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  مشاوره فردی
                </h3>
                <p className="text-slate-500 font-light leading-relaxed mb-6">
                  فضایی امن و محرمانه برای گفتگو درباره چالش‌های روزمره و یافتن
                  راهکارهای عملی برای ارتقای کیفیت زندگی.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sky-600 font-bold text-sm group-hover:gap-2 transition-all"
                >
                  اطلاعات بیشتر
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    className="w-3 h-3 mr-2 fill-current"
                  >
                    <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                  </svg>
                </a>
              </div>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* بخش خدمات */}
      <section className="py-32 bg-white relative" id="approach">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimateSection dir="right" className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900">
                رویکردی متفاوت برای درمان
              </h2>
              <p className="text-slate-500 leading-loose font-light">
                درمان ما فقط بر اساس گفتگو نیست، بلکه یک تجربه multisensory است
                که با تمرکز بر ناخودآگاه و تغییر الگوهای ذهنی شکل می‌گیرد.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center text-xl group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                    {/* آیکون بی‌نهایت */}
                    <Icon
                      path="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32zM128 272c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 128c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96zm128-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      روانکاوی عمیق
                    </h3>
                    <p className="text-sm text-slate-500">
                      کشف ریشه‌های پنهان رفتار و احساسات در لایه‌های ناخودآگاه
                      ذهن.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center text-xl group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                    {/* آیکون ستاره/درخشش */}
                    <Icon
                      path="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      هیپنوتیزم بالینی
                    </h3>
                    <p className="text-sm text-slate-500">
                      دسترسی امن و علمی به ذهن ناخودآگاه برای بازنویسی باورهای
                      محدودکننده.
                    </p>
                  </div>
                </div>
              </div>
            </AnimateSection>

            <AnimateSection dir="left" className="relative">
              <img
                src="/image/vector1.png"
                alt="Minimal Abstract Art"
                className="hover:scale-105"
              />
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* بخش نقل قول */}
      <section className="py-32 bg-slate-900 text-white text-center px-6">
        <AnimateSection dir="up" className="max-w-3xl mx-auto">
          <div className="text-sky-500 text-4xl mb-8 opacity-50 flex justify-center">
            {/* آیکون پر بزرگ */}
            <Icon
              path="M469.6 227.4c-10.8-24.3-29.1-46.7-53.1-64.7c-23.6-17.7-51.8-30.3-81.5-36.5c-1.9-9.3-6.6-17.9-13.6-24.9c-9.4-9.4-21.9-14.6-35.2-14.6s-25.8 5.2-35.2 14.6L241.4 112.3c-9.4 9.4-14.6 21.9-14.6 35.2s5.2 25.8 14.6 35.2l9.6 9.6L128 315.3 48.5 235.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l79.5 79.5c6.2 6.2 16.4 6.2 22.6 0l122.9-122.9 9.6 9.6c9.4 9.4 21.9 14.6 35.2 14.6s25.8-5.2 35.2-14.6l9.6-9.6c31.8 6.3 61.8 19.8 86.8 38.6c25.6 19.2 45.3 43.3 57.1 69.6c11.7 26.1 14.8 54.3 9.1 81.8c-5.7 27.5-20.3 52.8-42.2 73.1c-21.9 20.3-48.6 33.3-77.2 37.6c-28.6 4.3-57.8-1.1-83.3-15.4c-25.5-14.3-46.6-36.3-60.9-63.3c-14.3-27-20.7-57.6-18.4-87.8c2.3-30.2 13.2-59.3 31.4-83.4l-17.6-13.4c-20.8 27.4-33.4 60.4-36.1 94.9c-2.7 34.5 4.7 69.1 21 99.6c16.3 30.5 40.5 55.7 69.8 72.2c29.3 16.5 63.1 22.7 96.1 17.6c33-5.1 63.6-20.2 88.3-43.1c24.7-22.9 41.8-52.3 48.3-84.6c6.5-32.3 2.9-65.8-10.3-96.1z"
              className="w-12 h-12"
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-light leading-relaxed italic mb-8">
            "تا زمانی که ناخودآگاه خود را نشناسید، آن را رهبری خواهید کرد و
            زندگی را سرنوشت خواهید نامید."
          </h2>
          <div className="w-16 h-0.5 bg-sky-500 mx-auto mb-6"></div>
          <p className="text-sky-200 font-medium tracking-widest text-sm uppercase">
            کارل یونگ
          </p>
        </AnimateSection>
      </section>

      {/* بخش تماس */}
      <section
        className="py-32 container mx-auto px-6 text-center"
        id="contact"
      >
        <AnimateSection dir="up" className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-slate-900">
            آماده تغییر هستید؟
          </h2>
          <p className="text-slate-500 text-lg">
            اولین قدم سخت‌ترین قدم است، اما ما در کنار شما هستیم. همین امروز
            برای یک جلسه مشاوره اقدام کنید.
          </p>

          <form className="mt-12 space-y-4 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="نام شما"
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 outline-none transition-all"
              />
              <input
                type="email"
                placeholder="ایمیل شما"
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 outline-none transition-all"
              />
            </div>
            <textarea
              placeholder="پیام شما (اختیاری)"
              rows="4"
              className="w-full px-6 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-sky-500 outline-none transition-all"
            ></textarea>

            <button className="w-full bg-sky-500 text-white font-bold py-4 rounded-xl hover:bg-sky-600 transition-all shadow-lg shadow-sky-200">
              ارسال درخواست
            </button>
          </form>
        </AnimateSection>
      </section>

      {/* بخش نظرات مشتریان */}
      <section className="py-32 bg-slate-50" id="testimonials">
        <div className="container mx-auto px-6">
          <AnimateSection dir="up" className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              تجربه مراجعین ما
            </h2>
            <p className="text-slate-500 font-light">
              داستان‌های واقعی از کسانی که مسیر شفا را طی کردند
            </p>
          </AnimateSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* نظر ۱ */}
            <AnimateSection
              dir="right"
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group"
            >
              <div className="flex gap-1 text-sky-300 mb-6">
                {/* ستاره‌ها با SVG */}
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 font-light">
                "قبل از آمدن به اینجا، احساس می‌کردم در تونلی تاریک گیر کرده‌ام.
                جلسات هیپنوتیزم به من کمک کرد تا ریشه ترس‌هایم را پیدا کنم و
                حالا با آرامش واقعی زندگی می‌کنم."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-lg">
                  س.م
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    سارا محمدی
                  </h4>
                  <p className="text-xs text-slate-400">هنرمند</p>
                </div>
              </div>
            </AnimateSection>

            {/* نظر ۲ */}
            <AnimateSection
              dir="up"
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group"
            >
              <div className="flex gap-1 text-sky-300 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 font-light">
                "رویکرد دکتر و فضای کلینیک فوق‌العاده حرفه‌ای و در عین حال گرم
                است. روانکاوی برای من مثل یک آینه بود که خود واقعی‌ام را به من
                نشان داد."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-lg">
                  ع.ر
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    علی رضایی
                  </h4>
                  <p className="text-xs text-slate-400">مدیر اجرایی</p>
                </div>
              </div>
            </AnimateSection>

            {/* نظر ۳ */}
            <AnimateSection
              dir="left"
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group"
            >
              <div className="flex gap-1 text-sky-300 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 font-light">
                "بعد از سال‌ها مبارزه با اضطراب، بالاخره توانستم با کمک
                تکنیک‌های این مرکز، کنترل زندگی را دوباره به دست بگیرم. بی‌نهایت
                سپاسگزارم."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold text-lg">
                  م.ک
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    مریم کریمی
                  </h4>
                  <p className="text-xs text-slate-400">معلم</p>
                </div>
              </div>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* بخش سوالات متداول - FAQ */}
      <section className="py-32 bg-slate-50" id="faq">
        <div className="container mx-auto px-6 max-w-3xl">
          <AnimateSection dir="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              سوالات رایج
            </h2>
            <p className="text-slate-500 font-light">
              پاسخ به ابهامات شما درباره مسیر درمان
            </p>
          </AnimateSection>

          <div className="space-y-4">
            {/* سوال ۱ */}
            <AnimateSection
              dir="up"
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-800 hover:text-sky-600 transition-colors">
                  <span>آیا هیپنوتیزم باعث از دست دادن کنترل می‌شود؟</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-5 h-5 fill-slate-300 group-open:fill-sky-500"
                    >
                      <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                    </svg>
                  </span>
                </summary>
                <div className="text-slate-500 px-6 pb-6 font-light leading-relaxed border-t border-slate-50 pt-4">
                  خیر، هیپنوتیزم یک حالت کاملاً طبیعی تمرکز است. شما در تمام طول
                  جلسه هوشیار هستید و کنترل کامل بر اعمال خود دارید و نمی‌توانید
                  برخلاف میل باطنی خود کاری انجام دهید.
                </div>
              </details>
            </AnimateSection>

            {/* سوال ۲ */}
            <AnimateSection
              dir="up"
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-800 hover:text-sky-600 transition-colors">
                  <span>مدت زمان جلسات روانکاوی چقدر است؟</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-5 h-5 fill-slate-300 group-open:fill-sky-500"
                    >
                      <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                    </svg>
                  </span>
                </summary>
                <div className="text-slate-500 px-6 pb-6 font-light leading-relaxed border-t border-slate-50 pt-4">
                  جلسات معمولاً ۴۵ تا ۶۰ دقیقه طول می‌کشند. با این حال، بسته به
                  رویکرد درمانی و نیازهای خاص شما، این زمان ممکن است متغیر باشد.
                </div>
              </details>
            </AnimateSection>

            {/* سوال ۳ */}
            <AnimateSection
              dir="up"
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-800 hover:text-sky-600 transition-colors">
                  <span>آیا جلسات محرمانه می‌ماند؟</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-5 h-5 fill-slate-300 group-open:fill-sky-500"
                    >
                      <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                    </svg>
                  </span>
                </summary>
                <div className="text-slate-500 px-6 pb-6 font-light leading-relaxed border-t border-slate-50 pt-4">
                  صد درصد. رعایت اصول اخلاقی و حفظ حریم خصوصی مراجعین اولویت
                  اصلی ماست. هیچ اطلاعاتی بدون اجازه شما با شخص ثالث به اشتراک
                  گذاشته نمی‌شود.
                </div>
              </details>
            </AnimateSection>

            {/* سوال ۴ */}
            <AnimateSection
              dir="up"
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-800 hover:text-sky-600 transition-colors">
                  <span>چند جلسه برای دیدن نتیجه لازم است؟</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-5 h-5 fill-slate-300 group-open:fill-sky-500"
                    >
                      <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                    </svg>
                  </span>
                </summary>
                <div className="text-slate-500 px-6 pb-6 font-light leading-relaxed border-t border-slate-50 pt-4">
                  این مورد برای هر فرد متفاوت است. برخی مشکلات در ۳ تا ۵ جلسه
                  بهبود می‌یابند، در حالی که روانکاوی عمیق ممکن است یک فرآیند
                  طولانی‌تر باشد. پس از جلسه اول ارزیابی دقیقتری خواهیم داشت.
                </div>
              </details>
            </AnimateSection>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-200">
        <p>© ۱۴۰۴ طراحی شده با عشق و دقت توسط چنارکد.</p>
      </footer>
    </main>
  );
}
