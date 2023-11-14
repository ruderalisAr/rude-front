// components/AuthWrapper.js

import { useRouter } from "next/navigation"
import useUserRole from "hooks/use-user-role"

export default function AuthWrapper({ role, children }: { role: string; children: React.ReactNode }) {
  const userRole = useUserRole()
  const router = useRouter()

  if (userRole !== role) {
    router.replace("/unauthorized")
    return null
  }

  return <>{children}</>
}
