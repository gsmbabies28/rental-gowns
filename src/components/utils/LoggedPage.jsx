import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../UseContext/UserContext";

const LoggedPage = () => {
    const {user:{firstName, lastName}} = useContext(UserContext);
    const fullName = `${firstName} ${lastName}`;

    // Check if Geolocation is supported
    if (navigator.geolocation) {
        // Get the current position
        navigator.geolocation.getCurrentPosition(
        // Success callback
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        },
        // Error callback
        (error) => {
            console.error(`Error Code = ${error.code} - ${error.message}`);
        }
        );
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
  

  return (
    <div className="mx-auto text-left mt-12 w-full max-w-screen-lg px-8 md:px-8">
        <div className="">
            <h1 className="text-5xl">
                Account 
            </h1>
            <Link to="/account/login"><span className="underline underline-offset-4">Log out</span></Link>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
            <div>
                <h1 className="mt-12 text-2xl">Order history</h1>
                <p className="text-md mt-2 tracking-wide">You haven't placed any orders yet.</p>
            </div>
            <div>
                <h1 className="mt-12 text-2xl">Account details</h1>
                <p>{ fullName }</p>
                <p>Philipines</p>
            </div>
        </div>
    </div>
  )
}

export default LoggedPage