import { Grid, Row, Link, Card, Badge, Tooltip, Button } from "@nextui-org/react"
import { BsArrowReturnRight } from 'react-icons/bs'
import Router from 'next/router'

export default function home() {
  
  return (
    <div>
      <Grid.Container css={{ display: "flex" }}>
        <Grid css={{ marginLeft: "auto", marginRight: "auto", width: "45%" }}>
          <Card isPressable={true} variant="flat" css={{ marginTop: "10%", borderRadius: "10px" }} onPress={() => Router.push('/posts/3DFMRJVv5QnwPCTi')}>
            <Row>
                <h1 style={{ fontSize: "25px", fontWeight: "400", marginTop: "5%", marginLeft: "5%" }}>Bitcoin Clipper Malware Investigation</h1> 
                <h1 style={{ fontSize: "18px", fontWeight: "400", marginTop: "5%", marginLeft: "40%", color: "#767b84" }}>Mar 29, 2023</h1>
            </Row>
            <p style={{ fontSize: "18px", fontWeight: "400", color: "#ced2d8", marginLeft: "5%" }}>An in-depth Investigation into a new form of undetectable Malware, figure out how it works</p>
            <p style={{ fontSize: "18px", fontWeight: "400", color: "#ced2d8", marginLeft: "5%" }}>how it works and how you can prevent getting infected by it, learn how to create your own</p>
            <p style={{ fontSize: "18px", fontWeight: "400", color: "#ced2d8", marginLeft: "5%", marginBottom: "5%" }}>version for research purposes and more.</p>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  )
}