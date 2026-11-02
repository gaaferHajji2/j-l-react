const TeamMemeberPage = async ({ params }) => {

  let name = (await params).name

  return (
    <div>TeamMemeberPage: { name }</div>
  )
}

export default TeamMemeberPage