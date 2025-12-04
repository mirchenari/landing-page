"use client";

import Link from "next/link";
import Btn from "./btn";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (window) {
      function handleSetScroll() {
        if (window.scrollY > 100) {
          setIsScroll(true);
        } else {
          setIsScroll(false);
        }
      }
      window.addEventListener("scroll", handleSetScroll);

      return () => {
        window.removeEventListener("scroll", handleSetScroll);
      };
    }
  }, []);

  return (
    <header
      className={`px-5 lg:px-20 py-5 fixed top-0 right-0 left-0 backdrop-blur-md bg-white/30 z-50 border-b-2 ${
        isScroll ? "border-gray-200" : "border-transparent"
      }`}
    >
      <section className="flex justify-between items-center">
        <div className="flex gap-10 items-center">
          <div>
            <Link
              href="https://chenarcode.ir/"
              target="_blank"
              className="font-black text-2xl hover:text-primary"
            >
              ChenarCode
            </Link>
          </div>
          <div className="hidden lg:block">
            <nav className="flex gap-5">
              <Link href="#hero">خانه</Link>
              <Link href="#service">خدمات</Link>
              <Link href="#values">ارزش‌های ما</Link>
              <Link href="#pricing">قیمت‌ها</Link>
              <Link href="#testimonials">نظرات مشتری‌ها</Link>
            </nav>
          </div>
        </div>
        <div className="hidden lg:block">
          <Btn>همین حالا خرید کن!</Btn>
        </div>
        <div className="lg:hidden text-xl text-text-primary">
          <button
            onClick={() => {
              setIsShow(true);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </section>
      <AnimatePresence>
        {isShow && (
          <motion.section
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="lg:hidden fixed top-5 right-5 left-5 bg-white border-2 border-gray-200 rounded-xl py-5 animate-section"
          >
            <div className="absolute top-5 left-5 text-xl text-secondry">
              <button
                onClick={() => {
                  setIsShow(false);
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div>
              <nav className="flex flex-col gap-5 items-center font-bold">
                <Link
                  href="#hero"
                  onClick={() => {
                    setIsShow(false);
                  }}
                >
                  خانه
                </Link>
                <Link
                  href="#service"
                  onClick={() => {
                    setIsShow(false);
                  }}
                >
                  خدمات
                </Link>
                <Link
                  href="#values"
                  onClick={() => {
                    setIsShow(false);
                  }}
                >
                  ارزش‌های ما
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => {
                    setIsShow(false);
                  }}
                >
                  قیمت‌ها
                </Link>
                <Link
                  href="#testimonials"
                  onClick={() => {
                    setIsShow(false);
                  }}
                >
                  نظرات مشتری‌ها
                </Link>
              </nav>
            </div>
            <div className="flex justify-center mt-5">
              <Btn>همین حالا خرید کن!</Btn>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </header>
  );
}
