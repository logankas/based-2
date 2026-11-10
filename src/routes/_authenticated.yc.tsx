import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/yc")({
  beforeLoad: () => {
    throw redirect({ to: "/subscribe" });
  },
});
