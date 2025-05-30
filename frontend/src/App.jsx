import CssBaseline from "@mui/material/CssBaseline";
import {
	ThemeProvider as MUIThemeProvider,
	createTheme,
} from "@mui/material/styles";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import "./App.css";

// Create a theme instance
const theme = createTheme({
	palette: {
		primary: {
			main: "#BE3144",
			light: "#ff6b70",
			dark: "#87001f",
		},
		secondary: {
			main: "#872341",
			light: "#ba4f6c",
			dark: "#55001b",
		},
		background: {
			default: "#f5f5f5",
			paper: "#ffffff",
		},
		text: {
			primary: "#22092C",
			secondary: "#666666",
		},
	},
	typography: {
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
		].join(","),
		h1: {
			fontWeight: 700,
			fontSize: "2.5rem",
			"@media (max-width:600px)": {
				fontSize: "2rem",
			},
		},
		h2: {
			fontWeight: 600,
			fontSize: "2rem",
			"@media (max-width:600px)": {
				fontSize: "1.75rem",
			},
		},
		h3: {
			fontWeight: 600,
			fontSize: "1.5rem",
		},
		body1: {
			fontSize: "1rem",
			lineHeight: 1.7,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 8,
					textTransform: "none",
					fontWeight: 600,
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: 12,
					boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
				},
			},
		},
	},
});

function App() {
	return (
		<MUIThemeProvider theme={theme}>
			<CssBaseline /> {/* Provides consistent baseline styles */}
			<ThemeProvider>
				<Router>
					<div className="flex flex-col min-h-screen">
						<Navbar className="sticky top-0 z-50" />
						<main className="flex-grow container mx-auto px-4">
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<About />} />
								<Route path="/projects" element={<Projects />} />
							</Routes>
						</main>
						<Footer className="sticky bottom-0" />
					</div>
				</Router>
			</ThemeProvider>
		</MUIThemeProvider>
	);
}

export default App;
