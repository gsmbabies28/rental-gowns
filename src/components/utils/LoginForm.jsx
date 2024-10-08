import Button from "./Button";
import {Link} from "react-router-dom"
import { handleLogin } from "../../functionsAndHandlers/Login";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../UseContext/UserContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const [ userLogin, setUserLogin ] = useState('');
  const [ password, setPassword ] = useState('');
  const { setToken } = useContext(UserContext);

  return (
      <form 
        className="mx-auto my-12 space-y-4 w-full max-w-96"
        onSubmit={e=>{
          e.preventDefault();
          handleLogin(navigate, userLogin, password,setToken)
        }}
      >
        <h1 className="text-5xl">Login</h1>
        <div className="mt-2 space-y-2">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            autoComplete="email"  
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={userLogin}
            onChange={ e => setUserLogin( e.target.value ) }
            required
          />
        </div>
        <div className="mt-2 space-y-2">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <input 
            id="password" 
            name="password" 
            type="password" 
            autoComplete="password" 
            className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value = {password}
            onChange={ e => setPassword( e.target.value ) }
            required
          />
        </div>
        <Link to="/account/recover" className="block text-left underline underline-offset-4">Forgot password?</Link>
        <Button 
          margin="5" 
          type="submit" 
          text="Login"
        />
        <Link to="/account/register"  className="block underline underline-offset-2">Create account</Link>
      </form>
      
  )
}

export default LoginForm