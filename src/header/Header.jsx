import "./header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" 
            src="https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg" 
            alt="" />
        </div>
    );
}

