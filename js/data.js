'use strict';

(function () {
  /* ********  EXPORT   ******** */
  /**
   * name - project name - default none
   * img - image name - default none
   * location - project folder - default none
   * description - project description - default none
   * textColor (not required) - change title and description color, default - #fff
   * stroke (not requiere) - add stroke to title and desctiption - default none
   * type (not required) - one of values (new, underDevelopment, upgraded) - default none
   */

  window.PROJECTS = [{
    name: 'Swedish Bitter',
    img: 'swedish-bitter',
    location: 'SwedishBitter',
    description: 'Harvesting herbs Swedish Bitter - has no analogues in the world for the healing power and breadth of healing properties',
    type: 'new',
    stroke: '#000 0 0 2px',
    textColor: "#fff",
  }, {
    name: 'Kekstagram',
    img: 'Kekstagram',
    location: 'Kekstagram',
    description: 'Kekstagram — image viewing service',
    type: 'new',
  }, {
    name: 'Mishka',
    img: 'Mishka',
    location: 'Mishka/build',
    description: 'Shop cute handicraft items for home ^_^',
    textColor: "#141414",
    type: 'new'
  }, {
    name: 'Pink',
    img: 'Pink',
    location: 'Pink',
    description: 'The application will allow you to beat autumn boredom and depression literally in a few clicks!',
    stroke: '#000 0 0 2px'
  }];

})();