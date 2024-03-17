import React from "react"
import Container from '@mui/material/Container';
import Link from 'next/link'


const PublicationsBody = () => {

    const papers = [
        { conferenceName: "PACLIC 2023 Long Paper", conferenceURL: "https://paclic2023.github.io/", paperName: "SumRec: A Framework for Recommendation using Open-Domain Dialogue", paperURL: "https://aclanthology.org/2023.paclic-1.35/", author: "Ryutaro Asahara, Masaki Takahashi, Chiho Iwahashi, Michimasa Inaba"},
        { conferenceName: "第14回対話システムシンポジウム", conferenceURL: "https://jsai-slud.github.io/sig-slud/99th-sig.html", paperName: "Multimodal Dialogue System using Third Party Persona", paperURL: "https://www.jstage.jst.go.jp/article/jsaislud/99/0/99_90/_article/-char/ja/", author: "Ryutaro Asahara, Hiroki Onozeki, Kazuma Akiyama, Ryuichi Uehara, Zhiyang Qi, Takumasa Kaneko, Tomoya Higuchi, Michimasa Inaba"},
        { conferenceName: "対話ロボットコンペティション2023", conferenceURL: "https://www.alps-lab.org/drc2023/index.html", paperName: "Enhancing Consistency in Multimodal Dialogue System Using LLM with Dialogue Scenario", paperURL: "https://arxiv.org/pdf/2312.12808.pdf", author: "Hiroki Onozeki, Zhiyang Qi, Kazuma Akiyama, Ryutaro Asahara, Takumasa Kaneko, Michimasa Inaba"},
        { conferenceName: "第13回対話システムシンポジウム", conferenceURL: "https://jsai-slud.github.io/sig-slud/96th-sig.html", paperName: "Enhancing Consistency in Multimodal Dialogue System Using LLM with Dialogue Scenario", paperURL: "https://www.jstage.jst.go.jp/article/jsaislud/96/0/96_05/_pdf/-char/ja", author: "高橋 正樹, 朝原 隆太朗, 稲葉 通将"},
    ];

    const awards = [
        { competitionName: "対話システムライブコンペティション6", result: "優秀賞", author: "朝原 隆太朗、小野関 宏己、斉 志揚、金子 拓正、秋山 一馬、上原 隆一、樋口 智哉、稲葉 通将"},
        { competitionName: "対話ロボットコンペティション2023", result: "入賞", author: "Hiroki Onozeki, Zhiyang Qi, Kazuma Akiyama, Ryutaro Asahara, Takumasa Kaneko, Michimasa Inaba"},
    ];

    return (
    <Container className="mt-10 max-w-5xl">
        <h1 className="text-4xl font-semibold flex justify-center items-center mb-10">Paper</h1>
            {papers.map(({ conferenceName, conferenceURL, paperName, paperURL, author }) => (
                <div className="md:flex flex-row mt-4">
                    <div className="basis-1/3">
                        {/* <Link className="text-lg" href={ conferenceURL } target="_blank" rel="noopener noreferrer"> */}
                        <div className="text-neutral-600">{ conferenceName }</div>
                    </div>
                    <div className="basis-2/3">
                        <Link className="text-lg text-blue-600 active:text-blue-600 hover:text-blue-800" href={ paperURL } target="_blank" rel="noopener noreferrer" text-3xl>
                            { paperName }
                        </Link>
                        <div className="mb-3 text-neutral-500">
                            { author }
                        </div>
                    </div>
                </div>
            ))}
        <h1 className="text-4xl font-semibold flex justify-center items-center mb-10 mt-14">Award</h1>
        <div className="mb-28">
            {awards.map(({ competitionName, result, author }) => (
                <div className="md:flex flex-row mt-4">
                    <div className="basis-1/3">
                        {/* <Link className="text-lg" href={ conferenceURL } target="_blank" rel="noopener noreferrer"> */}
                        <div className="text-neutral-600">{ competitionName }</div>
                    </div>
                    <div className="basis-2/3">
                        <div className="text-lg font-bold">
                            { result }
                        </div>
                        <div className="mb-3 text-neutral-500">
                            { author }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Container>
    )
}

export default PublicationsBody