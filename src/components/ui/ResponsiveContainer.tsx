import { cn } from "@/utils/tailwind";

// For storybook
export default function ResponsiveContainer({
  viewport = "sm",
  children,
}: {
  viewport?: "sm" | "md" | "lg";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("@container max-h-[172px]", {
        "w-[172px]": viewport === "sm",
        "w-[364px]": viewport === "md",
        "w-[550px]": viewport === "lg",
      })}
    >
      {children}
    </div>
  );
}
