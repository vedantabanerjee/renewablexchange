import React from 'react';

interface BlogCardProps {
  title: string;
  summary: string;
  author: string;
  date: string;
  image: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, summary, author, date, image, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{summary}</p>
        <p className="text-gray-500 text-sm mb-2">{`By ${author}`}</p>
        <p className="text-gray-500 text-sm mb-2">{new Date(date).toLocaleDateString()}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
