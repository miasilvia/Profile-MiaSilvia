import React from "react";
import { Link } from "react-router-dom";
export default function HeaderComponent() {
  return (
    <>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Hello, I'm Front End Developer
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              "I'm Mia Silvia. I aim to switch my career to become a programmer,
              and I would like to be a part of your company so that I can
              contribute effectively."
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to="/portfolio"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Violin"
          src="https://aqi.co.id/wp-content/uploads/2020/11/5-Fakta-Menarik-tentang-Programmer.jpg"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </>
  );
}
