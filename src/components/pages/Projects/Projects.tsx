import { twMerge } from 'tailwind-merge';

const Projects = () => {
  const projectsInfo = [
    {
      id: 1,
      title: 'Project 1',
      // HERO: Takes 2 columns width, 2 rows height (Big Square/Rect on Left)
      placement: 'col-span-1 md:col-span-2 md:row-span-2',
    },
    {
      id: 2,
      title: 'Project 2',
      // STACK TOP: Takes 1 column width, 1 row height
      placement: 'col-span-1 md:col-span-1 md:row-span-1',
    },
    {
      id: 3,
      title: 'Project 3',
      // STACK BOTTOM: Takes 1 column width, 1 row height
      placement: 'col-span-1 md:col-span-1 md:row-span-1',
    },
    {
      id: 4,
      title: 'Project 4',
      // FOOTER/WIDE: Spans full width at the bottom (Optional, or makes it 3 cols wide)
      // Based on your request for "4th project below", let's make it span full width
      // or just sit nicely in a 3-column grid system.
      placement: 'col-span-1 md:col-span-3 md:row-span-1',
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center bg-ghost-white-200/5 p-4 w-full min-h-dvh">
      <h2 className="mb-6 font-bold text-white text-4xl">Projects</h2>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-3 md:auto-rows-[200px] w-full max-w-5xl">
        {projectsInfo.map(project => (
          <div
            key={project.id}
            className={twMerge(
              // Base Styles
              'group relative flex flex-col justify-end p-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300',
              // Hover Styles
              'hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer',
              // Grid Placement (injected from object)
              project.placement
            )}
          >
            {/* Content Container - Pushed to bottom left for better readability over images */}
            <div className="z-10 relative transition-transform group-hover:-translate-y-1 duration-300">
              <span className="block mb-1 font-bold text-indigo-400 text-xs uppercase tracking-wider">
                Featured Work
              </span>
              <h3 className="mb-2 font-bold text-white text-2xl">{project.title}</h3>
              <p className="opacity-0 group-hover:opacity-100 text-zinc-400 text-sm transition-all translate-y-4 group-hover:translate-y-0 duration-300 transform">
                Click to explore case study &rarr;
              </p>
            </div>

            {/* Optional: Background Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
