import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Manufacturer from "./pages/dashboard/manufacturer.jsx";
import Transporter from "./pages/dashboard/transporter.jsx";
import "./index.css";
// Import your publishable key

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ClerkProvider>
	</React.StrictMode>
);
