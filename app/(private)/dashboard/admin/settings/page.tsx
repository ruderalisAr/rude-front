import AuthSecure from "wrappers/auth-secure"

interface SettingsPageProperties {
  children?: React.ReactNode
}

const SettingsPage = ({}: SettingsPageProperties) => {
  return (
    <AuthSecure role="admin">
      <div>page</div>
    </AuthSecure>
  )
}

export default SettingsPage
