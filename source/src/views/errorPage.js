import { useRouteError } from 'react-router-dom';
import PageHeader from "../component/pageHeader";
import PageSide from "../component/pageSide";
import { Outlet } from 'react-router-dom'

function PageFrame() {
    return (
        <div className={"main_wrap"}>
            <PageHeader />
            <PageSide />
            <Outlet />
        </div>
    );
}
export default function ErrorPage() {
    const error  = useRouteError()
    console.error(error)
    return (
        <div className={"main_wrap"}>
            <PageHeader />
            <PageSide />
            <div className={"content_wrap"}>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    )
}