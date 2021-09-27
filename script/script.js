moveElement('meow4');
moveElement('meow5');
moveElement('meow6');
moveElement('meow7');
moveElement('meow8');
moveElement('meow9');
moveElement('meow10');
moveElement('meow11');
init_position('meow1');
init_position('meow2');
init_position('meow3');
init_position('meow4');
init_position('meow5');
init_position('meow6');
init_position('meow7');
init_position('meow8');
init_position('meow9');
init_position('meow10');
init_position('meow11');
move('meow1', id);
move('meow2', id);
move('meow3', id);

function moveElement(id){
  var x, y, mouseX, mouseY;
  var cat = document.getElementById(id);

  var top, left;
  top = Math.floor(Math.random() * (window.innerHeight - 210));
  left = Math.floor(Math.random() * (window.innerWidth - 210));
  cat.style.top = top + 'px';
  cat.style.left = left + 'px';

  cat.onpointerdown = dragMouseDown;

  function dragMouseDown(e){
    document.body.style.cursor = "grab";
    e = e || window.event;
    e.preventDefault();
    mouseX = e.clientX;
    mouseY = e.clientY;
    document.onpointerup = closeDragElement;
    document.onpointermove = elementDrag;
  }

  function elementDrag(e){
    e = e || window.event;
    e.preventDefault();
    x = mouseX - e.clientX;
    y = mouseY - e.clientY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    cat.style.top = (cat.offsetTop - y) + "px";
    cat.style.left = (cat.offsetLeft - x) + "px";
  }

  function closeDragElement() {
    document.body.style.cursor = "auto";
    document.onpointerup = null;
    document.onpointermove = null;
  }
}

var id = null;

function init_position(elem_id){
  var elem = document.getElementById(elem_id);
  var x = Math.floor(Math.random() * (window.innerHeight - 220));
  var y = Math.floor(Math.random() * (window.innerWidth - 220));
  elem.style.top = x + 'px';
  elem.style.left = y + 'px';
}

function move(elem_id, id_num) {
  var elem = document.getElementById(elem_id);
  var x = elem.offsetTop;
  var y = elem.offsetLeft;

  var xStep, yStep;
  xStep = Math.floor(Math.random() * 10) - 5;
  yStep = Math.floor(Math.random() * 10) - 5;
  xStep = xStep * 2.5 + 1;
  yStep = yStep * 2.5 + 1;

  clearInterval(id_num);
  id_num = setInterval(frame, 30);

  function frame() {
    x += xStep;
    y += yStep;
    if (!boundary(x, y, elem_id)) {
      clearInterval(id_num);
      move(elem_id, id_num);
    } else {
      elem.style.top = x + 'px';
      elem.style.left = y + 'px';
    }
  }
}

function boundary(x, y, elem_id) {
  var elem = document.getElementById(elem_id);
  if (x < 0) return false;
  if (y < 0) return false;
  if (x > (window.innerHeight - elem.offsetHeight)) return false;
  if (y > (window.innerWidth - elem.offsetWidth)) return false;
  else return true;
}
