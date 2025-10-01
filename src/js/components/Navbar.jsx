const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark py-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Bootstrap
                    </a>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default NavBar