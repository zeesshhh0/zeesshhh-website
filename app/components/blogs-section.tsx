"use client";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import Link from "next/link";

interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
}

export function BlogsSection() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zeesshhh"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.items);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto space-y-6">
      {loading ? (
        <div className="space-y-2">
          <p className="text-md sm:text-xl font-semibold text-zinc-300 mb-2 text-center">Loading articles...</p>
        </div>
      ) : (
        <div className="space-y-2">
          {articles.map((article) => (
            <Link key={article.title} href={article.link} target="_blank">
              <h3 className="text-md sm:text-xl font-semibold text-zinc-300 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{new Date(article.pubDate).toLocaleDateString()}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}