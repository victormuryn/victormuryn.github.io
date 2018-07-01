let modal = document.querySelector("#modal"),
    button = document.querySelector("#openWindow"),
    focusDate = modal.querySelector("#arrival"),
    modalForm = modal.querySelector("form"),
    modal1 = modalForm.querySelector("#arrival"),
    modal2 = modalForm.querySelector("#depature"),
    modal3 = modalForm.querySelector("#people"),
    modal4 = modalForm.querySelector("#children"),
    plusPeople = document.querySelector("#plusPeople"),
    minusPeople = document.querySelector("#minusPeople"),
    plusChildren = document.querySelector("#plusChildren"),
    minusChildren = document.querySelector("#minusChildren");
button.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('modalShowAnimate');
    modal.classList.toggle('modalActive');
    modal.classList.remove('modalError');
    focusDate.focus();
});
modalForm.addEventListener("submit", function(e) {
    if (!modal1.value || !modal2.value || !modal3.value || !modal4.value) {
        e.preventDefault();
        modal.classList.remove('modalShowAnimate');
        modal.classList.toggle('modalError');
    } else if (modal3.value == 0 && modal4.value == 0) {
        e.preventDefault();
        modal.classList.remove('modalShowAnimate');
        modal.classList.toggle('modalError');
    } else {
        modal.classList.remove('modalError');
        modal.classList.remove('modalActive');
        modal.classList.remove('modalShowAnimate');
    };
});
window.addEventListener("keydown", function(e) {
    if (e.keyCode == 27) {
        if (modal.classList.contains("modalActive")) {
            modal.classList.remove('modalError');
            modal.classList.remove('modalActive');
            modal.classList.remove('modalShowAnimate');
        };
    };
});
plusPeople.addEventListener("click", function(e) {
    e.preventDefault();
    if (modal3.value <= 0) {
        modal3.value = 1;
    } else {
        modal3.value = Number(modal3.value) + 1;
    }
});
minusPeople.addEventListener("click", function(e) {
    e.preventDefault();
    if (modal3.value <= 0) {
        modal3.value = 0;
    } else {
        modal3.value = Number(modal3.value) - 1;
    }
});
plusChildren.addEventListener("click", function(e) {
    e.preventDefault();
    if (modal4.value <= 0) {
        modal4.value = 1;
    } else {
        modal4.value = Number(modal4.value) + 1;
    }
});
minusChildren.addEventListener("click", function(e) {
    e.preventDefault();
    if (modal4.value <= 0) {
        modal4.value = 0;
    } else {
        modal4.value = Number(modal4.value) - 1;
    }
});
modal3.addEventListener("change", function(e) {
    e.preventDefault();
    if (modal3.value <= 0 || isNaN(modal3.value)) {
        modal3.value = 0;
    }
})
modal4.addEventListener("change", function(e) {
    e.preventDefault();
    if (modal4.value <= 0 || isNaN(modal4.value)) {
        modal4.value = 0;
    }
})