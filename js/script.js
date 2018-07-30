let productList = document.querySelector(".catalog");
// name = product name,
// description = product description,
// img = source to product img
// src = source to site,
// type = project type (new, inProcces, updated, normal)
let pages = [
	{
		name: "Device",
		description: "Величезний вибір гаджетів не залишить байдужим geek'a, який є в кожному з нас.",
		img: "img/templates/device.jpg",
		src: "Device/index.html",
		type: "new"
	},
	{
		name: "Technomart",
		description: "Інтернет-магазин будівельних матеріалів та інструментів для ремонту",
		img: "img/templates/technomart.jpg",
		src: "Technomart/index.html",
		type: "new"
	},
	{
		name: "The Great Keksby",
		description: "Інтернет-магазин аксесуарів для котів Колекції FW15",
		img: "img/templates/TheGreatKeksby.png",
		src: "TheGreatKeksby/index.html",
		type: "normal"
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
	let element = document.createElement(tagName);
	if(className) {
		element.classList.add(className);
	}
	if(text) {
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
		link.href = "pages/" + data.src;
		link.target = "_blank";
	}	

	let browser = makeElement("img", "browser");
	browser.src = "img/svg/browser.svg";
	browser.alt = "Decoration element";
	link.appendChild(browser);

	let productPhoto = makeElement("img", "productImg");
	productPhoto.src = data.img;
	productPhoto.alt = data.name;
	link.appendChild(productPhoto);

	if(data.type === "new") {
		let newProduct = makeElement("div", "new");
		let newText = makeElement("p", "", "new");
		newProduct.appendChild(newText);

		let hoverContainer = makeElement("div", "aboutProduct");

		let productName = makeElement("h4", "", data.name);
		let productDescription = makeElement("p", "", data.description);

		link.appendChild(newProduct);
	}	else if (data.type === "inProcess") {
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

for (let i = 0; i < pages.length; i++) {
	let newProduct = makeProduct(pages[i]);
	productList.appendChild(newProduct);
};