import matter from "gray-matter";
import path from "path";
import moment from "moment";
import { remark } from "remark";
import html from "remark-html";
import fs from "fs";
import { title } from "process";

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
      img: matterRes.data.post_image
    };
  });
  return allPostsData.sort((a, b) => {
    const format = "YYYY-MM-DD";
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);
    return dateOne.isBefore(dateTwo) ? 1 : dateOne.isAfter(dateTwo) ? -1 : 0;
  });
};

const getCategorisedPosts = () => {
	const sortedPosts = sortPosts();
	const categorisedPosts = {};

	sortedPosts.forEach((post) => {
		if (!categorisedPosts[post.category]) {
			categorisedPosts[post.category] = [];
		}
		categorisedPosts[post.category].push(post);
	});
	return categorisedPosts;
};

export default getCategorisedPosts;

export const getPostContent = async (id) => {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");
  const matterRes = matter(fileContent);
  const processedContent = await remark().use(html).process(matterRes.content);
  const htmlContent = processedContent.toString();
  return {
    id,
    htmlContent,
    title: matterRes.data.title,
    category: matterRes.data.category,
    date: moment(matterRes.data.date, "YYYY-MM-DD").format("MMMM do YYYY"),
     img: matterRes.data.post_image,
  };
};

