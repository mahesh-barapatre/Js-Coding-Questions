//debounce function
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};
const debounceFn = debounce(() => console.log("mahesh"), 1000);
debounceFn();
debounceFn();
debounceFn();
