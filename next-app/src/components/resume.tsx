import React from "react"

const Resume = () => {

    const educations = [
        { id: 1, date: "2022/04 -", enName: "Master's degree, Department of Informatics, The University of Electro-Communications, Japan", jpName: "電気通信大学情報理工学研究科情報学専攻 修士課程 稲葉研究室 2年"},
        { id:2, date: "2018/04 - 2022/03", enName: "Bachelor's degree, Department of Computer and Information Science, Seikei University, Japan", jpName: "成蹊大学理工学部情報科学科 中野研究室"},
    ];

    const experiences = [
        { id: 1, date: "2024/04 - ", enName: "ZOZO Inc. Engineer", jpName: "株式会社ZOZO エンジニア" },
        { id: 2, date: "2022", enName: "Rakuten Group, Inc., Application Engineer Intern.", jpName: "楽天グループ株式会社 インターン アプリケーションエンジニア　　　　　　　　　　　　　　　　　　　　　"},
    ];

    return (
    <div className="mt-20">
        <h1 className="text-4xl font-semibold flex justify-center items-center mb-14">Experience</h1>
        <div className="mt-15 mb-16 flex justify-center">
        <ol className="border-l border-neutral-500 max-w-3xl">
        {experiences.map(({ id, date, enName, jpName }) => (
            <li key={ id }>
            <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-500"></div>
                <p className="text-ml text-neutral-500">
                    { date }
                </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">
                    { enName }
                </h4>
                <p className="mb-3 text-neutral-500">
                    { jpName }
                </p>
            </div>
            </li>
        ))}
        </ol>
        </div>
        <h1 className="text-4xl font-semibold flex justify-center items-center mb-14">Education</h1>
        <div className="mt-15 flex justify-center">
        <ol className="border-l border-neutral-500 max-w-3xl">
        {educations.map(({ id, date, enName, jpName }) => (
            <li key={ id }>
            <div className="flex-start flex items-center pt-3">
                <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-500"></div>
                <p className="text-ml text-neutral-500">
                    { date }
                </p>
            </div>
            <div className="mb-6 ml-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">
                    { enName }
                </h4>
                <p className="mb-3 text-neutral-500">
                    { jpName }
                </p>
            </div>
            </li>
        ))}
        </ol>
        </div>
    </div>
    )
}

export default Resume