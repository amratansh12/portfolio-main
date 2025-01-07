"use client";

import { about } from "@/data";
import DecryptedText from "./ui/decrypted-text";

export const About = () => {
  return (
    <div className="max-w-screen-lg mx-12 lg:mx-auto py-12">
      <h1 className="text-white text-3xl md:text-4xl font-bold">
        Want to know more about me?
      </h1>
      <div className="flex flex-col gap-y-6 mt-10">
        {about.map(({ question, answer, icon: Icon }, index) => (
          <div className="flex items-center gap-x-2 font-semibold">
            <Icon className="size-6 mr-1 text-white" />
            <span className="text-neutral-400 text-xl">{question}</span>
            <DecryptedText
              text={answer}
              className="text-[#4DA8DA] text-xl mt-4"
              speed={100}
              maxIterations={10}
              revealDirection="start"
              sequential={true}
              animateOn="view"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
