var animation = bodymovin.loadAnimation({
  // animationData: { /* ... */ },
  container: document.getElementById("icon-container"), // required
  path: "./js/data5.json", // required
  renderer: "svg", // required
  loop: true, // optional
  autoplay: true, // optional
  name: "Demo Animation", // optional
});
