import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import useSWR, { SWRConfig } from 'swr';
import supabase from '../../index';
import { useEffect, useState } from 'react';

// Supabaseで登録したテーブル名
// const TABLE_NAME = 'articles'
// 仮定されたdataの型定義
interface DataItem {
    id: Number;
    title: string;
    contents: string;
    inserted_at: Date;
    updated_at: Date;
}

  // fetcher関数の型定義を明示的に行う
const fetcher = (...args: [any]): Promise<any> => fetch(...args).then((res) => res.json());


// // データ取得
// export const getList = async (): Promise<any[] | undefined> => {
//     try {
//         const { data, error } = await supabase
//             .from(TABLE_NAME)
//             .select("id, title, contents")
//             .order('inserted_at');

//         if (error) throw new Error(error.message);

//         return data;
//     } catch (e) {
//         console.error((e as Error).message);
//     }
// };

const PER_PAGE = 7

export function Articles(props: any) {

    const { slug } = props;

    const page = Number(slug);

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        const { data, error } = useSWR('/api', fetcher);
        const result = await data.json();
        console.log("result     ->     "+result);
        setData(result);
    };

        fetchData();
        console.log("data     ->     "+data);
    }, []); // 空の依存配列でマウント時に一度だけ実行


    // const data = useSWR('/api', fetcher, { refreshInterval: 1000 });

    // console.log(articles.data.get());
    console.log("data     ->     "+data);

    // console.log("error: "+error);


    // const start = (page - 1) * PER_PAGE;
    // var end = start + PER_PAGE;

    // console.log(articles.data);
    // console.log(articles);

    // if (articles?.length < end) {
    //     end = articles.length;
    // }

    // // //     return posts.slice(start, end);

    // // console.log(articles);

    // // if (articles === undefined) {
    // //     // do something
    // // }
    // const result = new Array();
    // for (let i = start; i < end; i++) {
    //     const article = articles[i];
    //     const id = article.id;
    //     const title = article.title;
    //     const contents = article.contents;
    //     console.log("id: "+id+" title: "+title+" contents: "+contents);
    //     // result.push({id: id, title: title, contents: contents});
    //     result.push({id, title, contents});
    // }
    // // console.log("data: "+result);

    return (
        <ul>
            {/* {result.map((post) => (
            <li key={post.id}>
            <Link href={`/${post.id}`} className="mb-4 block max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:underline">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{post.contents}</p>
            </Link>
            </li>
            ))} */}
            {/* { data } */}
        </ul>
    );
}

export default Articles;