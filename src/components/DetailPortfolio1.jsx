import React from "react";
import imgHome from "../images/home.png";
import imgProduct from "../images/product.png";
import imgOrder from "../images/order.png";
import { Link } from "react-router-dom";
export default function DetailPortfolio1() {
  return (
    <>
      <div className="container mx-auto max-w-7xl mt-8 ">
        <div className="flex flex-wrap justify-center">
          {/* Card 1 */}
          <div className="max-w-sm mx-4 mb-8 ">
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full h-64" src={imgHome} alt="Card 1" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-sm mx-4 mb-8">
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full h-64" src={imgProduct} alt="Card 2" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-sm mx-4 mb-8">
            <div className="rounded overflow-hidden shadow-lg">
              <img className="w-full  h-64" src={imgOrder} alt="Card 2" />
            </div>
          </div>
        </div>
      </div>
      {/* Text Section */}
      <div className="mt-8 text-center  mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold mb-4">Skin E-Commerce Website</h1>
        <h3 className="text-gray-700">
          <strong>Description</strong>
        </h3>
        <p>
          This project involves the development of an e-commerce website with
          the goal of simplifying the shopping experience for users,
          particularly men, in their search for skincare products. The website
          provides a wide range of high-quality skincare products at competitive
          prices. Users can explore personalized product recommendations based
          on their skin type, browse the product catalog, add items to their
          shopping cart, and seamlessly complete their purchases online.
        </p>
        <h3 className="text-gray-700">
          <strong>Peran</strong>
        </h3>
        <p>
          As one of the developers in this project, my responsibilities include
          designing and implementing both the front-end and back-end of the
          website. I am also involved in client-server integration using Axios
          and implementing responsive design to ensure a seamless user
          experience across various devices, from desktop to mobile.
        </p>
        <h3 className="text-gray-700">
          <strong>Technology</strong>
        </h3>
        <p>
          Front-end: Utilizing ReactJS with React Router for effective
          navigation management.
        </p>
        <p>Back-end: Employing Node.js with the Express framework.</p>
        <p>
          Database: Utilizing PostgreSQL to store product and transaction
          information.
        </p>
        <p>
          Styling: Implementing Tailwind CSS for creating a responsive and
          modern design.
        </p>
        <h3 className="text-gray-700">
          <strong>Link Demo</strong>
        </h3>
        The demo of the e-commerce website can be accessed{" "}
        <Link to="https://skincommerce.netlify.app/" target="_blank">
          <p className="text-blue-800 inline">here.</p>
        </Link>
      </div>
    </>
  );
}
