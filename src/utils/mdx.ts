import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  return {
    slug: realSlug,
    meta: data,
    content
  };
}

export async function getAllPosts() {
  const files = fs.readdirSync(contentDirectory);
  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const fullPath = path.join(contentDirectory, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: file.replace(/\.mdx$/, ''),
        meta: data
      };
    })
    // Sort posts by date
    .sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1));
  
  return posts;
}
