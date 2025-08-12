import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import photo1 from "/photo1.jpg";
import photo3 from "/photo2.jpg";
import photo2 from "/photo3.jpg";
import photo4 from "/photo4.jpg";
import photo5 from "/photo5.jpg";

const Galleryhome = () => {
  const { isDarkMode } = useTheme();

  const images = [
    { src: photo1, alt: "Image 1", size: "large" },
    { src: photo3, alt: "Image 2", size: "small" },
    { src: photo2, alt: "Image 3", size: "small" },
    { src: photo4, alt: "Image 4", size: "small" },
    { src: photo5, alt: "Image 5", size: "small" },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  // const openLightbox = (item) => {
  //   setActive(item);
  //   setOpen(true);
  //   document.body.style.overflow = "hidden";
  // };
  // const closeLightbox = () => {
  //   setOpen(false);
  //   setActive(null);
  //   document.body.style.overflow = "";
  // };

  return (
    <div
      className={`w-full p-10 transition-colors duration-300 ${isDarkMode ? "bg-[#111] text-white" : "bg-white text-black"
        }`}
    >
      {/* Title */}
      <motion.h3

        className="text-4xl font-braven text-[#D59940] font-whisper font-bold mb-6 text-center"

        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Photo Gallery
      </motion.h3>

      {/* Grid */}
      <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[12rem] md:auto-rows-[16rem] lg:auto-rows-[20rem] grid-flow-dense">

        {images.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            style={{
              gridColumn: item.size === "large" ? "span 2" : "span 1",
              gridRow: item.size === "large" ? "span 2" : "span 1",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          // onClick={() => openLightbox(item)}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover block"
              draggable={false}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {open && active && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          // onClick={closeLightbox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div
            className={`absolute inset-0 ${isDarkMode ? "bg-black/80" : "bg-gray-200/80"
              }`}
          />
          <motion.div
            className={`relative max-w-[90vw] max-h-[90vh] rounded-xl overflow-hidden shadow-2xl ${isDarkMode ? "bg-black" : "bg-white"
              }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={active.src}
              alt={active.alt}
              className="w-full h-full object-contain max-h-[90vh] block"
            />
            <button
              // onClick={closeLightbox}
              className={`absolute top-3 right-3 rounded-full p-2 shadow ${isDarkMode ? "bg-white text-black" : "bg-black text-white"
                }`}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Galleryhome;
