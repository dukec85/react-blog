import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i class="topIcon fab fa-facebook-square"></i>
            <i class="topIcon fab fa-twitter"></i>
            <i class="topIcon fab fa-pinterest"></i>
            <i class="topIcon fab fa-instagram"></i>
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
                src="https://sjme.de/v/man-seeking-woman-2x01-trailer_en.jpg"
                alt=""
                />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
}
