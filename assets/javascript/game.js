function makeImage(obj) {
  return `
    <div>
      <p>Rating: ${obj.rating}</p>
      <img src = "${obj.images.fixed_height.url}" />
    </div>
    `;
}

var gifButtons = ["supra", "evil", "eminem", "iron man"];

function makeButton(str) {
  return `<button>${str}</button>`;
}


function renderButtons() {
  $("#buttons").html(gifButtons.map(makeButton));
}


$("#add-gifs").on("click", function(event) {
  event.preventDefault();
  var gifbutton = $("#input-gifs").val();
  gifButtons.push(gifbutton);
  renderButtons();

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    gifbutton +
    "&api_key=tjraax4CDXA071WNI4qfDUcwxR5cZmvm";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#gif-view").prepend(response.data.map(makeImage));
  });
});

renderButtons();
