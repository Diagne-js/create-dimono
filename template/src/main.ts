import "./index.css"
import App from "./App.di"
import {render} from "dimono"

const rootElement = document.getElementById('app');

if (rootElement) {
  render(App, "#app");
} else {
  console.error("Failed to find the root #app element.");
}