import {
  faBullhorn,
  faChartLine,
  faHeadset,
  faLaptopCode,
  faMobileScreenButton,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimateSection from "./animateSection";

export default function ServiceSection() {
  const services = [
    { title: "طراحی وبسایت", icon: faLaptopCode },
    { title: "توسعه اپلیکیشن موبایل", icon: faMobileScreenButton },
    { title: "سئو و بهینه‌سازی سایت", icon: faChartLine },
    { title: "طراحی لوگو و هویت بصری", icon: faPalette },
    { title: "بازاریابی دیجیتال", icon: faBullhorn },
    { title: "پشتیبانی و نگهداری", icon: faHeadset },
  ];

  return (
    <AnimateSection
      dir="right"
      className="flex flex-col justify-center mb-20 scroll-mt-24"
      id="service"
    >
      <div className="text-center flex flex-col gap-6 mb-15">
        <div className="text-secondry font-bold">
          <p>خدمات ما</p>
        </div>
        <div>
          <h2 className="text-4xl font-black text-text-primary">
            <span>ما </span>
            <span className="text-primary">خدمات </span>
            <span>شگفت انگیزی داریم.</span>
          </h2>
        </div>
        <div>
          <p className="text-text-secondry font-bold">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان  گرافیک است چاپگرها و متون بلکه روزنامه و
            مجله در ستون و سطرآنچنان که لازم است
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 text-right">
        {services.map((item, index) => (
          <div key={index} className="flex gap-4 max-w-[350px]">
            <div>
              <div className="w-[70px] h-[70px] border border-gray-300 rounded-full flex justify-center items-center">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-primary text-2xl"
                />
              </div>
            </div>
            <div>
              <div className="mb-2.5">
                <p className="text-xl font-bold text-text-primary">
                  {item.title}
                </p>
              </div>
              <div>
                <p className="text-text-secondry font-bold">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimateSection>
  );
}
