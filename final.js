function connect () {
    var searchTerm = document.getElementById("searchBox").value ;
    document.getElementById("searchBox").value = "" ; 
                    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`; 
 
     fetch (url)
     .then (res=> res.json() )
     .then (data => display(data.meals) );
}
 
 
 function display (items){
    var oldContent = document.getElementById("container3");
    oldContent.textContent = "";

    for (var i=0; i<6; i++){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `<div class="card" style="width: 18rem;">
                                    <img src="${items[i].strMealThumb}" class="card-img-top" alt="..." style=" display: block;
                                    margin-left: auto;
                                    margin-right: auto;
                                    width: 50%;
                                    margin-top: 15px;">
                                    <div class="card-body">
                                        <h5 class="card-title"> Meal Title: ${items[i].strMeal}</h5>
                                        <h6 class="card-id"> Meal ID: ${items[i].idMeal}</h6>
                                        <p class="card-text"> Instructions: ${items[i].strInstructions}</p>
                                    </div>
                                </div>
                                <br><br>`;
      newDiv.classList.add("innerStyle");
      oldContent.appendChild(newDiv);
 
    }
 
}

function connect2 () {
    var searchTerm = document.getElementById("searchBox").value ;
    document.getElementById("searchBox").value = "" ; 
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`; 
 
     fetch (url)
     .then (res=> res.json() )
     .then (data => display2(data.meals) );
}
 
 
 function display2 (items){
    var oldContent = document.getElementById("container3");
    oldContent.textContent = "";

    for (var i=0; i<items.length; i++){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `<div class="card" style="width: 18rem;">
                                    <img src="${items[i].strMealThumb}" class="card-img-top" alt="..." style=" display: block;
                                    margin-left: auto;
                                    margin-right: auto;
                                    width: 50%;
                                    margin-top: 15px;">
                                    <div class="card-body">
                                        <h5 class="card-title"> Meal Title: ${items[i].strMeal}</h5>
                                        <h6 class="card-id"> Meal ID: ${items[i].idMeal}</h6>
                                        <p class="card-text"> Instructions: ${items[i].strInstructions}</p>
                                    </div>
                                </div>
                                <br><br>`;
      newDiv.classList.add("innerStyle");
      oldContent.appendChild(newDiv);
 
    }
 
}