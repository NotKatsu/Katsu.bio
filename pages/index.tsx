import { useEffect } from "react"
import { useRouter } from "next/router"

export default function home() {
  const router = useRouter()
  
  return (
    useEffect(() => {router.replace("/posts/3DFMRJVv5QnwPCTi")})
  )
}