import axios from "axios";
import Button from "../components/utils/Button";
import { useReducer,useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  initialState,
  RegistrationReducer,
} from "../reducers/Registration";

const RegisterPage = () => {
  const [state, dispatch] = useReducer(RegistrationReducer, initialState);
  let isPasswordMatch = state.password === state.confirmPassword;
  const [isEmailInUse, setIsEmailInUse] = useState(false);
  const navigate = useNavigate(); 

  const handleStateFormInput = (value, prop) => {
    dispatch({ type: "update", propName: prop, propValue: value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    if(!isPasswordMatch)
      return;

    try {  
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_URL}/users/register`,
        state
      );
      const ifOk = await Swal.fire({
        title: "Success!",
        text: "Registration Success!",
        icon: "success"
      })  

      if(ifOk.isConfirmed)
        navigate("/account/login");

    } catch (error) {
      const checkEmail = error.response.data.error;
      for(let check of checkEmail){
        if(check.path==="email"){
          return setIsEmailInUse(true);
        }
      }
    } 
  };

  
  return (
    <div id="registration-page" className="mx-auto text-center w-full">
      <form
        className="mx-auto my-12 space-y-4 max-w-96 p-3 md:p-1"
        onSubmit={(e) => handleSubmitForm(e)}
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
  );
};

export default RegisterPage;
