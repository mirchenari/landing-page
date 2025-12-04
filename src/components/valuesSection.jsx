import { faBriefcase, faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import AnimateSection from "./animateSection";

export default function ValuesSection() {
const principles = [
  {
    icon: faWallet,
    title: "مقرون‌به‌صرفه و اقتصادی",
    text: "با هزینه‌ای منطقی خدماتی دریافت می‌کنی که کیفیت و ارزشی فراتر از مبلغ پرداختی ارائه می‌کنه.",
  },
  {
    icon: faBriefcase,
    title: "حرفه‌ای و قابل اعتماد",
    text: "هر پروژه با دقت، نظم و رعایت استانداردهای حرفه‌ای انجام می‌شود تا نتیجه‌ای مطمئن تحویل بگیری.",
  },
];

  return (
    <AnimateSection dir="left" className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 scroll-mt-24" id="values">
      <div className="relative h-[350px] md:h-auto">
        <Image alt="چنار کد" src="/image/values.svg" fill />
      </div>
      <div className="text-text-secondry flex flex-col gap-6 self-center text-center md:text-right">
        <div className="flex flex-col gap-6">
          <p className="text-secondry font-bold">ارزش‌های ما</p>
          <h3 className="text-3xl text-text-primary font-black">
            <span>ما همیشه به </span>
            <span className="text-primary">اصول </span>
            <span>خود پایبندیم.</span>
          </h3>
        </div>
        <div>
          <p className="font-bold">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          {principles.map((item, index) => (
            <div key={index} className="max-w-[320px] md:max-w-[80%]">
              <div className="flex gap-2.5 items-center justify-center md:justify-start mb-2.5">
                <div className="w-9 h-9 flex justify-center items-center bg-primary rounded-full text-white">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <p className="text-text-primary font-bold text-lg">
                  {item.title}
                </p>
              </div>
              <div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimateSection>
  );
}
