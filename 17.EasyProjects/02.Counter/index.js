let count = 0;
const value = document.getElementById("value");
// value.textContent = count;

const btns = document.querySelectorAll(".btn");
btns.forEach((x) => {
  x.addEventListener("click", function (e) {
    //    console.log(e.target) ;
  const styles= e.target.classList;
if(styles.contains('decrease')){
count--;
value.textContent= count;
}else if(styles.contains('reset')){
    count=0;
    value.textContent= count;
}else {
    count++;
    value.textContent= count;
}
   
  });
});
