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

    if (isLoaded === true){
        console.log("File loaded");
        $('form').submit(function () {
            var asked = $('input').val();
            for (var i in pokemons){
                if (asked === pokemons[i].name){
                    console.log('Pokemon found : ', asked);
                    console.log('Pokemon type : ', pokemons[i].type);
                }else{
                    console.log('Pokemon not found');
                }
            }
        });
    }else{
        console.log('Fail to load file');
    }


});