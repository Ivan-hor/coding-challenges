import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Application from "./Application";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <Application />
    </StrictMode>,
    rootElement
);
