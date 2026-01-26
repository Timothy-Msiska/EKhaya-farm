export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export const newsArticles: Article[] = [
  {
    slug: "ekhaya-expands-to-karonga",
    title: "Ekhaya Farms Expands to Karonga District",
    excerpt:
      "We are proud to open our newest Ekhaya Farm Food Store in Karonga, bringing trusted, high-quality meat products to northern Malawi.",
    date: "December 15, 2025",
    category: "Announcement",
    image: "/placeholder.svg?height=300&width=500",
    content: `
Ekhaya Farms is pleased to announce the expansion of our operations to Karonga District.

This new Ekhaya Farm Food Store will provide residents with access to premium beef, goat meat, and poultry produced through responsible livestock farming practices. By expanding north, we are strengthening Malawi’s meat supply chain and ensuring families have access to safe, nutritious protein.

The Karonga store also creates employment opportunities and supports local livestock farmers through structured partnerships. This expansion reflects our long-term commitment to livestock development and food security across Malawi.
    `,
  },
//   other articles can be added here
];
