window.addEventListener("load", solve);

function solve() {
const titleEl= document.getElementById('post-title');
const categoryEl= document.getElementById('post-category');
const textAreaEl=document.getElementById('post-content');
const publishBtn= document.getElementById("publish-btn");
const postReviewList= document.getElementById('review-list');


publishBtn.addEventListener('click', onPublish)
function onPublish(e){
  e.preventDefault()
if(titleEl.value == '' && categoryEl.value == '' && textAreaEl.value ==''){
  return
}
  // console.log(titleEl.value, categoryEl.value, textAreaEl.value)
}
}
