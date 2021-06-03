import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPic">
                    <img
                        src="https://nas-national-prod.s3.amazonaws.com/styles/article_hero_inline/s3/web_parrot_11595234946_125f49b03c_o.jpg?itok=FIN9An75"
                        alt=""
                    />
                    <label htmlFor="fileInput">
                    <i className="settingsPicIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder="Username" />
                <label>Email</label>
                <input type="email" placeholder="you@email.com" />
                <label>Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
            </form>
            <Sidebar />
        </div>
        </div>
    );
}
