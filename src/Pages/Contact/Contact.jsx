import emailjs from "@emailjs/browser";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import toast from "react-hot-toast";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    emailjs.sendForm("service_kzsyybt", "template_vjw4j1q", formRef.current, {
      publicKey: "-i8XhDA_p705BsNiy",
    })
      .then(
        () => {
          setSending(false);
          toast.success("Email sent");
          formRef.current.reset();
        },
        (error) => {
          setSending(false);
          console.error("Email send error:", error);
          toast.error("Email not sent");
        }
      );
  };

  return (
    <section id="contact" className="pb-20 pt-6 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="text-left lg:text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            Contact <span className="text-accent">Me</span>
          </h2>
        </div>

        <div className="flex w-full md:flex-row-reverse md:justify-between items-center flex-col gap-10">
          {/* form card */}
          <div className="w-full md:w-1/2 bg-gradient-to-b from-transparent to-[#0b3b2a]/60 backdrop-blur-md border border-white/6 rounded-xl p-6">
            <h3 className="text-white font-medium mb-3 text-2xl">Send Message</h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <label className="block">
                <span className="sr-only">Full name</span>
                <input
                  className="w-full focus:outline-none border-b-[1px] border-accent text-white bg-transparent px-3 py-2 placeholder:text-slate-400"
                  type="text"
                  placeholder="Full Name"
                  name="from_name"
                  required
                />
              </label>

              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  className="w-full focus:outline-none border-b-[1px] border-accent bg-transparent px-3 py-2 placeholder:text-slate-400"
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </label>

              <label className="block">
                <span className="sr-only">Message</span>
                <textarea
                  className="w-full focus:outline-none border-b-[1px] border-accent text-white bg-transparent px-3 py-2 placeholder:text-slate-400 resize-y min-h-[120px]"
                  placeholder="Type your message..."
                  name="message"
                  required
                />
              </label>
              <div>
                <button
                  type="submit"
                  disabled={sending}
                  className="relative px-8 py-2.5 rounded-lg overflow-hiddentext-white font-medium transition-all duration-300 border border-accent/40 bg-accent/10 hover:bg-accent/20 disabled:bg-accent/5 disabled:cursor-not-allowed backdrop-blur-md shadow-[0_0_10px_rgba(255,255,255,0.20)] hover:shadow-[0_0_18px_rgba(255,255,255,0.35)]">
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
          {/* contact info card */}
          <div className="md:w-1/2 w-full flex flex-col justify-between gap-6">
            <div className="flex gap-3 items-start bg-white/4 backdrop-blur-sm border border-white/6 rounded-xl p-4">
              <div className="bg-accent/10 p-2 rounded-md">
                <FiMapPin className="text-2xl text-accent" />
              </div>
              <div>
                <h4 className="text-accent text-lg font-medium">Address</h4>
                <p className="text-white">Bohaddarhat, Chattogram, Bangladesh</p>
              </div>
            </div>

            <div className="flex gap-3 items-start bg-white/4 backdrop-blur-sm border border-white/6 rounded-xl p-4">
              <div className="bg-accent/10 p-2 rounded-md">
                <FiPhone className="text-2xl text-accent" />
              </div>
              <div>
                <h4 className="text-accent text-lg font-medium">Phone</h4>
                <p className="text-white">+8801322988707</p>
              </div>
            </div>

            <div className="flex gap-3 items-start bg-white/4 backdrop-blur-sm border border-white/6 rounded-xl p-4">
              <div className="bg-accent/10 p-2 rounded-md">
                <FiMail className="text-2xl text-accent" />
              </div>
              <div>
                <h4 className="text-accent text-lg font-medium">Email</h4>
                <p className="text-white">shahrukkabir01@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
