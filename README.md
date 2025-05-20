# The Best UI Framework

This repository contains a small experimental UI framework written in **TypeScript** combining ideas from Angular and React. It features:

- **Components** with JSX-like rendering
- **State hooks** for reactive updates
- **A simple router** using hash-based navigation
- **Dependency injection** container

The library can be built and published to npm. A sample project in `examples/test-app` demonstrates the default setup, routing and reactive UI updates.

## Getting Started

1. Install dependencies (none required).
2. Build the framework and example:

```bash
npm run build
```

3. Run the example application in a browser:

```bash
npm run serve
```

## Publishing to npm

Update the `package.json` with your package name and run:

```bash
npm publish --access public
```

This will publish the framework so it can be installed via:

```bash
npm install <package-name>
```
