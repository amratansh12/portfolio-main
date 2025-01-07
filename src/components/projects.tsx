"use client";

import { projects } from "@/data";
import SpotlightCard from "./ui/spotlight-card";
import ShinyText from "./ui/shiny-text";
import { Link } from "lucide-react";

export const Projects = () => {
  return (
    <div className="max-w-screen-lg mx-12 lg:mx-auto">
      <h1 className="text-white text-3xl md:text-4xl font-bold">
        Want to know more about what I built?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        {projects.map((project, index) => (
          <SpotlightCard spotlightColor="#4DA8DA60" key={index}>
            <div className="flex flex-col space-y-4">
              <ShinyText
                text={project.title}
                className="text-white/70 text-2xl font-bold"
                speed={2}
              />
              <p className="text-neutral-400 font-medium">
                {project.description}
              </p>
              <div className="flex flex-col space-y-4">
                {project.links.map((tag) => (
                  <span
                    className="text-neutral-400 bg-neutral-800 px-2 py-1 rounded-lg w-full text-sm flex items-center truncate text-ellipsis cursor-pointer"
                    onClick={() => window.open(tag, "_blank")}
                  >
                    <Link className="size-3 mr-2" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};
