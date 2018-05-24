function reSize() {
	let body = document.getElementById("form1");
	let btnReSize = document.getElementById("resize");	

	btnReSize.addEventListener("mousedown", mouseDown);
	function mouseDown (ev) {
		
		function move(ev) {
			let left = body.style.left;
				left = left.split("px")[0];

			let top = body.style.top;
				top = top.split("px")[0];
				
			body.style.width = ev.x + btnReSize.offsetWidth / 2 - left + "px";
			body.style.height = ev.y + btnReSize.offsetHeight / 2 - top + "px";					
		}

		document.addEventListener("mousemove", mouseMove);
		function mouseMove() {
			move(event);
		}
		
		document.addEventListener("mouseup", mouseUp);
		function mouseUp() {
			document.removeEventListener("mousemove", mouseMove);
			btnReSize.removeEventListener("mouseup", mouseUp);
		}
	}
}

function dragAndDrop() {
	let body = document.getElementById("form1"),
		headBlock = document.getElementById("head");
		
	headBlock.addEventListener("mousedown", mouseDown);
	function mouseDown(event) {

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
		
		document.addEventListener("mousemove", mouseMove);
		function mouseMove(event) {
			move(event);
		}
		
		document.addEventListener("mouseup", mouseUp);	
		function mouseUp() {
			document.removeEventListener("mousemove", mouseMove);
			headBlock.removeEventListener("mouseup", mouseUp);
		}	
	}	
}

reSize();
dragAndDrop();