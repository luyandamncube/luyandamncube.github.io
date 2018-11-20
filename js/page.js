function playAudio(clip_name) { 
    clip_name.play(); 
} 
function pauseAudio(clip_name) { 
    clip_name.pause(); 
}

window.onload = function () {
    var fullname = document.getElementById('fullname'),
    shortname = document.getElementById("shortname"),
    full_button = document.getElementById("short_button"),
    short_button = document.getElementById("full_button");

    short_button.addEventListener('click', function(){
        playAudio(shortname); 
    });

    full_button.addEventListener('click', function(){
        playAudio(fullname); 
    });
}