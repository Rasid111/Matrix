const products = document.querySelector("#products .row");
const categorySelect = document.querySelector("#category");
const pages = document.querySelector("#pages .row");
const search = document.querySelector("#search");
const productsPerPage = document.querySelector("#productsPerPage");
const searchInput = document.querySelector("#searchInput");
const sort = document.querySelector("#sort");
const modal = document.querySelector("#openedProduct");

const pageState = {
    page: 1,
    limit: 8,
    pagesCount: 1,
    category: "",
    searchInput: "",
    sort: "",
    order: "",
}

categorySelect.addEventListener("change", () => {
    pageState.searchInput = "";
    searchInput.value = "";
});

searchInput.addEventListener("input", () => {
    categorySelect.value = "";
    pageState.category = "";
});

search.addEventListener("click", async (ev) => {
    pageState.searchInput = searchInput.value;
    pageState.category = categorySelect.value;
    pageState.limit = parseInt(productsPerPage.value);
    pageState.page = 1;
    pageState.sort = sort.value.split(";")[0];
    pageState.order = sort.value.split(";")[1];
    await loadProducts(products, pageState);
    await loadPagesList(pages, pageState, products);
});

async function loadCategories(categorySelect){
    response = await (await fetch('https://dummyjson.com/products/categories')).json();
    response.forEach(category => {
        categorySelect.innerHTML += `<option value="${category.slug}">
                                        ${category.name}
                                    </option>`;
    });
}

async function loadProducts(products, pageState) {
    let URL = `https://dummyjson.com/products${pageState.category === ""?"":`/category/${pageState.category}`}${pageState.searchInput === ""?"":`/search`}?q=${pageState.searchInput}&limit=${pageState.limit}&skip=${(pageState.page-1)*pageState.limit}&select=id,title,price,thumbnail&sortBy=${pageState.sort}&order=${pageState.order}`;
    console.log(URL);
    
    let response = await (await fetch(`${URL}`)).json();
    products.innerHTML = "";
    response.products.forEach((product) => {
        let div = document.createElement("div");
        div.classList = "card col";
        div.style.width = "18rem";
        div.dataset.bsToggle = "modal";
        div.dataset.bsTarget = "#openedProduct";
        div.innerHTML =  `<img src=${product.thumbnail} class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">${product.price}$</p
                            </div>`
        products.appendChild(div);
        div.onclick = async () => {
            URL = `https://dummyjson.com/products/${product.id}`;
            response = await (await fetch(`${URL}`)).json();
            modal.querySelector(".modal-title").innerText = response.title;
            modal.querySelector(".modal-body").innerHTML = `<img src=${response.thumbnail} class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <span class="card-title">${response.description}</span>
                                        <p class="card-text">${response.price}$</p
                                    </div>`
        }
    });
    pageState.pagesCount = response.limit === 0?0:response.total / response.limit;
}

async function loadPagesList(pages, pageState, products) {
    pages.innerHTML = "";
    for (let index = 0; index < pageState.pagesCount; index++) {
        let div = document.createElement("div");
        div.classList.add("col", "text-center");
        div.innerHTML+= `<button type="button" class="btn btn-light mb-1">${index + 1}</button>`;
        div.onclick = (ev) => {
            console.log(1);
            pageState.page = parseInt(ev.target.innerText);
            loadProducts(products, pageState);
        }
        pages.appendChild(div);
    }
}

async function main(){
    await loadCategories(categorySelect);
    await loadProducts(products, pageState);
    await loadPagesList(pages, pageState, products);
}

main();