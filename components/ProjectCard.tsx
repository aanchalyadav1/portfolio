export default function ProjectCard({ project }: any) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-blue-500 transition">
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
        {project.description}
      </p>
    </div>
  );
}
