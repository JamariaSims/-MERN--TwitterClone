import React from "react";
import "./LoginPage.css";
function LoginPage() {
	return (
		<div class="App">
			<section class="MainLeft-Container">
				<div class="MainLeft-ContainerBody">
					<img
						src={require("../Assets/ConnectX-Logo.png")}
						alt="ConnectX Logo"
					/>
					<p>Connect with friends and the world around you on ConnectX</p>
				</div>
			</section>
			<section class="MainRight-Container">
				<h2>Login</h2>
				<form id="Form">
					<label>Username</label>
					<br />
					<input name="username" id="username" type="text" required />
					<br />
					<label>Password</label>
					<br />
					<input name="password" id="password" type="text" required />
					<br />
					<button id="BTN-Login" type="submit">
						SIGN IN
					</button>
				</form>
				<div class="BottomForm-Container">
					<a href="/Pages/CreateAccount.html">Create Account</a>
				</div>
				<span class="ERROR-Login hide" id="ERROR-Login">
					Username or password is incorrect
					<p>Username cannot contains special characters</p>
				</span>
			</section>
		</div>
	);
}
export default LoginPage;
