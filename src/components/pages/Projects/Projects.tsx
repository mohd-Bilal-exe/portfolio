const Projects = () => (
  <div className="flex-col flex-1 place-items-center grid h-full">
    <div className="gap-4 grid grid-cols-1 md:grid-cols-2 p-4 w-full max-w-4xl">
      {[1, 2, 3, 4].map(i => (
        <div
          key={i}
          className="flex justify-center items-center bg-black/20 hover:bg-black/40 border-2 border-white/30 border-dashed rounded-xl aspect-video transition-colors cursor-pointer"
        >
          <span className="font-bold text-white">Project {i}</span>
        </div>
      ))}
    </div>
  </div>
);
export default Projects;
