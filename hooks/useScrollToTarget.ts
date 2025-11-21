import { useCallback } from "react";

interface ScrollOptions {
  navbarId: string;
  offset?: number;
}

export function useScrollToTarget({ navbarId, offset = 0 }: ScrollOptions) {
  return useCallback(
    (targetId: string) => {
      if (typeof window === "undefined") return;

      const target = document.getElementById(targetId);
      const navbar = document.getElementById(navbarId);

      if (!target || !navbar) return;

      const elementTop = target.getBoundingClientRect().top + window.scrollY;
      const scrollTarget = elementTop - navbar.offsetHeight - offset;

      window.scrollTo({
        top: scrollTarget,
        behavior: "smooth",
      });
    },
    [navbarId, offset]
  );
}
