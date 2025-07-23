import React from "react";
import { Mail, Phone, Github, Linkedin, Send, Code2 } from "lucide-react";

const Contact: React.FC = () => {
 
 
  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={20} />,
      label: "Email",
      value: "boyinasambashivarao@gmail.com",
      href: "mailto:boyinasambashivarao@gmail.com",
    },
    {
      icon: <Phone className="text-green-400" size={20} />,
      label: "Phone",
      value: "(+91) 7032671756",
      href: "tel:+917032671756",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sambashivarao-boyina/",
    },
    {
      icon: <Github className="text-slate-400" size={24} />,
      label: "GitHub",
      href: "https://github.com/Sambashivarao-Boyina",
    },
    {
      icon: <Code2 className="text-orange-400" size={24} />,
      label: "LeetCode",
      href: "https://leetcode.com/u/sambashivarao/",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-slate-200 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-slate-600/50 rounded-lg group-hover:bg-blue-600/20 transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">{info.label}</p>
                        <p className="text-slate-200 font-medium group-hover:text-blue-300 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold text-slate-200 mb-6">
                  Follow Me
                </h3>

                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 bg-slate-700/50 rounded-xl hover:bg-blue-600/20 transition-all duration-300 hover:scale-110"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-slate-200 mb-6">
                Send a Message
              </h3>

              <form
                action="https://formspree.io/f/xvgqkqld"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    name="message"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-200 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 group"
                >
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-20 text-center">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>
            <p className="text-slate-400">
              © 2025 Samba Shiva Rao Boyina. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
