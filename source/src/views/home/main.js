import { Outlet } from 'react-router-dom'

function Main() {
    return (
        <div className={"content_wrap"}>
            <Outlet />
        </div>
    );
}

export default Main;