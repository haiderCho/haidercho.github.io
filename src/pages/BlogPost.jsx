import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { IoArrowBack } from 'react-icons/io5';
import { IoCalendarOutline, IoTimeOutline, IoPricetagsOutline } from 'react-icons/io5';

export default function BlogPost({ post, onBack }) {
  if (!post) return null;

  return (
    <div className="blog-post-detail page">
      <button className="back-button" onClick={onBack}>
        <IoArrowBack /> Back to Blog
      </button>

      <article className="full-post">
        {post.coverImage && (
          <div className="post-hero">
            <img src={post.coverImage} alt={post.title} className="post-cover-image" />
          </div>
        )}

        <header className="post-header">
          <div className="post-meta">
            <span className="meta-item">
              <IoCalendarOutline /> {post.date}
            </span>
            <span className="meta-item">
              <IoTimeOutline /> {post.readTime}
            </span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-tags">
            {post.tags?.map(tag => (
              <span key={tag} className="post-tag">
                <IoPricetagsOutline /> {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="post-content markdown-body">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}
