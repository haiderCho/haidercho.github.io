export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Building Scalable ML Pipelines with MLOps",
      date: "Oct 24, 2025",
      readTime: "8 min read",
      excerpt: "An in-depth look at how we implemented continuous training and model monitoring for our production CRM systems.",
      category: "MLOps"
    },
    {
      id: 2,
      title: "The Future of Semantic Search in E-commerce",
      date: "Aug 12, 2025",
      readTime: "6 min read",
      excerpt: "Exploring how vector embeddings and hybrid search are transforming product discovery and user experience.",
      category: "NLP"
    }
  ];

  return (
    <div className="page">
      <h2 className="page-title">Insights & Articles</h2>
      <div className="page-underline" />

      <div className="blog-list">
        {posts.map(post => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-meta">
              <span className="blog-category">{post.category}</span>
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
