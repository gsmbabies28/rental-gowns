import LoggedPage from "../components/utils/LoggedPage";
import LoginForm from "../components/utils/LoginForm";
import { useContext } from "react";
import UserContext from "../UseContext/UserContext";
const LoginPage = () => {
  const {user, isLoading} = useContext(UserContext);
  
    return (
      <div id="user-page" className="text-center w-full my-8 px-8 sm:px-0">
        {isLoading ? <LoggedPage /> :<LoginForm /> }
      </div>
    )

}

export default LoginPage