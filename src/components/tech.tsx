"use client";

import Image from "next/image";
import GridMotion from "./ui/grid-motion/grid-motion";

export const Tech = () => {
  function shuffle(array: Array<React.JSX.Element | string>) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  const items = [
    <div key="javascript">
      <Image src="/javascript.png" alt="Javascript" width={100} height={100} />
    </div>,
    <div key="typescript">
      <Image src="/typescript.png" alt="TypeScript" width={100} height={100} />
    </div>,
    <div key="mongodb">
      <Image src="/mongodb.png" alt="MongoDB" width={100} height={100} />
    </div>,
    <div key="postgres">
      <Image src="/postgres.png" alt="Postgres" width={100} height={100} />
    </div>,
    <div key="nextjs">
      <Image src="/nextjs.png" alt="NextJS" width={100} height={100} />
    </div>,
    <div key="reactjs">
      <Image src="/reactjs.png" alt="ReactJS" width={100} height={100} />
    </div>,
    <div key="restapi">
      <Image src="/restapi.png" alt="RESTApi" width={100} height={100} />
    </div>,
    <div key="git">
      <Image src="/git.png" alt="Git" width={100} height={100} />
    </div>,
    <div key="nodejs">
      <Image src="/nodejs.png" alt="NodeJS" width={100} height={100} />
    </div>,

    "JavaScript",
    "TypeScript",
    "MongoDB",
    "Postgres",
    "NextJS",
    "ReactJS",
    "REST APIs",
    "Git",
    "NodeJS",

    <div key="javascript">
      <Image src="/javascript.png" alt="Javascript" width={100} height={100} />
    </div>,
    <div key="typescript">
      <Image src="/typescript.png" alt="TypeScript" width={100} height={100} />
    </div>,
    <div key="mongodb">
      <Image src="/mongodb.png" alt="MongoDB" width={100} height={100} />
    </div>,
    <div key="postgres">
      <Image src="/postgres.png" alt="Postgres" width={100} height={100} />
    </div>,
    <div key="nextjs">
      <Image src="/nextjs.png" alt="NextJS" width={100} height={100} />
    </div>,
    <div key="reactjs">
      <Image src="/reactjs.png" alt="ReactJS" width={100} height={100} />
    </div>,
    <div key="restapi">
      <Image src="/restapi.png" alt="RESTApi" width={100} height={100} />
    </div>,
    <div key="git">
      <Image src="/git.png" alt="Git" width={100} height={100} />
    </div>,
    <div key="nodejs">
      <Image src="/nodejs.png" alt="NodeJS" width={100} height={100} />
    </div>,

    "Websockets",
    "Webhooks",
    "WebRTC",
    "Kafka",
    "Docker",
    "Microservices",
    "Zustand",
    "TailwindCSS",
    "Github",
  ];

  // shuffle(items);

  return (
    <div className="max-w-screen-lg mx-12 lg:mx-auto py-20">
      <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
        Tech I know...
      </h1>
      <div>
        <GridMotion items={items} />
      </div>
    </div>
  );
};
