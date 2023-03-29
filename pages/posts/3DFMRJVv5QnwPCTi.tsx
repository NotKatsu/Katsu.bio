import { Divider, Card, Spacer, Grid, Badge } from "@nextui-org/react";

const bitcoin_clipper = () => {
  return (

    <>
        <head>
            <title>Bitcoin Clipper Malware</title>
            <meta content="Bitcoin Clipper Malware Investigation" property="og:title" />
            <meta content="Bitcoin Clipper Malware investigation along with a tutorial on how to setup and create your own version." property="og:description" />
            <meta content="https://cdn.discordapp.com/avatars/1052982721598738522/080f16f55b808c0ae9579c11e90e7354.png" property="og:url" />
            <meta content="https://cdn.discordapp.com/avatars/1052982721598738522/080f16f55b808c0ae9579c11e90e7354.png" property="og:image" />
            <meta content="#77523d" data-react-helmet="true" name="theme-color" />
        </head>

        <Grid.Container css={{ display: "flex" }}>
            <Grid css={{ marginLeft: "auto", marginRight: "auto" }}>
                <h2 style={{ marginTop: "10%", fontSize: "30px" }}>Bitcoin Clipper Malware Investigation.</h2>
                
                <p style={{ fontSize: "20px" }}>Katsu#8890 / Mar 30, 2023 <Badge size="lg" color={"error"} css={{ borderRadius: "10px" }}>Malware</Badge></p>
                <Spacer y={1} />
                <img  style={{ borderRadius: "6px", width: "100%" }} src="https://media.discordapp.net/attachments/1090007244076228639/1090725860866277436/ed-hardie-Y5PSyMm8nMk-unsplash.jpg?width=687&height=458" />
                <Spacer y={1} />
                <Divider />
                <Spacer y={1} />

                <p style={{ fontSize: "19px" }}>Bitcoin Clipper malware is a type of malware that waits until a user copies a Bitcoin address to their</p>
                <p style={{ fontSize: "19px" }}>clipboard, it then verifies that it is not just a random string of words and that it is infact a bitcoin</p>
                <p style={{ fontSize: "19px" }}>address through methods like Regex or a Bitcoin API, if it is in fact a legit bitcoin address it will change</p>
                <p style={{ fontSize: "19px" }}>that Bitcoin address to one set by the CyberCriminal before hand, this is very simple to do as all the program</p>
                <p style={{ fontSize: "19px" }}>has to do is edit the clipboard, the CyberCriminal can also take it a step further, instead of it just checking</p>
                <p style={{ fontSize: "19px" }}>for one word in the copboard and changing that the CyberCriminal can create some very basic code to</p>
                <p style={{ fontSize: "19px" }}>check the clipboard for a string that contains a Bitcoin Address, they can just edit the Bitcoin Address</p>
                <p style={{ fontSize: "19px" }}>and leave the rest of the sentence which will be hard for the victim to see.</p>

                <Spacer y={2} />
                <p style={{ fontSize: "19px" }}>In this section we will go over how to set your own version of this up, I have coded a very basic version</p>
                <p style={{ fontSize: "19px" }}>of this malware but it does everything mentioned above, Please do not spread this malware and use it on</p>
                <p style={{ fontSize: "19px" }}>your computer only, If you decide to do this ensure you know the repercussions of it however feel free</p>
                <p style={{ fontSize: "19px" }}>to edit the Malware and add and remove things from it.</p>

                <Spacer y={2} />
                <p style={{ fontSize: "19px" }}>First thing's first, lets install the Malware, this can be done with the git clone command by cloning</p>
                <p style={{ fontSize: "19px" }}>the Malware from my Github, If you do not have Github's CLI program feel free to just get the code from</p>
                <p style={{ fontSize: "19px" }}>my Github by clicking download.</p>

                <Spacer y={1} />
                <Card variant="flat" css={{ bg: "#1f2124", width: "75%", borderRadius: "10px" }}>
                    <p style={{ fontSize: "19px", marginTop: "2%", marginBottom: "2%", marginLeft: "2%" }}>git clone https://github.com/NotKatsu/Bitcoin-Clipper.git</p>
                </Card>

                <Spacer y={2} />
                <p style={{ fontSize: "19px" }}>After installing the Malware sample, you might need to extract it so just right click on it and click Extract,</p>
                <p style={{ fontSize: "19px" }}>Windows should have some ZIP extraction software by default but if it doesn't a little searching will find</p>
                <p style={{ fontSize: "19px" }}>you some software to do it.</p>

                <Spacer y={2} />
                <p style={{ fontSize: "19px" }}>After extracting the software you will need to open a terminal/command propmt in the directory of the</p>
                <p style={{ fontSize: "19px" }}>Malware once you have done that there are a few things you will need to do to get up and running,</p>
                <p style={{ fontSize: "19px" }}>the first thing you should do is install the needed requirements, this Malware uses python so you</p>
                <p style={{ fontSize: "19px" }}>might have to install it at python.org, When you install Python make sure you tick add Python to path and</p>
                <p style={{ fontSize: "19px" }}>pip, to install the requirements you can use the following command in your terminal.</p>

                <Spacer y={1} />
                <Card variant="flat" css={{ bg: "#1f2124", width: "75%", borderRadius: "10px" }}>
                    <p style={{ fontSize: "19px", marginTop: "2%", marginBottom: "2%", marginLeft: "2%" }}>pip install -r requirements.txt</p>
                </Card>

                <Spacer y={2} />
                <p style={{ fontSize: "19px" }}>Once you have done this open clipper.py in a Text Editor, this could be Notepad, Notepad++ or Visual Studio</p>
                <p style={{ fontSize: "19px" }}>code you can then scroll to the bottom of the file and change switch_address to your address, after it</p>
                <p style={{ fontSize: "19px" }}>should look like this.</p>

                <Spacer y={1} />
                <Card variant="flat" css={{ bg: "#1f2124", width: "75%", borderRadius: "10px" }}>
                    <p style={{ fontSize: "19px", marginTop: "2%", marginBottom: "2%", marginLeft: "2%" }}>switch_address: str = "bc1qg7dvftcxxw5cphdrn3ddhawr000ft3um9gs788"</p>
                </Card>

                <Spacer y={2} />
                <p style={{ fontSize: "19px" }}>After you have changed this you are all up and ready to run the software, feel free to change</p>
                <p style={{ fontSize: "19px" }}>anything you want then you can go ahead and run it, please remember to close the file after so you don't</p>
                <p style={{ fontSize: "19px" }}>use this on yourself in the future, you can do this with the following command.</p>

                <Spacer y={1} />
                <Card variant="flat" css={{ bg: "#1f2124", width: "75%", borderRadius: "10px" }}>
                    <p style={{ fontSize: "19px", marginTop: "2%", marginBottom: "2%", marginLeft: "2%" }}>python clipper.py OR python3 clipper.py</p>
                </Card>

                <Spacer y={2} />
                <p style={{ fontSize: "19px" }}>Once you do this the Malware will be up and running and you can then test it out, i recommend</p>
                <p style={{ fontSize: "19px" }}>for testing purposes you change the switch_address to a few words maybe something like</p>
                <p style={{ fontSize: "19px" }}>clipped!", this will help you when testing it because you will know when "you have been the Malware</p>
                <p style={{ fontSize: "19px" }}>has worked and when it hasn't.</p>

                <Spacer y={2} />
                <Divider />
                <Spacer y={0.5} />
                <p style={{ fontSize: "18px" }}>© Katsu 2021 - 2023 😇</p>
                <Spacer y={1} />
            </Grid>
        </Grid.Container>
    </>

  )
}

export default bitcoin_clipper;