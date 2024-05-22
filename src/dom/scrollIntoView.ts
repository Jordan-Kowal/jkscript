type Options = {
  behavior: "auto" | "instant" | "smooth";
  block: "start" | "center" | "end" | "nearest";
  inline: "start" | "center" | "end" | "nearest";
};

const scrollIntoView = (
  cssSelector: string,
  options: Options = { behavior: "smooth", block: "start", inline: "nearest" },
) => {
  const element = document.querySelector(cssSelector);
  if (element) {
    element.scrollIntoView(options);
  }
};

export default scrollIntoView;
