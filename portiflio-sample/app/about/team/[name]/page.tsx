'use client'
import { useParams } from "next/navigation"

export type ParamData = {
  name: string,
}

const TeamMemeberPage = () => {

  let { name } = useParams<ParamData>()

  return (
    <div>TeamMemeberPage: { name }</div>
  )
}

export default TeamMemeberPage