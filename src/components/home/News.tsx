import React from 'react';
import { Eye,Heart } from 'lucide-react';

const newsData = [
  {
    id: 1,
    date: 'Monday 05, September 2021',
    author: 'By Author',
    title: "This Article's Title goes Here, but not too long.",
    views: 58,
    likes: 86,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    date: 'Monday 05, September 2021',
    author: 'By Author',
    title: "This Article's Title goes Here, but not too long.",
    views: 68,
    likes: 86,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    date: 'Monday 05, September 2021',
    author: 'By Author',
    title: "This Article's Title goes Here, but not too long.",
    views: 88,
    likes: 86,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    date: 'Monday 05, September 2021',
    author: 'By Author',
    title: "This Article's Title goes Here, but not too long.",
    views: 68,
    likes: 86,
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
];


const NewsCard: React.FC<{
  date: string;
  author: string;
  title: string;
  views: number;
  likes: number;
  imageUrl: string;
}> = ({ date, author, title, views, likes, imageUrl }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md overflow-hidden">
      <div className="sm:w-1/3 flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover min-h-48 sm:min-h-0"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow text-left">
        <p className="text-xs text-blue-700 mb-1 ">
          {date} | {author}
        </p>
        <h3 className="text-blue-900 font-semibold text-sm mb-3">{title}</h3>
        <div className="flex space-x-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Eye size={20} color='blue'/>
            <span>{views}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart size={20} color='red'/>
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const News: React.FC = () => {
  return (
    <section className=" py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs text-blue-400 tracking-widest mb-2 uppercase font-semibold">
          BETTER INFORMATION, BETTER HEALTH
        </p>
        <h2 className="text-3xl font-serif font-extrabold text-blue-900 mb-10">News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {newsData.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-3">
          <span className="w-3 h-3 rounded-full bg-blue-600"></span>
          <span className="w-3 h-3 rounded-full bg-blue-300"></span>
          <span className="w-3 h-3 rounded-full bg-blue-300"></span>
        </div>
      </div>
    </section>
  );
};

export default News;


