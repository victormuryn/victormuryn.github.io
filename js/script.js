var productList = document.querySelector(".items");
var pages = [
	{
		name: "Sedona",
		description: "Інформаційний сайт<br>для туристів",
		img: "img/templates/sedona.jpg",
		src: "Sedona/index.html"
	},
	{
		name: "Nerds",
		description: "Маленька дизайн-студія<br>з Краснодару",
		img: "img/templates/nerds.jpg",
		src: "Nerds/index.html"
	},
	{
		name: "The Great Keksby",
		description: "Інтернет-магазин кота Кекса",
		img: "img/templates/TheGreatKeksby.png",
		src: "TheGreatKeksby/index.html"
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
	var link = makeElement("a", "product");

	var browser = makeElement("img", "browser");
	browser.src = "img/svg/browser.svg";
	browser.alt = "Decoration element";
	link.appendChild(browser);

	var productPhoto = makeElement("img", "productImg");
	productPhoto.src = data.img;
	productPhoto.alt = data.name;
	link.appendChild(productPhoto);

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
	if ((i + 1) == pages.length && (i + 1) % 2 != 0) {
		newProduct.classList.add("column-center");
	}
	productList.appendChild(newProduct);
};