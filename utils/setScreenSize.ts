export const setScreenSize = () => {
  const vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty("--vh", `${vh}px`);

  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const maxWidth = Math.min(375, windowWidth);
  document.documentElement.style.setProperty(
    "--app-max-width",
    `${maxWidth}px`
  );
};
