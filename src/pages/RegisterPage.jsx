import Button from "../components/utils/Button";
import { useContext, useReducer,useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate,Navigate } from "react-router-dom";
import {handleSubmitForm} from '../functionsAndHandlers/Registration';
import { initialState, RegistrationReducer } from "../reducers/Registration";
import UserContext from "../UseContext/UserContext";

const RegisterPage = () => {
  const [state, dispatch] = useReducer(RegistrationReducer, initialState);
  let isPasswordMatch = state.password === state.confirmPassword;
  const [isEmailInUse, setIsEmailInUse] = useState(false);
  const navigate = useNavigate(); 
  const { isLogged } = useContext(UserContext);
  
  const handleStateFormInput = (value, prop) => {
    dispatch({ type: "update", propName: prop, propValue: value });
  };
  
  return (
    <>
      {isLogged && <Navigate to="/account" replace={true} />}
      <div id="registration-page" className="mx-auto text-center w-full">
        <form
          className="mx-auto my-12 space-y-4 max-w-96 p-3 md:p-1"
          onSubmit={(e) => handleSubmitForm(e,isPasswordMatch,navigate,setIsEmailInUse,state)}
        >
          <h1 className="text-5xl">Create account</h1>

          <div className="mt-2 space-y-2">
            <label
              htmlFor="firstName"
              className="tracking-wider block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="firstName"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              value={state.firstName || ""}
              onChange={(e) =>
                handleStateFormInput(e.target.value, e.target.name)
              }
              required
            />
          </div>

          <div className="mt-2 space-y-2">
            <label
              htmlFor="lastName"
              className="tracking-wider block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="lastName"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              onChange={(e) =>
                handleStateFormInput(e.target.value, e.target.name)
              }
              required
            />
          </div>

          <div className="mt-2 space-y-2">
            <label
              htmlFor="email"
              className="tracking-wider block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) =>
                handleStateFormInput(e.target.value, e.target.name)
              }
              required
            />
            {isEmailInUse && (<div className="bg-red-400 text-slate-100">Email already in use!</div>)}
          </div>

          <div className="mt-2 space-y-2">
            <label
              htmlFor="password"
              className="tracking-wider block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) =>
                handleStateFormInput(e.target.value, e.target.name)
              }
              minLength={8}
              required
            />
          </div>
          <div className="mt-2 space-y-2">
            <label
              htmlFor="confirmPassword"
              className="tracking-wider block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) =>
                handleStateFormInput(e.target.value, e.target.name)
              }
              minLength={8}
              required
            />
            {state.confirmPassword &&
              (
                isPasswordMatch ?
                  (<div className="bg-cyan-300">Password match!</div>) 
                  : 
                  (<div className="bg-red-400 text-slate-100">Password do not match!</div>)
              )
            }
          </div>
          <Button 
            margin="5" 
            type="submit" 
            text="Create" 
          />
          <Link
            to="/account/login"
            className="block underline underline-offset-2"
          >
            Already have an account?
          </Link>
        </form>
        
      </div>
    </>
  );
};

export default RegisterPage;
