import React from "react";

const posts = [
  {
    title: "The LGBTQ+ homeownership story in numbers",
    description: "The fight against LGBTQ+ housing discrimination has turned a corner. Learn yo...",
    link: "#",
  },
  {
    title: "Vishal Garg, Founder and CEO of Better",
    description: "Better.com CEO Vishal Garg has been interested in tech and lending for...",
    link: "#",
  },
  {
    title: "The Year of the Home: 2020 in Review",
    description: "In the socially distanced world of 2020, Better helped 88,100+ new clien...",
    link: "#",
  },
  {
    title: "Why I Started Better Mortgage",
    description: "Most founders have a story they pitch when asked about what their compan...",
    link: "#",
  },
  {
    title: "Bringing it home: 2019 in review",
    description: "2019 was a great year for Better Mortgage and our homeowners. Here's a loo...",
    link: "#",
  },
  {
    title: "Finding Home: Taisha",
    description: "A doctor and single parent, forced to downsize after divorce, navigates debt...",
    link: "#",
  },
  {
    title: "Finding Home: Dan and Louise",
    description: "They didn’t think homeownership was in the cards. Now they’re living a...",
    link: "#",
  },
  {
    title: "How long does it take to get a HELOC? Speed up the process",
    description: "Discover how long it takes to get a HELOC, learn the step-by-step process, an...",
    link: "#",
  },
  {
    title: "Self-employed? Here’s how to get a mortgage",
    description: "Here’s what our underwriters take into consideration when...",
    link: "#",
  },
];

const RelatedPostsSection = () => {
  return (
    <section className="bg-[#f5fbf7] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-gray-900">
          Related posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-[#f3f7f5] p-6 rounded-xl border border-gray-200 hover:shadow-md transition duration-300"
            >
              <h3 className="text-base font-medium text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-700 mb-4">{post.description}</p>
              <a
                href={post.link}
                className="text-green-700 font-medium text-sm inline-flex items-center hover:underline"
              >
                Read now <span className="ml-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPostsSection;
