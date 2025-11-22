const closebtn = document.querySelector(".close")
const openbtn = document.querySelector(".open")
const sidemenu = document.querySelector(".sidemenu")
const homecont = document.querySelector(".homecont")
const Homeli = document.querySelector("#Homeli")
const home = document.querySelector(".home")
const searchli = document.querySelector("#searchli")
const search = document.querySelector(".search")
const Categoriesli = document.querySelector("#Categoriesli")
const category = document.querySelector(".category")
const Areali = document.querySelector("#Areali")
const area = document.querySelector(".area")
const Ingredientsli = document.querySelector("#Ingredientsli")
const ingredients = document.querySelector(".ingredients")
const Contactli = document.querySelector("#Contactli")
const contact = document.querySelector(".contact")
const detailes = document.querySelector(".detailes")
const namesea = document.querySelector(".name")
const firstletsea = document.querySelector(".firstlet")
const categoriesitems = document.querySelector(".categoriesitems")
const areaitems = document.querySelector(".areaitems")
const ingradientitems = document.querySelector(".ingradientitems")
const formName = document.querySelector(".name2")
const formEmail = document.querySelector(".email")
const formphone = document.querySelector(".phone")
const formage = document.querySelector(".age")
const formpass = document.querySelector(".pass")
const formRepass = document.querySelector(".repass")
const namealert = document.querySelector(".namealert")
const emailalert = document.querySelector(".emailalert")
const phonealert = document.querySelector(".phonealert")
const agealert = document.querySelector(".agealert")
const passalert = document.querySelector(".passalert")
const repassalert = document.querySelector(".repassalert")
const submitbtn = document.querySelector(".submitbtn")

let homeData = "";
let nameSearchData ="";
let firstkeySearchData ="";
let categdata= "";
let categorymeals=""
let areameals=""
let areadetailes=""
let ingredientMeals=""
let ingredientDetailes=""




openbtn.addEventListener("click", function () {
    // console.log("hello");
    sidemenu.style.transform = "translatex(0)"
    openbtn.classList.add("d-none")
    closebtn.classList.remove("d-none")
})

closebtn.addEventListener("click", function () {
    // console.log("hello");
    sidemenu.style.transform = "translatex(-75%)"
    closebtn.classList.add("d-none")
    openbtn.classList.remove("d-none")

})


async function getdata() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    const data = await response.json()
    let container = ""
    for (let i = 0; i < data.meals.length; i++) {
        // console.log(data.meals[i]);

        container += `<div class="col-md-3  gy-4 homeitem">
                <div class="position-relative">
                    <img src=${data.meals[i].strMealThumb} alt="">
                    <div onclick="showHomeDetails(${i})"  class="position-absolute homelayer d-flex  justify-content-center align-items-center overflow-hidden">
                    <h2  >${data.meals[i].strMeal}</h2>
                </div>
                </div>
            </div>`
    }

    homecont.innerHTML = container

    homeData = data.meals

}
getdata()


Homeli.addEventListener("click", function () {
    // console.log("hiiiiiiiiiiiii");

    sidemenu.style.transform = "translatex(-75%)"
    closebtn.classList.add("d-none")
    openbtn.classList.remove("d-none")

    if (home.classList.contains("d-none")) {
        home.classList.remove("d-none")
    }
    if (!search.classList.contains("d-none")) {
        search.classList.add("d-none")
    }

    if (!category.classList.contains("d-none")) {
        category.classList.add("d-none")
    }
    if (!area.classList.contains("d-none")) {
        area.classList.add("d-none")
    }
    if (!ingredients.classList.contains("d-none")) {
        ingredients.classList.add("d-none")
    }
    if (!contact.classList.contains("d-none")) {
        contact.classList.add("d-none")
    }

    if (detailes.classList.contains("position-absolute")) {
        detailes.classList.replace("position-absolute", "d-none")
    }
    if (!categoriesitems.classList.contains("d-none")) {
        categoriesitems.classList.add("d-none")
    }
    if (!areaitems.classList.contains("d-none")) {
        areaitems.classList.add("d-none")
    }
    if (!ingradientitems.classList.contains("d-none")) {
        ingradientitems.classList.add("d-none")
    }

})

