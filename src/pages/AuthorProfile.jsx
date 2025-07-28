import React from "react";
import { useParams, Link } from "react-router-dom";
import "./AuthorProfile.css";

const AuthorProfile = () => {
  const { authorId } = useParams();

  // Dummy author data
  const authors = {
    1: {
      id: 1,
      name: "Waliza Islam Sporshita",
      bio: "This is a minimal author profile page to demonstrate routing functionality.She is the one who created this post. The author is a passionate writer who loves to share insights and knowledge through engaging blog posts.",
      avatar: null,
      joinDate: "January 2024",
      postsCount: 25,
      followersCount: 12000,
    },
    2: {
      id: 2,
      name: "Tanjina Akter",
      bio: "Tanjina Akter is a mental health advocate who believes in the importance of open conversations about emotional well-being.It is very important for our day to day life.",
      avatar: null,
      joinDate: "March 2024",
      postsCount: 8,
      followersCount: 156,
    },
    3: {
      id: 3,
      name: "Mahfuz Rahman",
      bio: "Mahfuz Rahman is passionate about breaking stigmas and encouraging honest discussions about mental health in society.",
      avatar: null,
      joinDate: "April 2024",
      postsCount: 12,
      followersCount: 203,
    },
    4: {
      id: 4,
      name: "Anika Sultana",
      bio: "Anika Sultana advocates for better mental health education and support systems in schools and communities.",
      avatar: null,
      joinDate: "May 2024",
      postsCount: 6,
      followersCount: 89,
    },
    5: {
      id: 5,
      name: "Rakibul Hasan",
      bio: "Rakibul Hasan believes in the power of courage and open conversations to create positive change in society.",
      avatar: null,
      joinDate: "June 2024",
      postsCount: 9,
      followersCount: 178,
    },
    6: {
      id: 6,
      name: "Nusrat Jahan",
      bio: "Nusrat Jahan is a strong advocate for self-care and believes that taking care of mental health is never selfish.",
      avatar: null,
      joinDate: "July 2024",
      postsCount: 4,
      followersCount: 92,
    },
    7: {
      id: 7,
      name: "Shakil Ahmed",
      bio: "Shakil Ahmed is working to break taboos around mental health discussions, especially within traditional family structures.",
      avatar: null,
      joinDate: "August 2024",
      postsCount: 7,
      followersCount: 134,
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
