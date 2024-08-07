import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import BlogContent from "../components/BlogContent";
import About from "../components/About";

const backendURL = "https://av-blog-app-be.vercel.app";

function BlogPage() {
  const [blog, setblog] = useState({});
  const { id } = useParams();

  async function fetchBlog() {
    const response = await axios.get(`${backendURL}/Blog/${id}`);
    setblog(response.data);
  }
  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div className="min-h-screen bg-[#231e1d] text-[#b8b4b0]  w-full flex flex-col font-[Alegreya]">
      <Title />
      <div className="Content w-full flex justify-around p-20">
        <BlogContent content={blog} />
        <div className="flex flex-col py-10 px-16 -mr-16 w-[35%]">
          <About />
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
