import {
	Button,
	DialogActions,
	DialogContent,
	DialogTitle,
	Modal,
	TextField,
} from "@mui/material";
import React, { useState } from "react";

const Login = ({ isOpen, setIsOpen, onLogin }) => {
	const [input, setInput] = useState({ username: "", password: "" });
	return (
		<Modal open={isOpen}>
			<DialogTitle>Login</DialogTitle>
			<DialogContent>
				<TextField
					label="Username"
					variant="outlined"
					margin="dense"
					fullWidth
					value={input.username}
					onChange={(e) => setInput({ ...input, username: e.target.value })}
				/>
				<TextField
					label="Password"
					type="password"
					variant="outlined"
					margin="dense"
					fullWidth
					value={input.password}
					onChange={(e) => setInput({ ...input, password: e.target.value })}
				/>
			</DialogContent>
			<DialogActions>
				<Button
					color="secondary"
					onClick={() => {
						setIsOpen(false);
					}}
				>
					Cancel
				</Button>
				<Button
					color="primary"
					onClick={() => {
						onLogin(input);
					}}
				>
					Login
				</Button>
			</DialogActions>
		</Modal>
	);
};

export default Login;
