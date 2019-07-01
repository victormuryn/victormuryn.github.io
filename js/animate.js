'use strict';

(function () {
  window.Animate = function (elements, activeClass) {
    this.elements = elements;
    this.activeClass = activeClass;
    this._center = document.documentElement.clientHeight / 2;

    this._getBodyScrollTop = () => {
      return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    };

    document.addEventListener(`scroll`, () => {
      const centerNow = this._getBodyScrollTop() + this._center;

      for (const element of this.elements) {
        if (centerNow >= element.offsetTop && centerNow <= element.offsetTop + element.clientHeight)
          element.classList.add(this.activeClass);
        else
          element.classList.remove(this.activeClass);
      }
    });

  }
})();