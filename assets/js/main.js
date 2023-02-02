function freshNews(){
    var fresh = document.getElementById("fresh-news");
    var popular = document.getElementById("popular-news");

    if (fresh.style.display === "none"){
        fresh.style.display = "block";
        popular.style.display = "none";
        document.getElementById('fresh-btn').classList.add('active')
        document.getElementById('popular-btn').classList.remove('active')
    }
    else{
        fresh.style.display = "none";
    }
};

function popularNews(){
    var fresh = document.getElementById("fresh-news");
    var popular = document.getElementById("popular-news");

    if (popular.style.display === "none"){
        popular.style.display = "block";
        fresh.style.display = "none";
        document.getElementById('fresh-btn').classList.remove('active')
        document.getElementById('popular-btn').classList.add('active')
    }
    else{
        popular.style.display = "none";
    }
};