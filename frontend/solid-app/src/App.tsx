import type { Component } from "solid-js";
import { createSignal, onCleanup } from "solid-js";

import logo from "./logo.svg";
// import styles from "./App.module.css";
import { themeClass, counterStyle, logoStyle, headerStyle, linkStyle } from "./App.css.ts";
import { appStyle } from "./App.css";

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  const interval = setInterval(
    () => setCount(count => count + 1),
    1000
  );
  onCleanup(() => clearInterval(interval));

  return (
    <div class={themeClass}>
      <div class={appStyle}>
        <header class={headerStyle}>
          <div class={counterStyle}>Count is {count()}</div>
          <img src={logo} class={logoStyle} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>

          <a
            class={linkStyle}
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a>
        </header>

      </div>
    </div>
  );
};

export default App;
