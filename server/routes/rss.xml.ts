import { Title } from "./../../.nuxt/components.d";
import { serverQueryContent } from "#content/server";
import RSS from "rss";

export default defineEventHandler(async (event) => {
  const feed = new RSS({
    Title: "Aayush Mishra",
    site_url: "https://portfolio-v0-alpha.vercel.app",
    feed_url: `https://tihunov.com/rss.xml`,
  });

  const docs = await serverQueryContent(event)
    .sort({ date: -1 })
    .where({ _partial: false })
    .find();
  const blogPosts = docs.filter((doc) => doc?._path?.includes("/posts"));

  for (const doc of blogPosts) {
    feed.item({
      title: doc.title ?? "-",
      url: `https://portfolio-v0-alpha.vercel.app${doc._path}`,
      date: doc.date,
      description: doc.description,
    });
  }

  const feedString = feed.xml({ indent: true });
  event.res.setHeader("content-type", "text/xml");
  event.res.end(feedString);
});
