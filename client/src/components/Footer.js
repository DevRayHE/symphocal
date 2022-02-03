import React from "react";

const Footer = () => {
	return (
		<div className="footer container">
			<footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
				<div className="col-md-4 d-flex align-items-center">
					<a
						href="/"
						className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
					>
						{/* <svg class="bi" width="30" height="24">
							<use href="#bootstrap"></use>
						</svg> */}
					</a>
					<span className="text-muted">© 2022 Developed by Ray He</span>
				</div>

				<ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
					<li className="ms-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Sent me an Email!">
						<a className="text-muted" href="mailto:ismryde@ismaustralia.com">
							<span className=
							// "contact-icon email"
							"footer__icon"
							>
								<i className="fa fa-envelope"></i>
							</span>
						</a>
					</li>
					<li className="ms-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Checkout my Github">
						<a className="text-muted" href="https://www.facebook.com/ismryde/">
							<span className=
							// "contact-icon github"
							"footer__icon"
							>
								<i className="fa fa-facebook-square"></i>
							</span>
						</a>
					</li>
          <li className="ms-3" data-bs-toggle="tooltip" data-bs-placement="top" title="My Linkedin Page">
						<a className="text-muted" href="https://www.instagram.com/ismryde/?igshid=75ql56jyeo1a">
							<span className=
							// "contact-icon linkedin"
							"footer__icon"
							>
								<i className="fa fa-instagram"></i>
							</span>
						</a>
					</li>
					<li className="ms-3" data-bs-toggle="tooltip" data-bs-placement="top" title="Download my resume">
						<a className="text-muted" href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F100003375948005">
							<span className=
							// "contact-icon file"
							"footer__icon"
							>
								<i className="fa fa-comments"></i>
								{/* <i className="fa fa-facebook-messenger"></i> */}
								{/* <FontAwesomeIcon icon="fa-brands fa-facebook-messenger" /> */}
							</span>
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default Footer;
