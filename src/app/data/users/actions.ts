import { getApiBaseUrl } from "@/app/api/utils";
import type { App } from "@/app/api/v1/[[...slugs]]/route";
import { treaty } from "@elysiajs/eden";
import { getCookieHeader } from "../utils";

const app = treaty<App>(getApiBaseUrl());

export async function getUser() {
  console.log("getting user server action");

  const users = await app.api.v1.users.index.get({
    headers: await getCookieHeader(),
  });

  // console.log({ users });

  if (users.error) {
    console.dir(users.error, { depth: null });
    // console.error(users.error.value.message);
    return {
      dreamId: "???",
      error: users.error.value.message,
    };
  }
  return { dreamId: users.data.dreamId };
}
