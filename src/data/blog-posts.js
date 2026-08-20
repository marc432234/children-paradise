export const blogPosts = [
  {
    slug: "why-play-is-so-important-for-early-childhood-development",
    category: "Child Development",
    title: "Why Play Is So Important for Early Childhood Development",
    excerpt: "Play is more than just fun. It helps children develop creativity, communication, problem-solving skills, confidence, and meaningful relationships.",
    image: "/images/blog/featured.png",
    featured: true,
    body: [
      { heading: "Play Helps Children Learn Naturally", paragraphs: ["Children learn best when they are actively engaged. Through play, they explore ideas, solve problems, make decisions, cooperate with others, and manage challenges.", "Even a simple game can become an opportunity to develop patience, creativity, and confidence."] },
      { heading: "Play Encourages Creativity", paragraphs: ["Children have incredible imaginations. Giving them opportunities to create, experiment, and explore allows that imagination to grow.", "Art, storytelling, pretend play, music, and building activities encourage children to think creatively and discover their own ideas."] },
      { heading: "Play Supports Social Development", paragraphs: ["Playing with other children teaches important social skills.", "Children learn to share and take turns, listen to others, express their feelings, cooperate, resolve small conflicts, and build friendships."] },
      { heading: "Learning Doesn’t Have to Feel Like Learning", paragraphs: ["One of the most powerful things about play is that children can learn without feeling like they’re sitting in a traditional lesson.", "Counting objects, building structures, telling stories, solving puzzles, or exploring nature can all introduce important concepts in an enjoyable and memorable way."] },
      { heading: "Let Children Learn Through Play", paragraphs: ["Every child learns differently, but one thing remains universal: children are naturally curious.", "When we give them the freedom, time, and support to play, we give them opportunities to discover new ideas, develop important skills, and become more confident in themselves."] },
    ],
  },
  { slug: "encourage-your-child-to-love-learning", category: "Learning", title: "5 Simple Ways to Encourage Your Child to Love Learning", excerpt: "Small changes at home can make learning more enjoyable and help children develop a natural curiosity.", image: "/images/blog/post-1.png" },
  { slug: "importance-of-social-skills-in-early-childhood", category: "Child Development", title: "The Importance of Social Skills in Early Childhood", excerpt: "Learn how everyday interactions help children communicate, cooperate, build friendships, and understand emotions.", image: "/images/blog/post-2.png" },
  { slug: "creative-activities-that-help-children-learn-through-play", category: "Activities", title: "Creative Activities That Help Children Learn Through Play", excerpt: "Discover simple activities that encourage creativity, imagination, and problem-solving.", image: "/images/blog/post-3.png" },
  { slug: "helping-your-child-build-confidence", category: "Parenting", title: "Helping Your Child Build Confidence from an Early Age", excerpt: "Practical ways parents and educators can create an environment where children feel confident, valued, and supported.", image: "/images/blog/post-4.png" },
  { slug: "creating-healthy-routines-for-young-children", category: "Parenting", title: "Creating Healthy Routines for Young Children", excerpt: "A consistent routine can help children feel secure while developing independence and healthy habits.", image: "/images/blog/post-5.png" },
  { slug: "learning-beyond-the-classroom", category: "Learning", title: "Learning Beyond the Classroom", excerpt: "Why everyday experiences, exploration, and play can be powerful opportunities for children to learn.", image: "/images/blog/post-6.png" },
];

export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
