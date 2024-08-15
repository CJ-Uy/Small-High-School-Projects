var clicks = 1;

function clicked() {  
    setTimeout(() => {  flash(); }, 500);
    setTimeout(() => {  unflash(); }, 600);
    clicks++;
}

function flash() {
    document.getElementById("header").innerHTML="https://tinyurl.com/G8Card10-LmaoThisIsntIt";
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';

    if(clicks % 2 == 0){
        document.getElementById("video1").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'; //Ok heres the real one: 
        document.getElementById("video2").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'; //The link to the google forms:
        document.getElementById("klotho").src = "images/klothodef.jpg";
        document.getElementById("lachesis").src = "images/lachesisdef.jpg";
        document.getElementById("atropos").src = "images/atroposdef.jpg";
    } else {
        document.getElementById("video1").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/112xYMZSlBA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'; //Good luck sa G10 guys!
        document.getElementById("video2").innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/WD0F5-TyEVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'; // https://forms.gle/gnTg8TqE9JGBuWWV9
        document.getElementById("klotho").src = "images/klotho.jpg";
        document.getElementById("lachesis").src = "images/lachesis.jpg";
        document.getElementById("atropos").src = "images/atropos.jpg"; 
    }
    
}
function unflash() {
    document.getElementById("header").innerHTML="G9-Course Card 10";
    document.body.style.backgroundColor = '#1e1e1e';
    document.body.style.color = '#f1f1f1';
}

console.log("HAHAHA Lmao it wasnt gonna be that easy");