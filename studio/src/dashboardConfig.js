export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6050d474432356e01c9e402a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-c1wcqz6k",
                  apiId: "4afa1798-d119-4938-9a98-21e01e794fbd",
                },
                {
                  buildHookId: "6050d474432356e0669e4644",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-c4bpkr93",
                  apiId: "16ca671e-9e4a-4beb-b2ab-3c638093a0ce",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jondhill333/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-c4bpkr93.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
