import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactMe() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_kew53xs", "template_s7w981f", form.current, {
        publicKey: "1x1CBS1LG-6Qr53Yt",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Contact Me
      </h2>
      <div className="flex w-10/12 mx-auto gap-5">
        <div className="w-1/2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Email
              </button>
            </div>
          </form>
        </div>
      

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/2">
        <div className="flex items-center gap-4">
        <FaLocationDot></FaLocationDot>
        <p>Dhaka, Bangladesh</p>
        </div>
        <div className="flex items-center gap-4">
        <MdEmail></MdEmail>
        <p>harunbappi1234@gmail.com</p>
        </div>
        <div className="flex items-center gap-4">
        <FaPhoneAlt></FaPhoneAlt>
        <p>01945138368</p>
        </div>
        <div className="flex items-center gap-4">
        <FaWhatsapp></FaWhatsapp>
        <p>01945138368</p>
        </div>
      </div>
      </div>
    </section>
  );
}
