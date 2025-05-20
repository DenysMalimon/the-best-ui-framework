export function useState<T>(initial: T): [() => T, (v: T) => void] {
  let value = initial;
  const listeners: ((v: T) => void)[] = [];
  const get = () => value;
  const set = (v: T) => {
    value = v;
    for (const l of listeners) l(value);
  };
  (set as any).subscribe = (l: (v: T) => void) => listeners.push(l);
  return [get, set];
}
