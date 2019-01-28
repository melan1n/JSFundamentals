function solve() {
  let buttons = document.getElementsByTagName('button');
  Array.from(buttons).forEach((btn) => btn.addEventListener('click', clickEvent));

  function clickEvent(e) {

      let profile = e.target.parentElement;
      let locked = profile.children[1].nextElementSibling;
      let button = profile.getElementsByTagName('button')[0];

      let profileIsLocked = locked.value && locked.checked;

      if (!profileIsLocked && button.textContent === 'Show more') {
          profile.getElementsByTagName('div')[1].style.display = 'block';
          button.textContent = 'Hide it';
      } else if (!profileIsLocked && button.textContent === 'Hide it') {
          profile.getElementsByTagName('div')[1].style.display = 'none';
          button.textContent = 'Show more';
      }
  }
}