searchli.addEventListener("click", function () {

    sidemenu.style.transform = "translatex(-75%)"
    closebtn.classList.add("d-none")
    openbtn.classList.remove("d-none")

    if (search.classList.contains("d-none")) {
        search.classList.remove("d-none")
    }

    if (!home.classList.contains("d-none")) {
        home.classList.add("d-none")
    }

    if (!category.classList.contains("d-none")) {
        category.classList.add("d-none")
    }
    if (!area.classList.contains("d-none")) {
        area.classList.add("d-none")
    }
    if (!ingredients.classList.contains("d-none")) {
        ingredients.classList.add("d-none")
    }
    if (!contact.classList.contains("d-none")) {
        contact.classList.add("d-none")
    }
    if (detailes.classList.contains("position-absolute")) {
        detailes.classList.replace("position-absolute", "d-none")
    }
    if (!categoriesitems.classList.contains("d-none")) {
        categoriesitems.classList.add("d-none")
    }
     if (!areaitems.classList.contains("d-none")) {
        areaitems.classList.add("d-none")
    }
     if (!ingradientitems.classList.contains("d-none")) {
        ingradientitems.classList.add("d-none")
    }
})

Categoriesli.addEventListener("click", function () {

    sidemenu.style.transform = "translatex(-75%)"
    closebtn.classList.add("d-none")
    openbtn.classList.remove("d-none")
    if (category.classList.contains("d-none")) {
        category.classList.remove("d-none")
    }
    if (!search.classList.contains("d-none")) {
        search.classList.add("d-none")
    }

    if (!home.classList.contains("d-none")) {
        home.classList.add("d-none")
    }
    if (!area.classList.contains("d-none")) {
        area.classList.add("d-none")
    }
    if (!ingredients.classList.contains("d-none")) {
        ingredients.classList.add("d-none")
    }
    if (!contact.classList.contains("d-none")) {
        contact.classList.add("d-none")
    }
    if (detailes.classList.contains("position-absolute")) {
        detailes.classList.replace("position-absolute", "d-none")
    }
    if (!categoriesitems.classList.contains("d-none")) {
        categoriesitems.classList.add("d-none")
    }
     if (!areaitems.classList.contains("d-none")) {
        areaitems.classList.add("d-none")
    }
     if (!ingradientitems.classList.contains("d-none")) {
        ingradientitems.classList.add("d-none")
    }
})

Areali.addEventListener("click", function () {
    sidemenu.style.transform = "translatex(-75%)"
    closebtn.classList.add("d-none")
    openbtn.classList.remove("d-none")

    if (area.classList.contains("d-none")) {
        area.classList.remove("d-none")
    }
    if (!category.classList.contains("d-none")) {
        category.classList.add("d-none")
    }
    if (!search.classList.contains("d-none")) {
        search.classList.add("d-none")
    }

    if (!home.classList.contains("d-none")) {
        home.classList.add("d-none")
    }
    if (!ingredients.classList.contains("d-none")) {
        ingredients.classList.add("d-none")
    }
    if (!contact.classList.contains("d-none")) {
        contact.classList.add("d-none")
    }
    if (detailes.classList.contains("position-absolute")) {
        detailes.classList.replace("position-absolute", "d-none")
    }
    if (!categoriesitems.classList.contains("d-none")) {
        categoriesitems.classList.add("d-none")
    }
     if (!areaitems.classList.contains("d-none")) {
        areaitems.classList.add("d-none")
    }
     if (!ingradientitems.classList.contains("d-none")) {
        ingradientitems.classList.add("d-none")
    }
})

