"use client";

import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export default function AdminProjects() {
  async function addProject(formData: FormData) {
    const { error } = await supabase.from("projects").insert({
      title: formData.get("title"),
      description: formData.get("description"),
    });

    if (error) toast.error(error.message);
    else toast.success("Project added");
  }

  return (
    <main className="max-w-xl mx-auto px-6 py-20">
      <h1 className="text-2xl font-semibold mb-6">Add Project</h1>

      <form action={addProject} className="space-y-4">
        <input
          name="title"
          placeholder="Project title"
          className="w-full p-2 bg-zinc-900 border border-zinc-700 rounded"
        />
        <textarea
          name="description"
          placeholder="Project description"
          className="w-full p-2 bg-zinc-900 border border-zinc-700 rounded"
        />
        <button className="px-4 py-2 bg-blue-600 rounded">
          Save
        </button>
      </form>
    </main>
  );
}
