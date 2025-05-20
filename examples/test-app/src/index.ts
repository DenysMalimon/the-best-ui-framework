import { createElement, render, Router, Route, useState, DIContainer } from 'the-best-ui-framework';

// Services using DI
class MessageService {
  getMessage() { return 'Welcome to The Best UI Framework!'; }
}

const container = new DIContainer();
container.register(MessageService, new MessageService());

function Home() {
  const [getCount, setCount] = useState(0);
  (setCount as any).subscribe(() => update());
  const msg = container.resolve<MessageService>(MessageService).getMessage();
  function update() {
    const app = document.getElementById('app')!;
    render(App, app);
  }
  return createElement('div', {},
    createElement('h1', {}, msg),
    createElement('p', {}, `Count: ${getCount()}`),
    createElement('button', { onClick: () => setCount(getCount() + 1) }, 'Increment'),
    createElement('a', { href: '#/about' }, 'About')
  );
}

function About() {
  return createElement('div', {},
    createElement('h1', {}, 'About'),
    createElement('a', { href: '#/' }, 'Home')
  );
}

const routes: Route[] = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

function App() {
  return createElement('div', {},
    createElement('div', { id: 'view' })
  );
}

const app = document.getElementById('app')!;
render(App, app);
const router = new Router(routes, document.getElementById('view')!);
router.start();
