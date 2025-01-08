import { About } from "@/components/about";
import { Companies } from "@/components/companies";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Tech } from "@/components/tech";

const Page = () => {
  return (
    <>
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Companies />
    </>
  );
};

export default Page;
