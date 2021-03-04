const compose = (...fn) => (comp) => {
  return fn.reduceRight((wrapped, f) => f(wrapped), comp);
};

export { compose };
