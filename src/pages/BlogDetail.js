import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../mock/blog.json';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs[id];

  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>{blog.title}</h1><br />
        <p>{blog.description}</p>
        <h5>- {blog.author}</h5>
        <img src={blog.image} style={{ width: '500px', padding: '20px' }} />
        <h4 style={{ fontFamily: 'cursive' }}>Published on -{blog.date}</h4>
      </div>
    </>
  );
};

export default BlogDetail;