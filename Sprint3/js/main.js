let commentContent = [];

const form = document.querySelector(".comments__form");

let container = document.querySelector(".comments");

let box = document.createElement("div");
box.classList.add("comments__box");
container.appendChild(box);

axios
  .get(
    "https://project-1-api.herokuapp.com/comments?api_key=02f0cdb9-dd36-4f4b-87e0-7c369cea0f93"
  )
  .then((response) => {
    console.log("this is your response:", response);
    let commentsPage = document.querySelector(".comments");
    commentConent = response.data;

    refreshLoop(response.data);
  });

function refreshLoop(comments) {
  let commentsContainer = document.querySelector(".comments__box");

  while (commentsContainer.children.length > 0) {
    commentsContainer.removeChild(commentsContainer.children[0]);
  }
  comments.sort(function compareNumbers(comment1, comment2) {
    return comment2.timestamp - comment1.timestamp;
  });

  for (let i = 0; i < comments.length; i++) {
    createCommment(comments[i]);
  }
  document.getElementById("commentsForm").reset();
}

function createCommment(commentObject) {
  // let box = document.createElement('div');
  // box.classList.add('comments__box');

  let parentTester2 = document.createElement("div");
  parentTester2.classList.add("parentTester2");

  let area = document.createElement("div");
  area.classList.add("comments__area");

  let allAvatars = document.createElement("div");
  allAvatars.classList.add("comments__all-avatars");

  let avatar = document.createElement("div");
  avatar.classList.add("comments__avatar");

  let commentsCarrier = document.createElement("div");
  commentsCarrier.classList.add("comments__carrier");

  let name = document.createElement("p");
  name.innerText = commentObject.name;
  name.classList.add("comments__name");

  let timeStamp = document.createElement("p");
  timeStamp.innerText = new Date(commentObject.timestamp).toDateString();
  timeStamp.classList.add("comments__time-stamp");

  commentsCarrier.appendChild(name);
  commentsCarrier.appendChild(timeStamp);

  let opinion = document.createElement("p");
  opinion.innerText = commentObject.comment;
  opinion.classList.add("comments__opinion");

  allAvatars.appendChild(avatar);

  area.appendChild(commentsCarrier);
  area.appendChild(opinion);

  parentTester2.appendChild(allAvatars);
  parentTester2.appendChild(area);

  box.appendChild(parentTester2);

  container.appendChild(box);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userInput = event.target.fullName.value;
  let userInputComment = event.target.remark.value;
  let userInputTime = Date.now();

  let newComment = {
    name: userInput,
    comment: userInputComment,
  };

  let commentsContainer = document.querySelector(".comments__box");

  while (commentsContainer.children.length > 0) {
    commentsContainer.removeChild(commentsContainer.children[0]);
  }

  commentContent.unshift(newComment);

  for (let i = 0; i < commentContent.length; i++) {
    createCommment(commentContent[i]);
  }

  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=02f0cdb9-dd36-4f4b-87e0-7c369cea0f93",
      newComment
    )
    .then((response) => {
      console.log(response);
      return axios.get(
        "https://project-1-api.herokuapp.com/comments?api_key=02f0cdb9-dd36-4f4b-87e0-7c369cea0f93"
      );
    })
    .then((response) => {
      console.log("new comments added:", response);
      refreshLoop(response.data);
    })
    .catch((error) => {
      console.error("fix this!");
    });
});
