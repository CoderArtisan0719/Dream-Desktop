import { Elysia, t } from "elysia";
import { COOKIE_NAME } from "../../constants";
import { validateName } from "../../profile/utils";
import { createSupabaseClient } from "@/utils/supabase/server";
import { errorMessageResponseType } from "@/app/data/utils";

export const profiles = new Elysia({
  prefix: "/profiles",
})
  .guard({
    cookie: t.Cookie(
      {
        [COOKIE_NAME]: t.String(),
      },
      {
        secure: true,
        httpOnly: true,
      },
    ),
  })
  .patch(
    "/",
    async ({ body, cookie, error }) => {
      console.log("inside PATCH /api/user/profile");

      console.log({ dreamId: body.dreamId });

      const validationResult = validateName(body.dreamId);

      if (!validationResult.valid) {
        return error(400, {
          message: validationResult.error || "Invalid Dream ID",
        });
      }

      const accessToken = cookie[COOKIE_NAME].value;

      const supabase = createSupabaseClient(accessToken);

      const getUserRes = await supabase.auth.getUser(accessToken);

      if (getUserRes.error || !getUserRes.data.user) {
        console.error({ user: getUserRes.data.user, error: getUserRes.error });
        return error(401, { message: "AuthApiError" });
      }

      try {
        const profileRes = await supabase
          .from("profiles")
          .update({ dream_id: validationResult.name })
          .eq("id", getUserRes.data.user.id)
          .select("dream_id");

        if (!profileRes.data || !profileRes.data[0] || profileRes.error) {
          console.error({ data: profileRes.data, error: profileRes.error });
          return error(400, { message: "Unable to update Dream ID." });
        }

        // console.log({ data: profileRes.data, error: profileRes.error });

        return { message: "Profile updated successfully." };
      } catch (err: any) {
        console.error("Error updating profile:", err);
        return error(500, { message: "Error updating profile" });
      }
    },
    {
      body: t.Object({
        dreamId: t.String(),
      }),
      response: {
        200: t.Object({ message: t.String() }),
        400: errorMessageResponseType,
        401: errorMessageResponseType,
        500: errorMessageResponseType,
      },
    },
  )
  .get(
    "/validate",
    async ({ cookie, query, error }) => {
      console.log("inside GET validate");

      const dreamId = query.dreamId;

      if (!dreamId || !dreamId.length) {
        return error(400, { message: "dreamId parameter is required" });
      }

      const accessToken = cookie[COOKIE_NAME].value;
      // console.log({ accessToken });

      const validationResult = validateName(dreamId);

      if (!validationResult.valid) {
        return {
          valid: false,
          error: validationResult.error,
        };
      }

      const supabase = createSupabaseClient(accessToken);

      if (!validationResult.name) {
        return { valid: false, error: "Dream ID is required" };
      }

      const profileRes = await supabase
        .from("profiles")
        .select("dream_id")
        .ilike("dream_id", validationResult.name)
        .maybeSingle();

      if (profileRes.data) {
        return { valid: false, error: "Dream ID already taken" };
      }

      if (profileRes.error) {
        return error(500, { message: "Database error" });
      }

      return { valid: true };
    },
    {
      query: t.Object({ dreamId: t.String() }),
      response: {
        200: t.Object({
          valid: t.Boolean(),
          error: t.Optional(t.String()),
        }),
        400: errorMessageResponseType,
        500: errorMessageResponseType,
      },
    },
  );
