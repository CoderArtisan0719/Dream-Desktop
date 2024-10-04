import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { profiles } from "./models/profiles";
import { users } from "./models/users";

const app = new Elysia({ prefix: "/api/v1" })
  .use(
    cors({
      origin: (origin) => {
        const originUrl = origin.headers.get("origin");
        return (
          originUrl?.endsWith(".breadheadnfts.vercel.app") ||
          originUrl === "http://localhost:3000" ||
          originUrl?.startsWith("https://desktop-t-git-")
        );
      },
      credentials: true,
    }),
  )
  .use(
    swagger({
      exclude: ["/api/v1/swagger", "/api/v1/swagger/json"],
    }),
  )
  .use(profiles)
  .use(users);

export const GET = app.handle;
export const POST = app.handle;
export const PUT = app.handle;
export const PATCH = app.handle;
export const DELETE = app.handle;
export const OPTIONS = app.handle;
export const HEAD = app.handle;

export type App = typeof app;
