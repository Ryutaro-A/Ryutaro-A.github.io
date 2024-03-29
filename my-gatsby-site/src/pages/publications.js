import React from "react"
import Container from 'react-bootstrap/Container';
import Header from "./header"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./hover-min.css";
import Slides from "../components/slides"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';



function ShowItem(conference_url, conference_name, paper_url, paper_name, authors, abstract) {
    return (
        <div style={{ margin: `20px 0px 20px 10px` }}>
            <Row className="justify-content-md-center">
                <Col sm={4}>
                    <a href={conference_url} target="_blank" rel="noopener noreferrer">{conference_name}</a>
                </Col>
                <Col sm={8}>
                    <a href={paper_url} target="_blank" rel="noopener noreferrer">{paper_name}</a>
                    <br />
                    <font size="2">{authors}</font>
                    <br />
                    <b>Abstract</b>
                    <br />
                    <font size="2">{abstract}</font>
                </Col>
            </Row>
        </div>
    )
}

function ShowAward(conference_url, conference_name, paper_url, paper_name, authors) {
    return (
        <div style={{ margin: `20px 0px 20px 10px` }}>
            <Row className="justify-content-md-center">
                <Col sm={4}>
                    <a href={conference_url} target="_blank" rel="noopener noreferrer">{conference_name}</a>
                </Col>
                <Col sm={8}>
                    <a href={paper_url} target="_blank" rel="noopener noreferrer">{paper_name}</a>
                    <br />
                    <font size="2">{authors}</font>
                </Col>
            </Row>
        </div>
    )
}


