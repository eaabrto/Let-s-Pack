
    document.getElementById("mimi").style.display = "block";



function showlist(navn){
    
    if (navn==='thomas'){
        document.getElementById("thomas").style.display = "block";
        document.getElementById("erik").style.display = "none";
        document.getElementById("mimi").style.display = "none";
    }

    if (navn==='erik'){
        document.getElementById("erik").style.display = "block";
        document.getElementById("thomas").style.display = "none";
        document.getElementById("mimi").style.display = "none";
    }


    if (navn==='mimi'){
        document.getElementById("mimi").style.display = "block";
        document.getElementById("erik").style.display = "none";
        document.getElementById("thomas").style.display = "none";
    }

}
