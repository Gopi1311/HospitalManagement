import React, { useState } from 'react';
import Contact from './home/Contact';

const newsArticles = [
  {
    id: 1,
    date: 'Monday 05, September 2021',
    author: 'By Author',
    views: 68,
    likes: 86,
    title: 'A passion for putting patients first',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare...',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    date: 'Monday 05, September 2021',
    author: 'By Author',
    views: 68,
    likes: 86,
    title: 'New advancements in health care',
    excerpt:
      'Quisque placerat scelerisque tortor ornare ornare. Velit nascetur proin massa in. Consequat faucibus porttitor enim et...',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    date: 'Monday 05, September 2021',
    author: 'By Author',
    views: 68,
    likes: 86,
    title: 'Understanding surgery procedures',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit nascetur proin massa in...',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    date: 'Monday 05, September 2021',
    author: 'By Author',
    views: 68,
    likes: 86,
    title: 'Professional tips for new doctors',
    excerpt:
      'Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor...',
    imageUrl: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
  },
];

const recentPosts = newsArticles;

const categories = [
  { id: 1, name: 'Surgery', count: 3 },
  { id: 2, name: 'Health Care', count: 5 },
  { id: 3, name: 'Medical', count: 8 },
  { id: 4, name: 'Professional', count: 10 },
];

const News: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  const filteredPosts = newsArticles.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div>
      {/* Hero Section - Full Width */}
      <section className="relative w-full bg-[url('https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg')] bg-cover bg-center py-20 md:py-32">
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl text-white py-12">
            <p className="text-white font-semibold mb-2">Home / News</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Blog Posts
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {displayedPosts.map((post) => (
              <div key={post.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full md:w-64 h-64 object-cover" />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-blue-700 mb-1">
                      {post.date} | {post.author}
                    </p>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-700 mb-4">{post.excerpt}</p>
                  </div>
                  <button className="inline-flex items-center text-blue-700 hover:underline">
                    Read More
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-blue-700">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="flex items-center disabled:opacity-50 hover:text-blue-900"
              >
                &lt; Previous Page
              </button>
              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      currentPage === idx + 1 
                        ? 'bg-blue-700 text-white' 
                        : 'hover:bg-blue-200'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="flex items-center disabled:opacity-50 hover:text-blue-900"
              >
                Next Page &gt;
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-8">
            {/* Search */}
            <div>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
              />
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Recent Posts</h3>
              <ul className="space-y-4">
                {recentPosts.map((post) => (
                  <li key={post.id} className="flex space-x-4">
                    <img src={post.imageUrl} alt={post.title} className="w-16 h-16 object-cover rounded" />
                    <div>
                      <p className="text-xs text-blue-700 mb-1">
                        {post.date.split(',')[0]}
                      </p>
                      <p className="text-sm text-gray-700 hover:text-blue-700 cursor-pointer font-medium">
                        {post.title}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map((cat) => (
                  <li key={cat.id} className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-700 hover:text-blue-700 cursor-pointer">{cat.name}</span>
                    <span className="bg-blue-200 text-blue-900 rounded-full px-2 py-1 text-xs">
                      {cat.count}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* Contact Section */}
      <Contact/>
      </div>
    </div>
  );
};


export default News;
