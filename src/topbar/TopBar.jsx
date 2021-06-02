import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOG OUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img
                className="topImg"
                src="https://indianapublicmedia.org/wpimages/amomentofscience/2019/05/Amazon-parrot.jpg"
                alt=""
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
