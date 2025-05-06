export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">My Blog</a>
        <ul>
            <li>
                <a href="/MainPage">Home</a>
            </li>
            <li>
                <a href="/About">About</a>
            </li>
            <li>
                <a href="/Login">Login</a>
            </li>
        </ul>
    </nav>
}