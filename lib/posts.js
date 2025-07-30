import matter from "gray-matter";
import path from "path";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";
import fs from "fs";

const postsDir = path.join(process.cwd(), "posts");
const sortPosts = () => {
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDir, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const matterRes = matter(fileContent);
    return {
      id,
      title: matterRes.data.title,
      category: matterRes.data.category,
      date: matterRes.data.date,
    };
  });
  return allPostsData.sort((a, b) => {
    const format = "YYYY-MM-DD";
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);
    return dateOne.isBefore(dateTwo) ? 1 : dateOne.isAfter(dateTwo) ? -1 : 0;
  });
};

export default sortPosts;
