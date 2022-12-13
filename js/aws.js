updateVisitCount();
function updateVisitCount() {
  fetch(
    "https://nx0aqiz7li.execute-api.us-east-1.amazonaws.com/dev"
    //https://l4sap454r7.execute-api.me-central-1.amazonaws.com/prod/visitor-counter api of previous (point and click, not terraform) resources.
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("counter-text").innerHTML =
        "You are visitor number: ";
      document.getElementById("counter").innerHTML = data;
    });
}
