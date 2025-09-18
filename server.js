const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const newsData = {
  status: "ok",
  totalResults: 10,
  articles: [
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "Alice Johnson",
      title: "Global Markets Rally on Tech Boom",
      description: "Stock markets surged today as tech companies reported record profits.",
      url: "https://example.com/article1",
      urlToImage: "https://picsum.photos/200/300?1",
      publishedAt: "2025-09-18T08:30:00Z",
      content: "Investors are optimistic about the future of technology stocks..."
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Brian Smith",
      title: "New Study Shows Benefits of Morning Exercise",
      description: "Scientists suggest exercising before breakfast boosts metabolism.",
      url: "https://example.com/article2",
      urlToImage: "https://picsum.photos/200/300?2",
      publishedAt: "2025-09-18T09:00:00Z",
      content: "The research highlights how early workouts improve energy levels..."
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Clara Davis",
      title: "AI Tools Help Developers Write Code Faster",
      description: "Artificial Intelligence is becoming a regular tool in software teams.",
      url: "https://example.com/article3",
      urlToImage: "https://picsum.photos/200/300?3",
      publishedAt: "2025-09-18T09:30:00Z",
      content: "Teams report saving hours of work with AI code assistants..."
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "David Lee",
      title: "Startup Raises $50M to Build Electric Bikes",
      description: "The company plans to expand across Europe and Asia.",
      url: "https://example.com/article4",
      urlToImage: "https://picsum.photos/200/300?4",
      publishedAt: "2025-09-18T10:00:00Z",
      content: "The funding round was led by major VC firms..."
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: "Emma Brown",
      title: "Oil Prices Drop as Supply Increases",
      description: "Global oil supply surged, causing a drop in prices.",
      url: "https://example.com/article5",
      urlToImage: "https://picsum.photos/200/300?5",
      publishedAt: "2025-09-18T10:30:00Z",
      content: "Experts say prices may stabilize in coming weeks..."
    },
    {
      source: { id: "nyt", name: "New York Times" },
      author: "Frank Wilson",
      title: "Climate Change Talks Enter Final Round",
      description: "World leaders meet to finalize agreements on emissions cuts.",
      url: "https://example.com/article6",
      urlToImage: "https://picsum.photos/200/300?6",
      publishedAt: "2025-09-18T11:00:00Z",
      content: "Negotiators are pushing for stricter carbon targets..."
    },
    {
      source: { id: "guardian", name: "The Guardian" },
      author: "Grace Miller",
      title: "Breakthrough in Cancer Research",
      description: "Scientists report promising results in new treatment trials.",
      url: "https://example.com/article7",
      urlToImage: "https://picsum.photos/200/300?7",
      publishedAt: "2025-09-18T11:30:00Z",
      content: "The trial shows improved survival rates in patients..."
    },
    {
      source: { id: "al-jazeera", name: "Al Jazeera" },
      author: "Hassan Ali",
      title: "Middle East Peace Talks Resume",
      description: "Diplomatic efforts are underway to resolve long-standing disputes.",
      url: "https://example.com/article8",
      urlToImage: "https://picsum.photos/200/300?8",
      publishedAt: "2025-09-18T12:00:00Z",
      content: "Officials say early discussions have been constructive..."
    },
    {
      source: { id: "forbes", name: "Forbes" },
      author: "Isabella Turner",
      title: "Entrepreneurs Embrace Remote Work Trend",
      description: "More startups are building fully remote teams to save costs.",
      url: "https://example.com/article9",
      urlToImage: "https://picsum.photos/200/300?9",
      publishedAt: "2025-09-18T12:30:00Z",
      content: "Experts believe hybrid and remote work are here to stay..."
    },
    {
      source: { id: "engadget", name: "Engadget" },
      author: "Jack Roberts",
      title: "New Smartphone Features 1-Week Battery Life",
      description: "The phone uses advanced battery tech for extended usage.",
      url: "https://example.com/article10",
      urlToImage: "https://picsum.photos/200/300?10",
      publishedAt: "2025-09-18T13:00:00Z",
      content: "The device is expected to launch next month..."
    }
  ]
};

app.get("/news", (req, res) => {
  res.json(newsData);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