Ingredientsli.addEventListener("click", function () {
    sidemenu.style.transform = "translatex(-75%)"
    closebtn.classList.add("d-none")
    openbtn.classList.remove("d-none")

    if (ingredients.classList.contains("d-none")) {
        ingredients.classList.remove("d-none")
    }
    if (!area.classList.contains("d-none")) {
        area.classList.add("d-none")
    }
    if (!category.classList.contains("d-none")) {
        category.classList.add("d-none")
    }
    if (!search.classList.contains("d-none")) {
        search.classList.add("d-none")
    }

    if (!home.classList.contains("d-none")) {
        home.classList.add("d-none")
    }
    if (!contact.classList.contains("d-none")) {
        contact.classList.add("d-none")
    }
    if (detailes.classList.contains("position-absolute")) {
        detailes.classList.replace("position-absolute", "d-none")
    }
    if (!categoriesitems.classList.contains("d-none")) {
        categoriesitems.classList.add("d-none")
    }
     if (!areaitems.classList.contains("d-none")) {
        areaitems.classList.add("d-none")
    }
     if (!ingradientitems.classList.contains("d-none")) {
        ingradientitems.classList.add("d-none")
    }
})
Contactli.addEventListener("click", function () {
    sidemenu.style.transform = "translatex(-75%)"
    closebtn.classList.add("d-none")
    openbtn.classList.remove("d-none")

    if (contact.classList.contains("d-none")) {
        contact.classList.remove("d-none")
    }
    if (!ingredients.classList.contains("d-none")) {
        ingredients.classList.add("d-none")
    }
    if (!area.classList.contains("d-none")) {
        area.classList.add("d-none")
    }
    if (!category.classList.contains("d-none")) {
        category.classList.add("d-none")
    }
    if (!search.classList.contains("d-none")) {
        search.classList.add("d-none")
    }

    if (!home.classList.contains("d-none")) {
        home.classList.add("d-none")
    }
    if (detailes.classList.contains("position-absolute")) {
        detailes.classList.replace("position-absolute", "d-none")
    }

     if (!categoriesitems.classList.contains("d-none")) {
        categoriesitems.classList.add("d-none")
    }
     if (!areaitems.classList.contains("d-none")) {
        areaitems.classList.add("d-none")
    }
     if (!ingradientitems.classList.contains("d-none")) {
        ingradientitems.classList.add("d-none")
    }
})

function showHomeDetails(index) {
    // console.log(index);
    detailes.classList.replace("d-none", "position-absolute")
    if (!contact.classList.contains("d-none")) {
        contact.classList.add("d-none")
    }
    if (!ingredients.classList.contains("d-none")) {
        ingredients.classList.add("d-none")
    }
    if (!area.classList.contains("d-none")) {
        area.classList.add("d-none")
    }
    if (!category.classList.contains("d-none")) {
        category.classList.add("d-none")
    }
    if (!search.classList.contains("d-none")) {
        search.classList.add("d-none")
    }

    if (!home.classList.contains("d-none")) {
        home.classList.add("d-none")
    }
    

    document.querySelector(".infoimg").setAttribute("src", homeData[index].strMealThumb)
    document.querySelector(".infoname").innerHTML = homeData[index].strMeal
    document.querySelector(".descreption").innerHTML = homeData[index].strInstructions
    document.querySelector(".areastr").innerHTML = homeData[index].strArea
    document.querySelector(".Category").innerHTML = homeData[index].strCategory

    let recicontainer = ""
    for (let i = 1; i <= 20; i++) {
        if (homeData[index][`strIngredient${i}`] != "" && homeData[index][`strMeasure${i}`] != "") {
            // console.log(homeData[index][`strMeasure${i}`] + " " + homeData[index][`strIngredient${i}`]);
            recicontainer += `<div class="w-auto bg-info p-2 rounded-2 text-black">${homeData[index][`strMeasure${i}`] + " " + homeData[index][`strIngredient${i}`]}</div>`
        }

    }

    document.querySelector(".Recipescontain").innerHTML = recicontainer

    document.querySelector(".source").setAttribute("href", homeData[index].strSource)
    document.querySelector(".youtube").setAttribute("href",homeData[index].strYoutube)

    // console.log(homeData[index]);

}


