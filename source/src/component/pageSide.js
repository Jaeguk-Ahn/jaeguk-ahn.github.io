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
            path: 'study',
            branches: [
                {
                    name: '코틀린',
                    path: 'kotlin'
                }
            ]
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
    return links.map(l => l.branches ? getFoldedLink(path, l, location.pathname) : getSingleLink(path, l, location.pathname))
}

function getSingleLink(path, link, lpn) {
    let fullPath = `${path}/${link.path}`
    let cn = "side_link"
    if (lpn === fullPath) cn += " selected"
    return <Link className={cn} to={fullPath} key={fullPath}>{link.name}</Link>
}

function getFoldedLink(path, link, lpn) {
    let branch = ''
    if (link.branches) branch = link.branches.map(b => getBranchLink(`${path}/${link.path}`, b, lpn))
    return [<p className={"side_link fold_parent"}>{link.name}</p>, branch]
}

function getBranchLink(path, branch, lpn) {
    let fullPath = `${path}/${branch.path}`
    let cn = "side_link fold_branch"
    if (lpn === fullPath) cn += " selected"
    return <Link className={cn} to={fullPath} key={fullPath}>{branch.name}</Link>
}

function PageSide() {

    return (
        <div className={"side_wrap"}>
            <PageLinks />
        </div>
    );
}

export default PageSide;