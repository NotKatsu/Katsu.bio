import { Card } from "@nextui-org/react";


const code_block = ({ text }) => {
  return (
    <div>
      <Card variant="flat" css={{ bg: "#1f2124", width: "35%" }}>
        <p style={{ fontSize: "19px" }}>{text}</p>
      </Card>
    </div>
  )
}

export default code_block;