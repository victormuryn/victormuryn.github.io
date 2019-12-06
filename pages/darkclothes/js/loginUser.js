const logginBtn = document.querySelector(`.header__user-login`);
const loggoutBtn = document.querySelector(`.header__user-loggout`);

const checkLog = () => {
  if (localStorage.getItem(`active`)) {
    logginBtn.style.display = `none`;
    loggoutBtn.style.display = `block`;
  } else {
    logginBtn.style.display = `block`;
    loggoutBtn.style.display = `none`;
  }
};

checkLog();

export default checkLog;
