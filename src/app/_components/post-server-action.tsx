"use server";

import { revalidatePath } from "next/cache";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export async function createPost(input: FormData) {
  const newPostName = input.get("name");

  if (typeof newPostName !== "string") throw new Error("Not a string");

  await db.insert(posts).values({
    name: newPostName,
  });

  revalidatePath("/server_action");
}
