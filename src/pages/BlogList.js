import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../mock/blog.json';

const BlogList = () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Blogs</h1>
        <div className="cards grid-row">
          {blogs.map((blog, i) => (
            <div className="card" key={i}>
              <div className="card-top">
                <img src={blog.image} alt="Blog Name" />
              </div>
              <div className="card-info">
                <h2>{blog.title}</h2>
                <span className="date">{blog.date}</span>
                <p className="excerpt">{blog.description}</p>
              </div>
              <div className="card-bottom flex-row">
                <a href="#" className="read-more">- {blog.author}</a>
                <Link to={`/blog/${i}`} className="button btn-yellow">
                  View more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;