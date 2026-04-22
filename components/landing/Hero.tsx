"use client";


import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";



const images = ["/assets/hero/phone-1.svg", "/assets/hero/phone-2.svg", "/assets/hero/phone-3.svg"];

const hero = [
  {
    title: "Secure Checkout",
    icon: FiCheckCircle,
  },
  {
    title: "Order Tracking",
    icon: CiDeliveryTruck,
  },
  {
    title: "Easy Onboarding",

    icon: FiUsers,
  },
]


const textVariants: Variants = {
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const bgVariants: Variants = {
  hidden: { y: 200, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: 0.8, ease: "easeOut" },
  },
};

const imagesWrapperVariants: Variants = {
  hidden: { x: 400, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.8, duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  spread: (i: number) => ({
    x: i === 0 ? -260 : i === 2 ? 260 : 0,
    transition: { delay: 1.6, duration: 0.6, ease: "easeOut" },
  }),
  rotate: (i: number) => ({
    rotate: i === 0 ? -6 : i === 2 ? 6 : 0,
    y: i === 1 ? -20 : 0,
    transition: { delay: 2.3, duration: 0.4, ease: "easeOut" },
  }),
};

/* ================== COMPONENT ================== */

export default function Hero() {
  return (
    <section
      className="
        relative 
        flex 
        flex-col-reverse 
        lg:flex-row 
        items-center 
        justify-between 
        gap-12 
        min-h-screen 
        overflow-hidden 
        px-4 sm:px-10 lg:px-20 
        padding-y
      "
    >
      {/* Background */}
      <motion.div
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        className="absolute -bottom-3 left-0 w-screen"
      >
        <Image
          src="/assets/hero/bg.svg"
          alt="bg"
          width={500}
          height={500}
          className="w-screen h-[200px] lg:h-full object-cover"
        />
      </motion.div>

      {/* Blur circle */}
      <div className="absolute w-52 h-52 lg:w-69 lg:h-69 bg-[#0BA24B1A] rounded-full blur-3xl top-0 left-6" />

      {/* ================== TEXT ================== */}
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="
          relative 
          w-full 
          flex-1 
          space-y-6 
          lg:space-y-8 
          max-w-142 
          text-center 
          lg:text-left
        "
      >
        <h1 className="font-bold text-[32px] sm:text-[40px] lg:text-[50px] leading-tight">
          All Plants in One Place with{" "}
          <span className="text-primary">Greeno</span>
        </h1>

        <p className="text-[#6B7280] text-[16px] lg:text-[20px]">
          Discover nurseries near you, compare options, and order plants in minutes.
        </p>

        <div className="flex items-center justify-center lg:justify-start gap-2">
          <Link href="/" className="bg-black py-2 px-3 rounded-md">
            <Image src="/assets/hero/app.svg" alt="App Store" width={120} height={31} />
          </Link>
          <Link href="/" className="bg-black py-2 px-3 rounded-md">
            <Image src="/assets/hero/play.svg" alt="Play Store" width={120} height={31} />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          {hero.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <item.icon size={20} className="text-primary" />
              <p className="text-[#6B7280] text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ================== IMAGES ================== */}
      <motion.div
        variants={imagesWrapperVariants}
        initial="hidden"
        animate="visible"
        className="
          relative 
          w-full 
          h-[300px] 
          sm:h-[400px] 
          lg:h-full 
          flex 
          items-center 
          justify-center 
          flex-1
        "
      >
        {images.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            custom={i}
            variants={imageVariants}
            animate={["spread", "rotate"]}
            className="absolute w-40 sm:w-48 lg:w-56"
          />
        ))}
      </motion.div>
    </section>
  );
}