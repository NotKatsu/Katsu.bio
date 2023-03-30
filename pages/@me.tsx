
import { FaDiscord } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { Card, Text, Button, Grid, Spacer, Divider, Progress, Container } from '@nextui-org/react'


export default function atMe() {
  return (
    <Container
      display="flex"
      justify="center"
      alignItems="center"
      css={{ minHeight: "100vh" }}
    >
      <Card
        variant="flat"
        css={{
          mw: "660px",
          borderRadius: "0.375rem",
          bg: "#16181a",
          shadow: "none",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "$12"
        }}
      >
        <Card.Body css={{ width: "auto" }}>
          <img
            style={{
              borderRadius: "0.5rem",
              height: 128,
              width: 128,
              marginLeft: "auto",
              marginRight: "auto"
            }}
            src="https://cdn.discordapp.com/avatars/1052982721598738522/080f16f55b808c0ae9579c11e90e7354.png"
            alt="Profile_Picture"
          />
          <Spacer y={2} x={0} />
          <Divider />
          <Text h2 css={{ textAlign: "center", paddingTop: "10px" }}>
            Katsu#8890
          </Text>
          <Text
            css={{
              color: "#737272",
              fontSize: "$xl",
              fontWeight: "400",
              textAlign: "center"
            }}
          >
            Description: a passionate developer from the UK.
          </Text>
          <Text
            css={{
              color: "#737272",
              fontSize: "$xl",
              fontWeight: "400",
              textAlign: "center"
            }}
          >
            Skills: GoLang, Python, MongoDB, SQL.
          </Text>
          <Spacer y={1} x={0} />
          <Divider />
          <Spacer y={1} x={0} />
          <Grid.Container gap={1}>
            <Grid md={4} sm={6} xs={12}>
              <Button
                as="a"
                href="https://discord.com/channels/@me/1052982721598738522"
                target="_blank"
                rel="noreferrer"
                css={{
                  color: "#FFFFFF",
                  background: "#4A4A4A",
                  width: "100%",
                  "&:hover": { background: "#FFFFFF", color: "#4A4A4A" }
                }}
              >
                <FaDiscord size={24} />
              </Button>
            </Grid>
            <Grid md={4} sm={6} xs={12}>
              <Button
                as="a"
                href="mailto:hello@katsu.bio"
                target="_blank"
                rel="noreferrer"
                css={{
                  color: "#FFFFFF",
                  background: "#4A4A4A",
                  width: "100%",
                  "&:hover": { background: "#FFFFFF", color: "#4A4A4A" }
                }}
              >
                <MdEmail size={24} />
              </Button>
            </Grid>
            <Grid md={4} xs={12}>
              <Button
                as="a"
                href="https://github.com/NotKatsu"
                target="_blank"
                rel="noreferrer"
                css={{
                  color: "#FFFFFF",
                  background: "#4A4A4A",
                  width: "100%",
                  "&:hover": { background: "#FFFFFF", color: "#4A4A4A" }
                }}
              >
                <BsGithub size={24} />
              </Button>
            </Grid>
          </Grid.Container>
        </Card.Body>
      </Card>
    </Container>
  )
}