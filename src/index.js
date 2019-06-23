import homeRaw from './tabs/home';
import menuRaw from './tabs/menu';
import contactRaw from './tabs/contact';
const content = document.getElementById('content');
const navTabs = document.querySelectorAll('[data-tab]');

renderTabContent(homeRaw);

navTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => handleTabClick(e, tab));
});

function handleTabClick(e, tab) {
  e.preventDefault();
  renderTabContent(tab.dataset.tab);
  toggleTabActivityTo(tab);
}

// Updates content's inner HTML according to given tab name
function renderTabContent(tab) {
    switch (tab) {
        case 'menu':
            content.innerHTML = menuRaw;
            break;
        case 'contact':
            content.innerHTML = contactRaw;
            break;
        default:
            content.innerHTML = homeRaw;
            break;
    }
}

function toggleTabActivityTo(tab) {
    navTabs.forEach((t) => {
      // Make previous tab inactive
      if (t.className.includes('active')) t.classList.remove('active');
    });
    tab.className += " " + "active";
}
