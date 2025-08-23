type ScrollOptions = {
  behavior?: ScrollBehavior;
  offset?: number;
};

export function scrollWindowToBottom(opts: ScrollOptions = {}): void {
  if (typeof window === "undefined") return;
  const { behavior = "smooth", offset = 0 } = opts;
  const h = Math.max(
    document.documentElement.scrollHeight,
    document.body?.scrollHeight || 0
  );
  window.scrollTo({ top: h - offset, behavior });
}
