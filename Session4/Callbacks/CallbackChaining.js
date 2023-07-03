function getUser(id, callback) {
  setTimeout(() => {
    const user = {
      id,
      name: "Abhishek Bansal",
    };
    callback(null, user);
  }, 2000);
}

function getPosts(user, callback) {
  setTimeout(() => {
    const posts = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ];
    callback(null, user, posts);
  }, 2000);
}

function getComments(user, posts, callback) {
  setTimeout(() => {
    const comments = [
      { id: 1, text: "Comment 1" },
      { id: 2, text: "Comment 2" },
    ];
    callback(null, user, posts, comments);
  }, 2000);
}

getUser(1, (err, user) => {
  if (err) {
    console.error("Error:", err);
  } else {
    getPosts(user, (err, user, posts) => {
      if (err) {
        console.error("Error:", err);
      } else {
        getComments(user, posts, (err, user, posts, comments) => {
          if (err) {
            console.error("Error:", err);
          } else {
            console.log("User:", user);
            console.log("Posts:", posts);
            console.log("Comments:", comments);
          }
        });
      }
    });
  }
});
