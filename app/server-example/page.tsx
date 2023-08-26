import { redirect } from "next/navigation"
import { getServerSession } from "next-auth/next"
import { options } from "app/auth/[...nextauth]/options"
import UserCard from "components/user-card"

export default async function ServerPage() {
  const session = await getServerSession(options)

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server")
  }

  return (
    <section className="flex flex-col gap-6">
      <UserCard user={session?.user} pagetype={"Server"} />
    </section>
  )
}
