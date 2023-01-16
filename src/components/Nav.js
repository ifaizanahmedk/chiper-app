import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Nav = (props) => {
	return (
		<nav className="nav">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/new">New Tweet</Link>
				</li>
			</ul>
		</nav>
	);
};

Nav.propTypes = {};

export default Nav;
