import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
            className="postImg"
            src="https://images.squarespace-cdn.com/content/v1/5a11b6028dd0411dc7539949/1574636686492-76AY8IYFGEE8J0QCV5AM/ke17ZwdGBToddI8pDm48kO3p2ZItWxp8C4Cy5ixDUBJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfJq45Bbz3uWKcfIeNJ_PgH7d_9v34I-ondB24PMqZwEBsc6d8xABtQMYHwnG515BA/delicate+arch+at+sunrise.jpg?format=1000w"
            alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    blah blah blah hello hello
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDescription">
                lorem ipsum blah blah blah hello hello howdy hello.
                yep uhuh, okay whatever lorem ipsum.
                lorem ipsum blah blah blah hello hello howdy hello.
                yep uhuh, okay whatever lorem ipsum.
                lorem ipsum blah blah blah hello hello howdy hello.
                yep uhuh, okay whatever lorem ipsum.
                lorem ipsum blah blah blah hello hello howdy hello.
                yep uhuh, okay whatever lorem ipsum.
                lorem ipsum blah blah blah hello hello howdy hello.
                yep uhuh, okay whatever lorem ipsum.
                lorem ipsum blah blah blah hello hello howdy hello.
                yep uhuh, okay whatever lorem ipsum.
                lorem ipsum blah blah blah hello hello howdy hello.
                yep uhuh, okay whatever lorem ipsum.
            </p>
        </div>
    );
}
