const root = document.querySelector(':root')

export function switchTheme() {
  if (document.body.dataset.theme === "dark") {
    root.style.setProperty("--color-white", "#000000");
    root.style.setProperty("--color-red-dark", "#8b0000");
    root.style.setProperty("--color-black", "#ffffff");
    document.body.dataset.theme = "light";
  } else {
    root.style.setProperty("--color-white", "#ffffff");
    root.style.setProperty("--color-red-dark", "#8b0000");
    root.style.setProperty("--color-black", "#000000");
    document.body.dataset.theme = "dark";
  }
}