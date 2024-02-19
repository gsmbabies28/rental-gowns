import Button from "../components/utils/Button";
import {Link} from "react-router-dom"
const RegisterPage = () => {

  return (
    <div id="registration-page" className="mx-auto text-center w-full max-w-96">
      <form action="POST" className="mx-auto my-12 space-y-4">
        <h1 className="text-5xl">Create account</h1>
        
        <div className="mt-2 space-y-2">
          <label htmlFor="firstName" className="tracking-wider block text-sm font-medium leading-6 text-gray-900">First name</label>
          <input id="firstName" name="firstName" type="text" autoComplete="firstName"  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
        </div>

        <div className="mt-2 space-y-2">
          <label htmlFor="lastName" className="tracking-wider block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <input id="lastName" name="lastName" type="text" autoComplete="lastName" className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"/>
        </div>

        <div className="mt-2 space-y-2">
          <label htmlFor="email" className="tracking-wider block text-sm font-medium leading-6 text-gray-900">Email</label>
          <input id="email" name="email" type="email" autoComplete="lastName" className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>

        <div className="mt-2 space-y-2">
          <label htmlFor="password" className="tracking-wider block text-sm font-medium leading-6 text-gray-900">Email</label>
          <input id="password" name="password" type="password" autoComplete="lastName" className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
        <Button margin="5" type="submit" text="Create"/>
        <Link to="/account/login" className="block underline underline-offset-2">Already have an account?</Link>
      </form>
    </div>
  )
}

export default RegisterPage