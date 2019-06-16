'use strict';

(function () {
  /* ********  CONSTS   ******** */
  /**
   * name - project name - default none
   * img - image name - default none
   * location - project folder - default none
   * description - project description - default none
   * textColor (not required) - change title and description color, default - #fff
   * stroke (not requiere) - add stroke to title and desctiption - default none
   * type (not required) - one of values (new, underDevelopment, upgraded) - default none
   */
  var PROJECTS = [{
    name: 'Keksobooking',
    img: 'Keksobooking.jpg',
    location: 'Keksobooking',
    description: 'Keksobooking — a service for listing rental properties in downtown Tokyo',
    type: 'underDevelopment',
    textColor: "#141414",
  }, {
    name: 'Kekstagram',
    img: 'Kekstagram.jpg',
    location: 'Kekstagram',
    description: 'Kekstagram — image viewing service',
    type: 'new',
  }, {
    name: 'Mishka',
    img: 'Mishka.png',
    location: 'Mishka',
    description: 'Shop cute handicraft items for home ^_^',
    textColor: "#141414",
    type: 'new'
  }, {
    name: 'Pink',
    img: 'Pink.jpg',
    location: 'Pink',
    description: 'The application will allow you to beat autumn boredom and depression literally in a few clicks!',
    stroke: '#000 0 0 2px'
  }];

  var TYPES = {
    new: "New!",
    underDevelopment: 'Under Development',
    upgraded: "Upgraded!"
  }
  /* ******** VARIABLES ******** */
  // HTMLElements
  var template = document.querySelector('#project').content.querySelector('.project');
  var container = document.querySelector('.works');
  // Other variables

  /* ********  EXPORT   ******** */
  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  // Other functions

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

    if (data.type) {
      project.querySelector('.project__type').textContent = TYPES[data.type];
      project.querySelector('.project__type').classList.add('project__type--' + data.type);
    }

    if (data.textColor)
      project.querySelector('.project__hover').style.color = data.textColor;

    if (data.stroke) {
      project.querySelector('.project__hover').style.textShadow = data.stroke;
    }

    if (data.type === 'underDevelopment')
      project.querySelector('.project__link').href = 'javascript://0';
    else
      project.querySelector('.project__link').href = 'pages/' + data.location + '/';

    project.querySelector('.project__bg').style.backgroundImage = 'url(\'img/background/works/' + data.img + '\')';
    project.querySelector('.project__title').textContent = data.name;
    project.querySelector('.project__description').textContent = data.description;


    return project;
  };

  /* ********   CODE   ******** */
  var fragment = document.createDocumentFragment();

  for (let i = 0; i < PROJECTS.length; i++) {
    var project = createProject(PROJECTS[i], i);
    fragment.appendChild(project);
  }

  container.appendChild(fragment);
})();
