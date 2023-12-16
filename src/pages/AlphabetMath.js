import React from "react";
import img1 from "../images/alphabetindex.png";
import { Container, Header, Segment } from "semantic-ui-react";
import AnswerBox from "../components/AnswerBox";

const AlphabetMath = () => {

    const problems = [
        {prompt: "exe=?", answer: "y"},
        {prompt: "[1]+0+U=?", answer: "u"},
        {prompt: "a+e", answer: "6"},
        {prompt: "L", answer: "L"},
        {prompt: "h", answer: "h"},
        {prompt: "i", answer: "i"},
        {prompt: "s", answer: "s"},
        {prompt: "x", answer: "x"},
        {prompt: "x", answer: "x"},
        {prompt: "p", answer: "p"},
        {prompt: "i", answer: "i"},
    ]

    // https://www.youtube.com/watch?v=yu6LhIsxxPI
    // caps: 4, 6, 10, 11
    // 
    return (
        <Container textAlign="center">
            <Header as="h1"> Numbers and Letters </Header>
            <div> 
                You're looking for a song. When you get stuck, YouTube will come in handy.
            </div>
            <img src={img1} alt={'Alphabet to letters'}/>
            <Segment.Group>
                <Segment textAlign="left">
                    <Header as="h2"> Values </Header>
                    {problems.map(({prompt, answer}, i) => (
                        <AnswerBox prompt={prompt} answer={answer} id={i} key={i}/>
                    ))}
                </Segment>
                <Segment textAlign="left">
                    <Header as="h2"> Capitalization </Header>
                </Segment>
            </Segment.Group>
        </Container>
    )
}

export default AlphabetMath;