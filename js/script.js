var productList = document.querySelector(".catalog");
var pages = [
	{
		name: "Technomart",
		description: "Інтернет-магазин будівельних матеріалів та інструментів для ремонту",
		img: "img/templates/technomart.jpg",
		src: "Technomart/index.html",
		type: "inProcess"
	},
	{
		name: "The Great Keksby",
		description: "Інтернет-магазин кота Кекса",
		img: "img/templates/TheGreatKeksby.png",
		src: "TheGreatKeksby/index.html",
		type: "new"
	},
	{
		name: "Nerds",
		description: "Маленька дизайн-студія з Краснодару",
		img: "img/templates/nerds.jpg",
		src: "Nerds/index.html",
		type: "normal"
	},
	{
		name: "Sedona",
		description: "Інформаційний сайт для туристів",
		img: "img/templates/sedona.jpg",
		src: "Sedona/index.html",
		type: "normal"
	}
]
function makeElement(tagName, className, text) {
	var element = document.createElement(tagName);
	if(className) {
		element.classList.add(className);
	}
	if(text) {
		element.innerHTML = text;
	}
	return element;
};

function makeProduct(data) {
	var wrapper = makeElement("div", "column");
	if (data.type === "inProcess") {
		var link = makeElement("div", "product");
	} else {
		var link = makeElement("a", "product");
		link.href = "pages/" + data.src;
		link.target = "_blank";
	}	

	var browser = makeElement("img", "browser");
	browser.src = "img/svg/browser.svg";
	browser.alt = "Decoration element";
	link.appendChild(browser);

	var productPhoto = makeElement("img", "productImg");
	productPhoto.src = data.img;
	productPhoto.alt = data.name;
	link.appendChild(productPhoto);

	if(data.type === "new") {
		var newProduct = makeElement("div", "new");
		var newText = makeElement("p", "", "new");
		newProduct.appendChild(newText);

		var hoverContainer = makeElement("div", "aboutProduct");

		var productName = makeElement("h4", "", data.name);
		var productDescription = makeElement("p", "", data.description);

		link.appendChild(newProduct);
	}	else if (data.type === "inProcess") {
		wrapper.classList.add('inProcessDiv');
		var processWrapper = makeElement("div", "inProcess");
		var processText = makeElement("p", "", "В розробці");
		processWrapper.appendChild(processText);

		wrapper.appendChild(processWrapper);
	}

	var hoverContainer = makeElement("div", "aboutProduct");

	var productName = makeElement("h4", "", data.name);
	var productDescription = makeElement("p", "", data.description);

	hoverContainer.appendChild(productName);
	hoverContainer.appendChild(productDescription);
	link.appendChild(hoverContainer);

	wrapper.appendChild(link);

	return wrapper;
};

for (var i = 0; i < pages.length; i++) {
	var newProduct = makeProduct(pages[i]);
	productList.appendChild(newProduct);
};