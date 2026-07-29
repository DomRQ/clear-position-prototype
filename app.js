const SCREENS = [
  {
    "id": "home",
    "title": "Homepage \u2014 Signed Out",
    "cpux": "CP-UX-001",
    "image": "assets/01-home-public.png",
    "stage": "Public",
    "description": "The public entry point: proposition, pathways, membership and support.",
    "hotspots": [
      {
        "label": "Explore Boundary & Land Registry",
        "x": 4,
        "y": 18,
        "w": 31,
        "h": 13,
        "to": "pathway"
      },
      {
        "label": "Explore membership",
        "x": 61,
        "y": 18,
        "w": 32,
        "h": 13,
        "to": "membership"
      },
      {
        "label": "Sign in / create account",
        "x": 77,
        "y": 1,
        "w": 20,
        "h": 6,
        "to": "account"
      }
    ]
  },
  {
    "id": "pathway",
    "title": "Boundary & Land Registry Pathway",
    "cpux": "CP-UX-010",
    "image": "assets/02-public-pathway.png",
    "stage": "Public",
    "description": "Problem-led public orientation with connected guidance, tools and support.",
    "hotspots": [
      {
        "label": "Start the intelligent route",
        "x": 69,
        "y": 10,
        "w": 27,
        "h": 15,
        "to": "route-result"
      },
      {
        "label": "Open related guidance",
        "x": 3,
        "y": 60,
        "w": 31,
        "h": 27,
        "to": "library"
      },
      {
        "label": "View membership",
        "x": 71,
        "y": 73,
        "w": 25,
        "h": 18,
        "to": "membership"
      }
    ]
  },
  {
    "id": "route-result",
    "title": "Intelligent Route Result & Issue Map",
    "cpux": "CP-UX-022",
    "image": "assets/03-route-result.png",
    "stage": "Public \u2192 Member",
    "description": "A transparent provisional route result with issues, evidence needs and next options.",
    "hotspots": [
      {
        "label": "Save this route",
        "x": 78,
        "y": 9,
        "w": 19,
        "h": 13,
        "to": "account"
      },
      {
        "label": "Open recommended resources",
        "x": 15,
        "y": 63,
        "w": 45,
        "h": 28,
        "to": "library"
      },
      {
        "label": "Continue to membership",
        "x": 76,
        "y": 65,
        "w": 20,
        "h": 23,
        "to": "membership"
      }
    ]
  },
  {
    "id": "membership",
    "title": "Evidence Toolkit Membership",
    "cpux": "CP-UX-002-MEM",
    "image": "assets/04-membership.png",
    "stage": "Public commercial",
    "description": "Membership value, recurring credits, member tools and bounded support.",
    "hotspots": [
      {
        "label": "Choose membership",
        "x": 8,
        "y": 14,
        "w": 28,
        "h": 14,
        "to": "account"
      },
      {
        "label": "Create account",
        "x": 73,
        "y": 4,
        "w": 23,
        "h": 12,
        "to": "account"
      },
      {
        "label": "Preview member experience",
        "x": 39,
        "y": 18,
        "w": 30,
        "h": 18,
        "to": "signed-in"
      }
    ]
  },
  {
    "id": "account",
    "title": "Account Creation & Sign-In Transition",
    "cpux": "CP-UX-025",
    "image": "assets/05-account-transition.png",
    "stage": "Public \u2192 Member",
    "description": "Secure account access with progressive configuration and preserved visitor context.",
    "hotspots": [
      {
        "label": "Create account",
        "x": 50,
        "y": 27,
        "w": 24,
        "h": 48,
        "to": "setup"
      },
      {
        "label": "Sign in",
        "x": 28,
        "y": 27,
        "w": 22,
        "h": 48,
        "to": "signed-in"
      },
      {
        "label": "Return to public site",
        "x": 85,
        "y": 1,
        "w": 13,
        "h": 6,
        "to": "home"
      }
    ]
  },
  {
    "id": "setup",
    "title": "New Member Setup & Intelligent Activation",
    "cpux": "CP-UX-020",
    "image": "assets/06-member-setup.png",
    "stage": "New member",
    "description": "Optional needs analysis, first matter, important dates and notification preferences.",
    "hotspots": [
      {
        "label": "Complete setup",
        "x": 44,
        "y": 81,
        "w": 27,
        "h": 12,
        "to": "signed-in"
      },
      {
        "label": "Create first matter",
        "x": 14,
        "y": 20,
        "w": 42,
        "h": 48,
        "to": "matters"
      },
      {
        "label": "Skip for now",
        "x": 79,
        "y": 8,
        "w": 17,
        "h": 10,
        "to": "control-centre"
      }
    ]
  },
  {
    "id": "signed-in",
    "title": "Homepage \u2014 Signed In",
    "cpux": "CP-UX-019 / signed-in authority",
    "image": "assets/07-signed-in-home.png",
    "stage": "Member",
    "description": "A premium signed-in homepage that routes members into operational areas.",
    "hotspots": [
      {
        "label": "Open Control Centre",
        "x": 64,
        "y": 15,
        "w": 28,
        "h": 12,
        "to": "control-centre"
      },
      {
        "label": "Continue priority matter",
        "x": 6,
        "y": 45,
        "w": 63,
        "h": 25,
        "to": "workspace"
      },
      {
        "label": "Explore resources",
        "x": 7,
        "y": 72,
        "w": 35,
        "h": 15,
        "to": "library"
      }
    ]
  },
  {
    "id": "control-centre",
    "title": "Control Centre \u2014 Active Member",
    "cpux": "CP-UX-018 / definitive system authority",
    "image": "assets/08-control-centre.png",
    "stage": "Member",
    "description": "Cross-matter command centre for urgent actions, matters, resources and support.",
    "hotspots": [
      {
        "label": "Open priority matter",
        "x": 15,
        "y": 12,
        "w": 42,
        "h": 32,
        "to": "workspace"
      },
      {
        "label": "View all matters",
        "x": 12,
        "y": 43,
        "w": 44,
        "h": 32,
        "to": "matters"
      },
      {
        "label": "Open Resource Library",
        "x": 1,
        "y": 35,
        "w": 12,
        "h": 20,
        "to": "library"
      },
      {
        "label": "View membership & credits",
        "x": 1,
        "y": 64,
        "w": 12,
        "h": 20,
        "to": "membership-account"
      }
    ]
  },
  {
    "id": "matters",
    "title": "My Matters",
    "cpux": "CP-UX-016",
    "image": "assets/09-my-matters.png",
    "stage": "Member",
    "description": "All active matters, stages, dates, next actions and workspace entry points.",
    "hotspots": [
      {
        "label": "Open Boundary dispute",
        "x": 15,
        "y": 27,
        "w": 55,
        "h": 22,
        "to": "workspace"
      },
      {
        "label": "Open Control Centre",
        "x": 1,
        "y": 8,
        "w": 12,
        "h": 16,
        "to": "control-centre"
      },
      {
        "label": "Add a matter",
        "x": 73,
        "y": 7,
        "w": 20,
        "h": 10,
        "to": "setup"
      }
    ]
  },
  {
    "id": "workspace",
    "title": "Pathway Workspace",
    "cpux": "CP-UX-006",
    "image": "assets/10-pathway-workspace.png",
    "stage": "Member matter",
    "description": "Matter-specific tasks, evidence, deadlines, progress and connected products.",
    "hotspots": [
      {
        "label": "Open Resource Library",
        "x": 13,
        "y": 42,
        "w": 30,
        "h": 30,
        "to": "library"
      },
      {
        "label": "Open AP1 / ADV1 Readiness Pack",
        "x": 53,
        "y": 41,
        "w": 29,
        "h": 31,
        "to": "product"
      },
      {
        "label": "Return to Control Centre",
        "x": 1,
        "y": 7,
        "w": 12,
        "h": 15,
        "to": "control-centre"
      }
    ]
  },
  {
    "id": "library",
    "title": "Intelligent Resource Library",
    "cpux": "CP-UX-003",
    "image": "assets/11-resource-library.png",
    "stage": "Member",
    "description": "Search and use connected guidance, tools, products and services.",
    "hotspots": [
      {
        "label": "Open readiness product",
        "x": 38,
        "y": 22,
        "w": 28,
        "h": 25,
        "to": "product"
      },
      {
        "label": "Open Credit Marketplace",
        "x": 1,
        "y": 60,
        "w": 12,
        "h": 15,
        "to": "marketplace"
      },
      {
        "label": "Return to workspace",
        "x": 1,
        "y": 21,
        "w": 12,
        "h": 15,
        "to": "workspace"
      }
    ]
  },
  {
    "id": "product",
    "title": "AP1 / ADV1 Document Readiness Pack",
    "cpux": "CP-UX-004",
    "image": "assets/12-product-readiness-pack.png",
    "stage": "Member product",
    "description": "Product scope, readiness, included tools, exclusions and unlock route.",
    "hotspots": [
      {
        "label": "Unlock with credits",
        "x": 72,
        "y": 9,
        "w": 25,
        "h": 24,
        "to": "unlock"
      },
      {
        "label": "Compare products",
        "x": 1,
        "y": 61,
        "w": 12,
        "h": 17,
        "to": "marketplace"
      },
      {
        "label": "Return to workspace",
        "x": 1,
        "y": 19,
        "w": 12,
        "h": 15,
        "to": "workspace"
      }
    ]
  },
  {
    "id": "marketplace",
    "title": "Credit Marketplace",
    "cpux": "CP-UX-021",
    "image": "assets/13-credit-marketplace.png",
    "stage": "Member commercial",
    "description": "Matter-aware product planning, balances, recommended-now and optional-later routes.",
    "hotspots": [
      {
        "label": "Review recommended plan",
        "x": 15,
        "y": 17,
        "w": 59,
        "h": 36,
        "to": "unlock"
      },
      {
        "label": "View account and credits",
        "x": 1,
        "y": 64,
        "w": 12,
        "h": 17,
        "to": "membership-account"
      },
      {
        "label": "Book free scoping call",
        "x": 80,
        "y": 72,
        "w": 18,
        "h": 14,
        "action": "scoping"
      }
    ]
  },
  {
    "id": "unlock",
    "title": "Credit Unlock Flow",
    "cpux": "CP-UX-027",
    "image": "assets/14-credit-unlock.png",
    "stage": "Member transaction",
    "description": "Transparent relevance, credit source, confirmation and post-unlock next steps.",
    "hotspots": [
      {
        "label": "Confirm and unlock",
        "x": 15,
        "y": 64,
        "w": 29,
        "h": 18,
        "to": "workspace",
        "toast": "Readiness Pack unlocked and added to your matter."
      },
      {
        "label": "Open Professional Handoff Pack",
        "x": 60,
        "y": 66,
        "w": 30,
        "h": 17,
        "to": "handoff"
      },
      {
        "label": "Return to marketplace",
        "x": 1,
        "y": 62,
        "w": 12,
        "h": 17,
        "to": "marketplace"
      }
    ]
  },
  {
    "id": "handoff",
    "title": "Professional Handoff Pack",
    "cpux": "CP-UX-024",
    "image": "assets/15-professional-handoff.png",
    "stage": "Member professional",
    "description": "Adviser-ready pack, evidence coverage, permissions and secure sharing controls.",
    "hotspots": [
      {
        "label": "Share securely",
        "x": 54,
        "y": 5,
        "w": 16,
        "h": 10,
        "action": "share"
      },
      {
        "label": "Send to professional",
        "x": 76,
        "y": 5,
        "w": 19,
        "h": 11,
        "action": "send"
      },
      {
        "label": "Open membership account",
        "x": 1,
        "y": 65,
        "w": 12,
        "h": 16,
        "to": "membership-account"
      },
      {
        "label": "Return to matter",
        "x": 15,
        "y": 14,
        "w": 25,
        "h": 15,
        "to": "workspace"
      }
    ]
  },
  {
    "id": "membership-account",
    "title": "Membership, Account & Credits",
    "cpux": "CP-UX-026",
    "image": "assets/16-membership-account.png",
    "stage": "Member account",
    "description": "Plan, credit pools, likely needs, products, invoices and account controls.",
    "hotspots": [
      {
        "label": "Open Credit Marketplace",
        "x": 1,
        "y": 62,
        "w": 12,
        "h": 16,
        "to": "marketplace"
      },
      {
        "label": "Return to Control Centre",
        "x": 1,
        "y": 7,
        "w": 12,
        "h": 14,
        "to": "control-centre"
      },
      {
        "label": "View likely product needs",
        "x": 14,
        "y": 25,
        "w": 57,
        "h": 34,
        "to": "marketplace"
      }
    ]
  },
  {
    "id": "mobile-reference",
    "title": "Member Mobile Navigation Reference",
    "cpux": "CP-UX-028",
    "image": "assets/17-mobile-reference.png",
    "stage": "System reference",
    "description": "Approved action-first mobile navigation and responsive behaviour.",
    "hotspots": [
      {
        "label": "Return to Control Centre",
        "x": 4,
        "y": 8,
        "w": 24,
        "h": 24,
        "to": "control-centre"
      }
    ]
  },
  {
    "id": "states-reference",
    "title": "Interaction States & Responsive Behaviour",
    "cpux": "CP-UX-029",
    "image": "assets/18-system-states-reference.png",
    "stage": "System reference",
    "description": "Approved loading, empty, deadline, recovery, recommendation and transaction states.",
    "hotspots": [
      {
        "label": "Return to Control Centre",
        "x": 1,
        "y": 1,
        "w": 22,
        "h": 12,
        "to": "control-centre"
      }
    ]
  }
];

