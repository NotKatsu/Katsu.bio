import { Divider, Card, Spacer, Grid, Badge, Button, Link, Row, Tooltip, User } from "@nextui-org/react";
import { BiArrowBack, BiNews } from 'react-icons/bi'
import { BsGithub, BsYoutube, BsSpotify, BsGit } from 'react-icons/bs'
import { SiVisualstudiocode, SiGoland } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { FaPython, FaDatabase, FaDiscord, FaStar, FaBitcoin } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import Router from 'next/router'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useSWR from 'swr'
import { Spotify } from "react-spotify-embed";

const home = () => {
  const success_toast = (text: any) => toast.success(text, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    toastId: 'Copied_BTC',
    theme: "dark"
  });

  return (
    <>
        <head>
            <title>katsu.bio</title>
        </head>

        <Grid.Container css={{ display: "flex" }}>
            <Grid css={{ marginLeft: "auto", marginRight: "auto", marginTop: "2%" }}>

                <h2 style={{ marginTop: "3%", fontSize: "30px" }}>About Me</h2>

                <p style={{ fontSize: "19px" }}>I'm Katsu a 15 Year old, Self-Taught developer from the UK, I work on a variety of</p>
                <p style={{ fontSize: "19px" }}>projects, I have experience with multiple programming languages like Python, Go</p>
                <p style={{ fontSize: "19px" }}>C# and recently started to learn C++.</p>

                <h2 style={{ marginTop: "3%", fontSize: "25px" }}>Socials:</h2> 
                <Row>
                  <Link href="https://wakatime.com/@KatsuGoCrazy" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                    <p style={{ fontSize: "19px", marginRight: "2%" }}><FaStar size={28}/></p>
                  </Link>

                  <Link href="https://discord.com/channels/@me/1052982721598738522/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                    <p style={{ fontSize: "19px", marginRight: "2%" }}><FaDiscord size={30}/></p>
                  </Link>

                  <Link href="https://www.youtube.com/@katsugocrazy" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                    <p style={{ fontSize: "19px", marginRight: "2%" }}><BsYoutube size={30}/></p>
                  </Link>

                  <Link href="https://www.youtube.com/@katsugocrazy" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                    <p style={{ fontSize: "19px", marginRight: "2%" }}><AiFillInstagram size={30}/></p>
                  </Link>

                  <Link href="https://open.spotify.com/user/31ruwervll5borolr22judzsee4i" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                    <p style={{ fontSize: "19px", marginRight: "2%" }}><BsSpotify size={30}/></p>
                  </Link>

                  <Link href="https://github.com/NotKatsu/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                    <p style={{ fontSize: "19px", marginRight: "2%" }}><BsGithub size={30}/></p>
                  </Link>
                </Row>

                <h2 style={{ marginTop: "3%", fontSize: "25px" }}>Tools:</h2>
                <Row>
                    <Link href="https://code.visualstudio.com/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><SiVisualstudiocode size={30}/></p>
                    </Link>

                    <Link href="https://python.org/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><FaPython size={30}/></p>
                    </Link>

                    <Link href="https://go.dev/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><SiGoland size={30}/></p>
                    </Link>

                    <Link href="https://www.sqlite.org/index.html" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><FaDatabase size={30}/></p>
                    </Link>

                    <Link href="https://www.mongodb.com/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><SiMongodb size={30}/></p>
                    </Link>

                    <Link href="https://git-scm.com/" style={{ marginRight: "2%", color: "#FFFFFF" }}>
                        <p style={{ fontSize: "19px", marginRight: "2%" }}><BsGit size={30}/></p>
                    </Link>
                </Row>

                <h2 style={{ marginTop: "3%", fontSize: "25px" }}>Payments & Donations:</h2>

                <Row>
                  <p style={{ fontSize: "19px", marginRight: "1%" }}>Bitcoin Address:</p>

                    <Link onClick={() => success_toast("Bitcoin address has been successfully copied to Clipboard")}>
                      <CopyToClipboard text="bc1qg7dvftcxxw5cphdrn3ddhawr000ft3um9gs788">
                        <p style={{ fontSize: "19px", color: "#FFFFFF" }}>bc1qg7dvftcxxw5cphdrn3ddhawr000ft3um9gs788</p>
                      </CopyToClipboard>
                    </Link>
                </Row>

                <Row>
                  <p style={{ fontSize: "19px", marginRight: "1%" }}>Etherum Address:</p>

                    <div>
                      <Link onClick={() => success_toast("Etherum address has been successfully copied to Clipboard")}>
                        <CopyToClipboard text="0xC56513d9b9024b9FE75E04fCA92e45eA835bfa60">
                          <p style={{ fontSize: "19px", color: "#FFFFFF" }}>0xC56513d9b9024b9FE75E04fCA92e45eA835bfa60</p>
                        </CopyToClipboard>
                      </Link>

                      <ToastContainer/>
                    </div>
                </Row>

                <Spacer y={1} />
                <Divider />
                <Spacer y={0.5} />
                <Row>
                  <p style={{ fontSize: "18px", padding: "none", marginRight: "auto"}}>© Katsu 2021 - 2023 😇</p>
                </Row>
                <Spacer y={1} />
            </Grid>
        </Grid.Container>

    </>

  )
}

export default home;