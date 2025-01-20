import React from "react";

const subscription = {
  title: "Subscription",
  description:
    "The perfect plan if you're just getting started with our product.",
  benefits: ["Everything in Lifetime Access plus:", "Unlimited AI usage"],
  amount: 5,
  priceId: "price_1Q",
};

const lifetime = {
  title: "Lifetime Access",
  description: "Pay Once. Benefit Forever.",
  benefits: [
    "Blocks websites during bedtime",
    "Daily tasks tracker",
    "Access to our discord community",
    "Limited AI usage per month",
  ],
  amount: 25,
  priceId: "price_1Q",
};

export default function Plans() {
  return (
    <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
      <div className="rounded-3xl rounded-t-3xl bg-white/90 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-bl-3xl lg:rounded-tr-none">
        <h3 className="text-base/7 font-semibold text-dark">
          {subscription.title}
        </h3>
        <p className="mt-4 flex items-baseline gap-x-2">
          <span className="text-5xl font-semibold tracking-tight text-gray-900">
            €{subscription.amount}
          </span>
          <span className="text-base text-gray-500">/month</span>
        </p>
        <p className="mt-6 text-base/7 text-gray-600">
          {subscription.description}
        </p>
        <ul
          role="list"
          className="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10"
        >
          {subscription.benefits.map((item, index) => {
            return (
              <li className="flex gap-x-3" key={index}>
                <svg
                  className="h-6 w-5 flex-none text-accent_custom"
                  viewBox="0 0 20 20"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  />
                </svg>
                {item}
              </li>
            );
          })}
        </ul>
        <button className="w-full mt-8 block rounded-lg px-3.5 py-2.5 text-center font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10 bg-black text-light hover:opacity-80">
          Get started today
        </button>
      </div>
      <div className="relative rounded-3xl bg-white/95 border-2 border-accent_custom p-8 shadow-2xl  sm:p-10">
        <span className="absolute text-white -top-4 left-1/2 -translate-x-1/2 bg-accent_custom py-1 px-4 rounded-full text-sm flex items-center justify-center">
          Most Popular
        </span>
        <h3 className="text-base/7 font-semibold text-dark">
          {lifetime.title}
        </h3>
        <p className="mt-4 flex items-baseline gap-x-2">
          <span className="text-5xl font-semibold tracking-tight text-dark">
            €{lifetime.amount}
          </span>
        </p>
        <p className="mt-6 text-base/7 text-light_paragraph">
          {lifetime.description}
        </p>
        <ul
          role="list"
          className="mt-8 space-y-3 text-sm/6 text-dark  sm:mt-10"
        >
          {lifetime.benefits.map((item, index) => {
            return (
              <li className="flex gap-x-3" key={index}>
                <svg
                  className="h-6 w-5 flex-none text-indigo-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                >
                  <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" />
                </svg>
                {item}
              </li>
            );
          })}
        </ul>
        <button className="hover:opacity-80 mt-8 block rounded-lg bg-accent_custom px-3.5 py-2.5 text-center  font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full sm:mt-10">
          Get started today
        </button>
      </div>
    </div>
  );
}
