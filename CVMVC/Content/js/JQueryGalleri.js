function loadImages(images) {

    var arrImages = images.split(",");
    var html = "";

    for (var i = 0; i < arrImages.length; i++) {

        html += "<a onClick=\"javascript:ShowImage('" + arrImages[i] + "'); \"><img src=\"Images/Thumb/" + arrImages[i] + "\" class=\"images\" alt=\"Vis billede\" title=\"Vis billede\" onmouseover=\"mouseOver(this)\" onmouseout=\"mouseOut(this)\" /></a>";

    }
    imgPreloader(arrImages, "Images/Big/");
    document.getElementById('imgHolder').innerHTML = html;
    $("#imgHolder").fadeTo(700, 1);
}


function ShowImage(image) {


    $("#imgBox").fadeTo(700, 0, function () {

        if (image == 'none') {
            $("#imgBox").fadeTo(700, 0, function () {
            });
            $("#myImg").html('');
          
           }
        else {
            $("#imgBox").fadeTo(700, 1, function () {
            });
            $("#myImg").html('<img src="Images/Big/' + image + '" id="bigImg" width="720" alt="Luk billede" title="Luk billede" />');
           
        }
        
    });


}

function imgPreloader(arrImages, folder) {


    var preImg = new Image();

    for (var i = 0; i < arrImages.length; i++) {
        preImg.src = folder + arrImages[i];
    }
}

function mouseOver(object) {
    object.className = "thumpPop";
}
function mouseOut(object) {
    object.className = "images";
}
 