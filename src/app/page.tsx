"use client";

import { About } from "@/components/about";
import { Companies } from "@/components/companies";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
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
      <Contact />
      <Footer />
    </>
  );
};

export default Page;
