export type Project = {
  name: string;
  date: string;
  status: string;
  description: string;
  stack: readonly string[];
  media: { type: "video" | "img"; src: string };
};
