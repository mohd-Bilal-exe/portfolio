const Contact = () => (
  <div className="flex flex-col justify-center items-center bg-red-500/10 p-4 w-full min-h-dvh">
    <div className="flex flex-col space-y-4 w-full max-w-md">
      <h2 className="mb-4 font-bold text-white text-4xl text-center">Get in touch</h2>
      <input
        type="email"
        placeholder="Your Email"
        className="bg-white/20 p-4 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 text-white placeholder-white/60"
      />
      <textarea
        rows={4}
        placeholder="Message"
        className="bg-white/20 p-4 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 text-white resize-none placeholder-white/60"
      />
      <button className="bg-white hover:bg-purple-100 py-4 rounded-xl font-bold text-purple-900 active:scale-95 transition-transform">
        Send Message
      </button>
    </div>
  </div>
);
export default Contact;
