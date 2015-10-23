var pause = 4000; //Pause inden nyt billede vises. Angives i millisekunder. 

var img = new Array();
img[0] = 'Slite1.jpg';
img[1] = 'Slite2.jpg';
img[2] = 'Slite3.jpg';
img[3] = 'Slite4.jpg';


var imgID = 0;
imgID = Math.round(Math.random() * (img.length - 1));

function rotator() {
    var imgString = "";

    imgString = '/Content/GFX/' + img[imgID];

    if (imgID == img.length - 1) {
        imgID = 0;
    }
    else {
        imgID++;
    }


    $("#slider").fadeTo(700, 0, function () {
        $("#slider").attr("alt", imgString);
        $("#slider").attr("src", imgString);
        $("#slider").fadeTo(700, 1, function () {

        });

    });


    setTimeout('rotator()', pause);
}

$(document).ready(function () {

    rotator();

});