import LoggedPage from "../components/utils/LoggedPage";
import LoginForm from "../components/utils/LoginForm";
import { useContext } from "react";
import UserContext from "../UseContext/UserContext";

const LoginPage = () => {
  const { isLoading, isLogged } = useContext(UserContext);

  console.log(isLogged);
  
  return (
    <div id="user-page" className="text-center w-full my-8 px-8 sm:px-0">
      { isLoading ? (<div className="w-full">Loading.....</div>)
        :
        (
          <>
          {isLogged ? <LoggedPage /> : <LoginForm />}
          </>
        )
      }
    </div>
  );
};

export default LoginPage;
