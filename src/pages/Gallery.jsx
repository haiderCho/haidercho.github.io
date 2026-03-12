const galleryItems = [
  { title: 'Code & Coffee', color: '#3d2a5c' },
  { title: 'City Lights', color: '#2a3d5c' },
  { title: 'Workspace', color: '#5c2a3d' },
  { title: 'Nature Walk', color: '#2a5c3d' },
  { title: 'Late Night Build', color: '#5c3d2a' },
  { title: 'Weekend Vibes', color: '#3d5c2a' },
  { title: 'Rainy Days', color: '#2a4a5c' },
  { title: 'Golden Hour', color: '#5c4a2a' },
];

export default function Gallery() {
  return (
    <div className="page">
      <h2 className="page-title">Pixels & Passion</h2>
      <div className="page-underline" />

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div key={item.title} className="gallery-item">
            <img
              src={`https://dummyimage.com/400x300/${item.color.replace('#', '')}/dcd7e8&text=`}
              alt={item.title}
              style={{ background: item.color }}
            />
            <div className="gallery-item-overlay">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
