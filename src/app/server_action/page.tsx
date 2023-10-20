import { api } from "~/trpc/server";
import { CreatePost } from "../_components/create-post";
import Navbar from "../_components/Navbar";

export default async function Page() {
  const allMessages = await api.post.getAllMessages.query();

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <Navbar />
      <h1 className="text-4xl font-bold">Using Server Action</h1>
      <div className="mt-4 space-y-2 text-center">
        {allMessages.map((message) => (
          <p key={message.id}>{message.name}</p>
        ))}
      </div>

      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  return (
    <div className="w-full max-w-xs">
      <CreatePost />
    </div>
  );
}
