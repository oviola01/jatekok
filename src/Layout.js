import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <main>
                <header></header>
            </main>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Tic-Tac Toe</Link>
                    </li>
                    <li>
                        <Link to="/lighton">Light On</Link>
                    </li>

                </ul>
            </nav>
            <article>
                <Outlet />
            </article>
            <footer>
                Saját név</footer>
        </>
    )
};

export default Layout;