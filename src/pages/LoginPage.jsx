import LoggedPage from "../components/utils/LoggedPage";
import LoginForm from "../components/utils/LoginForm";
import { useContext } from "react";
import UserContext from "../UseContext/UserContext";
const LoginPage = () => {
  const {user, isLoading} = useContext(UserContext);
  // console.log(user);
  if (isLoading) 
    return <div>Loading...</div>; // Show a loading indicator while fetching user data

  return (
    <div id="login-page" className="text-center w-full my-8 px-8 sm:px-0">
      {user.isLogged ? <LoggedPage /> :<LoginForm /> }
    </div>
  )
}

export default LoginPage