namesea.addEventListener("input",function(){
    // console.log(name.value);
    searchByName()
})

async function searchByName(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${namesea.value}`)
    let data =await response.json()
    console.log(data);
    let namecontainer = ""
    if(data.meals){
        for (let i = 0; i < data.meals.length; i++) {
            namecontainer += ` <div class="col-md-3 searchitem">
            <div class="position-relative">
            <img src=${data.meals[i].strMealThumb} alt="" class="nameimg">
            <div  onclick="shownamesearchDeatels(${i})" class="searchlayer position-absolute overflow-hidden d-flex justify-content-center align-items-center">
            <h2>${data.meals[i].strMeal}</h2>
            </div>
            </div>
            </div>`
            
        }
        
        document.querySelector(".searchcontainer").innerHTML = namecontainer;
        nameSearchData = data.meals;
    }
    
    
    
}
function shownamesearchDeatels(index) {
    // console.log(index);
    detailes.classList.replace("d-none", "position-absolute")
    if (!contact.classList.contains("d-none")) {
        contact.classList.add("d-none")
    }
    if (!ingredients.classList.contains("d-none")) {
        ingredients.classList.add("d-none")
    }
    if (!area.classList.contains("d-none")) {
        area.classList.add("d-none")
    }
    if (!category.classList.contains("d-none")) {
        category.classList.add("d-none")
    }
    if (!search.classList.contains("d-none")) {
        search.classList.add("d-none")
    }

    if (!home.classList.contains("d-none")) {
        home.classList.add("d-none")
    }
    

    document.querySelector(".infoimg").setAttribute("src", nameSearchData[index].strMealThumb)
    document.querySelector(".infoname").innerHTML = nameSearchData[index].strMeal
    document.querySelector(".descreption").innerHTML = nameSearchData[index].strInstructions
    document.querySelector(".areastr").innerHTML = nameSearchData[index].strArea
    document.querySelector(".Category").innerHTML = nameSearchData[index].strCategory

    let recicontainer = ""
    for (let i = 1; i <= 20; i++) {
        if (nameSearchData[index][`strIngredient${i}`] != "" && nameSearchData[index][`strMeasure${i}`] != "") {
            // console.log(nameSearchData[index][`strMeasure${i}`] + " " + nameSearchData[index][`strIngredient${i}`]);
            recicontainer += `<div class="w-auto bg-info p-2 rounded-2 text-black">${nameSearchData[index][`strMeasure${i}`] + " " + nameSearchData[index][`strIngredient${i}`]}</div>`
        }

    }

    document.querySelector(".Recipescontain").innerHTML = recicontainer

    document.querySelector(".source").setAttribute("href", nameSearchData[index].strSource)
    document.querySelector(".youtube").setAttribute("href",nameSearchDataa[index].strYoutube)

    // console.log(homeData[index]);

}


firstletsea.addEventListener("input",function(){
    // console.log(firstletsea.value);
    searchByFirstLetter()
})

async function searchByFirstLetter(){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${firstletsea.value}`)
    let data =await response.json()
    // console.log(data);
    let firstLetterSearch = ""
    if(data.meals){
        for (let i = 0; i < data.meals.length; i++) {
            firstLetterSearch += ` <div class="col-md-3 searchitem">
            <div class="position-relative">
            <img src=${data.meals[i].strMealThumb} alt="" class="nameimg">
            <div  onclick="firstletterSearch(${i})" class="searchlayer position-absolute overflow-hidden d-flex justify-content-center align-items-center">
            <h2>${data.meals[i].strMeal}</h2>
            </div>
            </div>
            </div>`
            
        }
        
        document.querySelector(".searchcontainer").innerHTML = firstLetterSearch;
        firstkeySearchData = data.meals;
    }
    
    
    
}
function firstletterSearch(index) {
    // console.log(index);
    detailes.classList.replace("d-none", "position-absolute")
    if (!contact.classList.contains("d-none")) {
        contact.classList.add("d-none")
    }
    if (!ingredients.classList.contains("d-none")) {
        ingredients.classList.add("d-none")
    }
    if (!area.classList.contains("d-none")) {
        area.classList.add("d-none")
    }
    if (!category.classList.contains("d-none")) {
        category.classList.add("d-none")
    }
    if (!search.classList.contains("d-none")) {
        search.classList.add("d-none")
    }

    if (!home.classList.contains("d-none")) {
        home.classList.add("d-none")
    }
    

    document.querySelector(".infoimg").setAttribute("src", firstkeySearchData[index].strMealThumb)
    document.querySelector(".infoname").innerHTML = firstkeySearchData[index].strMeal
    document.querySelector(".descreption").innerHTML = firstkeySearchData[index].strInstructions
    document.querySelector(".areastr").innerHTML = firstkeySearchData[index].strArea
    document.querySelector(".Category").innerHTML = firstkeySearchData[index].strCategory

    let recicontainer = ""
    for (let i = 1; i <= 20; i++) {
        if (firstkeySearchData[index][`strIngredient${i}`] != "" && firstkeySearchData[index][`strMeasure${i}`] != "") {
            // console.log(firstkeySearchData[index][`strMeasure${i}`] + " " + firstkeySearchData[index][`strIngredient${i}`]);
            recicontainer += `<div class="w-auto bg-info p-2 rounded-2 text-black">${firstkeySearchData[index][`strMeasure${i}`] + " " + firstkeySearchData[index][`strIngredient${i}`]}</div>`
        }

    }

    document.querySelector(".Recipescontain").innerHTML = recicontainer

    document.querySelector(".source").setAttribute("href", firstkeySearchData[index].strSource)
    document.querySelector(".youtube").setAttribute("href",firstkeySearchData[index].strYoutube)

    // console.log(homeData[index]);

}

