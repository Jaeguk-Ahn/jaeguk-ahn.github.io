import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div>
            <h3>이름</h3>
            <p>안재국</p>

            <h3>경력</h3>
            <p>오픈시스넷: 2019.05.27 ~ 2024.05.31</p>

            <h3>프로젝트 내역</h3>
            <p><Link className={"side_link"} to={`/portfolio/android`}>안드로이드</Link></p>
            <p><Link className={"side_link"} to={`/portfolio/frontend`}>프론트엔드</Link></p>

            <h3>연락처</h3>
            <p>dkswornr103@gmail.com</p>
        </div>
    );
}

export default Profile;