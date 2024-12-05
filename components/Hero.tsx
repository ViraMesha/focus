"use client";

import { useScrollTransform } from "@/hooks/useScrollTransform";
import { motion } from "framer-motion";
const Hero = () => {
  // Define input and output arrays for transforming scroll values to pixel values.
  const input: [number, number] = [0, 400]; // Scroll range in pixels.
  const output: [string, string] = ["480px", "240px"]; // Corresponding top position values for the image.
  const imgTopPosition = useScrollTransform(input, output); // Map scrollY values to top position values using useTransform.

  // This line creates a dynamic scaling factor for an image based on scroll position.
  // The `inputRange` ([0, 200, 1300]) defines the scroll position thresholds in pixels.
  // The `outputRange` ([1, 1.4, 1]) specifies the corresponding scale values.
  // At `scrollY = 0`, the scale is 1; at `scrollY = 200`, the scale increases to 1.4; and by `scrollY = 1300`, it scales back to 1.
  const imgScale = useScrollTransform([0, 200, 1300], [1, 1.4, 1]);
  const textOpacity = useScrollTransform([0, 200], [1, 0]);
  const textScale = useScrollTransform([0, 200], [1, 0.8]);
  const textDisplay = useScrollTransform([0, 800], ["flex", "none"]);

  return (
    <section className="h-screen xl:h-[1600px] overflow-x-clip relative">
      <div className="container mx-auto h-full flex items-center xl:items-start">
        {/* text */}
        <motion.div
          className="flex flex-col justify-center items-center gap-6 text-center fixed left-0 right-0 mt-24 xl:mt-[160px]"
          style={{ opacity: textOpacity, scale: textScale }}
        >
          <h1 className="text-[60px] font-bold tracking-[-0.5px] leading-none">
            Boost Your Productivity Instantly
          </h1>
          <p className="max-w-[680px] text-[20px] text-white/80 font-light px-8 xl:px-0 mb-2">
            Streamline tasks and manage your time effortlessly with our
            powerful, intuitive, all in one productivity platform.
          </p>
          <button>Join today</button>
        </motion.div>
        {/* img */}
        <motion.div
          className="hidden xl:flex w-full max-w-[960px] mx-auto h-[520px] bg-no-repeat sticky left-0 right-0"
          style={{
            backgroundImage: "url('/hero/img.svg')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            top: imgTopPosition,
            scale: imgScale,
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
