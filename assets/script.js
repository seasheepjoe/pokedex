$(function () {
    $.ajax({
        url: 'assets/pokemons.json',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            for (var i in data) {
                var students = document.querySelector('.asked-pokemon');
                students.innerHTML += data[i].name + '<br>';
            }
        }
    });

});