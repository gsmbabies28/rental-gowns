import Button from "../components/utils/Button"
import { Link } from "react-router-dom"

const ResetPassword = () => {
  return (
    <div id="reset-password-page" className="mx-auto text-center w-full max-w-2xl">
      <form action="POST" className="mx-auto my-12 space-y-4">
        <h1 className="text-5xl">Reset your password</h1>
        <p>We will send you an email to reset your password</p>
        <div className="mt-2 space-y-2 w-full max-w-96 mx-auto">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email"  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
        
        <Button margin="5" type="submit" text="Submit"/>
        <Link to="../login" className="block underline underline-offset-2">Cancel</Link>
      </form>
    </div>
  )
}

export default ResetPassword