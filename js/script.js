	window.onload = function() {
	let
		productList = document.querySelector(".catalog"),
		articlesOnPage = 9; // articles on page count
	// name = product name,
	// description = product description,
	// img = source to product img
	// folder = source to site,
	// type = project type (new, inProcces, updated, normal)
	let pages = [{
			name: "Pink",
			description: "Приложения позволит вам победить осеннюю хандру  и депресию буквально в несколько кликов!",
			img: "img/templates/pink.jpg",
			folder: "Pink",
			type: "inProcces"
		},
		{
			name: "Device",
			description: "Величезний вибір гаджетів не залишить байдужим geek'a, який є в кожному з нас.",
			img: "img/templates/device.jpg",
			folder: "Device",
			type: "new"
		},
		{
			name: "Technomart",
			description: "Інтернет-магазин будівельних матеріалів та інструментів для ремонту",
			img: "img/templates/technomart.jpg",
			folder: "Technomart",
			type: "new"
		},
		{
			name: "The Great Keksby",
			description: "Інтернет-магазин аксесуарів для котів Колекції FW15",
			img: "img/templates/TheGreatKeksby.png",
			folder: "TheGreatKeksby",
			type: "normal"
		},
		{
			name: "Nerds",
			description: "Маленька дизайн-студія з Краснодару",
			img: "img/templates/nerds.jpg",
			folder: "Nerds",
			type: "normal"
		},
		{
			name: "Sedona",
			description: "Інформаційний сайт для туристів",
			img: "img/templates/sedona.jpg",
			folder: "Sedona",
			type: "normal"
		}
	];

	function makeElement(tagName, className, text) {
		let element = document.createElement(tagName);
		if (className) {
			element.classList.add(className);
		}
		if (text) {
			element.textContent = text;
		}
		return element;
	};

	function makeProduct(data) {
		let wrapper = makeElement("div", "column");
		if (data.type === "inProcess") {
			var link = makeElement("div", "product");
		} else {
			var link = makeElement("a", "product");
			link.href = "pages/" + data.folder + "/index.html";
			link.target = "_blank";
		}

		let productPhoto = makeElement("img", "productImg");
		productPhoto.src = data.img;
		productPhoto.alt = data.name;
		link.appendChild(productPhoto);

		if (data.type === "new") {
			let newProduct = makeElement("div", "new");
			let newText = makeElement("p", "", "new");
			newProduct.appendChild(newText);

			let hoverContainer = makeElement("div", "aboutProduct");

			let productName = makeElement("h4", "", data.name);
			let productDescription = makeElement("p", "", data.description);

			link.appendChild(newProduct);
		} else if (data.type === "inProcess") {
			wrapper.classList.add('inProcessDiv');
			let processWrapper = makeElement("div", "inProcess");
			let processText = makeElement("p", "", "В розробці");
			processWrapper.appendChild(processText);

			wrapper.appendChild(processWrapper);
		} else if (data.type === "updated") {
			let newProduct = makeElement("div", "updated");
			let newText = makeElement("p", "", "update");
			newProduct.appendChild(newText);

			let hoverContainer = makeElement("div", "aboutProduct");

			let productName = makeElement("h4", "", data.name);
			let productDescription = makeElement("p", "", data.description);

			link.appendChild(newProduct);

		}

		let hoverContainer = makeElement("div", "aboutProduct");

		let productName = makeElement("h4", "", data.name);
		let productDescription = makeElement("p", "", data.description);

		hoverContainer.appendChild(productName);
		hoverContainer.appendChild(productDescription);
		link.appendChild(hoverContainer);

		wrapper.appendChild(link);

		return wrapper;
	};

	if (articlesOnPage < pages.length) {
		let pagesWrapper = document.querySelector(".pages");
		pagesWrapper.classList.add("activePages");
		let totalPages = document.querySelector(".totalPages");
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
		};

		for (let i = 0; i < allPages.length; i++) {
			var activePage;
			allPages[i].addEventListener('click', function(e) {
				activePage = document.querySelector(".activePage")
				e.preventDefault();
				activePage.classList.remove("activePage");
				allPages[i].classList.add("activePage");
				let productAvaibled = document.querySelectorAll(".catalog > div");
				for (let a = 0; a < productAvaibled.length; a++) {
					productList.removeChild(productAvaibled[a]);
				};
				let productPlaceInArray = allPages[i].text * articlesOnPage;
				for (let b = productPlaceInArray - articlesOnPage; b < productPlaceInArray; b++) {
					let newProduct = makeProduct(pages[b]);
					productList.appendChild(newProduct);
				}
			});
		}

		let prevButton = document.querySelector(".prev"),
			nextButton = document.querySelector(".next"),
			activePageCount;

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
}
