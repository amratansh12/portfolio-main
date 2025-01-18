import { footerContacts } from "@/data";
import Waves from "./ui/waves";
import Quote from "inspirational-quotes";
import ShinyText from "./ui/shiny-text";

export const Footer = () => {
  const quote = `"${Quote.getQuote().text}" ~ ${Quote.getQuote().author}`;

  return (
    <div className="relative overflow-hidden mt-20">
      <div className="absolute inset-0 -z-10">
        <Waves
          lineColor="#4DA8DA"
          backgroundColor="#000000"
          waveSpeedX={0.05}
          waveSpeedY={0.04}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      <div className="w-full bg-black/70 py-20 z-10">
        <div className="w-1/2 mx-auto">
          <div className="w-1/3 mx-auto flex items-center justify-center gap-x-4">
            {footerContacts.map(({ link, icon: Icon }, index) => (
              <button
                key={index}
                className="text-white bg-gradient-to-r from-[#4DA8DA] to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-semibold text-sm p-2.5 aspect-square text-center rounded-full flex items-center drop-shadow-sm"
                onClick={() => window.open(link, "_blank")}
              >
                <Icon size={20} />
              </button>
            ))}
          </div>

          <div className="w-full md:w-1/2 mx-auto mt-10 text-center text-white">
            <p>{quote}</p>
          </div>

          <ShinyText
            text="Made with ❤️ by Amratansh. Copyrights © 2024"
            className="text-center text-lg w-full mt-20"
            speed={3}
          />
        </div>
      </div>
    </div>
  );
};
