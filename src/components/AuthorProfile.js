import React from "react";
import { useParams, Link } from "react-router-dom";
import "./AuthorProfile.css";

const AuthorProfile = () => {
  const { authorId } = useParams();

  // Dummy author data
  const authors = {
    1: {
      id: 1,
      name: "Author Name",
      bio: "This is a minimal author profile page to demonstrate routing functionality. The author is a passionate writer who loves to share insights and knowledge through engaging blog posts.",
      avatar: null,
      joinDate: "January 2024",
      postsCount: 25,
      followersCount: 1250,
    },
  };

  const author = authors[authorId] || authors[1];

  return (
    <div className="author-profile">
      <div className="profile-header">
        <Link to="/" className="back-link">
          ← Back to Blog
        </Link>
      </div>

      <div className="profile-content">
        <div className="profile-avatar-large"></div>

        <div className="profile-info">
          <h1 className="profile-name">{author.name}</h1>
          <p className="profile-bio">{author.bio}</p>

          <div className="profile-stats">
            <div className="stat">
              <span className="stat-number">{author.postsCount}</span>
              <span className="stat-label">Posts</span>
            </div>
            <div className="stat">
              <span className="stat-number">{author.followersCount}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat">
              <span className="stat-number">{author.joinDate}</span>
              <span className="stat-label">Joined</span>
            </div>
          </div>

          <button className="follow-btn">Follow</button>
        </div>
      </div>

      <div className="author-posts">
        <h2>Recent Posts</h2>
        <div className="posts-placeholder">
          <p>Recent blog posts by {author.name} would appear here...</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
