const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const scrollToElement = element => {
  element?.scrollIntoView({ behavior: 'smooth' });
};

export { scrollToTop, scrollToElement };
