export const splitButtonText = (button: HTMLAnchorElement | HTMLButtonElement | null) => {
  if (button) {
    const text = button.textContent?.trim();
    const letters = text?.split("");
    const html = letters?.map((letter, index) => `<span key=${index}>${letter}</span>`).join("");
    button.innerHTML = `<div>${html}</div>`;
  }
};
