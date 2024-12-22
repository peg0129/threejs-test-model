//SDK利用準備
import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.DOMAIN,
  apiKey: import.meta.env.API_KEY,
});

//型定義
export type WorksResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Works[];
};

interface Thum{
  url: string;
  height: number;
  width: number;
}

interface Slider{
  url: string;
  height: number;
  width: number;
}

export type Works = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  thum: { url: string; height: number; width: number;};
  role: string;
  date: string;
  deliverable: string;
  url: string;
  text: string;
  slider: Slider[];
};

export type devResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: dev[];
};

export type dev = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};

//APIの呼び出し
export const getWorks = async (queries?: MicroCMSQueries) => {
  return await client.get<WorksResponse>({ endpoint: "works", queries });
};

export const getWorksDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Works>({
    endpoint: "works",
    contentId,
    queries,
  });
};

export const getDev = async (queries?: MicroCMSQueries) => {
  return await client.get<devResponse>({ endpoint: "dev", queries });
};