// alert("background changed");
// console.log($("h1").css("font-size"));
$("h1").addClass("big-title margin-50 ");
$("h1").text("Welcome to jquery classn  Nadeem Anwar");

$("button").text("Don't click");

$("a").attr("href", "https://scholarships.gov.in");
$("a").text("NSP");

// $("h1").click(function () {
//   alert("clicked");
// });

$("h1").click(function () {
  $("h1").css("color", "purple");
});

// $("button").click(function () {
//   alert("button clicked");
// });

$("button").click(function () {
  $("h1").css("color", "purple");
});

$("input").keypress(function (event) {
  console.log("input presses", event.key);
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});
