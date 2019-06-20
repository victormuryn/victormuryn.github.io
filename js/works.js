'use strict';

(function () {
  /* ********  CONSTS   ******** */
  var TYPES = {
    new: "New!",
    underDevelopment: 'Under Development',
    upgraded: "Upgraded!"
  };

  /* ******** VARIABLES ******** */
  // HTMLElements
  var template = document.querySelector('#project').content.querySelector('.project');
  var container = document.querySelector('.works');
  // Other variables

  /* ********  EXPORT   ******** */
  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  // Other functions

  var createElement = function (tagname, classes, text) {
    var element = document.createElement(tagname);

    if (classes) {
      classes.forEach(className => {
        element.classList.add(className);
      });
    }

    if (text)
      element.textContent = text;

    return element;
  };

  /**
   * @param {object} data - create new project
   * @param {number} index - number of project
   * @returns new HTMLElement
   */
  var createProject = function (data, index) {
    var project = template.cloneNode(true);
    var number = index % 3;

    if (number === 1 || number === 2)
      project.classList.add('project--half');

    if (number === 1 && index === window.PROJECTS.length - 1) // check is last and half
      project.classList.remove('project--half');

    if (data.type) {
      project.querySelector('.project__type').textContent = TYPES[data.type];
      project.querySelector('.project__type').classList.add('project__type--' + data.type);
    }

    if (data.textColor)
      project.querySelector('.project__hover').style.color = data.textColor;

    if (data.stroke)
      project.querySelector('.project__hover').style.textShadow = data.stroke;

    if (data.type === 'underDevelopment')
      project.querySelector('.project__link').href = 'javascript://0';
    else
      project.querySelector('.project__link').href = 'pages/' + data.location + '/';

    project.querySelector('source:first-of-type').srcset = "img/works/" + data.img + ".webp 1x, img/works/" + data.img + "@2x.webp 2x";
    project.querySelector('source:last-of-type').srcset = "img/works/" + data.img + ".jpg 1x, img/works/" + data.img + "@2x.jpg 2x";
    project.querySelector('img').src = "img/works/" + data.img + ".jpg";
    project.querySelector('img').alt = data.name;


    project.querySelector('.project__title').textContent = data.name;
    project.querySelector('.project__description').textContent = data.description;


    return project;
  };

  /* ********   CODE   ******** */
  var fragment = document.createDocumentFragment();

  window.PROJECTS.forEach((element, i) => {
    var project = createProject(element, i);
    fragment.appendChild(project);
  });

  fragment.appendChild(createElement('h3', ['works__tag'], '</projects>'));
  container.appendChild(fragment);
})();
