"use server";

import { getApiBaseUrl } from "@/app/api/utils";
import { App } from "@/app/api/v1/[[...slugs]]/route";
import { treaty } from "@elysiajs/eden";
import { redirect } from "next/navigation";
import {
  ValidationStatus,
  validationInitialState,
} from "@/app/api/v1/constants";
import { getCookieHeader } from "@/app/data/utils";

const app = treaty<App>(getApiBaseUrl());

export async function validateDreamId(
  prevState: any,
  formData: FormData,
): Promise<{
  error?: string | null;
  status: ValidationStatus;
  dreamId: string;
}> {
  console.log("inside validateDreamId server action");
  const dreamId = formData.get("dreamId") as string;

  console.log({ dreamId });

  if (!dreamId || !dreamId.length) {
    return validationInitialState;
  }

  const res = await app.api.v1.profiles.validate.get({
    headers: await getCookieHeader(),
    query: { dreamId },
  });

  console.log({ res });

  if (res.data?.valid) {
    return {
      status: "available",
      dreamId,
    };
  } else {
    return {
      error: res.error?.value.message,
      status: "unavailable",
      dreamId,
    };
  }
}

export async function createDreamId(
  prevState: any,
  formData: FormData,
): Promise<{
  error?: string | null;
}> {
  const dreamId = formData.get("dreamId") as string;

  if (!dreamId || !dreamId.length) {
    return {
      error: "Dream ID is required",
    };
  }

  console.log("server action attempting to set dreamId", dreamId);

  const res = await app.api.v1.profiles.index.patch(
    { dreamId },
    { headers: await getCookieHeader() },
  );

  if (res.error) {
    return {
      error: res.error.value.message,
    };
  }

  redirect("/desktop");
}
