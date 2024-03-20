"use client";
import React from "react";
import {useEffect} from 'react'
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Header from "../../../components/header"
import Footer from "../../../components/footer"
import { getData } from "./data"
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";

const PER_PAGE = 7

export default async function BlogPages({ params }: any) {
    // ページ数を表す数値を取得
    const { slug } = params;

    const posts = new Array();

    useEffect(() => {
        getData(slug);
    },[posts])

    // ページネーション
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 4;

    const pages = Math.ceil(posts.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return posts.slice(start, end);
    }, [page, posts]);

    return (
        <div>
        <Header />
        <Container className='mt-10 max-w-4xl'>
        <h1 className='mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl'>記事一覧</h1>
        {/* <ul className='mt-5 justify-center items-center'>
        {posts.map((post) => (
            <li key={post.slug}>
            <Link href={`/${post.slug}`} className="mb-4 block max-w-3xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:underline">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.frontmatter.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{post.frontmatter.date}</p>
            </Link>
            </li>
        ))}
        </ul> */}
        <DataPage params="3" />
        <Pagination totalCount={totalCount} />
        </Container>
        <Footer />
        </div>
    );
}

