var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=tjraax4CDXA071WNI4qfDUcwxR5cZmvm";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });