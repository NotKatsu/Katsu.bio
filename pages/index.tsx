import { Grid, Row, Link, Card, Badge, Tooltip, Spacer } from "@nextui-org/react"
import { BsArrowReturnRight } from 'react-icons/bs'
import Router from 'next/router'

export default function home() {
  
  return (
    <>
      <div>
        <Grid.Container css={{ display: "flex",  }}>
          <Grid css={{ marginLeft: "auto", marginRight: "auto", width: "45%" }}>
            <Card isPressable={true} variant="flat" css={{ marginTop: "10%", borderRadius: "10px" }} onPress={() => Router.push('/posts/oLWGiZkBqjC6BpZz')}>
              <Row>
                  <h1 style={{ fontSize: "25px", fontWeight: "400", marginTop: "5%", marginLeft: "5%" }}>Exodus Wallet Stealer</h1> 
                  <h1 style={{ fontSize: "18px", fontWeight: "400", marginTop: "5%", marginLeft: "50%", color: "#767b84" }}>Mar 31, 2023</h1>
              </Row>
              <p style={{ fontSize: "18px", fontWeight: "400", color: "#ced2d8", marginLeft: "5%" }}>Looking into how cybercriminals gain access to your exodus wallet and take your money without you even</p>
              <p style={{ fontSize: "18px", fontWeight: "400", color: "#ced2d8", marginLeft: "5%" }}>realizing, build your own version of the malware to test it yourself in a controlled enviroment, figure out how</p>
              <p style={{ fontSize: "18px", fontWeight: "400", color: "#ced2d8", marginLeft: "5%", marginBottom: "5%" }}>to prevent this attack too.</p>
            </Card>
          </Grid>
        </Grid.Container>

        <Grid.Container css={{ display: "flex" }}>
          <Grid css={{ marginLeft: "auto", marginRight: "auto", width: "45%" }}>
            <Card isPressable={true} variant="flat" css={{ marginTop: "10%", borderRadius: "10px" }} onPress={() => Router.push('/posts/3DFMRJVv5QnwPCTi')}>
              <Row>
                  <h1 style={{ fontSize: "25px", fontWeight: "400", marginTop: "5%", marginLeft: "5%" }}>Bitcoin Clipper Malware</h1> 
                  <h1 style={{ fontSize: "18px", fontWeight: "400", marginTop: "5%", marginLeft: "50%", color: "#767b84" }}>Mar 20, 2023</h1>
              </Row>
              <p style={{ fontSize: "18px", fontWeight: "400", color: "#ced2d8", marginLeft: "5%" }}>An in-depth Investigation into a new form of undetectable Malware. Figure out how it works how it works and</p>
              <p style={{ fontSize: "18px", fontWeight: "400", color: "#ced2d8", marginLeft: "5%" }}>how you can prevent getting infected by it. Learn how to create your own version for research purposes or just</p>
              <p style={{ fontSize: "18px", fontWeight: "400", color: "#ced2d8", marginLeft: "5%", marginBottom: "5%" }}>to get a feel for how the Malware functions.</p>
            </Card>
          </Grid>
        </Grid.Container>
      </div>    
    </>
  )
}