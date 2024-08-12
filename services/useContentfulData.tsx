import { createClient } from "contentful";

type Entry = {
  contentType:
    | "event"
    | "cliente"
    | "eventosCarrossel"
    | "homeCarrossel1"
    | "homeCarrossel2"
    | "homeCarrossel3"
    | "homeBanner"
    | "faq";
};

export const getEntries = async ({ contentType }: Entry) => {
  const contentful = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  const entries = await contentful.getEntries({ content_type: contentType });

  return entries.items;
};
