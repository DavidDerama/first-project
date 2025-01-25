import React from "react";
import Content from "./Content";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import { FaChrome } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full">
      <Content className="flex xl:flex-row flex-col gap-8 lg:justify-between pt-48 pb-12">
        <div className="max-w-[650px] flex flex-col justify-center mx-auto xl:m-0">
          <h1 className="text-6xl text-light_heading dark:text-dark_heading font-black leading-none -tracking-[0.4px] text-center xl:text-left mb-5">
            <Balancer>
              <span className="text-accent_custom">Get More Done</span> Tomorrow
              by Sleeping on Time<br></br>{" "}
            </Balancer>
          </h1>
          <p className="text-xl font-light text-light_paragraph dark:text-dark_paragraph leading-relaxed xl:text-left text-center mb-10">
            <Balancer>
              LateControl blocks distractions at bedtime and ensures you wake up
              energized, knowing you had a productive day.
            </Balancer>
          </p>
          <button className="bg-accent_custom text-white self-start py-3 px-10 text-base lg:text-xl rounded-full hover:opacity-80 mx-auto xl:m-0">
            Get LateControl
          </button>
          <div className="mt-6 flex gap-3 text-light_label items-center text-lg mx-auto xl:mx-0 bg-transparent">
            <p>Available on: </p>
            <div className="flex gap-3">
              <FaChrome />
            </div>
          </div>
        </div>
        <div className="max-w-[380px] lg:max-w-[600px] rounded border-2 shadow-md border-dark_input_border overflow-hidden flex justify-center items-center mx-auto xl:m-0 mt-6">
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
