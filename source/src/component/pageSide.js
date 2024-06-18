import { Link, useLocation } from 'react-router-dom'

const subpages = {
    '/home': [
        {
            name: '메인',
            path: 'main'
        }
    ],
    '/blog': [
        {
            name: '공부',
            path: 'study'
        }
    ],
    '/portfolio': [
        {
            name: '프로필',
            path: 'profile'
        },
        {
            name: '안드로이드',
            path: 'android'
        },
        {
            name: '프론트엔드',
            path: 'frontend'
        }
    ],
}

function PageLinks() {
    const location = useLocation()
    let path = ''
    let links = []
    if (location.pathname.startsWith('/home')) path = '/home'
    if (location.pathname.startsWith('/blog')) path = '/blog'
    if (location.pathname.startsWith('/portfolio')) path = '/portfolio'
    if (path) links = subpages[path] || []
    return links.map(l => <Link className={"side_link"} to={`${path}/${l.path}`}>{l.name}</Link>)
}

function PageSide() {

    return (
        <div className={"side_wrap"}>
            <PageLinks />
        </div>
    );
}

export default PageSide;