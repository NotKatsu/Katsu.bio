import { Divider, Card, Spacer, Grid, Badge, Button, Link, Row, Tooltip } from "@nextui-org/react";
import { BiArrowBack, BiNews } from 'react-icons/bi'
import { BsGithub, BsYoutube, BsSpotify, } from 'react-icons/bs'
import { SiVisualstudiocode } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { FaPython, FaDatabase, FaDiscord, FaStar } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import Router from 'next/router'

const home = () => {
  return (

    <>
        <head>
            <title>katsu.bio</title>
        </head>

        <Grid.Container css={{ display: "flex" }}>
            <Grid css={{ marginLeft: "auto", marginRight: "auto" }}>
                <h2 style={{ marginTop: "7%", fontSize: "30px" }}>About Me</h2>

                <p style={{ fontSize: "19px" }}>I'm Katsu a Developer from the UK, I am currently 15 and working on a few interesting</p>
                <p style={{ fontSize: "19px" }}> projects, I have experience with multiple programming languages like Python, Go, C#</p>
                <p style={{ fontSize: "19px" }}>and recently started to learn C++.</p>
                
                <h2 style={{ marginTop: "3%", fontSize: "25px" }}>Socials:</h2> 
                <Row>
                  <Link href="/posts" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                    <p style={{ fontSize: "19px", marginRight: "2%" }}><FaStar size={28}/></p>
                  </Link>

                  <Link href="https://discord.com/channels/@me/1052982721598738522/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                    <p style={{ fontSize: "19px", marginRight: "2%" }}><FaDiscord size={32}/></p>
                  </Link>

                  <Link href="https://www.youtube.com/@katsugocrazy" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                    <p style={{ fontSize: "19px", marginRight: "2%" }}><BsYoutube size={32}/></p>
                  </Link>

                  <Link href="https://www.youtube.com/@katsugocrazy" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                    <p style={{ fontSize: "19px", marginRight: "2%" }}><AiFillInstagram size={32}/></p>
                  </Link>

                  <Link href="https://open.spotify.com/user/31ruwervll5borolr22judzsee4i" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                    <p style={{ fontSize: "19px", marginRight: "2%" }}><BsSpotify size={30}/></p>
                  </Link>
                </Row>

                <h2 style={{ marginTop: "3%", fontSize: "25px" }}>Tools:</h2>
                <Row>
                    <Link href="https://github.com/NotKatsu/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><BsGithub size={32}/></p>
                    </Link>

                    <Link href="https://code.visualstudio.com/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><SiVisualstudiocode size={30}/></p>
                    </Link>

                    <Link href="https://python.org/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><FaPython size={32}/></p>
                    </Link>

                    <Link href="https://www.sqlite.org/index.html/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><FaDatabase size={32}/></p>
                    </Link>

                    <Link href="https://www.mongodb.com/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><SiMongodb size={32}/></p>
                    </Link>
                </Row>

                <h2 style={{ marginTop: "3%", fontSize: "25px" }}>More about me:</h2>
                <p style={{ fontSize: "19px" }}>As mentioned before I'm a developer from the UK that goes by the name Katsu online, not</p>
                <p style={{ fontSize: "19px" }}>many of my in real life friends know what I get up to outside of school they just know I</p>
                <p style={{ fontSize: "19px" }}>have always had an interest in Computers, I first started coding at the age of 9 when my</p>
                <p style={{ fontSize: "19px" }}>dad introduced me to Python which is a language I have stuck with.</p>

                <h2 style={{ marginTop: "3%", fontSize: "25px" }}>What is this?</h2>
                <p style={{ fontSize: "19px" }}>This website is a place for me to share code through what I have called "posts" these are</p>
                <p style={{ fontSize: "19px" }}>just mini blogs but I hate that word so I wont use it much, here you will be able to find</p>
                <p style={{ fontSize: "19px" }}>code, tutorials on how to setup projects and more.</p>

                <Spacer y={1} />
                <Button css={{ bg: "transparent", fontSize: "19px", paddingLeft: "$0" }}  animated={false} auto onPress={() => Router.push('/posts')}><BiArrowBack style={{ marginRight: "5px" }}/>Back</Button>

                <Spacer y={0.5} />
                <Divider />
                <Spacer y={0.5} />
                <Row>
                  <p style={{ fontSize: "18px", padding: "none", marginRight: "auto"}}>© Katsu 2021 - 2023 😇</p>
                  <Link  href="/posts" css={{ fontSize: "18px", marginLeft: "auto", marginRight: "$5", color: "#e1e2e3" }}>Posts</Link>
                </Row>
                <Spacer y={1} />
            </Grid>
        </Grid.Container>
    </>

  )
}

export default home;