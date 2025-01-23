import React from "react";
import Content from "../Content";
import Balancer from "react-wrap-balancer";

export default function FounderSection() {
  return (
    <div className="bg-black mt-6">
      <Content className="w-full py-28">
        <div className="max-w-[650px]">
          <h2 className="text-lg text-dark_heading font-bold">
            Founder of LateControl, David
          </h2>
          <p className="pt-6  text-dark_paragraph">
            <Balancer>
              I spent years stuck in a cycle of late nights, rushed mornings,
              and unproductive weekends. <br /> <br />
              I thought it was normal since on weekdays I stayed up late to
              study better, and on weekends, I did the same because I had
              nothing to do the next day and could just play with friends.
              <br />
              <br />
              But eventually, I hit a breaking point and realized this lifestyle
              was taking a serious toll on my health. I decided to take control
              and change my habits with a strategy. After a year or so, I
              completely transformed my life, and was inspired to create this
              tool, LateControl, to share that strategy.
              <br />
              <br />I wish I had this tool years ago and hope it helps you too.
            </Balancer>
          </p>
        </div>
      </Content>
    </div>
  );
}
