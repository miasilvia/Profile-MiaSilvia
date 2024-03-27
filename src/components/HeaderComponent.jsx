import { React } from "react";
import { Link } from "react-router-dom";
import UseLayout from "../hooks/UseLayout";
export default function HeaderComponent() {
  const mode = UseLayout();
  return (
    <>
      <section
        style={{
          backgroundColor: mode.backgroundHeader,
          color: mode.textColor,
        }}
        className="overflow-hidden bg-[#C7C8CC] sm:grid sm:grid-cols-2 sm:items-center"
      >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold  md:text-3xl">
              Hello, I'm Web Developer
            </h2>

            <p className="hidden  md:mt-4 md:block">
              "I'm Mia Silvia. I aim to switch my career to become a programmer,
              and I would like to be a part of your company so that I can
              contribute effectively."
            </p>

            <div className="mt-4 md:mt-8">
              <Link
                to="/portfolio"
                style={{ border: `2px solid ${mode.color}` }}
                className="inline-block rounded bg-[#3C3633] px-12 py-3 text-sm font-medium text-white transition hover:text-[#3C3633] hover:bg-[#747264]  focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Violin"
          src="https://th.bing.com/th/id/OIP.qnIvHuIm-LhKV5ZgRo0RxQHaEK?rs=1&pid=ImgDetMain"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </>
  );
}
