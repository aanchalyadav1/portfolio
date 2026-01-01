export default function ProjectCard({ project }: any) {
  return (
    <div className="border border-zinc-800 rounded-lg p-5">
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-sm text-zinc-400 mt-2">{project.description}</p>
    </div>
  );
}
