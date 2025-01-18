"use client";

import greetingTime from "greeting-time";
import React from "react";
import ShinyText from "@/components/ui/shiny-text";
import Squares from "@/components/ui/squares";
import { Button } from "./ui/button";
import { BookTextIcon, PhoneCallIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const greeting = `${greetingTime(new Date())}!`;
  const router = useRouter();

  const handleResumeClick = () => {
    router.push(
      "https://drive.google.com/file/d/1ShEZFjk-7HeNRdNhZMpTpHDupCMRbOgc/view?usp=drive_link"
    );
  };

  const handleContactClick = () => {
    router.push("/#contact", {
      scroll: true,
    });
  };

  return (
    <div className="relative">
      <div className="absolute left-0 top-0 w-full h-full -z-10">
        <Squares
          speed={0.2}
          squareSize={60}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      <div className="py-32 lg:py-56 lg:px-12 flex flex-col gap-y-2 items-center justify-center bg-black/85">
        <ShinyText
          text={greeting}
          className="text-3xl md:text-4xl font-bold text-[#4DA8DA]/80"
        />
        <ShinyText
          text="I am Amratansh, passionate developer"
          className="text-4xl md:text-5xl font-semibold text-white/60 text-center w-2/3 tracking-wide"
        />
        <ShinyText
          text={`"Forging digital realms one line of code at a time"`}
          className="text-lg md:text-2xl mt-4 italic"
        />

        <div className="mt-6 flex items-center justify-center gap-x-10">
          <Button
            text="View Resume"
            icon={BookTextIcon}
            onClick={handleResumeClick}
          />
          <Button
            text="Contact Me"
            icon={PhoneCallIcon}
            onClick={handleContactClick}
          />
        </div>
      </div>
    </div>
  );
};