function PublicationPage() {
    const items = [
        {
            title: "[論文紹介]COLA: Improving Conversational Recommender Systems by Collaborative Augmentation",
            image_path: "COLA.png",
            slide_url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-cola-improving-conversational-recommender-systems-by-collaborative-augmentation",
            description: "[AAAI2023] アイテムの人気度を考慮した推薦対話システムを構築した論文",
        },
        {
            title: "[論文紹介]CLICK: Contrastive Learning for Injecting Contextual Knowledge to Conversational Recommender System",
            image_path: "C56D5351-1B78-4804-8FE7-1C782A0BB655.png",
            slide_url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-click-contrastive-learning-for-injecting-contextual-knowledge-to-conversational-recommender-system",
            description: "[EACL2023] 対話文脈を考慮した推薦対話システムの論文",
        },
        {
            title: "[論文紹介]CR-GIS: Improving Conversational Recommendation via Goal-aware Interest Sequence Modeling",
            image_path: "96EF5044-B965-4964-9699-185B890F973E.png",
            slide_url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-cr-gis-improving-conversational-recommendation-via-goal-aware-interest-sequence-modeling",
            description: "[COLING2022] 推薦対話システムにおいてスターグラフによって効果的なユーザ埋め込みを作成する手法を提案した論文",
        },
        {
            title: "[論文紹介]Persona-Guided Planning for Controlling the Protagonist’s Persona in Story Generation",
            image_path: "77E94027-B99E-498B-B5D9-932270AAAE98.png",
            slide_url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-persona-guided-planning-for-controlling-the-protagonists-persona-in-story-generation",
            description: "[NAACL2022] ペルソナを用いたストーリー生成手法を提案した論文",
        },
        {
            title: "[論文紹介]MCP:Self supervised Pre training for Personalized Chatbots with Multi level Contrastive Sampling",
            image_path: "13E0D7C1-23D7-4BE8-9665-32B81776DE28.png",
            slide_url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-mcp-self-supervised-pre-training-for-personalized-chatbots-with-multi-level-contrastive-sampling",
            description: "[EMNLP2022] 対照学習を用いて効果的なパーソナライズ対話手法を提案した論文",
        },
        {
            title: "[論文紹介]Learning to Express in Knowledge- Grounded Conversation",
            image_path: "6CBAB3D9-FA65-4366-B150-4C491BE0CE9D.png",
            slide_url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-learning-to-express-in-knowledge-grounded-conversation",
            description: "[NAACL2022] 知識対話において潜在変数を用いることで多様な応答を生成するための手法を提案した論文",
        },
        {
            title: "[論文紹介]Other Roles Matter! Enhancing Role-Oriented Dialogue Summarization via Role Interactions",
            image_path: "90072340-5E6C-47F1-806A-BE18D010E671.png",
            slide_url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-other-roles-matter-enhancing-role-oriented-dialogue-summarization-via-role-interactions",
            description: "[ACL2022] 話者ごとの対話要約を生成する手法を提案した論文",
        },
        {
            title: "[論文紹介]Coreference-Aware Dialogue Summarization",
            image_path: "Coreference-Aware Dialogue Summarization.png",
            slide_url: "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-coreference-aware-dialogue-summarization",
            description: "[SIGDIAL2021] 効果的なAttentionの適用によって共参照を考慮した要約生成手法を提案した論文",
        }
    ];

    return (
        <div>
            <Header />
            <Container>
                <h1 style={{ margin: `20px 0px 20px 0px` }}>Publications</h1>
            </Container>
        <Container>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button href="#paper">Paper</Button>
            <Button href="#award">Award</Button>
            <Button href="#slide">Slide</Button>
        </ButtonGroup>
        </Container>
        <section id="paper">
        <Container>
            <h2 style={{ margin: `20px 0px 20px 0px` }}>Papers</h2>
            {ShowItem(
                "https://paclic2023.github.io/",
                "The 37th Pacific Asia Conference on Language, Information and Computation (PACLIC 37)",
                "https://paclic2023.github.io/",
                "SumRec: A Framework for Recommendation using Open-Domain Dialogue",
                "Ryutaro Asahara, Masaki Takahashi, Chiho Iwahashi, Michimasa Inaba",
                "Chat dialogues contain considerable useful information about a speaker’s interests, prefer- ences, and experiences. Thus, knowledge from open-domain chat dialogue can be used to personalize various systems and offer recommendations for advanced information. This study proposed a novel framework SumRec for recommending information from open-domain chat dialogue. The study also examined the framework using ChatRec, a newly constructed dataset for training and evaluation 1. To extract the speaker and item characteristics, the SumRec framework employs a large language model (LLM) to generate a summary of the speaker information from a dialogue and to recommend information about an item according to the type of user. The speaker and item information are then input into a score estimation model, generating a recommendation score. Experimental results show that the SumRec framework provides better recommendations than the baseline method of using dialogues and item descriptions in their original form."
            )}
            {ShowItem(
                "https://jsai-slud.github.io/sig-slud/99th-sig.html",
                "第14回対話システムシンポジウム",
                "https://jsai-slud.github.io/sig-slud/99th-sig.html",
                "Multimodal Dialogue System using Third Party Persona",
                "Ryutaro Asahara, Hiroki Onozeki, Kazuma Akiyama, Ryuichi Uehara, Zhiyang Qi, Takumasa Kaneko, Tomoya Higuchi, Michimasa Inaba",
                "This paper describes a dialogue system we developed for the Situation Track of the Dialogue System Live Competition 6. The system was designed to engage in multimodal dialogue about planning a welcome party with a user. We utilized ChatGPT for generating responses and determining motions, and we crafted a specific prompt for ChatGPT. The prompt included the persona of Dr. Kobayashi, a third party who is not part of the dialogue but is the guest of honor at the party, to ensure consistent discussion about him. The prompt was also structured to produce dialogue act tags with each utterance, enabling the system to display appropriate motions based on the context. Additionally, by inserting filler words when an utterance with a negative dialogue act tag is produced, we conveyed the system’s compromise or discomfort regarding any disagreement with the user."
            )}
            {ShowItem(
                "https://www.alps-lab.org/drc2023/index.html",
                "対話ロボットコンペティション2023",
                "https://arxiv.org/pdf/2312.12808.pdf",
                "Enhancing Consistency in Multimodal Dialogue System Using LLM with Dialogue Scenario",
                "Hiroki Onozeki, Zhiyang Qi, Kazuma Akiyama, Ryutaro Asahara, Takumasa Kaneko, Michimasa Inaba",
                "This paper describes our dialogue system submitted to Dialogue Robot Competition 2023. The system’s task is to help a user at a travel agency decide on a plan for visiting two sightseeing spots in Kyoto City that satisfy the user. Our dialogue system is flexible and stable and responds to user requirements by controlling dialogue flow according to dialogue scenarios. We also improved user satisfaction by introducing motion and speech control based on system utterances and user situations. In the preliminary round, our system was ranked fifth in the impression evaluation and sixth in the plan evaluation among all 12 teams."
            )}
            {ShowItem(
                "https://jsai-slud.github.io/sig-slud/96th-sig.html",
                "第13回対話システムシンポジウム",
                "https://www.jstage.jst.go.jp/article/jsaislud/96/0/96_05/_pdf/-char/ja",
                "事前学習済み言語モデルを用いた対話データに基づく観光地推薦",
                "高橋 正樹, 朝原 隆太朗, 稲葉 通将",
                "自然言語処理技術を活用した推薦システムの研究がニュース推薦やオンラインショッピングにおける商品推薦などで盛んに行われている．しかし，既存の推薦システムでは，ユーザの行動履歴が無い，もしくは少ない状態では適切な推薦を行うことができないコールドスタート問題が存在する．一方で，雑談対話には話者の嗜好に関する多様な情報が含まれている．そこで本研究では，雑談対話が与えられ，その対話をもとに対話中の話者が好む観光地を推薦するタスクを提案する．加えて，適切な推薦を行うための手法の提案およびデータの分析などについても行う．"
            )}
        </Container>
        </section>
        <section id="award" style={{ margin: `20px 0px 50px 0px` }}>
            <Container>
                <h2>Award</h2>
                {ShowAward(
                    "https://sites.google.com/view/dslc6",
                    "対話システムライブコンペティション6",
                    "https://www.uec.ac.jp/news/prize/2023/20231221_5876.html",
                    "優秀賞",
                    "朝原 隆太朗、小野関 宏己、斉 志揚、金子 拓正、秋山 一馬、上原 隆一、樋口 智哉、稲葉 通将",
                )}
                {ShowAward(
                    "https://www.alps-lab.org/drc2023/index.html",
                    "対話ロボットコンペティション2023",
                    "https://www.alps-lab.org/drc2023/index.html",
                    "入賞",
                    "Hiroki Onozeki, Zhiyang Qi, Kazuma Akiyama, Ryutaro Asahara, Takumasa Kaneko, Michimasa Inaba",
                )}
            </Container>
        </section>
        <section id="slide" style={{ margin: `20px 0px 50px 0px` }}>
        <Container>
            <h2>Slides</h2>
            <Slides items={ items }/>
        </Container>
        </section>
        </div>
    );
}

export default PublicationPage;