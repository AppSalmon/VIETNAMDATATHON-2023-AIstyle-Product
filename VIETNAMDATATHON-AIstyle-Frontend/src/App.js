import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import ResultChat from "./pages/ResultChat";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";
import VirtualTryOn from "./pages/VirtualTryOn";
import { store } from "./redux/store";
import { Provider } from "react-redux";
function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					<Route
						path="/"
						element={
							<MainLayout>
								<Home />
							</MainLayout>
						}
					/>
					<Route
						path="/result-chat"
						element={
							<MainLayout>
								<ResultChat />
							</MainLayout>
						}
					/>
					<Route
						path="/virtual-try-on"
						element={
							<MainLayout>
								<VirtualTryOn />
							</MainLayout>
						}
					/>
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;
