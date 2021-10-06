/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from "react";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { fetchListTypeMovie } from "../../service/request";

export default async (req, res) => {
  // An array with your links

  const links = [
    {
      url: "/category?typeid=28&type=Action",
      changefreq: "daily",
      priority: 0.1,
    },
  ];

  // Create a stream to write to

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream),
  ).then((data) => data.toString());

  res.end(xmlString);
};
