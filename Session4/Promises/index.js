//Concept of promises and Promise Chaining

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = {
        id,
        name: "John Doe",
      };
      resolve(user);
    }, 2000);
  });
}

function getPosts(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { id: 1, title: "Post 1" },
        { id: 2, title: "Post 2" },
      ];
      resolve({ user, posts });
    }, 2000);
  });
}

function getComments({ user, posts }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const comments = [
        { id: 1, text: "Comment 1" },
        { id: 2, text: "Comment 2" },
      ];
      resolve({ user, posts, comments });
    }, 2000);
  });
}

getUser(1)
  .then(getPosts)
  .then(getComments)
  .then(({ user, posts, comments }) => {
    console.log("User:", user);
    console.log("Posts:", posts);
    console.log("Comments:", comments);
  })
  .catch((err) => {
    console.error("Error:", err);
  });
