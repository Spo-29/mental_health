import React, { useState } from "react";
import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import "./BlogList.css";
import mPic from "../assets/m_pic.jpeg";

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 1; // Show one post per page for demonstration

  // Dummy data for multiple blog posts
  const allPosts = [
    {
      id: 1,
      title: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      excerpt:
        "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      content:
        "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
      image: mPic,
      author: {
        id: 1,
        name: "Author Name",
      },
      date: "7 January 2025",
      reactions: {
        like: 20,
        love: 60,
        angry: 5,
        sad: 5,
      },
      comments: [
        {
          id: 1,
          text: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
          author: "Author Name",
          authorId: 1,
          date: "10 February 2025",
        },
        {
          id: 2,
          text: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
          author: "Author Name",
          authorId: 1,
          date: "10 February 2025",
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
      image: mPic,
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
      image: mPic,
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

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = allPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="blog-list">
      {currentPosts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogList;
