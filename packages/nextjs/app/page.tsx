"use client";

import Image from "next/image";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-7xl font-bold">Oly</span>
          </h1>
        </div>

        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <p>
            <Image alt="logo" width="5000" height="5000" src="/home.png" />
          </p>
          <span className="text-xs">Construindo o Futuro de Atletas Olimpicos com a comunidade de Fans</span>
        </div>
      </div>
    </>
  );
};

export default Home;
