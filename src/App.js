import logo from "./logo.svg";
import "./App.css";

function App() {
	return (
		<>
			<div className="box">
				<div className="form">
					<h2>Welcome back, Olivia</h2>
					<p className="form-text">Continue with Google or enter your details</p>
					<a href="" className="google">
						<img
							className="google-img"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJRPM0YKkH8TPMNGEYHITBhn1GIyZfNcIvSw&usqp=CAU"
							alt=""
						/>
						<h5>Log in with Google</h5>
					</a>
					<div className="inputBox">
						<input className="log-input" type="email" />
						<label>Email</label>
						<i></i>
					</div>

					<div className="inputBox">
						<input className="log-input" type="password" />
						<label>Password</label>
						<i></i>
					</div>
					<div className="links">
						<div className="check-box">
							<input type="checkbox" />
							<span>Remember for 30 days</span>
						</div>
						<a href="#">Forgot Password</a>
					</div>
					<button type="submit">Log in</button>
					<div className="reg-box">
						<span>Don't have an account?</span>
						<a href="">Sign up for free</a>
					</div>
				</div>
				<div className="image">
					<img src="https://picsum.photos/id/60/500/515" alt="" />
				</div>
			</div>
		</>
	);
}

export default App;
