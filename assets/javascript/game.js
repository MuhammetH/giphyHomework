var gifButtons = ["supra", "evil", "eminem", "iron man"];

function makeButton(str) {
  return `<button>${str}</button>`;
}

function renderButtons() {
  $("#buttons").html(gifButtons.map(makeButton));
}

function makeImage(obj) {
  return `
      <div>
        <p>Rating: ${obj.rating}</p>
        <img src = "${obj.images.fixed_height.url}" />
      </div>
      `;
}

$("#add-gifs").on("click", function(event) {
  event.preventDefault();
  var gifbutton = $(this).attr("#input-gifs");

  gifButtons.push(gifbutton);
  renderButtons();
  $(document).on("click", ".gifbutton", function() {
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      gifbutton +
      "&api_key=tjraax4CDXA071WNI4qfDUcwxR5cZmvm";

    $.ajaX({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      $("#gif-view").prepend(response.data.map(makeImage));
    });
  });
});

renderButtons();
