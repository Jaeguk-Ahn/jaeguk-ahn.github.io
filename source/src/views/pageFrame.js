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

export default PageFrame;