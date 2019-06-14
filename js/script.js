const
  productList = document.querySelector(".catalog"), // find catalog (wrapper)
  articlesOnPage = 9, // articles on page count
  pagesWrapper = document.querySelector(".pages"), // find button wrapper
  totalPages = pagesWrapper.querySelector(".totalPages"), // find links wrapper
  prevButton = pagesWrapper.querySelector(".prev"), // find prevPage button
  nextButton = pagesWrapper.querySelector(".next"), // find nextPage button
  template = document.querySelector('.template').content.querySelector('#project');

// name        = product name,
// description = product description,
// img         = img name
// folder      = folder with index file,
// type        = project type (new, inProcess, updated, normal)
let pages = [{
    name: "Keksobooking",
    description: "Keksobooking — a service for listing rental properties in downtown Tokyo",
    img: "keksobooking",
    folder: "Keksobooking",
    type: "inProcess"
  }, {
    name: "Kekstagram",
    description: "Kekstagram — image viewing service",
    img: "kekstagram",
    folder: "Kekstagram",
    type: "new"
  }, {
    name: "Mishka",
    description: "Shop cute handicraft items for home ^_^",
    img: "mishka",
    folder: "Mishka/build",
    type: "new"
  },
  {
    name: "Pink",
    description: "The application will allow you to beat autumn boredom and depression literally in a few clicks!",
    img: "pink",
    folder: "Pink"
  }, {
    name: "Device",
    description: "A huge selection of gadgets will not leave indifferent geeks, which is in each of us",
    img: "device",
    folder: "Device"
  }, {
    name: "Technomart",
    description: "Online store for building materials and repair tools",
    img: "technomart",
    folder: "Technomart"
  }, {
    name: "The Great Keksby",
    description: "Online store of accessories for cats Collections FW15",
    img: "TheGreatKeksby",
    folder: "TheGreatKeksby"
  }, {
    name: "Nerds",
    description: "A small design studio from Krasnodar",
    img: "nerds",
    folder: "Nerds"
  }, {
    name: "Sedona",
    description: "Information site for tourists",
    img: "sedona",
    folder: "Sedona"
  }
];

function makeElement(tagName, className, text) { // create function makeElement
  let element = document.createElement(tagName); // create element
  if (className) { // check className availability
    element.classList.add(className); // add className
  }
  if (text) { // check text availability
    element.textContent = text; // add text
  }
  return element; // return element
};

function makeProduct(data) { // create function makeProduct
  let element = template.cloneNode(true);

  element.querySelector('.product').href = "pages/" + data.folder + "/index.html";
  element.querySelector('.webpSource').srcset = "img/templates/" + data.img + ".webp 1x, img/templates/" + data.img + "@2x.webp 2x";
  element.querySelector('.jpgSource').srcset = "img/templates/" + data.img + ".jpg 1x, img/templates/" + data.img + "@2x.jpg 2x";
  element.querySelector('.product__img').src = 'img/templates/' + data.img + '.jpg';
  element.querySelector('.product__img').alt = data.name;
  element.querySelector('h4').textContent = data.name;
  element.querySelector('.product__description').textContent = data.description;

  if (data.type === 'new') {
    element.querySelector('.new').style.display = 'block';
  } else if (data.type === 'inProcess') {
    element.querySelector('.product').href = "javascipt://0";
    element.querySelector('.product').target = "_self";
    element.querySelector('.column').classList.add('inProcessDiv');
    element.querySelector('.inProcess').style.display = 'block';
  } else if (data.type === "updated") {
    element.querySelector('.updated').style.display = 'block';
  }
  return element; // return element
}

if (articlesOnPage < pages.length) {
  pagesWrapper.classList.add("activePages");

  for (let i = 1; i <= Math.ceil(pages.length / articlesOnPage); i++) {
    let pagesItem = makeElement("a", "", i);
    totalPages.appendChild(pagesItem);
  }

  let pagesAll = document.querySelector(".totalPages a");
  pagesAll.classList.add("activePage");
  var allPages = document.querySelectorAll(".totalPages a");
  for (let i = 0; i < articlesOnPage; i++) {
    let newProduct = makeProduct(pages[i]);
    productList.appendChild(newProduct);
  }
  for (let i = 0; i < allPages.length; i++) {
    var activePage;
    allPages[i].addEventListener('click', function (e) {
      activePage = document.querySelector(".activePage")
      e.preventDefault();
      activePage.classList.remove("activePage");
      allPages[i].classList.add("activePage");
      let productAvaibled = document.querySelectorAll(".catalog > div");
      for (let j = 0; j < productAvaibled.length; j++) {
        productList.removeChild(productAvaibled[j]);
      };
      let productPlaceInArray = allPages[i].text * articlesOnPage;
      for (let j = productPlaceInArray - articlesOnPage; j < productPlaceInArray; j++) {
        let newProduct = makeProduct(pages[j]);
        productList.appendChild(newProduct);
      }
    })
  }
  let activePageCount;
  prevButton.addEventListener("click", function (e) {
    e.preventDefault();
    activePage = document.querySelector(".activePage");
    if (activePage.text != 1) {
      activePageCount = parseInt(activePage.text) - 1;
      activePage.classList.remove("activePage");
      allPages[activePageCount - 1].classList.add("activePage");
      let productAvaibled = document.querySelectorAll(".catalog > div");
      for (let a = 0; a < productAvaibled.length; a++) {
        productList.removeChild(productAvaibled[a]);
      };
      let productPlaceInArray = allPages[activePageCount - 1].text * articlesOnPage;
      for (let b = productPlaceInArray - articlesOnPage; b < productPlaceInArray; b++) {
        let newProduct = makeProduct(pages[b]);
        productList.appendChild(newProduct);
      }
    }
  })
  nextButton.addEventListener("click", function (e) {
    e.preventDefault();
    activePage = document.querySelector(".activePage");
    if (activePage.text != allPages.length) {
      activePageCount = parseInt(activePage.text);
      activePage.classList.remove("activePage");
      allPages[activePageCount].classList.add("activePage");
      let productAvaibled = document.querySelectorAll(".catalog > div");
      for (let a = 0; a < productAvaibled.length; a++) {
        productList.removeChild(productAvaibled[a]);
      };
      let productPlaceInArray = allPages[activePageCount].text * articlesOnPage;
      for (let b = productPlaceInArray - articlesOnPage; b < productPlaceInArray; b++) {
        let newProduct = makeProduct(pages[b]);
        productList.appendChild(newProduct);
      }
    }
  })
} else {
  var fragment = document.createDocumentFragment();

  for (let i = 0; i < pages.length; i++) {
    let element = makeProduct(pages[i]);
    fragment.appendChild(element);
  }

  productList.appendChild(fragment);
}