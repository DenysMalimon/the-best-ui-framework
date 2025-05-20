import { Component, render } from './component';

export interface Route {
  path: string;
  component: Component<any>;
}

export class Router {
  constructor(private routes: Route[], private container: HTMLElement) {}

  start() {
    window.addEventListener('hashchange', () => this.resolve());
    this.resolve();
  }

  private resolve() {
    const path = location.hash.slice(1) || '/';
    const route = this.routes.find(r => r.path === path);
    if (route) {
      render(route.component, this.container);
    }
  }
}
