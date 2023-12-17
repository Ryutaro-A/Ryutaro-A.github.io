import React from "react"
import Container from 'react-bootstrap/Container';
import Header from "./header"
import { Link as Scroll } from 'react-scroll';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Ripples from 'react-ripples'
import "./hover-min.css";
import CardGroup from 'react-bootstrap/CardGroup';
import { navigate } from 'gatsby';


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

const SlideStyle = {
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    width: '20rem'
};

const SlideUrl = {
    textDecoration: <></>
}

function ShowSlide(slide_url, slide_name, slide_description, image_path) {
    return (
        <div>


        <div className="hvr-shrink">
        <Ripples>
        <Card style={ SlideStyle }>
        <a href={ slide_url } target="_blank" rel="noopener noreferrer" style={ SlideUrl }>
                <Card.Img variant="top" src={ image_path } />
                <Card.Body>
                <Card.Title>{ slide_name }</Card.Title>
                <Card.Text>{ slide_description }</Card.Text>
            </Card.Body>
            </a>
        </Card>
        </Ripples>
        </div>


        </div>
    )
}

function PublicationPage() {
    return (
        <div>
            <Header />
            <Container>
                <h1 style={{ margin: `20px 0px 20px 0px` }}>Publications</h1>
            </Container>
        <Container>
        <div class="publication_menu" style={{ margin: `20px 0px 20px 10px` }}>
            <Button variant="secondary" style={{ margin: `0px 0px 10px 10px` }}>
                <Scroll to="paper">Papers</Scroll>
            </Button>
            <Button variant="secondary" style={{ margin: `0px 0px 10px 10px` }}>
                <Scroll to="slide">Slides</Scroll>
            </Button>
        </div>
        </Container>
        <section id="paper">
        <Container>
            <h2>Papers</h2>
            {ShowItem(
                "https://paclic2023.github.io/",
                "The 37th Pacific Asia Conference on Language, Information and Computation (PACLIC 37)",
                "https://paclic2023.github.io/",
                "SumRec: A Framework for Recommendation using Open-Domain Dialogue",
                "Ryutaro Asahara, Masaki Takahashi, Chiho Iwahashi, Michimasa Inaba",
                "Chat dialogues contain considerable useful in- formation about a speaker’s interests, prefer- ences, and experiences. Thus, knowledge from open-domain chat dialogue can be used to personalize various systems and offer recom- mendations for advanced information. This study proposed a novel framework SumRec for recommending information from open-domain chat dialogue. The study also examined the framework using ChatRec, a newly constructed dataset for training and evaluation 1. To ex- tract the speaker and item characteristics, the SumRec framework employs a large language model (LLM) to generate a summary of the speaker information from a dialogue and to rec- ommend information about an item according to the type of user. The speaker and item infor- mation are then input into a score estimation model, generating a recommendation score. Ex- perimental results show that the SumRec frame- work provides better recommendations than the baseline method of using dialogues and item descriptions in their original form."
            )}
            {ShowItem(
                "https://jsai-slud.github.io/sig-slud/99th-sig.html",
                "第14回対話システムシンポジウム",
                "https://jsai-slud.github.io/sig-slud/99th-sig.html",
                "Multimodal Dialogue System using Third Party Persona",
                "Ryutaro Asahara, Hiroki Onozeki, Kazuma Akiyama, Ryuichi Uehara, Zhiyang Qi, Takumasa Kaneko, Tomoya Higuchi, Michimasa Inaba",
                "This paper describes a dialogue system we developed for the Situation Track of the Dialogue System Live Competition 6. The system was designed to engage in multimodal dialogue about planning a welcome party with a user. We utilized ChatGPT for generating responses and determining motions, and we crafted a specific prompt for ChatGPT. The prompt included the persona of Dr. Kobayashi, a third party who is not part of the dialogue but is the guest of honor at the party, to ensure consistent discussion about him. The prompt was also structured to produce dialogue act tags with each utterance, enabling the system to display appropriate motions based on the context. Additionally, by inserting filler words when an utterance with a negative dialogue act tag is produced, we conveyed the system’s compromise or discomfort regarding any disagreement with the user."
            )}
        </Container>
        </section>
        <section id="slide">
        <Container>
            <h2>Slides</h2>
            <CardGroup>
                { ShowSlide(
                    "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-cola-improving-conversational-recommender-systems-by-collaborative-augmentation",
                    "[論文紹介]COLA: Improving Conversational Recommender Systems by Collaborative Augmentation",
                    "[AAAI2023] アイテムの人気度を考慮した推薦対話システムを構築した論文",
                    "../COLA.png"
                ) }
                { ShowSlide(
                    "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-click-contrastive-learning-for-injecting-contextual-knowledge-to-conversational-recommender-system",
                    "[論文紹介]CLICK: Contrastive Learning for Injecting Contextual Knowledge to Conversational Recommender System",
                    "[EACL2023] 対話文脈を考慮した推薦対話システムの論文",
                    "../C56D5351-1B78-4804-8FE7-1C782A0BB655.png"
                ) }
                { ShowSlide(
                    "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-cr-gis-improving-conversational-recommendation-via-goal-aware-interest-sequence-modeling",
                    "[論文紹介]CR-GIS: Improving Conversational Recommendation via Goal-aware Interest Sequence Modeling",
                    "[COLING2022] 推薦対話システムにおいてスターグラフによって効果的なユーザ埋め込みを作成する手法を提案した論文",
                    "../8F445060-B208-4FBD-9DD8-7228ACF08116.png"
                ) }
                { ShowSlide(
                    "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-persona-guided-planning-for-controlling-the-protagonists-persona-in-story-generation",
                    "[論文紹介]Persona-Guided Planning for Controlling the Protagonist’s Persona in Story Generation",
                    "[NAACL2022] ペルソナを用いたストーリー生成手法を提案した論文",
                    "../0AAFA8E3-5A28-48BC-A8B4-9497260E0803.png"
                ) }
                { ShowSlide(
                    "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-mcp-self-supervised-pre-training-for-personalized-chatbots-with-multi-level-contrastive-sampling",
                    "[論文紹介]MCP:Self supervised Pre training for Personalized Chatbots with Multi level Contrastive Sampling",
                    "[EMNLP2022] 対照学習を用いて効果的なパーソナライズ対話手法を提案した論文",
                    "../0F0572BD-851B-4CA5-8A15-385133CA8B19.png"
                ) }
                { ShowSlide(
                    "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-learning-to-express-in-knowledge-grounded-conversation",
                    "[論文紹介]Learning to Express in Knowledge- Grounded Conversation",
                    "[NAACL2022] 知識対話において潜在変数を用いることで多様な応答を生成するための手法を提案した論文",
                    "../FB09DDDD-1448-4CFC-B54E-09AB67BFAD2A.png"
                ) }
                { ShowSlide(
                    "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-other-roles-matter-enhancing-role-oriented-dialogue-summarization-via-role-interactions",
                    "[論文紹介]Other Roles Matter! Enhancing Role-Oriented Dialogue Summarization via Role Interactions",
                    "[ACL2022] 話者ごとの対話要約を生成する手法を提案した論文",
                    "../120B2887-D0E8-4C41-AAEE-53F8C1E51043.png"
                ) }
                { ShowSlide(
                    "https://speakerdeck.com/ryu1104/lun-wen-shao-jie-coreference-aware-dialogue-summarization",
                    "[論文紹介]Coreference-Aware Dialogue Summarization",
                    "[SIGDIAL2021] 効果的なAttentionの適用によって共参照を考慮した要約生成手法を提案した論文",
                    "../683B9729-D588-4E9E-A46F-98A1AFD530C8.png"
                ) }
            </CardGroup>
        </Container>
        </section>
        </div>
    );
}

export default PublicationPage;