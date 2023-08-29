export const splitButtonText = (button: HTMLAnchorElement | null) => {
  if (button) {
    const text = button.textContent?.trim();
    const letters = text?.split("");
    const html = letters?.map((letter) => `<span>${letter}</span>`).join("");
    button.innerHTML = `<div>${html}</div>`;
  }
};
