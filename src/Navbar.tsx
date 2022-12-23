import { Link } from "react-router-dom"

export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">Site Name</Link>
        <ul>
            <CustomLink to="/pricing">Pricing</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </ul>
    </nav>
}

interface CustomLinkProps {
    to: string;
    children: string;
}

function CustomLink({ to , children , ...props }: CustomLinkProps) {
    const path = window.location.pathname 
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}