import { signIn, signOut, useSession } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()} className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Cerrar Sesión
        </button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()} className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Iniciar Sesión
      </button>
    </>
  )
}
