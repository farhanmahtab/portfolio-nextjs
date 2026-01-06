export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Farhan Mahi",
    url: "https://mahi-one.vercel.app/.com",
    email: "farhan.mahi1999@gmail.com",
    jobTitle: "Software Engineer",
    sameAs: [
      "https://www.linkedin.com/in/farhan-mahtab-mahi-72037320a/",
      "https://github.com/farhanmahtab",
    ],
    knowsAbout: [
      "Full-Stack Development",
      "Ruby on Rails",
      "Next.js",
      "PostgreSQL",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
