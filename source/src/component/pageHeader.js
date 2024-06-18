import { Link } from 'react-router-dom'
function PageHeader() {
    return (
        <div className={"header_wrap"}>
            <Link className={"header_link"} to="/home">Home</Link>
            <Link className={"header_link"} to="/blog">Blog</Link>
            <Link className={"header_link"} to="/portfolio">Portfolio</Link>
        </div>
    );
}

export default PageHeader;