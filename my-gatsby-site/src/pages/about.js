import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShowEducation(date, item) {
    return (
        <div style={{ margin: `20px 0px 20px 10px` }}>
            <Row className="justify-content-md-center">
                <Col sm={2}>
                    {date}
                </Col>
                <Col sm={6}>
                    <b>{item}</b>
                </Col>
            </Row>
        </div>
    )
}

function ShowPaper(conference_url, conference_name, paper_url, paper_name, authors, abstract) {
    return (
        <div style={{ margin: `20px 0px 20px 10px` }}>
            <Row className="justify-content-md-center">
                <Col sm={2}>
                    <a href={conference_url} target="_blank" rel="noopener noreferrer">{conference_name}</a>
                </Col>
                <Col sm={6}>
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

const AboutPage = () => {
    return (
        <div style={{ margin: `50px 0px 20px 10px` }}>
            <Container>
                <Row className="justify-content-md-center">
                    <Col sm={2}>
                        <Image src="profile.jpg" roundedCircle />
                    </Col>
                    <Col sm={6}>
                        <div>
                            Ryutaro Asahara
                        </div>
                        <div>
                            M2, The Department of Informatics, The University of Electro-Communications.
                        </div>
                        <div>
                            <a href="https://www.inaba.aix.uec.ac.jp/" target="_blank" rel="noopener noreferrer">Inaba Lab.</a>
                        </div>
                        <div>
                            Email: ryu1104.as[at]gmail.com
                        </div>
                        <br />
                        <div>
                            <a href="https://github.com/Ryutaro-A" target="_blank" rel="noopener noreferrer">Github</a>
                        </div>
                        <div>
                            <a href="https://twitter.com/Ryu_pro_m" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div style={{ margin: `50px 0px 20px 10px` }}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col sm={2}>
                            <h3>Education</h3>
                        </Col>
                        <Col sm={6}>
                            <b></b>
                        </Col>
                    </Row>
                    {ShowEducation(
                        "2022/04 -",
                        "Master's degree, Department of Informatics, The University of Electro-Communications, Japan"
                    )}
                    {ShowEducation(
                        "2018/04 - 2022/03",
                        "Bachelor's degree, Department of Computer and Information Science, Seikei University, Japan"
                    )}
                </Container>
            </div>
            <div style={{ margin: `50px 0px 20px 10px` }}>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col sm={2}>
                            <h3>Papers</h3>
                        </Col>
                        <Col sm={6}>
                            <b></b>
                        </Col>
                    </Row>
                    {ShowPaper(
                        "https://paclic2023.github.io/",
                        "The 37th Pacific Asia Conference on Language, Information and Computation (PACLIC 37)",
                        "https://paclic2023.github.io/",
                        "SumRec: A Framework for Recommendation using Open-Domain Dialogue",
                        "Ryutaro Asahara, Masaki Takahashi, Chiho Iwahashi, Michimasa Inaba",
                        "Chat dialogues contain considerable useful in- formation about a speaker’s interests, prefer- ences, and experiences. Thus, knowledge from open-domain chat dialogue can be used to personalize various systems and offer recom- mendations for advanced information. This study proposed a novel framework SumRec for recommending information from open-domain chat dialogue. The study also examined the framework using ChatRec, a newly constructed dataset for training and evaluation 1. To ex- tract the speaker and item characteristics, the SumRec framework employs a large language model (LLM) to generate a summary of the speaker information from a dialogue and to rec- ommend information about an item according to the type of user. The speaker and item infor- mation are then input into a score estimation model, generating a recommendation score. Ex- perimental results show that the SumRec frame- work provides better recommendations than the baseline method of using dialogues and item descriptions in their original form."
                    )}
                    {ShowPaper(
                        "https://jsai-slud.github.io/sig-slud/99th-sig.html",
                        "第14回対話システムシンポジウム",
                        "https://jsai-slud.github.io/sig-slud/99th-sig.html",
                        "Multimodal Dialogue System using Third Party Persona",
                        "Ryutaro Asahara, Hiroki Onozeki, Kazuma Akiyama, Ryuichi Uehara, Zhiyang Qi, Takumasa Kaneko, Tomoya Higuchi, Michimasa Inaba",
                        "This paper describes a dialogue system we developed for the Situation Track of the Dialogue System Live Competition 6. The system was designed to engage in multimodal dialogue about planning a welcome party with a user. We utilized ChatGPT for generating responses and determining motions, and we crafted a specific prompt for ChatGPT. The prompt included the persona of Dr. Kobayashi, a third party who is not part of the dialogue but is the guest of honor at the party, to ensure consistent discussion about him. The prompt was also structured to produce dialogue act tags with each utterance, enabling the system to display appropriate motions based on the context. Additionally, by inserting filler words when an utterance with a negative dialogue act tag is produced, we conveyed the system’s compromise or discomfort regarding any disagreement with the user."
                    )}
                </Container>
            </div>
        </div>
    )
}

export default AboutPage