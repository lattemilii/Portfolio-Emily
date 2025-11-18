import { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <section id="contact" className="relative flex flex-col items-center justify-center min-h-screen px-6  md:px-0">
        <img src="/img/diamond/diamond.png" alt="diamond" className="absolute md:top-1 md:left-1  top-10 -left-10 w-50 h-50 md:w-80 md:h-80"/>
        <img src="/img/diamond/diamond.png" alt="diamond" className="absolute md:bottom-1 md:right-1  bottom-3 -right-10 w-50 h-50 md:w-80 md:h-80"/>
      <h1 className="text-4xl font-bold mb-4 text-primary text-center md:mt-12 mt-26 z-10">
        Contact Me!
      </h1>
      <p className="text-secondary text-center mb-10 z-10">Let's get in touch</p>
      <div className="flex flex-col md:flex-row gap-10 md:gap-18 items-center z-10">
        <div className="flex flex-col gap-4 w-full max-w-sm text-sm">
          <div className="flex items-center gap-3">
            <img src="/img/wa.svg" alt="Phone" className="w-7" />
            <a href="https://wa.me/6287887152688" target="_blank" className="text-secondary font-medium hover:text-primary transition">
              +62 878-8715-2688
            </a>
          </div>

          <div className="flex items-center gap-3">
            <img src="/img/gmail.png" alt="Email" className="w-7" />
            <a href="mailto:emilygouw4@gmail.com" target="_blank" className="text-secondary font-medium hover:text-primary transition break-all">
              emilygouw4@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <img src="/img/linkedin.png" alt="LinkedIn" className="w-7" />
            <a href="https://www.linkedin.com/in/emilyfgouw" target="_blank" className="text-secondary font-medium hover:text-primary transition break-all">
              linkedin.com/in/emilyfgouw
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-accent shadow-xl rounded-2xl p-6 md:p-8 w-full max-w-md flex flex-col gap-4">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full  border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:outline-none" required/>
          <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:outline-none" required/>
          <textarea placeholder="Your Message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)}className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-primary focus:outline-none" required/>
          <button type="submit" className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary/80 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
