import React from "react";

const BlogCard = ({ title, date }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
      {/* Additional blog card content */}
    </div>
  );
};

export default BlogCard;