async function getCategory(){
const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
const data = await response.json()
let catcontainer=""
for (let i = 0; i < data.categories.length; i++) {
    
    // console.log(data.categories[i]);

    catcontainer += ` <div class="col-md-3 catitem">
                <div class="position-relative">
                    <img src=${data.categories[i].strCategoryThumb} alt="">
                    <div onclick="getDataByCategory(${i})" class="catlayer position-absolute overflow-hidden">
                        <h3>${data.categories[i].strCategory}</h3>
                        <p>${data.categories[i].strCategoryDescription}</p>
                    </div>
                </div>
            </div>`
    
}
document.querySelector(".categorycontainer").innerHTML = catcontainer
categdata = data.categories


}
getCategory()

 async function getDataByCategory(index) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categdata[index].strCategory}`)
    const data  = await response.json()
    // console.log(data);

    let container = ""
 
    if (data.meals.length >25) {
           for (let i = 0; i < 25; i++) {
        container +=  `<div class="col-md-3  gy-4 cat">
                <div class="position-relative">
                    <img src=${data.meals[i].strMealThumb} alt="">
                    <div onclick="getcategoryDeatailes(${i})"  class="position-absolute homelayer d-flex  justify-content-center align-items-center overflow-hidden">
                    <h2  >${data.meals[i].strMeal}</h2>
                </div>
                </div>

                
            </div>`
        
    }
    }else{
           for (let i = 0; i < data.meals.length; i++) {
        container +=  `<div class="col-md-3  gy-4 cat">
                <div class="position-relative">
                    <img src=${data.meals[i].strMealThumb} alt="">
                    <div onclick="getcategoryDeatailes(${i})"  class="position-absolute homelayer d-flex  justify-content-center align-items-center overflow-hidden">
                    <h2  >${data.meals[i].strMeal}</h2>
                </div>
                </div>

                
            </div>`
        
    }
    }

    document.querySelector(".categorycont").innerHTML = container
     categorymeals = data.meals

    category.classList.add("d-none")
    categoriesitems.classList.replace("d-none","d-block")
    
}

async function getcategoryDeatailes(index){
const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${categorymeals[index].strMeal}`)
    let data =await response.json()
    // console.log(data);

    detailes.classList.replace("d-none", "position-absolute")
    categoriesitems.classList.add("d-none")
    if (!contact.classList.contains("d-none")) {
        contact.classList.add("d-none")
    }
    if (!ingredients.classList.contains("d-none")) {
        ingredients.classList.add("d-none")
    }
    if (!area.classList.contains("d-none")) {
        area.classList.add("d-none")
    }
    if (!category.classList.contains("d-none")) {
        category.classList.add("d-none")
    }
    if (!search.classList.contains("d-none")) {
        search.classList.add("d-none")
    }

    if (!home.classList.contains("d-none")) {
        home.classList.add("d-none")
    }
    

    document.querySelector(".infoimg").setAttribute("src", data.meals[0].strMealThumb)
    document.querySelector(".infoname").innerHTML = data.meals[0].strMeal
    document.querySelector(".descreption").innerHTML = data.meals[0].strInstructions
    document.querySelector(".areastr").innerHTML = data.meals[0].strArea
    document.querySelector(".Category").innerHTML = data.meals[0].strCategory

    let recicontainer = ""
    for (let i = 1; i <= 20; i++) {
        if (data.meals[0][`strIngredient${i}`] != "" && data.meals[0][`strMeasure${i}`] != "") {
            // console.log(data.meals[0][`strMeasure${i}`] + " " + data.meals[0][`strIngredient${i}`]);
            recicontainer += `<div class="w-auto bg-info p-2 rounded-2 text-black">${data.meals[0][`strMeasure${i}`] + " " + data.meals[0][`strIngredient${i}`]}</div>`
        }

    }

    document.querySelector(".Recipescontain").innerHTML = recicontainer

    document.querySelector(".source").setAttribute("href", data.meals[0].strSource)
    document.querySelector(".youtube").setAttribute("href",data.meals[0].strYoutube)

}

