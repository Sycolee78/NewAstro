// Koste interactive demo — bundled entry (React bundled via esbuild).
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
// React/ReactDOM kept in module scope so the design files (which reference
// React.* and ReactDOM.createPortal as globals) resolve after bundling.
void ReactDOM;
