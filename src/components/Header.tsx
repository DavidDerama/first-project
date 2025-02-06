import React from "react";
import Content from "./Content";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { FaChrome } from "react-icons/fa";

import HeaderText from "./HeaderText";

export default function Header() {
  return (
    <header className="w-full">
      <Content className="flex flex-col gap-8 pt-40 pb-12 ">
        <div className="max-w-[850px] flex flex-col justify-center mx-auto">
          <h1 className="lg:text-7xl text-6xl text-light_heading dark:text-dark_heading font-black leading-none -tracking-[0.4px] text-center w-full mb-5">
            <Balancer>
              <HeaderText />
              <p className="sr-only">
                Get More Done Tomorrow and Turn late night ideas into reality
              </p>
              <br />
              by Sleeping on Time<br></br>{" "}
            </Balancer>
          </h1>
          <p className="text-2xl font-light text-light_paragraph dark:text-dark_paragraph leading-relaxed text-center mb-10">
            LateControl blocks distractions at bedtime and ensures you wake up
            energized, knowing you had a productive day.
          </p>
          <button className="bg-accent_custom text-white self-start py-4 px-12 text-lg lg:text-xl rounded-full hover:opacity-80 mx-auto">
            Get LateControl
          </button>
          <div className="mt-6 flex gap-3 text-light_label items-center text-lg mx-auto bg-transparent">
            <p>Available on: </p>
            <div className="flex gap-3">
              <FaChrome />
            </div>
          </div>
        </div>
        <div className="max-w-[380px] lg:max-w-[600px] rounded border-2 shadow-md border-dark_input_border overflow-hidden flex justify-center items-center mx-auto mt-6">
          <Image
            width={500}
            height={400}
            src="/example.png"
            alt="demo"
            className="object-cover w-full h-full"
          />
        </div>
      </Content>
    </header>
  );
}
