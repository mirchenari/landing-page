import "./globals.css";

export const metadata = {
  title: "لندینگ پیج شرکتی | چنار کد",
  description:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR">
      <body dir="rtl">{children}</body>
    </html>
  );
}
