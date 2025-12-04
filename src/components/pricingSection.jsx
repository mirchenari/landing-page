import AnimateSection from "./animateSection";
import Btn from "./btn";

export default function PricingSection() {
  const pricingPlans = [
    {
      title: "پلن پایه",
      price: 990000,
      features: [
        "استفاده از امکانات پایه",
        "پشتیبانی ایمیلی",
        "تا ۵ پروژه فعال",
        "گزارش هفتگی عملکرد",
        "دسترسی به قالب‌های آماده",
        "آپدیت‌های منظم نرم‌افزار",
      ],
    },
    {
      title: "پلن استاندارد",
      price: 1990000,
      features: [
        "همه امکانات پلن پایه",
        "پشتیبانی فوری",
        "تا ۲۰ پروژه فعال",
        "گزارش ماهانه عملکرد",
        "مشاوره اختصاصی در پروژه‌ها",
        "دسترسی به افزونه‌ها و ابزارهای پیشرفته",
      ],
    },
    {
      title: "پلن حرفه‌ای",
      price: 2990000,
      features: [
        "همه امکانات استاندارد",
        "مشاوره اختصاصی و اختصاص منابع",
        "پروژه نامحدود",
        "اولویت در درخواست‌ها",
        "گزارش روزانه و داشبورد مدیریتی",
        "پشتیبانی تلفنی و آنلاین ۲۴/۷",
      ],
    },
  ];

  return (
    <AnimateSection dir="right" className="flex flex-col justify-center mb-20 scroll-mt-24" id="pricing">
      <div className="text-center flex flex-col gap-6 mb-15">
        <div>
          <p className="text-secondry font-bold">قیمت‌های ما</p>
        </div>
        <div>
          <h3 className="text-4xl font-black text-text-primary">
            <span>منطقی‌ترین و انعطاف‌پذیرترین </span>
            <span className="text-primary">طرح‌ها</span>
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 gap-10">
        {pricingPlans.map((item, index) => (
          <div
            key={index}
            className="text-center border border-gray-200 shadow-lg rounded-xl hover:shadow-2xl w-[95%] sm:w-[420px]"
          >
            <div className="border-b-2 border-b-gray-200 py-5 font-bold flex flex-col gap-5">
              <p className="text-lg text-text-primary">{item.title}</p>
              <p className="text-3xl">{item.price.toLocaleString("fa-IR")}</p>
              <p className="text-text-secondry">تومان \ ماه</p>
            </div>
            <div className="border-b-2 border-b-gray-200 py-5 font-bold text-text-primary">
              <ul className="flex flex-col gap-5">
                {item.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="py-5">
              <Btn>خرید کن!</Btn>
            </div>
          </div>
        ))}
      </div>
    </AnimateSection>
  );
}
