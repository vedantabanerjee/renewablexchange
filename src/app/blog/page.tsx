/* 
THIS IS THE BLOGS PAGE. 
FUNCTIONS:
  - Calls the News API and fetches articles from different sources about renewable or green energy
  - Sends the data to the BlogsCard component which returns a Card with the raw data styled and embedded
  - Exports that and sends to the original page -> std::out
*/

"use client"; // This is essential to avoid compile time error since the code uses useEffect

import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "@/components/BlogCard";

const Blogs: React.FC = () => {
  // States to track blogs and loading statuses
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch blogs from the News API
        // !!!!!! V REMEMBER TO ADD THE API KEY FROM THE BOTTOM WHEN IN USE !!!!!!!
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=renewable energy OR green energy OR sustainable energy&apiKey=2c8a3dec17ae4eeda3bed9d853740c52`
        );

        // Update the blogs state with the fetched data
        setBlogs(response.data.articles);
        setLoading(false);
      } catch (error) {
        // Log error if fetching blogs fails
        // Set loading status to false
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    // Calling the fetchBlogs function when the component mounts
    fetchBlogs();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">
        Blogs about Green Energy and Sustainability
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          // Calling the BlogCard componenet and passing props for std::out
          <BlogCard
            key={index}
            title={blog.title}
            summary={blog.description}
            author={blog.author}
            date={blog.publishedAt}
            image={blog.urlToImage}
            link={blog.url}
          />
        ))}
      </div>
    </main>
  );
};

export default Blogs;

//News api key: 2c8a3dec17ae4eeda3bed9d853740c52
