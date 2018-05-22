function formSizeNew () {
  let size = document.getElementById("formFactor").value;
  size = size.split(",");
  let height = size[1];
  let width = size[0];

  let form = document.getElementById("form1")
  form.style.height = " " + height + "px";
  form.style.width = " " + width + "px";
}

function formSizeNormal () {  
  let form = document.getElementById("form1")
  form.style.height = "height: 220px;";
  form.style.width = "width: 600px;";
}