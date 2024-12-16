function accordion_toggle(target) {
    //console.log("open");
    //console.log(target);
    
    //create a reference to all sections using a class name
    var divsToHide = document.getElementsByClassName("accordion-section");
    //loop through each section
    for (var i = 0; i< divsToHide.length; i++) {
        //hide each section
        divsToHide[i].style.display = "none";
    }

    // create a reference to an element with the same name as the target variable
    var content = document.getElementById(target);
    //check if the content is currently displayed
    if(content.style.display === "block"){
        //hide the content
        content.style.display = "none";
    } else {
        //display the content
        content.style.display = "block";
    }
}
