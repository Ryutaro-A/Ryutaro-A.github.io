
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import '../github-markdown-light.css'
import Container from '@mui/material/Container';
import Header from "../../components/header"
import Footer from "../../components/footer"
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'

// ブログ記事ページ
export default async function BlogPost({ params }: any) {

    const { slug } = params;
    const filePath = path.join("/app/src/app/content", `${slug}.md`);

    // ファイルの中身を取得
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    console.log(data)
    const title = data.title; // 記事のタイトル
    const processedContent = await unified().use(remarkParse).use(remarkHtml).process(content);
    const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換

    return (
        <div>
            <Header />
            <Container className='mt-10 max-w-8xl justify-center items-center'>
                <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl'>{title}</h1>
                <h2 className='mb-4 text-md leading-none tracking-tight text-gray-500 md:text-lg lg:text-xl'>{data.date}</h2>
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
            </Container>
            <Footer />
        </div>
    );
}