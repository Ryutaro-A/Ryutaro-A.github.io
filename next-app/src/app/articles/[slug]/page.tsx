"use client";

import Container from '@mui/material/Container';
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import { useEffect, useState } from 'react';
import useSWR, { SWRConfig } from 'swr';
import Link from 'next/link'

interface DataItem {
    id: Number;
    title: string;
    contents: string;
    inserted_at: Date;
    updated_at: Date;
}

export default function BlogPages({ params }: any) {

    const { slug } = params;
    const page = Number(slug);

    const [articles, setData] = useState([]);

      // fetcher関数の型定義を明示的に行う
    // const fetcher = (...args: [any]): Promise<any> => fetch(...args).then((res) => res.json());

    // useEffect(() => {
    //     const fetchData = async () => {
    //     const { data, error } = useSWR('/api', fetcher);
    //     const result = await data.json();
    //     console.log("result     ->     "+result);
    //     setData(result);
    // };

    //     fetchData();
    //     console.log("articles(in Efeect)     ->     "+articles);
    // }, []); // 空の依存配列でマウント時に一度だけ実行

    const fetcher = (url: string): Promise<any> => fetch(url).then((res) => res.json());
    useEffect(() => {
        // データをフェッチする非同期関数
        const fetchData = async () => {
            const result = await fetcher('/api');
            setData(result);
        };

        fetchData();
    }, []); // 空の依存配列でマウント時に一度だけ実行

    console.log("articles(in Efeect)     ->     "+articles);


    return (
        <div>
        <Header />
        <Container className='mt-10 max-w-4xl'>
        <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl'>記事一覧</h1>
        <ul className='mt-5 justify-center items-center'>
        page: {page}
        slug: {slug}
            {articles.map((post) => (
            <li key={post.id}>
            <Link href={`/${post.id}`} className="mb-4 block max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:underline">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{post.contents}</p>
            </Link>
            </li>
            ))}
        </ul>
        </Container>
        <Footer />
        </div>
    );
}

