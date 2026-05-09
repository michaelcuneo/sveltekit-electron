import { mount } from "svelte";
import App from "./App.svelte";

const target = document.getElementById("app");

if (!target) {
  throw new Error('Renderer root element "#app" was not found.');
}

mount(App, { target });
