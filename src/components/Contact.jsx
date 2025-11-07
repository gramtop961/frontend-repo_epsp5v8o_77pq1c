import { Mail, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !message) return;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 2500);
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Let’s collaborate</h2>
            <p className="text-gray-600 mt-2">
              Open to freelance, consulting, and full‑time opportunities. I love building
              impactful products and reliable platforms.
            </p>
            <div className="mt-6 flex items-center gap-4 text-gray-700">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 hover:text-black"><Mail size={18}/> you@example.com</a>
            </div>
            <div className="mt-4 flex items-center gap-4 text-gray-700">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-black"><Github size={18}/> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-black"><Linkedin size={18}/> LinkedIn</a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-white rounded-xl border border-black/5 p-6 shadow-sm">
            <div className="grid gap-4">
              <label className="text-sm font-medium text-gray-700">
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-600 focus:ring-indigo-600"
                />
              </label>
              <label className="text-sm font-medium text-gray-700">
                Message
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-600 focus:ring-indigo-600"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-md shadow hover:bg-indigo-700 transition-colors"
              >
                <Send size={18} /> {status === "sent" ? "Sent!" : "Send Message"}
              </button>
              {status === "sent" && (
                <p className="text-sm text-green-700">Thanks! I will get back to you shortly.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
