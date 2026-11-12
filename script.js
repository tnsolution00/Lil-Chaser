const menu = document.getElementById("menu"),
  nav = document.getElementById("nav");
if (menu && nav) {
  menu.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(opened));
    menu.textContent = opened ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
      menu.textContent = "☰";
    }),
  );
}
document.querySelectorAll("[data-filter]").forEach((btn) =>
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("[data-filter]")
      .forEach((x) => x.classList.toggle("active", x === btn));
    document
      .querySelectorAll(".work-card")
      .forEach(
        (card) =>
          (card.hidden = !(
            btn.dataset.filter === "all" ||
            card.dataset.category === btn.dataset.filter
          )),
      );
  }),
);
document.querySelectorAll(".work-card").forEach((card) => {
  const link = card.querySelector("a.explore");
  if (!link) return;
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "link");
  card.addEventListener("click", (event) => {
    if (event.target.closest("a,button")) return;
    window.location.href = link.href;
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = link.href;
    }
  });
});
