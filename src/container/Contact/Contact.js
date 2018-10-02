import React from 'react';
import './Contact.css';

const contact = () => {
	return(
		<div className="bg-contact100">
		<div className="container-contact100">
		<div className="wrap-contact100">
		<div className="mapouter">
		<div className="gmap_canvas">
		<iframe width="650" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=patiala%20india&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
		</div>
		</div>
				<form className="contact100-form validate-form">
					<span className="contact100-form-title">
						Contact Us
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Name is required">
						<input className="input100" type="text" name="name" placeholder="Name"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-user" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" placeholder="Email"/>
						<span className="focus-input100"></span>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div className="wrap-input100 validate-input" data-validate = "Message is required">
						<textarea className="input100" name="message" placeholder="Message"></textarea>
						<span className="focus-input100"></span>
					</div>

					<div className="container-contact100-form-btn">
						<button className="contact100-form-btn">
							Send
						</button>
					</div>
				</form>
			</div>
		</div>

	</div>

		);
}
export default contact;

