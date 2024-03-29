
"use client";
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import '../../github-markdown-light.css'
import Container from '@mui/material/Container';
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import supabase from '../../index'

// Supabaseで登録したテーブル名
const TABLE_NAME = 'articles'

// データ取得
export const getList = async (id: number): Promise<any[] | undefined> => {
    try {
        const { data, error } = await supabase
            .from(TABLE_NAME)
            .select("id, title, contents")
            .order('inserted_at');

        if (error) throw new Error(error.message);

        return data;
    } catch (e) {
        console.error((e as Error).message);
    }
};

// ブログ記事ページ
export default async function BlogPost({ params }: any) {

    const { slug } = params;
    const article = await getList(Number(slug));

    if (article === undefined) {
        // do something
    }

    console.log(article);

    const processedContent = await unified().use(remarkParse).use(remarkHtml).process(article[0].contents);
    const contentHtml = processedContent.toString(); // 記事の本文をHTMLに変換

    return (
        <div>
            <Header />
            slug: {slug}
            <Container className='mt-10 max-w-8xl justify-center items-center'>
                <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl'>{article[0].title}</h1>
                {/* <h2 className='mb-4 text-md leading-none tracking-tight text-gray-500 md:text-lg lg:text-xl'>{data.date}</h2> */}
                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
            </Container>
            <Footer />
        </div>
    );
}