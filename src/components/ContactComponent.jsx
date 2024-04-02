import React, { useRef } from "react";
import "../App.css";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import UseLayout from "../hooks/UseLayout";
export default function ContactComponent() {
  const mode = UseLayout();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thank you for your message!"); // Display a success toast
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred while sending the message."); // Display an error toast
        }
      );
  };
  return (
    <>
      <h1
        className="text-xl font-bold mb-10"
        style={{
          color: mode.textColor,
        }}
      >
        {" "}
        Contact Me
      </h1>
      <div
        className=" bg-opacity-30 rounded-lg p-5"
        style={{ color: mode.color }}
      >
        <h1 className="mb-5">Let's contact to collaborate together!</h1>
        <div className="  flex justify-center items-center  bg-opacity-30 ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4 md:w-1/2 w-full"
          >
            <div>
              <label className="block text-sm font-medium ">Your Name</label>
              <input
                type="text"
                name="from_name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white bg-opacity-30 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium ">Your Email</label>
              <input
                type="email"
                name="from_email"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white bg-opacity-30 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium ">Message</label>
              <textarea
                name="message"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white bg-opacity-30 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                value="Send"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#3C3633] hover:text-[#3C3633] hover:bg-[#747264] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style={{
                  backgroundColor: mode.color,
                  color: mode.background,
                }}
              />
            </div>
          </form>
          <ToastContainer /> {/* Add the ToastContainer component */}
        </div>
      </div>
    </>
  );
}
