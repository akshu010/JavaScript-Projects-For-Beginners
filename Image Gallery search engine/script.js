let input = document.querySelector(".search input");
let btn = document.querySelector(".btn");
let images = document.querySelector(".images");
let download = document.querySelector(".download")

const accessKey = ""//app accesskey;
let page = 1;
let keyword = "";

function load(imageUrl){
   fetch(imageUrl).then(res=>res.blob()).then(file=>{
    let a = document.createElement("a")
    a.href=URL.createObjectURL(file)
    a.download=new Date().getTime()
    a.click()
   }).catch(()=>alert("download failed"))
}
async function getResponce() {
  keyword = input.value;
  let url = ""//Add api for working of the project
  let responce = await fetch(url);
  let data = await responce.json();
  let result = data.results;
  if(page==1){
    images.innerHTML = ""
  }
  more.style.opacity = 1;
  console.log(result);
  result.map((result) => {
    let li = document.createElement("li");
    li.classList.add("image");
    let html = `<li class="image">
            <img src="${result.preview_photos[0].urls.small}" alt="img" class="photo"/>
            <div class="details">
              <div class="user">
                <i class="ri-camera-line"></i> 
                <span>${result.title}</span>
              </div>
              <div class="download" onclick=load("${result.preview_photos[0].urls.small}")>
                <i class="ri-download-line"></i>
              </div>
            </div>
          </li>`;
    li.innerHTML = html;
    images.appendChild(li);
  });
}
input.addEventListener("keyup",(e)=>{
    page = 1
    if(e.key == "Enter"){
        getResponce();
    }
})
btn.addEventListener("click", () => {
  page = 1;
  getResponce();
//   li.innerHTML = "";
});
more.addEventListener("click",()=>{
    page++;
    getResponce();
})