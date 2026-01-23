export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center bg-ghost-white-200/5 p-4 w-full min-h-dvh">
      <h2 className="mb-6 font-bold text-white text-4xl">Skills</h2>
      <div className="gap-4 grid grid-cols-2 md:grid-cols-4 w-full max-w-4xl">
        {/* Example skills */}
        <div className="bg-white/20 p-4 rounded-xl font-bold text-white text-center">
          JavaScript
        </div>
        <div className="bg-white/20 p-4 rounded-xl font-bold text-white text-center">
          TypeScript
        </div>
        <div className="bg-white/20 p-4 rounded-xl font-bold text-white text-center">React</div>
        <div className="bg-white/20 p-4 rounded-xl font-bold text-white text-center">Node.js</div>
        <div className="bg-white/20 p-4 rounded-xl font-bold text-white text-center">CSS</div>
        <div className="bg-white/20 p-4 rounded-xl font-bold text-white text-center">HTML</div>
        <div className="bg-white/20 p-4 rounded-xl font-bold text-white text-center">Git</div>
      </div>
    </div>
  );
}
