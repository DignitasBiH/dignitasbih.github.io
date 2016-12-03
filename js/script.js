$(window).load(function(){
	$('.slider')._TMS({
		preset:'diagonalFade',
		easing:'easeOutQuad',
		duration:800,
		pagination:true,
		slideshow:6000
	})
	$("#testimonials").jCarouselLite({
		btnNext: ".down",
		btnPrev: ".up",
		visible: 1,
		speed: 600,
		vertical: true,
        circular: true,
		easing: 'easeOutCirc'
	});
})
$(window).load(function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<h3>Vaš pretraživač ne podržava geolokaciju.</h3>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=16&size=660x305&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "<h3>Nije moguće pristupiti Vašoj lokaciji.</h3>";
  }

  output.innerHTML = "<h3>Vaša lokacija:</h3>";

  navigator.geolocation.getCurrentPosition(success, error);
})