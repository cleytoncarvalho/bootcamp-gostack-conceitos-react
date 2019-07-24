import React from "react";

function PostHeader({ author, date }) {
  return (
    <div className="header">
      <img src={author.avatar} alt="" />

      <div className="author-infos">
        <p>{author.name}</p>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostContent({ content }) {
  return <div className="content">{content}</div>;
}

function PostComments({ comments }) {
  return (
    <div className="comments">
      {comments.map(comment => (
        <div key={comment.id} className="comment-item">
          <img src={comment.author.avatar} alt="" />
          <p>
            <strong>{comment.author.name}</strong> {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post-item">
      <PostHeader author={author} date={date} />
      <PostContent content={content} />
      <PostComments comments={comments} />
    </div>
  );
}

export default PostItem;
