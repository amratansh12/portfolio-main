import ShinyText from "./ui/shiny-text";
import StarBorder from "./ui/star-border";
import { companies } from "@/data";

export const Companies = () => {
  return (
    <div className="py-20 max-w-screen-lg mx-12 lg:mx-auto">
      <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
        And ofcourse, I am blessed to have worked with some amazing companies...
      </h1>

      <div className="flex flex-col gap-y-10 py-10">
        {companies.map(({ company, description }, index) => (
          <StarBorder color="#4DA8DA" speed="3s" key={index}>
            <div className="flex flex-col gap-y-6 ">
              <ShinyText
                className="text-2xl font-semibold text-start"
                text={company}
              />
              <p
                className="text-neutral-400 text-start"
                style={{ lineHeight: "30px" }}
              >
                {description}
              </p>
            </div>
          </StarBorder>
        ))}
      </div>
    </div>
  );
};
