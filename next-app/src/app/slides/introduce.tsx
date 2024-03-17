"use client";

import { useState } from 'react'
import Container from '@mui/material/Container';

function addClass(status: string, tabName: string, postion: string)
{
    var resultCss = ""
    if (status === tabName) {
        resultCss += 'inline-block w-64 p-4 text-gray-900 bg-gray-100 border-r border-gray-200 rounded-s-lg';
    } else {
        resultCss += 'inline-block w-64 p-4 bg-white border-r border-gray-200 hover:text-gray-700 hover:bg-gray-50';
    }

    // if (postion === "left") {
    //     resultCss += " border-r"
    // } else if (postion === "right") {
    //     resultCss += " rborder-s-0"
    // }

    return resultCss
}

function showSlides(status: string) {
    const awards = [];
    if (status === "学会発表") {
        return (
        <ul className="flex border-b">
            <li className="-mb-px mr-1">
            {awards.map(({ id, name, url, imgPath}) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Image
                    className="w-full"
                    src="/img/card-top.jpg"
                    alt="Sunset in the mountains"
                    width={100}
                    height={100}
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                    </div>
                </div>
            ))}
            </li>
        </ul>
        )
    } else if (status === "論文紹介") {
        return (
            <div>
                <h1>論文紹介</h1>
                <p>論文紹介の内容</p>
            </div>
        )
    } else if (status === "その他") {
        return (
            <div>
                <h1>その他</h1>
                <p>その他の内容</p>
            </div>
        )
    }
}


const Tabs = () => {
    const [activeTab, setActiveTab] = useState("学会発表")

    return (
        <Container className="mt-10 max-w-8xl flex justify-center items-center">
        <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex">
            <li className="w-full focus-within:z-10">
                <button
                key="学会発表"
                onClick={() => setActiveTab("学会発表")}
                className={ addClass(activeTab, "学会発表", "left") }
                >
                    学会発表
            </button>
            </li>
            <li className="w-full focus-within:z-10">
                <button
                key="論文紹介"
                onClick={() => setActiveTab("論文紹介")}
                className={ addClass(activeTab, "論文紹介", "center") }
                >
                    論文紹介
            </button>
            </li>
            <li className="w-full focus-within:z-10">
                <button
                key="その他"
                onClick={() => setActiveTab("その他")}
                className={ addClass(activeTab, "その他", "right") }
                >
                    その他
            </button>
            </li>
        </ul>
        </Container>
    )
}

export default Tabs