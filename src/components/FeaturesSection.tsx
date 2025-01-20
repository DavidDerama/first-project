import React from "react";
import Content from "./Content";
import Balancer from "react-wrap-balancer";
import Features from "./Features";

export default function FeaturesSection() {
  return (
    <Content className="w-full min-h-screen">
      <div className="text-center max-w-[900px] mx-auto pt-28" id="features">
        <h2 className="text-5xl">
          <Balancer>
            Tired of <span>staying up late</span>,{" "}
            <span className="font-bold text-[#DC2626]">
              waking up in a rush
            </span>
            , or{" "}
            <span className="font-bold text-[#DC2626]">
              not getting anything done
            </span>{" "}
            the next day?
          </Balancer>
        </h2>
        <p className="pt-6 pb-8 text-light_paragraph dark:text-dark_paragraph text-xl">
          <Balancer>
            LateControl gives users a sense of achievement by making sure they
            wake up knowing they accomplished something the day before.
          </Balancer>
        </p>
      </div>
      <Features />
    </Content>
  );
}
