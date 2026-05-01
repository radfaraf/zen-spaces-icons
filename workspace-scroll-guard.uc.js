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
