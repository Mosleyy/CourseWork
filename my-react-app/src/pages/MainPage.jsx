import { useAuth } from "../authenticator/AuthContext"

export default function MainPage(){
    const {isAuthenticated, logout} = useAuth();
    console.log(isAuthenticated)
    if (isAuthenticated) {
        return <h1>Welcome to the main page</h1>
    }
    else{
        return <h1>You need to be logged in to view this page</h1>
    }
}