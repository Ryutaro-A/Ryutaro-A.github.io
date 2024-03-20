import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

export async function getData(params: any) {

    const currentPage = params.params;

    console.log(currentPage);

    const postsDirectory = "/app/src/app/content"
    const fileNames = fs.readdirSync(postsDirectory);

    // 前記事を取得
    const posts = await Promise.all(
    // 各ファイル情報を取得
    fileNames.map(async (fileName) => {
        const filePath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

      // slugとfrontmatter(title, date, description)を取得
        return {
            slug: fileName.replace('.md', ''),
            frontmatter: data,
        };
    })
    ).then((posts) =>
    // 最新日付順に並び替え
    posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()));

    return posts

    // return (
    //     <ul className='mt-5 justify-center items-center'>
    //     {posts.map((post) => (
    //         <li key={post.slug}>
    //         <Link href={`/${post.slug}`} className="mb-4 block max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:underline">
    //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.frontmatter.title}</h5>
    //             <p className="font-normal text-gray-700 dark:text-gray-400">{post.frontmatter.date}</p>
    //         </Link>
    //         </li>
    //     ))}
    //     </ul>
    // )
}