const key="8pUWHO34EVZroWdRDytYHIBUICxNgIZKjZ1FwAgSNjg";
const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResultsEl = document.querySelector(".search-results");
const showMoreEl = document.getElementById("show-more-button");

let inputData="";
let page=1;

async function searchImages(){
    inputData= searchInputEl.value;
    //console.log(inputData);
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${key}`;
    console.log(url);
    const response = await fetch(url);
    const data=await response.json();
   
    if(page === 1){
        searchResultsEl.innerHTML="";
        console.log(searchResultsEl.value);
    }

    const results=data.results;
    results.map((result)=>{
        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("single-result");
        const img = document.createElement("img");
        img.src=result.urls.small;
        img.alt=result.alt_description;
        const imgLink = document.createElement("a");
        imgLink.href=result.links.html;
        imgLink.target="_blank";
        imgLink.textContent=result.alt_description;

        imgWrapper.appendChild(img);
        imgWrapper.appendChild(imgLink);
        searchResultsEl.appendChild(imgWrapper);
        
    });
    page++;
    if(page>1) showMoreEl.style.display="block";
    console.log(results);
}


formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    page=1;
    searchImages();
    // console.log("Submitted");
});

showMoreEl.addEventListener('click',()=>{
    searchImages();
})