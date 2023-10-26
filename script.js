// let apiKey = "7b078e6930f74a7faba7b21507dd13d9";

// let mainPart = document.querySelector(".mainContainer");

// let obj = [];

// let query = "India";

// window.addEventListener("load", async() => {
//     let newsObj = await fetchNews(query);

//     console.log(newsObj)

//     screenUpadate(newsObj.articles);
// })



// async function fetchNews(query) {
//     let newsObject = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2023-09-23&sortBy=publishedAt&apiKey=f719141b80924485a8e02055e3ab7559`);

//     let obj = await newsObject.json();



//     return obj;
// }



// function screenUpadate(obj) {

//     console.log(obj);

//     for (let i = 0; i < obj.length; i++) {

//         let currObj = obj[i];

//         let title = currObj.title;
//         let des = currObj.description;
//         let imageLink = currObj.urlToImage;

//         let childEle = document.createElement('div');
//         childEle.innerHTML = `<div class="card" style="width: 18rem;">
//         <img class="card-img-top" src="${imageLink}" alt="Card image cap">
//         <div class="card-body">
//           <h5 class="card-title">${title}</h5>
//           <p class="card-text">${des}</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>`;

//         mainPart.appendChild(childEle);
//     }
// }









// we have to select mainContainer to update ........  that's why select it first

let mainContainer = document.querySelector(".mainContainer");

let searchbar = document.querySelector("#inputbar");
let searchbutton = document.querySelector("#searchbutton");

// which country do u want to search about 
let country = "India";



//  as soon as reach on website  we load...   window  first
// 1. parameter we use a event... which is  "load" .
// 2. parameter we use a async function...what we do at that time .
window.addEventListener("load", async() => {

    let obj = await searchAbout(country);
    // above we get object after call searchAbout(country) 


    // below we get objData then display obj article in screen  with the help of function calling
    DisplayOnScreen(obj.articles);

})



async function callApi(query) {
    let obj = await searchAbout(query);
    // above we get object after call searchAbout(country) 


    // below we get objData then display obj article in screen  with the help of function calling
    DisplayOnScreen(obj.articles);

}



// before get objData we have to create a function  " searchAbout " it take some time to fetch data that's why we use async await function
async function searchAbout(country) {

    let objectFetching = await fetch(`https://newsapi.org/v2/everything?q=${country}&from=2023-09-25&sortBy=publishedAt&apiKey=281f2736e01c49b4bbcc839e5aa61cbe`);
    // above in fetch pass a url api toprocess of  fetching resourse with country from server


    let getObjData = objectFetching.json();
    // above we getting data from tranmitting by server with the help of "json()" method

    return getObjData; // return obj Data 
}



searchbutton.addEventListener("click", () => {
    console.log(searchbar.value)
    callApi(searchbar.value);
    searchbar.innerHTML = ""
})



//  after getting objDatas  then display..... by create a function
function DisplayOnScreen(objData) {
    mainContainer.innerHTML = "";

    // we got objDatas in the form of array 
    // we use loop for getting one by one objData
    for (let i = 0; i < objData.length; i++) {

        let currObjData = objData[i];

        //    we got one objData and each objData have sub data like... tittle, auther img, description etc.. so store it and print
        let title = currObjData.title;
        let des = currObjData.description;
        let imageLink = currObjData.urlToImage;

        // we got sub Data then  create a  child div
        let childDiv = document.createElement('div');

        // then  create a container's child 
        childDiv.innerHTML = `<div class ="block"><div class="card height " style="width: 18rem;">
    <img class="card-img-top" src="${imageLink}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${des}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div></div>`;


        // then append it in mainContainer 
        mainContainer.appendChild(childDiv);
    }
}