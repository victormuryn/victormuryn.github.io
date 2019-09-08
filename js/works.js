'use strict';

(function () {
  /* ********  CONSTANTS   ******** */
  const TYPES = {
    new: "New!",
    underDevelopment: 'Under Development',
    upgraded: "Upgraded!"
  };

  /* ******** VARIABLES ******** */
  // HTMLElements
  const template = document.querySelector('#project').content.querySelector('.project');
  const container = document.querySelector('.works');
  // Other variables

  /* ********  EXPORT   ******** */
  /* ******** FUNCTIONS ******** */
  // addEventListener functions
  // Other functions

  const createProject = (data, index) => {
    const project = template.cloneNode(true);
    const number = index % 3;

    if (number === 1 || number === 2)
      project.classList.add('project--half');

    if (number === 1 && index === PROJECTS.length - 1) // check is last and half
      project.classList.remove('project--half');

    if (data.type) {
      project.querySelector('.project__type').textContent = TYPES[data.type];
      project.querySelector('.project__type').classList.add(`project__type--${data.type}`);
    }

    if (data.textColor)
      project.querySelector('.project__hover').style.color = data.textColor;

    if (data.stroke)
      project.querySelector('.project__hover').style.textShadow = data.stroke;

    if (data.type === 'underDevelopment')
      project.querySelector('.project__link').href = 'javascript://0';
    else
      project.querySelector('.project__link').href = `pages/${data.location}/`;

    project.id = data.img;
    // mobile
    project.querySelector('.project__img--webp').srcset = `img/works/${data.img}.webp 1x, img/works/${data.img}@2x.webp 2x`;
    project.querySelector('.project__img--jpeg').srcset = `img/works/${data.img}.jpg 1x, img/works/${data.img}@2x.jpg 2x`;
    // default
    project.querySelector('img').src = `img/works/${data.img}.jpg`;
    project.querySelector('img').alt = data.name;


    project.querySelector('.project__title').textContent = data.name;
    project.querySelector('.project__description').textContent = data.description;


    return project;
  };

  /* ********   CODE   ******** */
  const fragment = document.createDocumentFragment();

  PROJECTS.forEach((element, i) => {
    const project = createProject(element, i);
    fragment.appendChild(project);
  });

  container.insertBefore(fragment, document.querySelector('.works__tag--close'));

})();

(function () {
  let close = document.querySelector(`.holiday__close`);
  let holiday = document.querySelector(`.holiday`);

  if (localStorage.getItem(`closed`) == `true`) {
    holiday.classList.add(`holiday--closed`);
  }

  if (close) {
    close.addEventListener(`click`, (e) => {
      e.preventDefault();
      localStorage.setItem(`closed`, `true`);
      holiday.classList.add(`holiday--closed`);
    });
  }
})();