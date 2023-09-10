"use client"
import { redirect } from "next/navigation"
import { useSession } from "next-auth/react"
import UserCard from "components/user-card"
// Remember you must use an AuthProvider for
// client components to useSession

export default function ClientPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("app/auth/signin?callbackUrl=/client")
    },
  })

  return (
    <section className="flex flex-col gap-6">
      <UserCard user={session?.user} pagetype={"Client"} />
    </section>
  )
}
