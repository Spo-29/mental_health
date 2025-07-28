import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BlogPost.css";

const BlogPost = ({ post }) => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [userComments, setUserComments] = useState([]);
  const [commentReactions, setCommentReactions] = useState({});

  // Reset user comments when component key changes (page changes)
  useEffect(() => {
    setUserComments([]);
    setCommentReactions({});
  }, [post.comments]);

  // Use comments from props (already paginated by BlogList) + any user-added comments
  const allComments = [...(post.comments || []), ...userComments];

  const reactions = [
    {
      name: "Like",
      emoji: "👍",
      count: post.reactions?.like || 20,
      color: "#4267B2",
    },
    {
      name: "Love",
      emoji: "❤️",
      count: post.reactions?.love || 60,
      color: "#E2264D",
    },
    {
      name: "Angry",
      emoji: "😠",
      count: post.reactions?.angry || 5,
      color: "#E74C3C",
    },
    {
      name: "Sad",
      emoji: "😢",
      count: post.reactions?.sad || 5,
      color: "#3498DB",
    },
  ];

  const handleReactionClick = (reactionName) => {
    setSelectedReaction(
      selectedReaction === reactionName ? null : reactionName
    );
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        text: newComment,
        author: "Current User",
        authorId: 999,
        date: new Date().toLocaleDateString(),
        reactions: { like: 0, dislike: 0 },
        colorClass: "default",
      };
      setUserComments([...userComments, comment]);
      setNewComment("");
    }
  };

  const handleCommentReaction = (commentId, reactionType) => {
    setCommentReactions((prev) => ({
      ...prev,
      [commentId]: prev[commentId] === reactionType ? null : reactionType,
    }));
  };

  return (
    <div className="blog-post">
      <div className="post-header">
        <span className="breadcrumb">Section &gt; Sub-section</span>
      </div>

      <h1 className="post-title">{post.title}</h1>
      <p className="post-excerpt">{post.excerpt}</p>

      <div className="post-image">
        <img src="/m_pic.jpeg" alt="Blog post" />
      </div>

      <p className="post-content">{post.content}</p>

      <div className="post-author">
        <div className="author-avatar"></div>
        <div className="author-info">
          <Link to={`/author/${post.author.id}`} className="author-name">
            {post.author.name}
          </Link>
          <span className="author-date">{post.date}</span>
        </div>
      </div>

      <div className="post-reactions">
        {reactions.map((reaction) => (
          <button
            key={reaction.name}
            className={`reaction-btn ${
              selectedReaction === reaction.name ? "selected" : ""
            }`}
            onClick={() => handleReactionClick(reaction.name)}
            style={{
              backgroundColor:
                selectedReaction === reaction.name ? reaction.color : "#f0f2f5",
              color: selectedReaction === reaction.name ? "white" : "#65676b",
            }}
          >
            <span className="reaction-emoji">{reaction.emoji}</span>
            <span className="reaction-name">{reaction.name}</span>
            <span className="reaction-count">{reaction.count}%</span>
          </button>
        ))}
      </div>

      <div className="comments-section">
        <h3 className="comments-title">
          {post.originalComments?.length || allComments.length} Comments
        </h3>

        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            className="comment-input"
            rows="3"
          />
          <button type="submit" className="comment-submit">
            Post
          </button>
        </form>

        <div className="comments-list">
          {/* Display comments passed from BlogList (already paginated) + user comments */}
          {allComments.map((comment) => (
            <div key={comment.id} className="comment">
              <div
                className={`comment-avatar avatar-${
                  comment.colorClass || "default"
                }`}
                title={`Color: ${comment.colorClass || "default"}`}
              ></div>
              <div className="comment-content">
                <div className="comment-header">
                  <Link
                    to={`/author/${comment.authorId || 1}`}
                    className="comment-author"
                  >
                    {comment.author}
                  </Link>
                  <span className="comment-date">{comment.date}</span>
                  <button className="comment-report">Report</button>
                </div>
                <p className="comment-text">{comment.text}</p>
                <div className="comment-actions">
                  <button
                    className={`comment-action ${
                      commentReactions[comment.id] === "like" ? "selected" : ""
                    }`}
                    onClick={() => handleCommentReaction(comment.id, "like")}
                  >
                    👍 Like
                  </button>
                  <button
                    className={`comment-action ${
                      commentReactions[comment.id] === "dislike"
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleCommentReaction(comment.id, "dislike")}
                  >
                    👎 Dislike
                  </button>
                  <button className="comment-action">Reply</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
