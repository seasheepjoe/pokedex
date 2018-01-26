$(function () {
    var isLoaded = false;
    var pokemons = '';
    $.ajax({
        url: 'assets/pokemons.json',
        type: 'get',
        dataType: 'json',
        async: false,
        success: function (data) {
            isLoaded = true;
            pokemons = data;
        },
        error: function (data) {
            var isLoaded = false;
        }

    });

    if (isLoaded === true) {
        var errors = ' ';
        var success = ' ';
        console.log("File loaded");
        $('form').submit(function () {

            var asked = $('input').val();
            asked = capitalize(asked);

            for (var i in pokemons) {
                if (asked === pokemons[i].name) {
                    document.querySelector('.name').innerHTML = 'Name : ' + pokemons[i].name;
                    document.querySelector('.type').innerHTML = 'Type : ' + pokemons[i].type;
                    var url = 'https://img.pokemondb.net/artwork/' + downcase(asked) + '.jpg';
                    var img = '<img src="' + url + '">';
                    document.querySelector('.img').innerHTML = img;
                    success = 'Pokemon found';
                    errors = ' ';
                    break;
                } else {
                    success = ' ';
                    errors = 'Pokemon ' + asked + ' not found';
                }

                if (asked === i) {
                    document.querySelector('.name').innerHTML = 'Name : ' + pokemons[i].name;
                    document.querySelector('.type').innerHTML = 'Type : ' + pokemons[i].type;
                    url = 'https://img.pokemondb.net/artwork/' + downcase(pokemons[i].name) + '.jpg';
                    img = '<img src="' + url + '">';
                    document.querySelector('.img').innerHTML = img;
                    success = 'Pokemon found';
                    errors = ' ';
                    break;
                } else {
                    success = ' ';
                    errors = 'Pokemon ' + asked + ' not found';
                }
            }document.querySelector('.errors').innerHTML = errors;
            document.querySelector('.success').innerHTML = success;
            return false;
        });
    } else {
        console.log('Fail to load file');
    }


});

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function downcase(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}