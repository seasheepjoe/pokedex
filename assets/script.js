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
        console.log("File loaded");
        $('form').submit(function () {
            var asked = $('input').val();
            asked = capitalize(asked);

            console.log(asked);
            for (var i in pokemons) {
                if (asked === pokemons[i].name) {
                    document.querySelector('.name').innerHTML = 'Name : ' + pokemons[i].name;
                    document.querySelector('.type').innerHTML = 'Type : ' + pokemons[i].type;
                    var url = 'https://img.pokemondb.net/artwork/' + downcase(asked) + '.jpg';
                    var img = '<img src="' + url + '">';
                    document.querySelector('.img').innerHTML = img;
                } else {
                    console.log('Pokemon Not Found With Name');
                }

                if (asked === i) {
                    document.querySelector('.name').innerHTML = 'Name : ' + pokemons[i].name;
                    document.querySelector('.type').innerHTML = 'Type : ' + pokemons[i].type;
                    url = 'https://img.pokemondb.net/artwork/' + downcase(pokemons[i].name) + '.jpg';
                    img = '<img src="' + url + '">';
                    document.querySelector('.img').innerHTML = img;
                } else {
                    console.log('Pokemon Not Found With Number');
                }

            }
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