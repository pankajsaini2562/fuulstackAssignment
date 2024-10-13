// // Select the box element
// const boxFirst = document.getElementById("expandableboxFirst");
// const boxSecond = document.getElementById("expandableboxSecond");
// const boxThird = document.getElementById("expandableboxThird");

// Get all boxes

const boxes = document.querySelectorAll(".box");

// // Add a click event listener to the box
// boxFirst.addEventListener("click", function () {
//   // Toggle the 'expanded' class when the box is clicked
//   console.log("clicked");
//   boxFirst.classList.toggle("expanded");
// });

// boxSecond.addEventListener("click", function () {
//   // Toggle the 'expanded' class when the box is clicked
//   console.log("clicked");
//   boxSecond.classList.toggle("expandedSecond");
// });

// boxThird.addEventListener("click", function () {
//   // Toggle the 'expanded' class when the box is clicked
//   console.log("clicked");
//   boxThird.classList.toggle("expanded");
// });

// Add click event listener to each box

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    // Collapse other boxes and hide their extra items
    console.log("cloickd");
    boxes.forEach((b) => {
      if (b !== box) {
        b.classList.remove("expanded", "active"); // Remove expanded class
        b.querySelector(".extra").classList.remove("visible"); // Hide extra item
      }
    });

    // Toggle the clicked box
    box.classList.toggle("expanded"); // Toggle expansion
    box.classList.toggle("active");
    const extra = box.querySelector(".extra");
    extra.classList.toggle("visible"); // Show or hide the extra item
  });
});
