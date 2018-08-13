const
	productList = document.querySelector(".catalog"),    // find catalog (wrapper)
	articlesOnPage = 9,                                  // articles on page count
	pagesWrapper = document.querySelector(".pages"),				 // find button wrapper
	totalPages = document.querySelector(".totalPages"),  // find links wrapper
	prevButton = document.querySelector(".prev"),        // find prevPage button
	nextButton = document.querySelector(".next");        // find nextPage button;       
// name        = product name,
// description = product description,
// img         = img name
// folder      = folder with index file,
// type        = project type (new, inProcess, updated, normal)
let pages = [{
	name: "Pink",
	description: "Приложения позволит вам победить осеннюю хандру  и депресию буквально в несколько кликов!",
	img: "pink.jpg",
	folder: "Pink/src/",
	type: "inProcess"
}, {
	name: "Device",
	description: "Величезний вибір гаджетів не залишить байдужим geek'a, який є в кожному з нас.",
	img: "device.jpg",
	folder: "Device",
	type: "new"
}, {
	name: "Technomart",
	description: "Інтернет-магазин будівельних матеріалів та інструментів для ремонту",
	img: "technomart.jpg",
	folder: "Technomart",
	type: "normal"
}, {
	name: "The Great Keksby",
	description: "Інтернет-магазин аксесуарів для котів Колекції FW15",
	img: "TheGreatKeksby.png",
	folder: "TheGreatKeksby",
	type: "normal"
}, {
	name: "Nerds",
	description: "Маленька дизайн-студія з Краснодару",
	img: "nerds.jpg",
	folder: "Nerds",
	type: "normal"
}, {
	name: "Sedona",
	description: "Інформаційний сайт для туристів",
	img: "sedona.jpg",
	folder: "Sedona",
	type: "normal"
}];

function makeElement(tagName, className, text) {      // create function makeElement
	let element = document.createElement(tagName);       // create element
	if (className) {                                     // check className availability
		element.classList.add(className);																	  // add className
	}	
	if (text) {                                          // check text availability
		element.textContent = text;																							  // add text
	}	
	return element;																																				  // return element
};

function makeProduct(data) {																								  // create function makeProduct
	let wrapper = makeElement("div", "column"); 							  // create wrapper for product

	if (data.type === "inProcess") {																			  // check type "inProcess"
		var link = makeElement("div", "product");									  // create link like div
	} else {																			
		var link = makeElement("a", "product");											  // create link like a
		link.href = "pages/" + data.folder + "/index.html"; // add href to link
		link.target = "_blank";																												 // add target to link
	}

	let productPhoto = makeElement("img", "productImg"); // create product photo
	productPhoto.src = "img/templates/" + data.img;					 // add src to photo
	productPhoto.alt = data.name;																							 // add alternative text to photo
	link.appendChild(productPhoto);																					 // add photo to link

	if (data.type === "new") {																										 // check type "new"
		let newProduct = makeElement("div", "new");								 // create strip container
		let newText = makeElement("p", "", "new");									 // create text to stip
		newProduct.appendChild(newText);																			 // add strip to link
		link.appendChild(newProduct);																						 // newProduct added to link
	} else if (data.type === "inProcess") {													 // check type "inProcess" 
		wrapper.classList.add("inProcessDiv");													 // add wrapper class "inProcessDiv"
		let processWrapper = makeElement("div", "inProcess");	// create inProcess wrapper
		let processText = makeElement("p", "", "В розробці"); // create text
		processWrapper.appendChild(processText);											 // add text to processWrapper
		wrapper.appendChild(processWrapper);															 // add processWrapper to wrapper
	} else if (data.type === "updated") {														  // check type "updated" 
		let updatedProduct = makeElement("div", "updated");	// create updatedWrapper
		let newText = makeElement("p", "", "update");						 // create updatedText
		updatedProduct.appendChild(newText);															 // text added to updatedProduct
		link.appendChild(updatedProduct);																		 // updatedProduct added to link
	}

	let hoverContainer = makeElement("div", "aboutProduct");	// created hover container
	let productName = makeElement("h4", "", data.name);	 // created name
	let productDescription = makeElement("p", "", data.description); // created description
	hoverContainer.appendChild(productName);             // name added to hoverContainer
	hoverContainer.appendChild(productDescription);      // description added to hoverContainer
	link.appendChild(hoverContainer);																			 // hoverContainer added to link
	wrapper.appendChild(link);																										 // link added to wrapper
	return wrapper;	                                     // return wrapper
}

if (articlesOnPage < pages.length) {                  // compares products count with articlesOnPage 
	pagesWrapper.classList.add("activePages");           // show pagesWrapper (added class name)
	for (let i = 1; i <= Math.ceil(pages.length / articlesOnPage); i++) {  // 
		let pagesItem = makeElement("a", "", i);
		totalPages.appendChild(pagesItem);
	}
	let pagesAll = document.querySelector(".totalPages a");
	pagesAll.classList.add("activePage");
	var allPages = document.querySelectorAll(".totalPages a");
	for (let i = 0; i < articlesOnPage; i++) {
		let newProduct = makeProduct(pages[i]);
		productList.appendChild(newProduct);
	};
	for (let i = 0; i < allPages.length; i++) {
		var activePage;
		allPages[i].addEventListener('click', function(e) {
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
		});
	}
	let activePageCount;
	prevButton.addEventListener("click", function(e) {
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
	nextButton.addEventListener("click", function(e) {
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
	for (let i = 0; i < pages.length; i++) {
		let newProduct = makeProduct(pages[i]);
		productList.appendChild(newProduct);
	};
}