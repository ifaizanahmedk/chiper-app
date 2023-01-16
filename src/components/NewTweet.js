import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddTweet } from "../actions/tweets";

const NewTweet = ({ dispatch, id }) => {
	const navigate = useNavigate();
	const [text, setText] = useState("");

	const handleChange = (e) => {
		const text = e.target.value;

		setText(text);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(handleAddTweet(text, id));

		setText("");

		if (!id) {
			navigate("/");
		}
	};

	const tweetLeft = 280 - text.length;

	return (
		<div>
			<h3 className="center">Compose New Tweet</h3>
			<form className="new-tweet" onSubmit={handleSubmit}>
				<textarea
					className="textarea"
					placeholder="What's happening?"
					value={text}
					onChange={handleChange}
					maxLength={280}
				/>
				{tweetLeft <= 100 && (
					<div className="tweetLength">{tweetLeft}</div>
				)}
				<button className="btn" type="submit" disabled={text === ""}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default connect()(NewTweet);
