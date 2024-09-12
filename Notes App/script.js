
document.addEventListener("DOMContentLoaded", function () {
    let mainn = document.querySelector("#main");
    let container = document.querySelector(".task-container")

    function saveData() {
        localStorage.setItem("data", container.innerHTML)
    }
        function dataSave() {
            localStorage.setItem("data", input.innerHTML)
        }
    function addTask() {
        let input = document.createElement("p");
        input.classList.add("adding");
        input.setAttribute("contenteditable", "true")
        container.appendChild(input);

        let image = document.createElement("img")
        image.classList.add("image2")
        image.setAttribute("src", "icons8-delete-button-30.png")
        input.appendChild(image)

        mainn.appendChild(container)
        saveData();
        dataSave();

    }
    document.querySelector("button").addEventListener("click", addTask);




    container.addEventListener("click", function (e) {
        if (e.target.tagName === "IMG") {
            e.target.parentElement.remove()
         
        }

    })



    // function showData() {
    //     container.innerHTML = localStorage.getItem("data");
    //     input.innerHTML = localStorage.getItem("data");
    // }


    // showData();
});


