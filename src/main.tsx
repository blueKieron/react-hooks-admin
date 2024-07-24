import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "virtual:svg-icons-register";

// import "@/language";
import { store, persistor } from "@/redux";
import App from "./App";

import "@/styles/reset.less";
import "@/assets/iconfont/iconfont.less";
import "@/assets/fonts/font.less";
import "@/styles/common.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);
