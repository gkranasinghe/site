export default function LinksPage() {
  return (
    <section className="links-wrap">
      <h1>Personal</h1>
      <p>
        One paragraph about this page. Below are placeholders for lots of links—swap them with your real ones anytime.
      </p>

      <div className="links-grid">
        {Array.from({ length: 18 }).map((_, i) => (
          <a key={i} href="#" className="link-item">
            Link {i + 1}
          </a>
        ))}
      </div>
    </section>
  );
}
