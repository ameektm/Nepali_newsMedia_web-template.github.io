function list_btn(){
    var list = document.getElementById("list-view");
    var grid = document.getElementById("grid-view");

    if (list.style.display === "none"){
        list.style.display = "block";
        grid.style.display = "none";
        document.getElementById('list-btn').classList.add('active-btn');
        document.getElementById('grid-btn').classList.remove('active-btn');
    }
    else{
        list.style.display = "none";
    }
};

function grid_btn(){
    var list = document.getElementById("list-view");
    var grid = document.getElementById("grid-view");

    if (grid.style.display === "none"){
        grid.style.display = "block";
        list.style.display = "none";
        document.getElementById('list-btn').classList.remove('active-btn');
        document.getElementById('grid-btn').classList.add('active-btn');
    }
    else{
        grid.style.display = "none";
    }
};