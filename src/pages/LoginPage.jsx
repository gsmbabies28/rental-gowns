import LoggedPage from "../components/utils/LoggedPage";
import LoginForm from "../components/utils/LoginForm";
const LoginPage = () => {

  return (
    <div id="login-page" className="text-center w-full my-8 px-8 sm:px-0">
      <LoginForm />
      {/* <LoggedPage /> */}
    </div>
  )
}

export default LoginPage