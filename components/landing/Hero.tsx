"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";

const images = [
  "/assets/hero/phone-1.svg",
  "/assets/hero/phone-2.svg",
  "/assets/hero/phone-3.svg",
];

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
];

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

/* ================== COMPONENT ================== */

export default function Hero() {
  const [spreadDistance, setSpreadDistance] = useState(260);
  const [tiltDeg, setTiltDeg] = useState(6);
  const [middleLift, setMiddleLift] = useState(-20);
  const [imgScale, setImgScale] = useState(1);
  const [baseImgYOffset, setBaseImgYOffset] = useState(18);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSpreadDistance(200);
        setTiltDeg(6);
        setMiddleLift(-20);
        setImgScale(0.95);
        setBaseImgYOffset(0);
        return;
      }
      if (width >= 640) {
        setSpreadDistance(160);
        setTiltDeg(5);
        setMiddleLift(-16);
        setImgScale(0.9);
        setBaseImgYOffset(8);
        return;
      }
      setSpreadDistance(110);
      setTiltDeg(4);
      setMiddleLift(-12);
      setImgScale(0.6);
      setBaseImgYOffset(150);
    };

    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const imageVariants = useMemo<Variants>(
    () => ({
      initial: () => ({
        x: 0,
        rotate: 0,
        y: baseImgYOffset,
      }),
      spread: (i: number) => ({
        x: i === 0 ? -spreadDistance : i === 2 ? spreadDistance : 0,
        transition: { delay: 1.6, duration: 0.6, ease: "easeOut" },
      }),
      rotate: (i: number) => ({
        rotate: i === 0 ? -tiltDeg : i === 2 ? tiltDeg : 0,
        y: baseImgYOffset + (i === 1 ? middleLift : 0),
        transition: { delay: 2.3, duration: 0.4, ease: "easeOut" },
      }),
    }),
    [baseImgYOffset, middleLift, spreadDistance, tiltDeg],
  );

  return (
    <section
      className="
        relative 
        flex 
        flex-col-reverse 
        lg:flex-row 
        items-center 
        justify-between 
        gap-10 
        sm:gap-16
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
        className="absolute -top-6 -bottom-3 left-0 w-screen"
      >
        <Image
          src="/assets/hero/bg.svg"
          alt="bg"
          width={500}
          height={500}
          className="h-[160px] w-screen object-cover sm:h-[200px] lg:h-full"
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
          space-y-6 
          lg:space-y-8 
          max-w-[500px] 
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

        <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
          <Link href="/" className="rounded-md bg-black px-3 py-2">
            <Image src="/assets/hero/app.svg" alt="App Store" width={120} height={31} />
          </Link>
          <Link href="/" className="rounded-md bg-black px-3 py-2">
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
          
          h-[260px] 
          min-[420px]:h-[300px]
          sm:h-[380px] 
          lg:h-full 
          flex 
          items-center 
          justify-center 
         
          
        "
      >
        {images.map((src, i) => (
           <motion.img
            key={src}
            src={src}
            alt={`preview ${i}`}
            custom={i}
            variants={imageVariants}
            initial="initial"
            animate={["spread", "rotate"]}
            style={{ scale: imgScale }}
            className="
              absolute 
              w-24 
              sm:w-32 
              md:w-36 
              lg:w-32
            "
          />
        ))}
      </motion.div>
    </section>
  );
}
