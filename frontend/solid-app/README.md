# my-solid-js-app

> Snowpack starter project with [solid.js](https://www.solidjs.com) & [vanilla-extract](https://vanilla-extract.style)

## Getting Started 

1. Clone this repository with [degit](https://github.com/Rich-Harris/degit) into a new folder
```bash
> npx degit dyoung2019/my-solid-js-app my-new-project
```

2. Install all the project dependencies (i.e. snowpack, solid.js and vanilla-extract)  in the sample project
```bash
> cd my-new-project
> npm install
```

3. To run developement mode (e.g. snowpack dev)

```bash
> npm start
```

4. To run production mode (i.e. snowpack build)
```bash
> npm run build
```

### Modules used

- [snowpack](https://www.snowpack.dev)
  - JS frontend build tool
- [solid.js](https://www.solidjs.com)
  - ***A declarative, efficient and flexible JavaScript library for building user interfaces.***
  - Reactive JS UI framework using JSX with Typescript
- [vanilla-extract](https://vanilla-extract.style)
  - ***Zero-runtime Stylesheets in TypeScript.***
  - CSS-in-TS transpiler

### Credits 

- [Solid snowpack starter (+ tailwind 2)](https://github.com/amoutonbrady/snowpack-solid) by [amoutonbrady](https://github.com/amoutonbrady)
- [Solid templates using vite](https://github.com/solidjs/templates)

## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```
### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
