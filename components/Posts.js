import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: "123",
      username: "nikolaoravec",
      userImg:
        "https://wi.wallpapertip.com/wsimgs/41-414903_venom-facebook-profile.jpg",
      img: "https://i.pinimg.com/originals/19/9b/9f/199b9fb73adf1ed33d7ac627d69168fd.jpg",
      caption: "CANT WAIT!!!!! #VENOM 2",
    },
    {
      id: "123",
      username: "nikolaoravec",
      userImg:
        "https://wi.wallpapertip.com/wsimgs/41-414903_venom-facebook-profile.jpg",
      img: "https://i.pinimg.com/originals/19/9b/9f/199b9fb73adf1ed33d7ac627d69168fd.jpg",
      caption: "CANT WAIT!!!!! #VENOM 2",
    },
    {
      id: "123",
      username: "nikolaoravec",
      userImg:
        "https://wi.wallpapertip.com/wsimgs/41-414903_venom-facebook-profile.jpg",
      img: "https://i.pinimg.com/originals/19/9b/9f/199b9fb73adf1ed33d7ac627d69168fd.jpg",
      caption: "CANT WAIT!!!!! #VENOM 2",
    },
  ];

  return (
    <div>
      {posts.map(({ id, username, userImg, img, caption }) => (
        <Post
          key={id}
          username={username}
          userImg={userImg}
          img={img}
          caption={caption}
        />
      ))}
    </div>
  );
}

export default Posts;
