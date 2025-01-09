import React from "react";
import Content from "./Content";

export default function Header() {
  return (
    <header className="min-h-screen w-full">
      <Content>
        <div className="pt-56 w-[500px] flex flex-col gap-8">
          <h1 className="text-6xl font-bold text-light_heading">
            This is the headline of the project
          </h1>
          <p className="text-lg font-light text-light_paragraph">
            This is the description of the website. This is where you show off
            your features and services.
          </p>
          <button className="bg-black text-white self-start py-3 px-16 rounded-md ">
            Get the Product
          </button>
        </div>
      </Content>
    </header>
  );
}
