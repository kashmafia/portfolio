import { Alert, Box, Paper, Typography } from "@mui/material";
import { useState } from "react";
import "./Home.css";
import AnimatedGradientText from "../../components/AnimatedGradientText/AnimatedGradientText";
import ResponsiveSearchBar from "../../components/ResponsiveSearchBar/SearchBar";

function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

	const handleSubmit = async (inputValue) => {
		console.log("Home - Starting API call with value:", inputValue); // Debug log

		if (!inputValue) {
			console.log("Home - Received empty input, aborting");
			return;
		}

		setIsLoading(true);
		setError(null);

		const payload = {
			query: inputValue, // Changed from 'message' to 'query' to match API expectation
		};

		console.log("Home - Sending payload:", JSON.stringify(payload)); // Debug log

		try {
			const response = await fetch(
				"http://ec2-18-222-214-150.us-east-2.compute.amazonaws.com:8000/chat",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify(payload),
				},
			);

			console.log("Home - Raw response status:", response.status); // Debug log

			if (!response.ok) {
				throw new Error(`Failed to get response: ${response.statusText}`);
			}

			const data = await response.json();
			console.log("Home - Parsed response data:", data); // Debug log
			setResponse(data);
		} catch (err) {
			console.error("Home - API Error:", err);
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="home-container">
			<h1 className="home-title">
				<AnimatedGradientText text="I go by Kash, but you can call me Kaushik if you really want to." />
			</h1>
			<p className="home-description">
				I'm a full-stack developer passionate about solving problems and
				creating amazing user experiences.
			</p>

			<div className="chat-container">
				<ResponsiveSearchBar onSubmit={handleSubmit} isLoading={isLoading} />

				{error && (
					<Alert
						severity="error"
						sx={{
							maxWidth: "600px",
							mx: "auto",
							mb: 2,
						}}
					>
						{error}
					</Alert>
				)}

				{response && (
					<Paper
						elevation={3}
						sx={{
							maxWidth: "800px",
							mx: "auto",
							mt: 4,
							p: 3,
							borderRadius: 2,
							backgroundColor: "background.paper",
							transition: "all 0.3s ease",
							"&:hover": {
								transform: "translateY(-2px)",
								boxShadow: 6,
							},
						}}
					>
						<Box sx={{ mb: 2 }}>
							<Typography
								variant="subtitle2"
								color="text.secondary"
								sx={{ mb: 1 }}
							>
								Response:
							</Typography>
							<Typography
								variant="body1"
								sx={{
									whiteSpace: "pre-wrap",
									lineHeight: 1.7,
								}}
							>
								{response.response ||
									response.message ||
									JSON.stringify(response, null, 2)}
							</Typography>
						</Box>
					</Paper>
				)}
			</div>
		</div>
	);
}

export default Home;
