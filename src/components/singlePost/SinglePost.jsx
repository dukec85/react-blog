import "./singlePost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img 
                src="https://images.squarespace-cdn.com/content/v1/5a11b6028dd0411dc7539949/1574636686492-76AY8IYFGEE8J0QCV5AM/ke17ZwdGBToddI8pDm48kO3p2ZItWxp8C4Cy5ixDUBJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfJq45Bbz3uWKcfIeNJ_PgH7d_9v34I-ondB24PMqZwEBsc6d8xABtQMYHwnG515BA/delicate+arch+at+sunrise.jpg?format=1000w"
                alt=""
                className="singlePostImg" 
                />
                <h1 className="singlePostTitle">
                    Lorem Ipsum blah blah blah
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Christopher</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDescription">
                    Lorem blah blah blah blah. lorem blah blah blah blah.
                    lorem blah blah blah blah. lorem blah blah blah blah.
                    lorem blah blah blah blah. lorem blah blah blah blah.
                    lorem blah blah blah blah. lorem blah blah blah blah?
                    lorem blah blah blah blah. lorem blah blah blah blah.
                    lorem blah blah blah blah. lorem blah blah blah blah.
                    lorem blah blah blah blah. lorem blah blah blah blah.
                    lorem blah blah blah blah. lorem blah blah blah blah?
                    lorem blah blah blah blah. lorem blah blah blah blah.
                    lorem blah blah blah blah. lorem blah blah blah blah.
                    lorem blah blah blah blah. lorem blah blah blah blah.
                    lorem blah blah blah blah. lorem blah blah blah blah?
                    lorem blah blah blah blah. lorem blah blah blah blah.
                    lorem blah blah blah blah. lorem blah blah blah blah.
                    lorem blah blah blah blah. lorem blah blah blah blah.
                    lorem blah blah blah blah. lorem blah blah blah blah?
                </p>
            </div>
        </div>
    )
}
