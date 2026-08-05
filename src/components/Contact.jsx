import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export const Contact = ({ data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook up EmailJS or your own API endpoint here.
    alert("Message sent! (wire this up to your backend/EmailJS)");
  };

  return (
    <>
      <section id="contact" className="py-20 bg-brand-gradient">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase text-white mb-2">Get In Touch</h2>
            <div className="w-14 h-0.5 bg-white/60 mb-6" />
            <p className="text-white/80 mb-8 text-sm">
              Please fill out the form below to send us an email and we will get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 rounded bg-white/15 text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-white/60"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded bg-white/15 text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-white/60"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded bg-white/15 text-white placeholder-white/70 text-sm focus:outline-none focus:ring-2 focus:ring-white/60"
              />
              <button
                type="submit"
                className="px-8 py-3 border border-white/70 rounded-full text-white text-sm font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="text-white/90 text-sm space-y-6">
            <h4 className="font-semibold uppercase tracking-wide">Contact Info</h4>
            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 shrink-0" strokeWidth={1.5} />
              {data ? data.address : "Loading..."}
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 shrink-0" strokeWidth={1.5} />
              {data ? data.phone : "Loading..."}
            </p>
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 shrink-0" strokeWidth={1.5} />
              {data ? data.email : "Loading..."}
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-14 flex justify-center gap-4">
          {data &&
            [
              { href: data.facebook, Icon: FaFacebookF },
              { href: data.twitter, Icon: FaTwitter },
              { href: data.youtube, Icon: FaYoutube },
            ].map(({ href, Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
        </div>
      </section>

      <footer className="bg-white py-6">
        <p className="text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Anuj Karn React Landing Page Template. Design by <a href="https://templatewire.com" className="text-blue-500 hover:underline">TemplateWire.</a>
        </p>
      </footer>
    </>
  );
};
