// Select the box element
const boxFirst = document.getElementById("expandableboxFirst");
const boxSecond = document.getElementById("expandableboxSecond");
const boxThird = document.getElementById("expandableboxThird");
// Add a click event listener to the box
boxFirst.addEventListener("click", function () {
  // Toggle the 'expanded' class when the box is clicked
  console.log("clicked");
  boxFirst.classList.toggle("expandedFirst");
});

boxSecond.addEventListener("click", function () {
  // Toggle the 'expanded' class when the box is clicked
  console.log("clicked");
  boxSecond.classList.toggle("expandedSecond");
});

boxThird.addEventListener("click", function () {
  // Toggle the 'expanded' class when the box is clicked
  console.log("clicked");
  boxThird.classList.toggle("expanded");
});
