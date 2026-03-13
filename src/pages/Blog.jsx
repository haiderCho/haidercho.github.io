import { useState } from 'react';
import BlogPost from './BlogPost';

// Simple frontmatter parser to avoid Node.js dependency issues in browser
function parseFrontmatter(content) {
  try {
    const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
    if (!match) return { data: {}, content };
    
    const yaml = match[1];
    const body = content.slice(match[0].length).trim();
    const data = {};
    
    yaml.split(/\r?\n/).forEach(line => {
      const firstColon = line.indexOf(':');
      if (firstColon === -1) return;
      
      const key = line.slice(0, firstColon).trim();
      let value = line.slice(firstColon + 1).trim();
      
      // Basic type parsing
      if (value.startsWith('[') && value.endsWith(']')) {
        data[key] = value.slice(1, -1).split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
      } else {
        data[key] = value.replace(/^["']|["']$/g, '');
      }
    });
    
    return { data, content: body };
  } catch (e) {
    console.error("Error parsing frontmatter:", e);
    return { data: {}, content };
  }
}

// Eagerly load all blog posts at compile time to avoid runtime flicker
const rawPosts = import.meta.glob('../data/blog-posts/*.md', { 
  query: '?raw', 
  import: 'default',
  eager: true 
});

const preLoadedPosts = Object.entries(rawPosts)
  .filter(([path]) => !path.includes('_template.md'))
  .map(([path, content]) => {
    const { data, content: body } = parseFrontmatter(content);
    
    // Calculate read time dynamically
    const wordCount = body.trim().split(/\s+/).length;
    const calcReadTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
    
    return {
      id: path,
      slug: path.split('/').pop().replace('.md', ''),
      ...data,
      readTime: calcReadTime,
      content: body
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="page">
      <header className="page-header">
        <h2 className="page-title">Insights & Articles</h2>
        <div className="page-underline" />
      </header>

      <div className="blog-list">
        {preLoadedPosts.map(post => (
          <article 
            key={post.id} 
            className="blog-card"
            onClick={() => setSelectedPost(post)}
          >
            <div className="blog-card-meta">
              <span className="blog-category">{post.tags?.[0] || 'Article'}</span>
              <span className="blog-dot">•</span>
              <span className="blog-date">{post.date}</span>
              <span className="blog-dot">•</span>
              <span className="blog-read-time">{post.readTime}</span>
            </div>
            <h3 className="blog-card-title">{post.title}</h3>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <button className="blog-read-more">Read Article →</button>
          </article>
        ))}
      </div>
    </div>
  );
}
