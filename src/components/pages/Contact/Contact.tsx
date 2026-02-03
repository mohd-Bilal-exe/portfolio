import { ArrowRight, Instagram, Github, Linkedin } from 'lucide-react';
import AnimateString from '../../global/AnimateString';
import { motion } from 'framer-motion';
import { contentSubHeading, pageHeading, pageName } from '../../../lib/fontClassNames';
import { twMerge } from 'tailwind-merge';
const Contact = () => {
  return (
    <section
      id="mohammad-bilal-contact"
      className="flex flex-col px-[15dvw] md:px-[10dvw] py-[10svh] pb-[15svh] w-full min-h-svh font-space-grotesk font-bold"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 py-6 md:py-10"
      >
        <div className="bg-zinc-700 w-12 h-px" />
        <span className={pageName + 'font-medium text-text-secondary uppercase tracking-widest'}>
          Wanna talk?
        </span>
      </motion.div>
      <div className="flex md:flex-row flex-col w-full">
        <div className="flex flex-col justify-between w-full md:w-1/2 min-h-[30svh]">
          <div>
            <h2
              className={twMerge(pageHeading, 'mb-8 font-bold text-text-primary/70  leading-tight')}
            >
              <AnimateString delayOffset={0.05}>Let's connect.</AnimateString>
            </h2>

            <div className="space-y-2">
              <p
                className={twMerge(
                  pageName,
                  'font-mono text-text-primary/50  uppercase tracking-widest'
                )}
              >
                <AnimateString delayOffset={0.12}>Email me at</AnimateString>
              </p>
              <a
                href="mailto:mohammadbilal.mail@gmail.com?subject=Loved%20your%20work%E2%80%94let%E2%80%99s%20chat!&body=Hey%20Bilal,%0D%0A%0D%0AJust%20checked%20out%20your%20portfolio%20and%20had%20to%20reach%20out.%20Super%20impressed(assumption).%20%0D%0A%0D%0AI%20had%20something%20in%20mind%20and%20would%20love%20to%20run%20it%20by%20you:%0D%0A%0D%0A[drop%20your%20message%20here]%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you!%0D%0A%0D%0ACheers,%0D%0A[Your%20Name]"
                className={twMerge(
                  contentSubHeading,
                  'group flex items-center gap-2 font-medium text-text-primary/90 hover:text-zinc-400 text-xs md:text-2xl transition-colors'
                )}
              >
                <AnimateString delayOffset={0.15}>mohammadbilal.mail@gmail.com</AnimateString>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Social Icons & Location (Bottom Left) */}
          <div className="flex flex-col gap-8 mt-12 md:mt-0">
            <div className="space-y-4">
              <p className="font-mono text-text-primary/50 text-xxs md:text-xs uppercase tracking-widest">
                <AnimateString delayOffset={0.2}>Find me on</AnimateString>
              </p>
              <div className="flex items-center gap-6 text-zinc-400">
                <a
                  aria-label="See my github journey!"
                  href="https://github.com/mohd-Bilal-exe"
                  className="hover:text-text-primary hover:scale-105 transition-colors duration-500"
                >
                  <Github size={20} />
                </a>
                <a
                  aria-label="I apply to jobs using this app."
                  href="https://www.linkedin.com/in/mohd--bilal--"
                  className="hover:text-blue-400 hover:scale-105 transition-colors duration-500"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  aria-label="I post cool stuff here!"
                  href="https://www.instagram.com/mohd.bilal__/"
                  className="hover:text-pink-600 hover:scale-105 transition-colors duration-500"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-text-primary/50 text-xxs md:text-xs uppercase tracking-widest">
                <AnimateString delayOffset={0.22}>Location</AnimateString>
              </p>
              <p className="text-zinc-400 text-xs md:text-sm">
                <AnimateString delayOffset={0.25}>Lucknow, Uttar Pradesh, India</AnimateString>
              </p>
            </div>
          </div>
        </div>

        {/* --- RIGHT SECTION: Formspree Form --- */}
        <div className="mt-20 md:mt-0 md:pl-[5dvw] w-full md:w-1/2">
          <div className="mb-12">
            <p className="mb-2 font-medium text-md text-text-primary md:text-lg lg:text-2xl">
              <AnimateString delayOffset={0.12}>Say hello</AnimateString>
            </p>
            <div className="bg-zinc-800 w-full h-px" />
          </div>

          {/* Replace your Formspree endpoint URL here */}
          <form
            action="https://formspree.io/f/mzdrvbae"
            method="POST"
            className="flex flex-col space-y-12"
          >
            <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
              <div className="group relative">
                <label className="block mb-2 font-mono text-text-primary/50 group-focus-within:text-text-primary text-xs uppercase tracking-widest transition-colors">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="bg-transparent pb-4 border-zinc-800 focus:border-white border-b focus:outline-none w-full text-text-primary transition-colors placeholder-zinc-700"
                  required
                />
              </div>
              <div className="group relative">
                <label className="block mb-2 font-mono text-text-primary/50 group-focus-within:text-text-primary text-xs uppercase tracking-widest transition-colors">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="bg-transparent pb-4 border-zinc-800 focus:border-white border-b focus:outline-none w-full text-text-primary transition-colors placeholder-zinc-700"
                  required
                />
              </div>
            </div>

            <div className="group relative">
              <label className="block mb-2 font-mono text-text-primary/50 group-focus-within:text-text-primary text-xs uppercase tracking-widest transition-colors">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                placeholder="Have a cool project on mind? "
                className="bg-transparent pb-4 border-zinc-800 focus:border-white border-b focus:outline-none w-full text-text-primary transition-colors placeholder-zinc-700"
              />
            </div>

            <div className="group relative">
              <label className="block mb-2 font-mono text-text-primary/50 group-focus-within:text-text-primary text-xs uppercase tracking-widest transition-colors">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Elaborate yourself and start typing here..."
                className="bg-transparent pb-4 border-zinc-800 focus:border-white border-b focus:outline-none w-full text-text-primary transition-colors resize-none placeholder-zinc-700"
                required
              />
            </div>

            <button
              type="submit"
              className="group flex items-center gap-3 font-bold text-text-primary text-lg uppercase tracking-[0.2em] active:scale-95 transition-all"
            >
              Submit
              <span className="bg-background-surface p-2 rounded-full text-text-primary transition-transform group-hover:translate-x-2 duration-300">
                <ArrowRight size={18} />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
