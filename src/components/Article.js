import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const getEmoji = () => {
           const emoji = minutes < 30 ? "☕️" : "🍱";
    const count = minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
    return emoji.repeat(count);
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {getEmoji()} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
    