async function getArea() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list}`)
    let data =await response.json()
    // console.log(data);
    let container = ""
    for (let i = 0; i < data.meals.length; i++) {
        container += ` <div class="col-md-3">
                <div onclick="getDataByArea(${i})" class=" text-center text-white">
                    <img src="images/logo.png" class="w-75" alt="">
                    <h3>${data.meals[i].strArea}</h3>
                </div>
            </div>`
        
    }
    document.querySelector(".areacont").innerHTML = container
    areameals = data.meals
}

getArea()

async function getDataByArea(index) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areameals[index].strArea}`)
    const data  = await response.json()
    // console.log(data);

    let container = ""
 
    if (data.meals.length >25) {
           for (let i = 0; i < 25; i++) {
        container +=  `<div class="col-md-3  gy-4 ">
                <div class="position-relative areaaa">
                    <img src=${data.meals[i].strMealThumb} alt="">
                    <div onclick="getAreaDeatailes(${i})"  class="position-absolute homelayer d-flex  justify-content-center align-items-center overflow-hidden">
                    <h2  >${data.meals[i].strMeal}</h2>
                </div>
                </div>

                
            </div>`
        
    }
    }else{
           for (let i = 0; i < data.meals.length; i++) {
        container +=  `<div class="col-md-3  gy-4 ">
                <div class="position-relative areaaa">
                    <img src=${data.meals[i].strMealThumb} alt="">
                    <div onclick="getAreaDeatailes(${i})"  class="position-absolute homelayer d-flex  justify-content-center align-items-center overflow-hidden">
                    <h2  >${data.meals[i].strMeal}</h2>
                </div>
                </div>

                
            </div>`
        
    }
    }

    document.querySelector(".areacontain").innerHTML = container
     areadetailes = data.meals

    area.classList.add("d-none")
    areaitems.classList.replace("d-none","d-block")

}

