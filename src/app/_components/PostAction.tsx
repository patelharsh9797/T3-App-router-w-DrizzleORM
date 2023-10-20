import { createPost } from "./post-server-action";

export function CreatePost() {
  return (
    <form action={createPost} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        name="name"
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        // disabled={createPost.isLoading}
      >
        Submit
        {/* {createPost.isLoading ? "Submitting..." : "Submit"} */}
      </button>
    </form>
  );
}
