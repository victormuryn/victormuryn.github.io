'use strict';

(function () {
  window.Animate = function (elements, activeClass) {
    this.elements = elements;
    this.activeClass = activeClass;
    this._center = document.documentElement.clientHeight / 2;
    this._getBodyScrollTop = function () {
      return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    };

    document.addEventListener('scroll', () => {
      var centerNow = this._getBodyScrollTop() + this._center;

      for (let i = 0; i < this.elements.length; i++) {
        
        if (centerNow >= this.elements[i].offsetTop && centerNow <= this.elements[i].offsetTop + this.elements[i].clientHeight)
          this.elements[i].classList.add(this.activeClass);
        else
          this.elements[i].classList.remove(this.activeClass);

      }

    });
  }
})();
