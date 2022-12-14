window.addEventListener("load", solve);

function solve() {
  const titleEl = document.getElementById("post-title");
  const categoryEl = document.getElementById("post-category");
  const textAreaEl = document.getElementById("post-content");
  const publishBtn = document.getElementById("publish-btn");
  const postReviewList = document.getElementById("review-list");

  publishBtn.addEventListener("click", onPublish);
  function onPublish(e) {
    e.preventDefault();
    if (
      titleEl.value == "" &&
      categoryEl.value == "" &&
      textAreaEl.value == ""
    ) {
      return;
    }
    const post = document.createElement("li");
    post.className = "rpost";

    const article = document.createElement("article");
    post.appendChild(article);
    post.appendChild(postReviewList)

    // console.log(titleEl.value, categoryEl.value, textAreaEl.value);
  }
}
