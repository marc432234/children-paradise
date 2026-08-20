import BlogIndex from "@/components/BlogIndex";

export const metadata = {
  title: "Blog",
  description: "Practical resources and ideas for families from Children's Paradise Learning Academies.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Resources for Families | Children's Paradise",
    description: "Practical resources and ideas for families from Children's Paradise Learning Academies.",
    url: "/blog",
    images: [{ url: "/images/blog/featured.png", width: 800, height: 450, alt: "Children's Paradise blog — resources for families" }],
  },
  twitter: {
    title: "Blog — Resources for Families | Children's Paradise",
    description: "Practical resources and ideas for families from Children's Paradise Learning Academies.",
    images: ["/images/blog/featured.png"],
  },
};

export default function BlogPage() { return <BlogIndex />; }
