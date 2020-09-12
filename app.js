// Write your JS in here
//alert("hello")
pics = [
	"imgs/kitty_bed.jpg",
	"imgs/kitty_basket.jpg", 
	"imgs/kitty_laptop.jpg",
	"imgs/kitty_door.jpg",
	"imgs/kitty_sink.jpg",
	"imgs/kitty_wall.jpg"
]
var btn = document.querySelector("button");
var img = document.querySelector("img");
var count = 1;
btn.addEventListener("click", function() {
	//alert(pics.length);
	if(count <= pics.length -1)	{
		img.src = pics[count];
		count++;
	}
	else{
		count = 0;
	}
	
});