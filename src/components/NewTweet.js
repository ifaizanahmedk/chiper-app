import { useState } from "react";

const NewTweet = () => {
	const [text, setText] = useState("");

	const handleChange = (e) => {
		const text = e.target.value;

		setText(text);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// TODO: Add tweet to store

		console.log("New Tweet: ", text);

		setText("");
	};

	const tweetLeft = 280 - text.length;

	return (
		<div>
			<h3 className="center">Compose New Tweet</h3>
			<form className="new-tweet" onSubmit={handleSubmit}>
				{/* TODO: Redirect to / if submitted */}
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

export default NewTweet;
