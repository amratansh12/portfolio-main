import GradientText from "./ui/gradient-text";
import Magnet from "./ui/magnet";

export const Contact = () => {
  const colors = ["#4DA8DA", "#FFFFFF", "#6CCFF6", "#AAB3BB"];

  return (
    <div className="py-20 max-w-screen-lg mx-12 lg:mx-auto flex items-center justify-center">
      <Magnet innerClassName="p-20">
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 border-gray-900 text-white py-6 px-8 rounded-[20px] flex flex-col gap-y-2 items-center justify-center">
          <GradientText colors={colors}>
            <h1 className="text-3xl font-bold">Want to get in touch?</h1>
          </GradientText>
          <p className="text-neutral-200 text-sm italic">
            {"("}A compliment or a question? I'm all ears!
            {")"}
          </p>
        </div>
      </Magnet>
    </div>
  );
};
