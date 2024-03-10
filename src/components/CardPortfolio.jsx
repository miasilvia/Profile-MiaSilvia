import React from "react";
import { Link } from "react-router-dom";
import UseLayout from "../hooks/UseLayout";
export default function CardPortfolio() {
  const mode = UseLayout();
  return (
    <>
      <article
        style={{
          color: mode.textColor,
        }}
        className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 max-w-5xl mx-auto mt-20 bg-opacity-30"
      >
        <div className="flex items-start sm:gap-8">
          <div
            className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-gray-800"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1">
              <img
                src="https://skincommerce.netlify.app/static/media/everglo-logo.9e6e822832fa20c0d7e3.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <strong className="rounded border border-indigo-500 bg-gray-800 px-3 py-1.5 text-[10px] font-medium text-white">
              01
            </strong>

            <h3 className="mt-4 text-lg font-medium sm:text-xl">
              <p href="" className="hover:underline">
                {" "}
                Skin E-Commerce Website{" "}
              </p>
            </h3>

            <p className="mt-1 text-sm ">
              EverGlow, an e-commerce project specializing in the sale of men's
              skincare products, offers a unique shopping experience for men who
              care about the health and appearance of their skin.
            </p>

            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
              <span className="hidden sm:block" aria-hidden="true"></span>

              <p className="mt-2 text-xs font-medium sm:mt-0">
                <Link to="/detail-1" className="underline hover:text-gray-700">
                  Click Detail
                </Link>
              </p>
              <p className="mt-2 text-xs font-medium  sm:mt-0">
                <Link
                  to="https://skincommerce.netlify.app/"
                  target="_blank"
                  className="underline hover:text-gray-700"
                >
                  Click Link Website
                </Link>
              </p>
              <p className="mt-2 text-xs font-medium  sm:mt-0">
                <Link
                  to="https://github.com/miasilvia/Profile-MiaSilvia.git"
                  target="_blank"
                  className="underline hover:text-gray-700"
                >
                  GitHub
                </Link>
              </p>
            </div>
          </div>
        </div>
      </article>
      <article
        style={{
          color: mode.textColor,
        }}
        className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 max-w-5xl mx-auto mt-20 bg-opacity-30"
      >
        <div className="flex items-start sm:gap-8">
          <div
            className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-gray-800"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1">
              <img src="" alt="" />
            </div>
          </div>
          <div>
            <strong className="rounded border border-indigo-500 bg-gray-800 px-3 py-1.5 text-[10px] font-medium text-white">
              02
            </strong>

            <h3 className="mt-4 text-lg font-medium sm:text-xl">
              <p href="" className="hover:underline">
                {" "}
                Food Calories{" "}
              </p>
            </h3>

            <p className="mt-1 text-sm ">
              “Food Calories” is a meticulously designed website that aids you
              in uncovering the caloric content of the foods you ingest.
              Boasting a user-friendly and intuitive interface, it allows you to
              explore a wide array of food items and promptly provides you with
              their respective calorie counts.
            </p>

            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
              <span className="hidden sm:block" aria-hidden="true"></span>

              <p className="mt-2 text-xs font-medium  sm:mt-0">
                <Link
                  to="https://miasilvia.github.io/api-foodEdamam/"
                  target="_blank"
                  className="underline hover:text-gray-700"
                >
                  Click Link Website
                </Link>
              </p>
              <p className="mt-2 text-xs font-medium  sm:mt-0">
                <Link
                  to="https://github.com/miasilvia/api-foodEdamam.git"
                  target="_blank"
                  className="underline hover:text-gray-700"
                >
                  GitHub
                </Link>
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
