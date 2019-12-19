import { UiEngine } from "./infra/engine";
import { template } from "./template";

const element = document.getElementById("app");
const engine = new UiEngine(element, template);

export { engine };
