
import { supabase } from "@/lib/supabase";
import ProjectCard from "@/components/ProjectCard";

export default async function Projects() {
  const { data } = await supabase.from("projects").select("*");

  return (
    <main className="max-w-5xl mx-auto px-6 py-20 space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      {data?.length === 0 && (
        <p className="text-zinc-400">No projects added yet.</p>
      )}
      <div className="grid gap-4">
        {data?.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </main>
  );
}
