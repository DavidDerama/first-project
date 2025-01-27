import React from "react";
import Content from "../Content";

export default function FounderSection() {
  return (
    <div className="bg-black mt-6">
      <Content className="w-full py-28">
        <div className="max-w-[550px] text-lg mx-auto">
          <h2 className="text-dark_heading font-bold">
            Founder of LateControl, David
          </h2>
          <p className="pt-6  text-dark_paragraph leading-relaxed">
            I spent years stuck in a cycle of late nights, rushed mornings, and
            unproductive weekends. <br /> <br />
            I thought it was normal since on weekdays I would stay up late on my
            computer to be more focused while studying, and on weekends, I would
            do the same because I had nothing to do the next day and could just
            play with friends.
            <br />
            <br />
            After a couple years of learning and making mistakes, I finally
            transformed my life and created LateControl to share the strategy
            that worked for me.
            <br />
            <br />
            Along the way, I tried so many apps, but none of them worked for me
            since they were either <span>too complicated</span>,{" "}
            <span>too expensive</span> or required me having{" "}
            <span>multiple apps</span> just to achieve my goals. In the end, I
            found myself spending more time on my computer at night than my
            phone, making the apps basically useless.
            <br />
            <br />I wish I had this tool back then to do everything I needed,
            and I truly hope it helps you too.
          </p>
        </div>
      </Content>
    </div>
  );
}
