import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export async function getPostBySlug(slug: string, locale: string = 'en') {
  const realSlug = slug.replace(/\.(es\.)?mdx$/, '');
  
  const localePath = path.join(contentDirectory, `${realSlug}.${locale}.mdx`);
  const defaultPath = path.join(contentDirectory, `${realSlug}.mdx`);
  
  const fullPath = (locale !== 'en' && fs.existsSync(localePath)) ? localePath : defaultPath;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  
  return {
    slug: realSlug,
    meta: data,
    content
  };
}

export async function getAllPosts(locale: string = 'en') {
  if (!fs.existsSync(contentDirectory)) return [];
  
  const files = fs.readdirSync(contentDirectory);
  // Exclude localized versions (e.g. .es.mdx) when listing unique blog posts
  const baseFiles = files.filter(file => file.endsWith('.mdx') && !file.includes('.es.'));
  
  const posts = baseFiles
    .map(file => {
      const realSlug = file.replace(/\.mdx$/, '');
      const localePath = path.join(contentDirectory, `${realSlug}.${locale}.mdx`);
      const defaultPath = path.join(contentDirectory, file);
      
      const fullPath = (locale !== 'en' && fs.existsSync(localePath)) ? localePath : defaultPath;
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: realSlug,
        meta: data
      };
    })
    // Sort posts by date
    .sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1));
  
  return posts;
}
