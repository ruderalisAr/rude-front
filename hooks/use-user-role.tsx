// hooks/useUserRole.js

import { getSession } from "next-auth/react"

export default function useUserRole() {
  const session = getSession()
  console.log({ session })
  return session
}
