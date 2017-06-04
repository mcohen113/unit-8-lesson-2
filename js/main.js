// Step 1: Write an GET request.

SPOT_REQUEST = "https://api.spotify.com/v1/artists/3oDbviiivRWhXwIE8hxkVV/BQBFybZIAB-b04UaH9HXbi81fZ96ZcO-7NPa3VByiqCJULjUzDw-8SvIFmE9kVI0FPRiOHZQTYh-rzcLlsvIA-5xXnV7xNvLbErk_Djzv3A4ub-sHZgkTbwKFPeJyLQK2R-FSUciOA"// We will be getting information on an artist from Spotify's API.
// The url for the request is https://api.spotify.com/v1/artists/3oDbviiivRWhXwIE8hxkVV
// The documentation for finding an artist and an example of the response that is returned
// can be found here: https://developer.spotify.com/web-api/get-artist/
$($.get(SPOT_REQUEST, function(data) {
 $( ".result" ).html(data);
  console.log(data); /*optional stuff to do after success */
});get)

// Step 2: On success:
	// a) Log the response to the console. Open the console and expand the response object to see
	//    the information it holds. Look for the artist name and the images array.
	// b) Update the html of the h1 to the name of the artist.
	// c) Update the src attribute to the url for the first image in the images array.
