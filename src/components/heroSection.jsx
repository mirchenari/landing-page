"use client";

import Image from "next/image";
import Btn from "./btn";

export default function HeroSection() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:h-[700px] text-center lg:text-right mb-0 sm:mb-20 lg:mb-0 max-lg:mt-24 scroll-mt-24"
      id="hero"
    >
      <div className="self-center flex flex-col gap-5">
        <div>
          <h1 className="font-black text-4xl">
            <span>بهترین خدمات و سرویس‌ها </span>
            <span className="text-primary">برای شما</span>
          </h1>
        </div>
        <div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی
            در شصت
          </p>
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="flex justify-center lg:justify-start"
          >
            <div className="sm:border-2 border-primary rounded-full p-1.5 max-sm:flex flex-col gap-5 max-sm:w-[95%]">
              <input
                type="email"
                placeholder="ایمیل خودت رو بنویس"
                className="focus:outline-0 w-full sm:w-[250px] max-sm:border-2 border-primary max-sm:rounded-full py-2.5 px-5"
              />
              <Btn>همین حالا!</Btn>
            </div>
          </form>
        </div>
      </div>
      <div className="relative h-[400px] lg:h-auto">
        <Image alt="چنارکد" src="/image/hero-banner.svg" fill />
      </div>
    </section>
  );
}
