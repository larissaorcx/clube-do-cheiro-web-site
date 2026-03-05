import { useEffect, useState } from "react";

export default function Banner() {
  const [width, setWidth] = useState(90);

  useEffect(() => {
    let animationFrame: number | null = null;

    const handleScroll = () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll = 600;
        const progress = Math.min(scrollY / maxScroll, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const newWidth = 88 + ease * 10;
        setWidth(newWidth);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className="bg-pink-500 h-[500px] flex items-center justify-center rounded-4xl transition-[width] duration-500 ease-out"
      style={{ width: `${width}vw` }}
    ></div>
  );
}
