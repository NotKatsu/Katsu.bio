import { Divider, Card, Spacer, Grid, Badge, Button, Link, Row, Tooltip } from "@nextui-org/react";
import { BiArrowBack } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'
import { SiVisualstudiocode, SiCplusplus } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { FaPython, FaDatabase } from 'react-icons/fa'
import Router from 'next/router'

const home = () => {
  return (

    <>
        <head>
            <title>katsu.bio</title>
        </head>

        <Grid.Container css={{ display: "flex" }}>
            <Grid css={{ marginLeft: "auto", marginRight: "auto" }}>
                <h2 style={{ marginTop: "10%", fontSize: "30px" }}>About Me</h2>

                <p style={{ fontSize: "19px" }}>I'm Katsu a Developer from the UK, I am currently 15 and working on a few interesting</p>
                <p style={{ fontSize: "19px" }}> projects, I have experience with multiple programming languages like Python, Go, C#</p>
                <p style={{ fontSize: "19px" }}>and recently started to learn C++.</p>

                <h2 style={{ marginTop: "3%", fontSize: "25px" }}>Tools:</h2>

                <Row>
                    <Link href="https://github.com/NotKatsu/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><BsGithub size={34}/></p>
                    </Link>

                    <Link href="https://code.visualstudio.com/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><SiVisualstudiocode size={34}/></p>
                    </Link>

                    <Link href="https://python.org/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><FaPython size={37}/></p>
                    </Link>

                    <Link href="https://www.sqlite.org/index.html/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><FaDatabase size={32}/></p>
                    </Link>

                    <Link href="https://www.mongodb.com/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><SiMongodb size={32}/></p>
                    </Link>
                </Row>

                

                <Spacer y={1} />
                <Button css={{ bg: "transparent", fontSize: "19px", paddingLeft: "$0" }}  animated={false} auto onPress={() => Router.push('/posts')}><BiArrowBack style={{ marginRight: "5px" }}/>Back</Button>

                <Spacer y={0.5} />
                <Divider />
                <Spacer y={0.5} />
                <p style={{ fontSize: "18px", padding: "none" }}>© Katsu 2021 - 2023 😇</p>
                <Spacer y={1} />
            </Grid>
        </Grid.Container>
    </>

  )
}

export default home;