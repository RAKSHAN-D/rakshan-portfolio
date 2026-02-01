import { useState } from "react";
import { Mail, Linkedin, Download, Copy, Check, Terminal, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("rakshandn@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/RAKSHAN_RESUME_BACKEND_DEV.pdf";
    link.download = "Rakshan_D_Resume.pdf";
    link.click();
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background border-t border-gray-800 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-4">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Initialize Connection</h2>
          <div className="h-1 w-16 bg-blue-600 rounded mx-auto" />
        </ScrollReveal>

        <ScrollReveal>
          <div className="w-full max-w-2xl mx-auto glass-card rounded-xl border border-gray-700/50 shadow-2xl overflow-hidden font-mono">
            {/* Terminal Header */}
            <div className="bg-gray-900/80 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <Terminal className="w-3 h-3" />
                rakshan@portfolio:~/contact
              </div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Terminal Content */}
            <div className="bg-black/90 p-6 md:p-8 space-y-6 text-sm md:text-base">

              {/* Line 1: Intro */}
              <div className="flex flex-col gap-1">
                <div className="text-gray-500">$ ./init_handshake.sh</div>
                <div className="text-green-400">
                  <span className="mr-2">✓</span> Connection established securely.
                </div>
                <div className="text-gray-300">
                  Hello! I'm currently open to new backend engineering opportunities.
                </div>
              </div>

              {/* Line 2: Email Action */}
              <div className="group">
                <div className="text-gray-500 mb-2">$ cat contact_email.txt</div>
                <div
                  className="flex items-center gap-4 p-3 rounded bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors cursor-pointer"
                  onClick={copyEmail}
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-200 flex-1">rakshandn@gmail.com</span>
                  <div className="flex items-center gap-2 text-xs">
                    {copied ? (
                      <span className="text-green-400 font-bold flex items-center gap-1">
                        <Check className="w-3 h-3" /> COPIED
                      </span>
                    ) : (
                      <span className="text-gray-500 group-hover:text-white transition-colors flex items-center gap-1">
                        <Copy className="w-3 h-3" /> COPY
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Line 3: Social Links */}
              <div>
                <div className="text-gray-500 mb-2">$ list --social-uplinks</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href="https://www.linkedin.com/in/rakshan-doddamani-055766319/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 group-hover:text-white">LinkedIn Profile</span>
                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-blue-400 ml-auto" />
                  </a>

                  <button
                    onClick={downloadResume}
                    className="flex items-center gap-3 p-3 rounded bg-gray-800/50 border border-gray-700 hover:border-green-500/50 transition-colors group text-left"
                  >
                    <Download className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300 group-hover:text-white">Download Resume</span>
                    <span className="text-xs text-gray-500 bg-gray-900 px-2 py-1 rounded ml-auto font-mono">.pdf</span>
                  </button>
                </div>
              </div>

              {/* Blinking Cursor */}
              <div className="flex items-center gap-2 text-blue-400 mt-8">
                <span className="text-gray-500">$</span>
                <span className="animate-pulse">_</span>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Status Indicator */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-gray-400 font-mono">SYSTEM ONLINE • READY TO WORK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
