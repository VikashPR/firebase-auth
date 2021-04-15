// *Setting up Guides  
const guideList = document.querySelector('.guides');
const loggedOutLiinks = document.querySelectorAll('.logged-out');
const loggedInLiinks = document.querySelectorAll('.logged-in');
const setupUI = (user) => {
  if (user) {
    loggedInLiinks.forEach(item => {
      item.style.display = 'block';
    })
    loggedOutLiinks.forEach(item => {
      item.style.display = 'none';
    })
  } else {
    loggedInLiinks.forEach(item => {
      item.style.display = 'none';
    })
    loggedOutLiinks.forEach(item => {
      item.style.display = 'block';
    })
  }
}
//  Setup guide list
const setupGuides = (data) => {
  if (data.length) {
    let html = '';
    data.forEach(doc => {
      let guide = doc.data();
      const li = `
      <li>
      <div class="collapsible-header grey lighten-4">${guide.title}</div>
      <div class="collapsible-body white">${guide.content}</div>
      </li>`;
      html += li;
    });
    guideList.innerHTML = html;
  } else {
    guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>'
  }

}
// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);
});