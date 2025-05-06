import { useAuth } from "../authenticator/AuthContext"
import {UsersList} from "../assets/UsersList.jsx"

export default function MainPage(){
    const {isAuthenticated, logout} = useAuth();
    //console.log(isAuthenticated)
    if (isAuthenticated) {
        return (
            <div>
            <h1>Welcome to the Main Page</h1>
                <UsersList/>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>Welcome to the Main Page</h1>
                <h1>You need to be logged in to see other users on this page</h1>
            </div>
        )
    }
}