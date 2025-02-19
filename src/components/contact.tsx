import { MailIcon } from "lucide-react";
import GradientText from "./ui/gradient-text";
import Magnet from "./ui/magnet";
import ShinyText from "./ui/shiny-text";

export const Contact = () => {
  const colors = ["#4DA8DA", "#FFFFFF", "#6CCFF6", "#AAB3BB"];

  const onClick = () => {
    window.open("mailto:ashri1205@gmail.com");
  };

  return (
    <div
      className="py-20 max-w-screen-lg mx-12 lg:mx-auto flex items-center justify-center"
      id="contact"
    >
      <Magnet innerClassName="p-8 md:p-20">
        <div
          className="bg-gradient-to-b from-gray-900 to-gray-800 border-gray-900 text-white py-8 px-12 rounded-[20px] flex flex-col gap-y-2 items-center justify-center"
          onClick={onClick}
        >
          <GradientText colors={colors}>
            <h1 className="text-2xl md:text-3xl font-bold p-1 text-center">
              Want to get in touch?
            </h1>
          </GradientText>
          <p className="text-neutral-200 italic text-sm md:text-base text-center">
            {"("}Click anywhere on this card
            {")"}
          </p>

          <div className="py-16 px-8">
            <div className="py-1 px-4 rounded-md">
              <h1 className="text-lg text-white flex items-center justify-center">
                <MailIcon className="size-6 mr-2 text-[#4DA8DA]" />
                <ShinyText
                  text="ashri1205@gmail.com"
                  speed={2}
                  className="text-[#4DA8DA]"
                />
              </h1>
            </div>
          </div>
        </div>
      </Magnet>
    </div>
  );
};
