$(function () {
    alert("Type 'Nidoran-f' for female Nidoran and 'Nidoran-m' for male Nidoran");
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
            isLoaded = false;
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
                    displayPoke(pokemons[i].name, pokemons[i].type);
                    success = 'Pokemon found';
                    errors = ' ';
                    break;
                } else {
                    success = ' ';
                    errors = 'Pokemon ' + asked + ' not found';
                }

                if (asked === i) {
                    displayPoke(pokemons[i].name, pokemons[i].type);
                    success = 'Pokemon found';
                    errors = ' ';
                    break;
                } else if (1 > asked || 152 < asked) {
                    errors = 'Please enter a value between 1 and 151';
                    break;
                } else {
                    success = ' ';
                    errors = 'Pokemon ' + asked + ' not found';
                }
            }
            $(".errors").text(errors);
            $(".success").text(success);
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

function displayPoke(name, type) {
    var pokeName = $(".name");
    var pokeType = $(".type");
    var img = $(".img");
    img.attr('src', 'https://img.pokemondb.net/artwork/' + downcase(name) + '.jpg');
    pokeName.text("Name : " + name);
    pokeType.text("Type : " + type);
}