async function getAreaDeatailes(index){
const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${areadetailes[index].strMeal}`)
    let data =await response.json()
    // console.log(data);

    detailes.classList.replace("d-none", "position-absolute")
    areaitems.classList.add("d-none")
    if (!contact.classList.contains("d-none")) {
        contact.classList.add("d-none")
    }
    if (!ingredients.classList.contains("d-none")) {
        ingredients.classList.add("d-none")
    }
    if (!area.classList.contains("d-none")) {
        area.classList.add("d-none")
    }
    if (!category.classList.contains("d-none")) {
        category.classList.add("d-none")
    }
    if (!search.classList.contains("d-none")) {
        search.classList.add("d-none")
    }

    if (!home.classList.contains("d-none")) {
        home.classList.add("d-none")
    }
    

    document.querySelector(".infoimg").setAttribute("src", data.meals[0].strMealThumb)
    document.querySelector(".infoname").innerHTML = data.meals[0].strMeal
    document.querySelector(".descreption").innerHTML = data.meals[0].strInstructions
    document.querySelector(".areastr").innerHTML = data.meals[0].strArea
    document.querySelector(".Category").innerHTML = data.meals[0].strCategory

    let recicontainer = ""
    for (let i = 1; i <= 20; i++) {
        if (data.meals[0][`strIngredient${i}`] != "" && data.meals[0][`strMeasure${i}`] != "") {
            console.log(data.meals[0][`strMeasure${i}`] + " " + data.meals[0][`strIngredient${i}`]);
            recicontainer += `<div class="w-auto bg-info p-2 rounded-2 text-black">${data.meals[0][`strMeasure${i}`] + " " + data.meals[0][`strIngredient${i}`]}</div>`
        }

    }

    document.querySelector(".Recipescontain").innerHTML = recicontainer

    document.querySelector(".source").setAttribute("href", data.meals[0].strSource)
    document.querySelector(".youtube").setAttribute("href",data.meals[0].strYoutube)

}

 async function getIngredients(){
const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
let data = await response.json()
// console.log(data);
let container = ""
for (let i = 0; i < 25; i++) {
    container += ` <div class="col-md-3 text-center text-white">
                <div onclick="getDataByingredient(${i})">
                    <div class="ingrimg">
                        <img src=${data.meals[i].strThumb} alt="">
                    </div>
                    <h3>${data.meals[i].strIngredient}</h3>
                </div>
            </div>`
    
}

document.querySelector(".ingcon").innerHTML = container

ingredientMeals=data.meals

}
 getIngredients()


  async function getDataByingredient(index) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientMeals[index].strIngredient}`)
    const data  = await response.json()
    // console.log(data);

    let container = ""
 
    if (data.meals.length >25) {
           for (let i = 0; i < 25; i++) {
        container +=  `<div class="col-md-3  gy-4 ingreeeed">
                <div class="position-relative">
                    <img src=${data.meals[i].strMealThumb} alt="">
                    <div onclick="getingredientDeatailes(${i})" class="position-absolute homelayer d-flex  justify-content-center align-items-center overflow-hidden">
                    <h2  >${data.meals[i].strMeal}</h2>
                </div>
                </div>

                
            </div>`
        
    }
    }else{
           for (let i = 0; i < data.meals.length; i++) {
        container +=  `<div class="col-md-3  gy-4 ingreeeed">
                <div class="position-relative">
                    <img src=${data.meals[i].strMealThumb} alt="">
                    <div onclick="getingredientDeatailes(${i})" class="position-absolute homelayer d-flex  justify-content-center align-items-center overflow-hidden">
                    <h2  >${data.meals[i].strMeal}</h2>
                </div>
                </div>

                
            </div>`
        
    }
    }

    document.querySelector(".ingredientcontain").innerHTML = container
     ingredientDetailes = data.meals

    ingredients.classList.add("d-none")
    ingradientitems.classList.replace("d-none","d-block")
    
}

