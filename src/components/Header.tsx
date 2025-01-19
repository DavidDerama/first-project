import React from "react";
import Content from "./Content";
import Balancer from "react-wrap-balancer";

export default function Header() {
  return (
    <header className="min-h-screen w-full">
      <Content className="flex justify-center">
        <div className="pt-56 max-w-[600px] flex flex-col gap-10 justify-center">
          <h1 className="text-7xl text-light_heading dark:text-dark_heading font-black leading-none -tracking-[0.4px] text-center">
            <Balancer>Sleep on Time and Get More Done Tomorrow</Balancer>
          </h1>
          <p className="text-xl font-light text-light_paragraph dark:text-dark_paragraph text-center">
            <Balancer>
              Tired of <span className="font-bold">staying up late</span>,{" "}
              <span className="font-bold">waking up in a rush</span>, or{" "}
              <span className="font-bold">not getting anything done</span> the
              next day? LateControl blocks distractions at bedtime, helps you
              finish your tasks, and ensures you wake up energized, knowing you
              had a productive day.
            </Balancer>
          </p>
          <button className="bg-accent_custom text-white self-start py-3 px-16 w-2/3 mx-auto text-xl rounded-full hover:opacity-80">
            Get LateControl
          </button>
        </div>
      </Content>
    </header>
  );
}
