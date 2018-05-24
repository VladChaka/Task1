function reSize(ev) {
	let body = document.getElementById("form1");
	let btnReSize = document.getElementById("resize");	

	function mouseDown (ev) {
		
		function move(ev) {
			let left = body.style.left;
				left = left.split("px")[0];

			let top = body.style.top;
				top = top.split("px")[0];
				
			body.style.width = ev.x + btnReSize.offsetWidth / 2 - left + "px";
			body.style.height = ev.y + btnReSize.offsetHeight / 2 - top + "px";					
		}

		let mouseMove = function(event) {
			move(event);
		}
		document.addEventListener("mousemove", mouseMove);

		let mouseUp = function() {
			document.removeEventListener("mousemove", mouseMove);
			btnReSize.removeEventListener("mouseup", mouseUp);
		}
		document.addEventListener("mouseup", mouseUp);
	}
	btnReSize.addEventListener("mousedown", mouseDown);
}

function dragAndDrop(event) {
	let body = document.getElementById("form1"),
		headBlock = document.getElementById("head");
		
	let mouseDown = function(event) {
		function move(event) {
			
			let left = body.style.left,
				top = body.style.top;

			if (event.x > -1 && event.y > -1) {
				left = event.x - headBlock.offsetWidth / 2 + "px";
				top = event.y - headBlock.offsetHeight / 2 + "px";
			} 
			else if (event.x > -1 && event.y < -1) {
				left = event.x - headBlock.offsetWidth / 2 + "px";
				top = 0 + "px";
			}
		
			body.style.left = left;
			body.style.top = top;
		}
		
		let mouseMove = function(event) {
			move(event);
		}
		document.addEventListener("mousemove", mouseMove);

		let mouseUp = function() {
			document.removeEventListener("mousemove", mouseMove);
			headBlock.removeEventListener("mouseup", mouseUp);
		}
		document.addEventListener("mouseup", mouseUp);
		
	}
	headBlock.addEventListener("mousedown", mouseDown);
}

reSize(event);
dragAndDrop(event);