const state = {
  current: null,
  history: [],
  showHotspots: true,
  fit: true
};

const els = {
  title: document.querySelector("#screenTitle"),
  cpux: document.querySelector("#screenCpux"),
  stage: document.querySelector("#screenStage"),
  description: document.querySelector("#screenDescription"),
  image: document.querySelector("#screenImage"),
  surface: document.querySelector("#screenSurface"),
  hotspots: document.querySelector("#hotspotLayer"),
  list: document.querySelector("#screenList"),
  drawer: document.querySelector("#drawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  toast: document.querySelector("#toast"),
  modal: document.querySelector("#modal"),
  modalTitle: document.querySelector("#modalTitle"),
  modalBody: document.querySelector("#modalBody"),
};

function findScreen(id) {
  return SCREENS.find(s => s.id === id) || SCREENS[0];
}

function navigate(id, options = {}) {
  const target = findScreen(id);
  if (state.current && !options.replace && state.current !== target.id) {
    state.history.push(state.current);
  }
  state.current = target.id;
  location.hash = target.id;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeDrawer();
  if (options.toast) showToast(options.toast);
}

function render() {
  const screen = findScreen(state.current || location.hash.replace("#", "") || "home");
  state.current = screen.id;

  els.title.textContent = screen.title;
  els.cpux.textContent = screen.cpux;
  els.stage.textContent = screen.stage;
  els.description.textContent = screen.description;
  els.image.src = screen.image;
  els.image.alt = `${screen.cpux} — ${screen.title}`;
  els.image.classList.toggle("fit-width", state.fit);
  els.hotspots.innerHTML = "";

  screen.hotspots.forEach((hotspot, index) => {
    const button = document.createElement("button");
    button.className = "hotspot";
    button.style.left = hotspot.x + "%";
    button.style.top = hotspot.y + "%";
    button.style.width = hotspot.w + "%";
    button.style.height = hotspot.h + "%";
    button.setAttribute("aria-label", hotspot.label);
    button.title = hotspot.label;
    button.dataset.number = index + 1;
    button.innerHTML = `<span>${hotspot.label}</span>`;
    button.hidden = !state.showHotspots;
    button.addEventListener("click", () => activateHotspot(hotspot));
    els.hotspots.appendChild(button);
  });

  document.querySelectorAll("[data-screen-id]").forEach(link => {
    link.classList.toggle("active", link.dataset.screenId === screen.id);
  });

  document.querySelector("#journeyCounter").textContent =
    `${SCREENS.findIndex(s => s.id === screen.id) + 1} / ${SCREENS.length}`;

  document.querySelector("#backBtn").disabled = state.history.length === 0;
}

function activateHotspot(hotspot) {
  if (hotspot.to) {
    navigate(hotspot.to, { toast: hotspot.toast });
    return;
  }
  if (hotspot.action === "scoping") {
    openModal(
      "Free 20-minute scoping call",
      "This demonstrator simulates the booking route. In the live platform, the member would choose an available slot and provide a brief matter summary. The call remains 0 credits."
    );
  } else if (hotspot.action === "share") {
    openModal(
      "Create secure access",
      "Simulation: choose the professional category, set an access expiry and review the exact sections the recipient may see."
    );
  } else if (hotspot.action === "send") {
    openModal(
      "Send to a professional",
      "Simulation: the pack is adviser-ready. A live implementation would create an auditable, revocable invitation rather than sending confidential material openly."
    );
  }
}

function goBack() {
  const previous = state.history.pop();
  if (previous) {
    state.current = previous;
    location.hash = previous;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function goNext() {
  const index = SCREENS.findIndex(s => s.id === state.current);
  const next = SCREENS[Math.min(index + 1, SCREENS.length - 1)];
  navigate(next.id);
}

function goPrevious() {
  const index = SCREENS.findIndex(s => s.id === state.current);
  const previous = SCREENS[Math.max(index - 1, 0)];
  navigate(previous.id);
}

function openDrawer() {
  els.drawer.classList.add("open");
  els.drawerBackdrop.hidden = false;
  document.body.classList.add("drawer-open");
}
function closeDrawer() {
  els.drawer.classList.remove("open");
  els.drawerBackdrop.hidden = true;
  document.body.classList.remove("drawer-open");
}

function openModal(title, body) {
  els.modalTitle.textContent = title;
  els.modalBody.textContent = body;
  els.modal.showModal();
}
function closeModal() {
  els.modal.close();
}

function showToast(message) {
  if (!message) return;
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 3400);
}

function buildScreenList() {
  const groups = {};
  SCREENS.forEach(screen => {
    const group = screen.stage.includes("Public") ? "Public journey"
      : screen.stage.includes("reference") ? "Reference boards"
      : "Member journey";
    (groups[group] ||= []).push(screen);
  });

  Object.entries(groups).forEach(([group, items]) => {
    const heading = document.createElement("h3");
    heading.textContent = group;
    els.list.appendChild(heading);

    items.forEach(screen => {
      const button = document.createElement("button");
      button.className = "screen-link";
      button.dataset.screenId = screen.id;
      button.innerHTML = `<small>${screen.cpux}</small><strong>${screen.title}</strong>`;
      button.addEventListener("click", () => navigate(screen.id));
      els.list.appendChild(button);
    });
  });
}

document.querySelector("#menuBtn").addEventListener("click", openDrawer);
document.querySelector("#closeDrawerBtn").addEventListener("click", closeDrawer);
els.drawerBackdrop.addEventListener("click", closeDrawer);
document.querySelector("#backBtn").addEventListener("click", goBack);
document.querySelector("#prevBtn").addEventListener("click", goPrevious);
document.querySelector("#nextBtn").addEventListener("click", goNext);
document.querySelector("#homeBtn").addEventListener("click", () => navigate("home"));
document.querySelector("#mobileBtn").addEventListener("click", () => navigate("mobile-reference"));
document.querySelector("#statesBtn").addEventListener("click", () => navigate("states-reference"));
document.querySelector("#hotspotToggle").addEventListener("change", event => {
  state.showHotspots = event.target.checked;
  render();
});
document.querySelector("#fitToggle").addEventListener("change", event => {
  state.fit = event.target.checked;
  render();
});
document.querySelector("#closeModalBtn").addEventListener("click", closeModal);
document.querySelector("#modalOkayBtn").addEventListener("click", closeModal);

window.addEventListener("hashchange", () => {
  const id = location.hash.replace("#", "");
  if (id && id !== state.current) {
    state.current = findScreen(id).id;
    render();
  }
});

window.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeDrawer();
    if (els.modal.open) closeModal();
  }
  if (event.key === "ArrowRight" && !els.modal.open) goNext();
  if (event.key === "ArrowLeft" && !els.modal.open) goPrevious();
});

buildScreenList();
state.current = findScreen(location.hash.replace("#", "") || "home").id;
render();
