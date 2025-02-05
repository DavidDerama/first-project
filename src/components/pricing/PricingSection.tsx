import React from "react";
import Content from "../Content";
import Balancer from "react-wrap-balancer";
import Plans from "./Plans";

export default function PricingSection() {
  return (
    <Content className="w-full">
      <div className="max-w-[900px] mx-auto pt-24" id="pricing">
        <h2 className="text-center text-5xl font-bold">
          <Balancer>Break the cycle before it's too late.</Balancer>
        </h2>
        <Plans />
      </div>
    </Content>
  );
}
