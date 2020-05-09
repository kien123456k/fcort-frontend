/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import imgUrl from './imgUrl';
import './style.css';

 
class Login extends Component {
 constructor(props){
	 super(props);	

 }

	render() {
		console.log(this.props.color);
		const styles = {
			backgroundColor: this.props.color,
		}
		return (
				<div className="body" style={styles}>
				<img className="wave" src={imgUrl.background} />
				<div className="container">
					<div className="img">
						<img src={imgUrl.logo} />
					</div>
					<div className="login-content">
						<form action="index.html">
							<img src={imgUrl.logo} />
							<h2 className="title">Welcome</h2>
							<div className="input-div one">
								<div className="i">
									<i className="fas fa-user"></i>
								</div>
								<div className="div">
									<h5>Username</h5>
									<input type="text" className="input" />
								</div>
							</div>
							<div className="input-div pass">
								<div className="i">
									<i className="fas fa-lock"></i>
								</div>
								<div className="div">
									<h5>Password</h5>
									<input type="password" className="input" />
								</div>
							</div>
							<a href="#">Forgot Password?</a>
							<input type="submit" className="btn" value="Login" />
						</form>
					</div>
				</div>
		</div>
		);
	}
}
export default Login;
