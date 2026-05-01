(() => {
  const attachWorkspaceScrollGuard = () => {
    const workspaceStrip = document.getElementById("zen-workspaces-button");
    if (
      !workspaceStrip ||
      workspaceStrip.dataset.spacesIconsScrollGuard === "true"
    ) {
      return;
    }

    workspaceStrip.dataset.spacesIconsScrollGuard = "true";

    // Zen scrolls the strip to any workspace button on mouseover. This mod
    // keeps scrolling manual so hovering near the right edge does not move it.
    workspaceStrip.addEventListener(
      "mouseover",
      event => {
        if (event.target.closest("toolbarbutton[zen-workspace-id]")) {
          event.stopImmediatePropagation();
        }
      },
      true
    );

    workspaceStrip.addEventListener(
      "wheel",
      event => {
        if (workspaceStrip.scrollWidth <= workspaceStrip.clientWidth) {
          return;
        }

        const unit =
          event.deltaMode === WheelEvent.DOM_DELTA_LINE
            ? 16
            : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
              ? workspaceStrip.clientWidth
              : 1;
        const delta =
          Math.abs(event.deltaX) > Math.abs(event.deltaY)
            ? event.deltaX
            : event.deltaY;

        if (!delta) {
          return;
        }

        workspaceStrip.scrollLeft += delta * unit;
        event.preventDefault();
        event.stopPropagation();
      },
      { passive: false }
    );
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attachWorkspaceScrollGuard, {
      once: true,
    });
  } else {
    attachWorkspaceScrollGuard();
  }

  window.addEventListener(
    "ZenWorkspacesUIUpdate",
    attachWorkspaceScrollGuard,
    true
  );
})();
