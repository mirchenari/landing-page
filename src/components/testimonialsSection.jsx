"use client";

import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRef } from "react";
import AnimateSection from "./animateSection";

export default function TestimonialsSection() {
  const container = useRef(null);

  const testimonials = [
    {
      name: "علی رضایی",
      role: "صاحب کسب‌وکار آنلاین",
      gender: "male",
      comment:
        "کارش بسیار حرفه‌ای و دقیق بود. طراحی سایت دقیقاً همون چیزی شد که می‌خواستم و حتی بهتر! تجربه همکاری فوق‌العاده‌ای بود.",
      rating: 5,
    },
    {
      name: "مریم احمدی",
      role: "مدیر مارکتینگ",
      gender: "female",
      comment:
        "سرعت بالا، پشتیبانی عالی و حس مسئولیت فوق‌العاده. واقعاً فراتر از انتظارم بود. حتماً همکاری‌مون را ادامه می‌دهیم.",
      rating: 5,
    },
    {
      name: "سجاد لطفی",
      role: "فروشنده محصولات آموزشی",
      gender: "male",
      comment:
        "از نظر کیفیت کار، دقت در جزئیات و تحویل به‌موقع بی‌نظیر بود. بازخورد مشتریانم هم به‌شدت بهتر شده.",
      rating: 4,
    },
    {
      name: "الهام کریمی",
      role: "کارآفرین",
      gender: "female",
      comment:
        "مشاوره دقیق و طراحی کاملاً مطابق نیاز من انجام شد. همه‌چیز شفاف و با تعامل عالی پیش رفت. کاملاً راضی‌ام.",
      rating: 5,
    },
  ];

  function handleScroll(dir) {
    if (container.current) {
      const width = container.current.offsetWidth;
      container.current.scrollBy({
        left: dir == "left" ? -width : width,
        behavior: "smooth",
      });
    }
  }

  return (
    <AnimateSection
      dir="left"
      className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 scroll-mt-24"
      id="testimonials"
    >
      <div className="self-center">
        <div className="flex flex-col gap-5 mb-10">
          <p className="text-secondry font-bold">نظرات شما</p>
          <h3 className="text-3xl font-black text-text-primary">
            <span>صدای واقعی </span>
            <span className="text-secondry">مشتری‌هامون</span>
          </h3>
          <p className="text-text-secondry font-bold">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون
          </p>
        </div>
        <div className="max-w-full overflow-hidden" ref={container}>
          <div className="flex *:min-w-full">
            {testimonials.map((item, index) => (
              <div key={index} className="flex flex-col gap-5 p-1.5">
                <div className="text-gray-400">
                  <FontAwesomeIcon
                    icon={faStar}
                    style={item.rating >= 1 ? { color: "orange" } : null}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={item.rating >= 2 ? { color: "orange" } : null}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={item.rating >= 3 ? { color: "orange" } : null}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={item.rating >= 4 ? { color: "orange" } : null}
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    style={item.rating >= 5 ? { color: "orange" } : null}
                  />
                </div>
                <div>
                  <p className="text-text-primary font-bold text-justify">{item.comment}</p>
                </div>
                <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
                  <div className="flex items-center">
                    <div>
                      <Image
                        alt={item.name}
                        src={`/image/${item.gender}.png`}
                        width={80}
                        height={80}
                      />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-text-primary">
                        {item.name}
                      </p>
                      <p className="text-text-secondry font-bold">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 *:w-12 *:h-12 *:rounded-full *:flex *:justify-center *:items-center *:bg-gray-200 *:text-secondry *:cursor-pointer *:hover:bg-gray-300">
                    {index != 0 && (
                      <button onClick={() => handleScroll("right")}>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </button>
                    )}
                    {index != testimonials.length - 1 && (
                      <button onClick={() => handleScroll("left")}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image alt="چنار کد" src="/image/testimonials.svg" fill />
      </div>
    </AnimateSection>
  );
}
