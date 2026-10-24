export default function SectionHeading({ icon, title, style }) {
  return (
    <h3 className="section-heading" style={style}>
      {icon && <span className="section-heading-icon" aria-hidden="true">{icon}</span>}
      <span>{title}</span>
    </h3>
  );
}
