"use client";

import React from "react"
import Image from 'next/image'
import Container from '@mui/material/Container';
import { useState } from 'react'
import Link from 'next/link'


function addClass(status: string, tabName: string)
{
    var resultCss = ""
    if (status === tabName) {
        resultCss += 'inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 rounded-s-lg';
    } else {
        resultCss += 'inline-block w-full p-4 bg-white border-r border-gray-200 hover:text-gray-700 hover:bg-gray-50';
    }

    return resultCss
}

function showSlides(status: string) {
    const conferences = [
        { id:1, name: "PACLIC2023 発表ポスター", url: "#", imgPath: "/PACLIC2023.png", desc: "香港で開催されたPACLIC2023にて、ポスター発表に使用したポスターです。"},
        { id:2, name: "対話システムライブコンペティション6 発表スライド", url: "#", imgPath: "/livecompe_slide.png", desc: "対話システムライブコンペティション6本戦における口頭発表で使用したスライドです。"},
    ];

    const introductions = [
        { id:9, name: "Towards a Unified Conversational Recommendation System: Multi-task Learning via Contextualized Knowledge Distillation", url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-towards-a-unified-conversational-recommendation-system-multi-task-learning-via-contextualized-knowledge-distillation", imgPath: "/towards.png", desc: "[EMNLP2023] 推薦対話システムにおいて推薦モジュールと対話モジュールを統合する手法を提案した論文"},
        { id:1, name: "COLA: Improving Conversational Recommender Systems by Collaborative Augmentation", url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-cola-improving-conversational-recommender-systems-by-collaborative-augmentation", imgPath: "/COLA.png", desc: "[AAAI2023] アイテムの人気度を考慮した推薦対話システムを構築した論文"},
        { id:2, name: "CLICK: Contrastive Learning for Injecting Contextual Knowledge to Conversational Recommender System", url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-click-contrastive-learning-for-injecting-contextual-knowledge-to-conversational-recommender-system", imgPath: "/click.png", desc: "[EACL2023] 対話文脈を考慮した推薦対話システムの論文"},
        { id:3, name: "CR-GIS: Improving Conversational Recommendation via Goal-aware Interest Sequence Modeling", url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-cr-gis-improving-conversational-recommendation-via-goal-aware-interest-sequence-modeling", imgPath: "/cr-gis.png", desc: "[COLING2022] 推薦対話システムにおいてスターグラフによって効果的なユーザ埋め込みを作成する手法を提案した論文"},
        { id:4, name: "Persona-Guided Planning for Controlling the Protagonist’s Persona in Story Generation", url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-persona-guided-planning-for-controlling-the-protagonists-persona-in-story-generation", imgPath: "/persona-guided.png", desc: "[NAACL2022] ペルソナを用いたストーリー生成手法を提案した論文"},
        { id:5, name: "MCP:Self supervised Pre training for Personalized Chatbots with Multi level Contrastive Sampling", url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-mcp-self-supervised-pre-training-for-personalized-chatbots-with-multi-level-contrastive-sampling", imgPath: "/mcp.png", desc: "[EMNLP2022] 対照学習を用いて効果的なパーソナライズ対話手法を提案した論文"},
        { id:6, name: "Learning to Express in Knowledge- Grounded Conversation", url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-learning-to-express-in-knowledge-grounded-conversation", imgPath: "/learning_to_express.png", desc: "[NAACL2022] 知識対話において潜在変数を用いることで多様な応答を生成するための手法を提案した論文"},
        { id:7, name: "Other Roles Matter! Enhancing Role-Oriented Dialogue Summarization via Role Interactions", url: "hhttps://speakerdeck.com/ryu1104/lun-wen-shao-jie-other-roles-matter-enhancing-role-oriented-dialogue-summarization-via-role-interactions", imgPath: "/other_role.png", desc: "[ACL2022] 話者ごとの対話要約を生成する手法を提案した論文"},
        { id:8, name: "Coreference-Aware Dialogue Summarization", url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-coreference-aware-dialogue-summarization", imgPath: "/Coreference-Aware.png", desc: "[SIGDIAL2021] 効果的なAttentionの適用によって共参照を考慮した要約生成手法を提案した論文"},
    ];
    if (status === "学会発表") {
        return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
            {conferences.map(({ id, name, url, imgPath, desc}) => (
            <Link key={ id } href={ url } target="_blank" rel="noopener noreferrer">
            <div className="max-w-xl rounded overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-110">
                <Image
                    className="object-cover h-64 w-128"
                    src={ imgPath }
                    alt={ name }
                    width={500}
                    height={500}
                />
                <div className="px-5 py-4 object-cover lg:h-44 md:h-36">
                    <div className="font-bold text-xl mb-2">{ name }</div>
                    <p className="text-gray-700 text-base">
                        { desc }
                    </p>
                    </div>
                </div>
            </Link>
            ))}
        </div>
        )
    } else if (status === "論文紹介") {
        return (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
            {introductions.map(({ id, name, url, imgPath, desc}) => (
            <Link key={ id } href={ url } target="_blank" rel="noopener noreferrer">
            <div className="max-w-xl rounded overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-110">
                <Image
                    className="object-cover h-64 w-128"
                    src={ imgPath }
                    alt={ name }
                    width={500}
                    height={500}
                />
                <div className="px-5 py-4 object-cover lg:h-44 md:h-36">
                    <div className="font-bold text-xl mb-2">{ name }</div>
                    <p className="text-gray-700 text-base">
                        { desc }
                    </p>
                    </div>
                </div>
            </Link>
            ))}
        </div>
        )
    } else if (status === "その他") {
        return (
            <div>
                <h1 className="">Comming Soon</h1>
            </div>
        )
    }
}


const SlidesBody = () => {
    const [activeTab, setActiveTab] = useState("学会発表")

    const awards = [
        { id:1, name: "論文1", url: "https://www.google.com", imgPath: "/img/card-top.jpg"},
        { id:2, name: "論文1", url: "https://www.google.com", imgPath: "/img/card-top.jpg"},
    ];
    const tabs = {
        "論文紹介":[
            {id:1, name: "論文1", url: "https://www.google.com", imgPath: "/img/card-top.jpg"},
        ],
        "学会発表":[
            {id:1, name: "学会1", url: "https://www.google.com", imgPath: "/img/card-top.jpg"},
        ],
    }



    return (
        <Container className="mt-10 max-w-8xl justify-center items-center">
        <ul className="text-sm font-medium text-center text-gray-500 rounded-lg shadow flex">
            <li className="w-full focus-within:z-10">
                <button
                key="学会発表"
                onClick={() => setActiveTab("学会発表")}
                className={ addClass(activeTab, "学会発表") }
                >
                    学会発表
            </button>
            </li>
            <li className="w-full focus-within:z-10">
                <button
                key="論文紹介"
                onClick={() => setActiveTab("論文紹介")}
                className={ addClass(activeTab, "論文紹介") }
                >
                    論文紹介
            </button>
            </li>
            <li className="w-full focus-within:z-10">
                <button
                key="その他"
                onClick={() => setActiveTab("その他")}
                className={ addClass(activeTab, "その他") }
                >
                    その他
            </button>
            </li>
        </ul>
        {showSlides(activeTab)}
        </Container>
    )
}

export default SlidesBody