async function getingredientDeatailes(index){
const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${ingredientDetailes[index].strMeal}`)
    let data =await response.json()
    // console.log(data);

    detailes.classList.replace("d-none", "position-absolute")
    ingradientitems.classList.add("d-none")
    if (!contact.classList.contains("d-none")) {
        contact.classList.add("d-none")
    }
    if (!ingredients.classList.contains("d-none")) {
        ingredients.classList.add("d-none")
    }
    if (!area.classList.contains("d-none")) {
        area.classList.add("d-none")
    }
    if (!category.classList.contains("d-none")) {
        category.classList.add("d-none")
    }
    if (!search.classList.contains("d-none")) {
        search.classList.add("d-none")
    }

    if (!home.classList.contains("d-none")) {
        home.classList.add("d-none")
    }
    

    document.querySelector(".infoimg").setAttribute("src", data.meals[0].strMealThumb)
    document.querySelector(".infoname").innerHTML = data.meals[0].strMeal
    document.querySelector(".descreption").innerHTML = data.meals[0].strInstructions
    document.querySelector(".areastr").innerHTML = data.meals[0].strArea
    document.querySelector(".Category").innerHTML = data.meals[0].strCategory

    let recicontainer = ""
    for (let i = 1; i <= 20; i++) {
        if (data.meals[0][`strIngredient${i}`] != "" && data.meals[0][`strMeasure${i}`] != "") {
            // console.log(data.meals[0][`strMeasure${i}`] + " " + data.meals[0][`strIngredient${i}`]);
            recicontainer += `<div class="w-auto bg-info p-2 rounded-2 text-black">${data.meals[0][`strMeasure${i}`] + " " + data.meals[0][`strIngredient${i}`]}</div>`
        }

    }

    document.querySelector(".Recipescontain").innerHTML = recicontainer

    document.querySelector(".source").setAttribute("href", data.meals[0].strSource)
    document.querySelector(".youtube").setAttribute("href",data.meals[0].strYoutube)

}



formName.addEventListener("blur",function(){
    validatename()
    validateBtn()
})

function validatename() {
    const pattern = /^[a-zA-Z\s]+$/
    let res = pattern.test(formName.value)
    if (pattern.test(formName.value) != true) {
        namealert.classList.replace("d-none","d-block")
    }else{
        namealert.classList.add("d-none")
        return true
    }
}
formEmail.addEventListener("blur",function(){
    validateemail()
    validateBtn()
})

function validateemail() {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let res = pattern.test(formEmail.value)
    if (pattern.test(formEmail.value) != true) {
        emailalert.classList.replace("d-none","d-block")
    }else{
        emailalert.classList.add("d-none")
        return true
    }
}
formphone.addEventListener("blur",function(){
    validatephone()
    validateBtn()
})

function validatephone() {
    const pattern = /^01[0-2,5]{1}[0-9]{8}$/
    let res = pattern.test(formphone.value)
    if (pattern.test(formphone.value) != true) {
        phonealert.classList.replace("d-none","d-block")
    }else{
        phonealert.classList.add("d-none")
        return true
    }
}
formage.addEventListener("blur",function(){
   validateage()
   validateBtn()
})

function validateage() {
    const pattern = /^(?:100|[1-9][0-9])$/
    let res = pattern.test(formage.value)
    if (pattern.test(formage.value) != true) {
        agealert.classList.replace("d-none","d-block")
    }else{
        agealert.classList.add("d-none")
        return true
    }
}
formpass.addEventListener("blur",function(){
validatepass() 
validateRepass()
validateBtn()
})

function validatepass() {
    const pattern = /^.{8,}$/
    let res = pattern.test(formpass.value)
    if (pattern.test(formpass.value) != true) {
        passalert.classList.replace("d-none","d-block")
    }else{
        passalert.classList.add("d-none")
        return true
    }
}

formRepass.addEventListener("blur",function(){
validateRepass()
validateBtn()
})

function validateRepass() {
    
    if (formRepass.value != formpass.value) {
        repassalert.classList.replace("d-none","d-block")
    
    }else{
        repassalert.classList.add("d-none")
        return true
    }
}

function validateBtn() {
    if (validatename() === true && validateemail() === true && validatephone()=== true && validateage()=== true && validatepass() === true && validateRepass()=== true) {
        submitbtn.removeAttribute("disabled")
        
    }else{
        submitbtn.setAttribute("disabled",true)
        
    }
}