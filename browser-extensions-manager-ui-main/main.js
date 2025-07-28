fetch("data.json")
.then(data=>data.json())
.then((res) => {
    console.log(res)

    const mainExtension = document.querySelector(".main-extension"); 

    for (let i = 0; i < res.length; i++) {
        const extension = res[i];
        console.log(extension);

    const gridCols = document.createElement("div");
    gridCols.className = "grid-col";
    gridCols.innerHTML = `<div class="top">
                <img src="${extension.logo}"/>
                <div class="desc">
                <h2>${extension.name}</h2>
                <p>${extension.description}</p>
                </div>
                <div class="ext">
                <button class="remove">Remove</button>
                <label class="switch">
                <input type="checkbox" ${extension.isActive ? "checked" : ""}/>
                <span class="slider"></span>
                </label>
                </div>
                </div>`

                gridCols.dataset.isActive = extension.isActive ? "true" : "false";
                mainExtension.appendChild(gridCols);

    }

    mainExtension.addEventListener("click", (e) => {
    if(e.target.classList.contains("remove")) {
        e.target.closest(".grid-col").remove();
    }
})

mainExtension.addEventListener("change", (e) => {
    if(e.target.type === "checkbox") {
        e.target.closest(".grid-col").dataset.isActive = e.target.checked ? "true" : "false";
    }
});

});

const sun = document.querySelector(".sun-theme");
const moon = document.querySelector(".moon-theme");

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "light") {
    document.body.classList.add("light-theme");
    sun.style.display = "none";
    moon.style.display = "block";
} else {
    document.body.classList.remove("light-theme");
    sun.style.display = "block";
    moon.style.display = "none";
}

sun.addEventListener("click", () => {
    document.body.classList.add("light-theme");
    sun.style.display = "none";
    moon.style.display = "block";
    localStorage.setItem("theme", "light");
})

moon.addEventListener("click", () => {
    document.body.classList.remove("light-theme");
    moon.style.display = "none";
    sun.style.display = "block";
    localStorage.setItem("theme", "dark");
});


const allFilter = document.querySelector(".all-filter");
const activeFilter = document.querySelector(".active-filter");
const inactiveFilter = document.querySelector(".inactive-filter");


activeFilter.addEventListener("click", () => {
    document.querySelectorAll(".grid-col").forEach((gridCols) => {
        if (gridCols.dataset.isActive === "true") {
            gridCols.style.display = "block";
        } else {
            gridCols.style.display = "none";
        }
    });
});

inactiveFilter.addEventListener("click", () => {
    document.querySelectorAll(".grid-col").forEach((gridCols) => {
        if (gridCols.dataset.isActive === "false") {
            gridCols.style.display = "block";
        } else {
            gridCols.style.display = "none";
        }
    });
});

allFilter.addEventListener("click", () => {
    document.querySelectorAll(".grid-col").forEach((gridCols) => {
        gridCols.style.display = "block";
    })
    });

    const filterButtons = document.querySelectorAll(".filter-buttons button");

    for (let i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener("click", () => {
            for (let j = 0; j < filterButtons.length; j++) {
                filterButtons[j].classList.remove("active");
            } 
            filterButtons[i].classList.add("active");
        })
    }