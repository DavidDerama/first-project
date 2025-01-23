import React from "react";
import Content from "../Content";
import { AccordionFaq } from "./AccordionFaq";

export default function FaqSection() {
  return (
    <Content className="w-full min-h-screen flex  gap-6 lg:flex-row flex-col lg:justify-between pt-72">
      <div
        className="lg:max-w-[500px] w-full lg:text-left text-center"
        id="faq"
      >
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="pt-6 text-light_paragraph dark:text-dark_paragraph text-lg">
          Have another question? Contact us via email (codemethat@gmail.com).
        </p>
      </div>
      <div className="lg:w-1/2 w-full border-t border-[#E4E4E7] dark:border-[#27272A]">
        <AccordionFaq />
      </div>
    </Content>
  );
}
