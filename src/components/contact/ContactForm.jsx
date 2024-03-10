import { useRef } from "react";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!!"))
      .catch((error) => alert(error));
  }

  return (
    <article>
      <section>
        <form
          data-netlify="true"
          name="contact"
          onSubmit={handleSubmit}
          className="w-96 max-w-lg"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                htmlFor="name"
                className="block uppercase tracking-wide text-gray-700 text-xs mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                htmlFor="email"
                className="block uppercase tracking-wide text-gray-700 text-xs mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                htmlFor="message"
                className="block uppercase tracking-wide text-gray-700 text-xs  mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <button
              type="submit"
              className="shadow bg-blue-600 hover:bg-blue-400 smooth-transition focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </form>
      </section>
    </article>
  );
};

export default ContactForm;
