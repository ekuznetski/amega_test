// i prefer to use lodash.debounce but in this small project i don't want to add an extra dependency
export function debounce(fn: Function, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
