import AuthSecure from 'wrappers/auth-secure'

const SettingsPage = () => {
  return (
    <AuthSecure role="admin">
      <div>page</div>
    </AuthSecure>
  )
}

export default SettingsPage
