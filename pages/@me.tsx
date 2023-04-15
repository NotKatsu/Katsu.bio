import { useEffect } from "react"
import { useRouter } from "next/router"

export default function FourOhFour() {
  const router = useRouter()
  
  return (
    useEffect(() => {router.replace("/")})
  )
}