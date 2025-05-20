export type Component<P = any> = (props: P) => HTMLElement;

export function createElement(tag: string | Component<any>, props: any = {}, ...children: any[]): HTMLElement {
  if (typeof tag === 'function') {
    return tag({ ...props, children });
  }
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(props || {})) {
    if (key.startsWith('on') && typeof value === 'function') {
      el.addEventListener(key.substring(2).toLowerCase(), value as EventListener);
    } else if (value != null) {
      el.setAttribute(key, String(value));
    }
  }
  for (const child of children) {
    if (child instanceof Node) {
      el.appendChild(child);
    } else if (child != null) {
      el.appendChild(document.createTextNode(String(child)));
    }
  }
  return el;
}

export function render(component: Component<any>, container: HTMLElement) {
  container.innerHTML = '';
  container.appendChild(component({}));
}
