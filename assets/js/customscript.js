var modal_holder = document.getElementById('click_to_open_modal');
var modal = document.getElementById('myModal');

modal_holder.onclick = function () {
    modal.style.display = 'block';
};

var span = document.getElementsByClassName('close')[0];

span.onclick = function () {
    modal.style.display = 'none';
};
