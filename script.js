function reSize(ev) {
	let body = document.getElementById("form1");
	let btnReSize = document.getElementById("resize");	

	btnReSize.onmousedown = function(ev) {
		
		function move(ev) {
			let left = body.style.left;
				left = left.split("px")[0];

			let top = body.style.top;
				top = top.split("px")[0];
				
			body.style.width = ev.x + 5 - left + "px";
			body.style.height = ev.y + 5 - top + "px";					
		}

		document.onmousemove = function(ev) {
			move(ev);
		}

		btnReSize.onmouseup = function() {
			document.onmousemove = null;
			btnReSize.onmouseup = null;
		}
		body.onmouseup = function() {
			document.onmousemove = null;
			body.onmousemove = null;
			body.onmouseup = null;
			btnReSize.onmouseup = null;
		}
	}
}

function dragAndDrop(ev) {
	let body = document.getElementById("form1");
	let headBlock = document.getElementById("head");
		  
	headBlock.onmousedown = function(ev) {

		function move(ev) {
			if (ev.pageX > -1 && ev.pageY > -1) {
				body.style.left = ev.x - headBlock.offsetWidth / 2 + "px";
				body.style.top = ev.y - headBlock.offsetHeight / 2 + "px";
			} 
			else if (ev.pageY > -1 && ev.pageY < -1) {
				body.style.left = ev.x - headBlock.offsetWidth / 2 + "px";
				body.style.top = 0 + "px";
			} 
			else if (ev.pageY < -1 && ev.pageY > -1) {
				body.style.left = 0 + "px";
				body.style.top = ev.y - headBlock.offsetHeight / 2 + "px";
			}
		}

		document.onmousemove = function(ev) {
			move(ev);
		}

		body.onmouseup = function() {
			document.onmousemove = null;
			headBlock.onmouseup = null;
		}
	}
}