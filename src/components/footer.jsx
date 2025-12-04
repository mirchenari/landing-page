import {
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import AnimateSection from "./animateSection";

export default function Footer() {
  const linkClaass =
    "flex justify-center items-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-300";
  return (
    <footer>
      <AnimateSection dir="right" className="bg-secondry flex flex-col-reverse md:flex-row items-center gap-5 justify-between py-20 md:px-20">
        <div className="flex gap-2.5">
          <Link href="#" className={linkClaass}>
            <FontAwesomeIcon icon={faTelegram} />
          </Link>
          <Link href="#" className={linkClaass}>
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href="#" className={linkClaass}>
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
        <div className="text-white">
          <p>طراحی و توسعه توسط چنار کد. 2025</p>
        </div>
        <div>
          <Link
            href="https://chenarcode.ir/"
            target="_blank"
            className="font-black text-2xl text-white"
          >
            ChenarCode
          </Link>
        </div>
      </AnimateSection>
    </footer>
  );
}
