export default function Navbar(){
    return <nav className="nav">
        <a href="/" className="site-title">Tvavel Bulgaria</a>
        <ul>
            <li>
                <a href="/MainPage">Home</a>
            </li>
            <li>
                <a href="/Sofia">Sofia</a>
            </li>
            <li>
                <a href="/Plovdiv">Plovdiv</a>
            </li>
            <li>
                <a href="/Varna">Varna</a>
            </li>
            <li>
                <a href="/Login">Login</a>
            </li>
        </ul>
    </nav>
}