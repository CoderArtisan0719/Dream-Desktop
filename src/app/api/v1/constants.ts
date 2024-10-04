export const COOKIE_NAME = "dream-access-token";

export const validationInitialState = {
  error: null,
  status: "idle" as ValidationStatus,
  dreamId: "",
};

export type ValidationStatus = "idle" | "available" | "unavailable";
