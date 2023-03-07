const scrollIntoView = (
  cssSelector,
  options = { behavior: 'smooth', block: 'start', inline: 'nearest' }
) => {
  const element = document.querySelector(cssSelector);
  if (element) {
    element.scrollIntoView(options);
  }
};

export default scrollIntoView;
