import React from "react";
import Content from "./Content";
import Balancer from "react-wrap-balancer";
import Image from "next/image";

export default function Header() {
  return (
    <header className="min-h-screen w-full">
      <Content className="flex xl:flex-row flex-col gap-8 lg:justify-between pt-48">
        <div className="max-w-[650px] flex flex-col justify-center mx-auto xl:m-0">
          <h1 className="text-6xl text-light_heading dark:text-dark_heading font-black leading-none -tracking-[0.4px] text-center xl:text-left mb-5">
            <Balancer>
              Sleep on Time and <br></br>{" "}
              <span className="text-accent_custom">Get More Done</span> Tomorrow
            </Balancer>
          </h1>
          <p className="text-xl font-light text-light_paragraph dark:text-dark_paragraph leading-relaxed xl:text-left text-center mb-10">
            <Balancer>
              Tired of <span className="font-bold">staying up late</span>,{" "}
              <span className="font-bold">waking up in a rush</span>, or{" "}
              <span className="font-bold">not getting anything done</span> the
              next day? LateControl blocks distractions at bedtime and ensures
              you wake up energized, knowing you had a productive day.
            </Balancer>
          </p>
          <button className="bg-accent_custom text-white self-start py-3 px-10 text-base lg:text-xl rounded-full hover:opacity-80 mx-auto xl:m-0">
            Get LateControl
          </button>
        </div>
        <div className="w-[450px] sm:w-[500px] rounded border-2 shadow-md border-dark_input_border overflow-hidden flex justify-center items-center mx-auto xl:m-0 mt-6">
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
