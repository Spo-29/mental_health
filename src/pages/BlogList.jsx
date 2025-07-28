import React, { useState } from "react";
import BlogPost from "../components/BlogPost";
import Pagination from "../components/Pagination";
import "./BlogList.css";

const BlogList = () => {
  const [currentCommentPage, setCurrentCommentPage] = useState(1);

  // Dummy data for multiple blog posts
  const allPosts = [
    {
      id: 1,
      title:
        "Why Gen Z Cares More About Mental Health Than Any Generation Before",
      excerpt:
        "Mental health is no longer a hidden topic — and that's largely thanks to Generation Z. Unlike past generations, Gen Z openly talks about anxiety, depression, burnout, and self-care.",
      content:
        "Mental health is no longer a hidden topic — and that's largely thanks to Generation Z. Unlike past generations, Gen Z openly talks about anxiety, depression, burnout, and self-care. For them, emotional well-being is not a luxury; it's a priority.\n\nGrowing up in the digital age, Gen Z faces constant pressure from social media, academic competition, and uncertain job markets. But instead of ignoring the stress, they're breaking the stigma and demanding support — from friends, families, schools, and even workplaces.\n\nApps for meditation, therapy chats, and mental health awareness campaigns are all trending among this generation. Even hashtags like #selfcare, #mentalhealthmatters, and #it'sokaynottobeokay are now part of their daily vocabulary.\n\nWhat sets Gen Z apart is their courage to be vulnerable — to say \"I'm not okay\" and ask for help without shame. And that's not weakness. That's strength.",
      image: "/mental-health.jpeg",
      author: {
        id: 1,
        name: "Waliza Islam Sporshita",
      },
      date: "25 July 2025",
      reactions: {
        like: 20,
        love: 60,
        angry: 5,
        sad: 5,
      },
      comments: [
        {
          id: 1,
          text: "Finally someone's talking about this! Mental health should be as important as physical health.",
          author: "Tanjina Akter",
          authorId: 2,
          date: "26 July 2025",
          colorClass: "blue",
        },
        {
          id: 2,
          text: "Our generation is tired of pretending everything's fine. This post speaks the truth.",
          author: "Mahfuz Rahman",
          authorId: 3,
          date: "27 July 2025",
          colorClass: "green",
        },
        {
          id: 3,
          text: "I wish our schools taught us about mental health earlier. So many students suffer silently.",
          author: "Anika Sultana",
          authorId: 4,
          date: "28 July 2025",
          colorClass: "purple",
        },
        {
          id: 4,
          text: "It's brave to speak up. We need more open conversations like this in our society.",
          author: "Rakibul Hasan",
          authorId: 5,
          date: "29 July 2025",
          colorClass: "orange",
        },
        {
          id: 5,
          text: "Yes! Self-care is not selfish. Thanks for this beautiful post.",
          author: "Nusrat Jahan",
          authorId: 6,
          date: "30 July 2025",
          colorClass: "pink",
        },
        {
          id: 6,
          text: "Mental health is still a taboo in many families. Hope our generation can break that cycle.",
          author: "Shakil Ahmed",
          authorId: 7,
          date: "31 July 2025",
          colorClass: "teal",
        },
      ],
    },
    {
      id: 2,
      title: "Second Blog Post - Lorem Ipsum Dolor",
      excerpt:
        "This is the second blog post to demonstrate pagination functionality. Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      content:
        "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      image:
        "https://via.placeholder.com/600x250/4A4A4A/FFFFFF?text=Second+Post",
      author: {
        id: 1,
        name: "Author Name",
      },
      date: "5 January 2025",
      reactions: {
        like: 15,
        love: 45,
        angry: 3,
        sad: 2,
      },
      comments: [
        {
          id: 3,
          text: "Great second post! Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
          author: "Reader Name",
          authorId: 2,
          date: "6 January 2025",
        },
      ],
    },
    {
      id: 3,
      title: "Third Blog Post - More Lorem Ipsum",
      excerpt:
        "The third blog post for pagination demo. Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      content:
        "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      image:
        "https://via.placeholder.com/600x250/2E8B57/FFFFFF?text=Third+Post",
      author: {
        id: 1,
        name: "Author Name",
      },
      date: "3 January 2025",
      reactions: {
        like: 25,
        love: 55,
        angry: 8,
        sad: 4,
      },
      comments: [],
    },
  ];

  // PAGINATION LOGIC IN BLOGLIST
  const post = allPosts[0];
  const commentsPerPage = 2;
  const totalPages = Math.ceil(post.comments.length / commentsPerPage);
  const startIndex = (currentCommentPage - 1) * commentsPerPage;
  const currentComments = post.comments.slice(
    startIndex,
    startIndex + commentsPerPage
  );

  // Create modified post with paginated comments
  const postWithPaginatedComments = {
    ...post,
    comments: currentComments,
    originalComments: post.comments, // Keep original for pagination calculation
  };

  // DEBUG: Log pagination state
  console.log("🔥 BLOGLIST PAGINATION DEBUG:", {
    currentPage: currentCommentPage,
    totalComments: post.comments.length,
    commentsPerPage,
    startIndex,
    endIndex: startIndex + commentsPerPage,
    currentComments: currentComments.map((c) => c.author),
    totalPages,
  });

  return (
    <div className="blog-list">
      <BlogPost
        key={`page-${currentCommentPage}`}
        post={postWithPaginatedComments}
      />

      {/* PAGINATION CONTROLS IN BLOGLIST */}
      {post.comments.length > 2 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            margin: "20px 0",
            padding: "10px",
            backgroundColor: "#f0f8ff",
            border: "2px solid #4267B2",
            borderRadius: "8px",
          }}
        >
          {[1, 2, 3].map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => {
                console.log(
                  `🚀 BLOGLIST BUTTON ${pageNum} CLICKED! Current page was: ${currentCommentPage}`
                );
                setCurrentCommentPage(pageNum);
                console.log(`✅ BlogList page changed to: ${pageNum}`);
              }}
              style={{
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: "bold",
                backgroundColor:
                  currentCommentPage === pageNum ? "#4267B2" : "white",
                color: currentCommentPage === pageNum ? "white" : "#4267B2",
                border: "2px solid #4267B2",
                borderRadius: "6px",
                cursor: "pointer",
                minWidth: "40px",
              }}
            >
              {pageNum}
            </button>
          ))}
        </div>
      )}

      {/* DEBUG STATUS IN BLOGLIST */}
      <div
        style={{
          textAlign: "center",
          padding: "10px",
          background: "#e8f5e8",
          margin: "15px 0",
          borderRadius: "6px",
          border: "2px solid #4caf50",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        Total Comments: {post.comments.length} | Current Page:{" "}
        {currentCommentPage} | Total Pages: {totalPages}
        <br />
        Showing Comments: {currentComments.length}
        <br />
        <div style={{ color: "#d32f2f", marginTop: "8px" }}>
          Authors on this page:{" "}
          {currentComments.map((c) => c.author).join(" + ")}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
