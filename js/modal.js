const projectsContainer = document.getElementById('projects');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalList = document.getElementById('modal-list');
const modalDescription = document.getElementById('modal-description');
const modalLive = document.getElementById('modal-live');
const modalSource = document.getElementById('modal-source');
export const backdrop = document.getElementById('backdrop');
export const modalCloseBtn = document.getElementById('close-modal');

const data = [
  {
    id: 1,
    title: 'LDN Film Fest',
    img: './images/screenshots/screenshot-ldn.png',
    descriptionPopup: 'A website for annual London Film Festival',
    tags: [
      'JavaScript',
      'HTML',
      'SCSS',
      'BEM',
      'Responsive Design',
      'Flexbox',
      'CSS Grid',
    ],
    liveLink: 'https://anuarshaidenov.github.io/LDN-film-fest/',
    sourceLink: 'https://github.com/anuarshaidenov/LDN-film-fest',
  },
  {
    id: 5,
    title: 'Awesome Books',
    img: './images/screenshots/sreenshot-books.png',
    descriptionPopup:
      '"Awesome books" is a simple website that displays a list of books and allows you to add and remove books from that list.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'css'],
    liveLink: 'https://anuarshaidenov.github.io/Awesome-books/',
    sourceLink: 'https://github.com/anuarshaidenov/Awesome-books',
  },
  {
    id: 2,
    title: 'Loopstudios landing page',
    img: './images/screenshots/screenshot-loopstudios.png',
    descriptionPopup: 'Landing page for Loopstudios',
    tags: [
      'JavaScript',
      'HTML',
      'SCSS',
      'Flexbox',
      'CSS Grid',
      'Responsive Design',
    ],
    liveLink: 'https://anuarshaidenov.github.io/loopstudios-landing-page/',
    sourceLink: 'https://github.com/anuarshaidenov/loopstudios-landing-page',
  },
  {
    id: 3,
    title: 'Tip Calculator',
    img: './images/screenshots/screenshot-calculator.png',
    descriptionPopup:
      'Small app built using Vanilla JS. The calculator functionality will come handy',
    tags: [
      'JavaScript',
      'HTML',
      'SCSS',
      'Flexbox',
      'CSS Grid',
      'Responsive Design',
    ],
    liveLink:
      'https://anuarshaidenov.github.com/portfoliohttps://anuarshaidenov.github.io/tip-calculator/',
    sourceLink: 'https://github.com/anuarshaidenov/tip-calculator',
  },
  {
    id: 4,
    title: 'Blogr Landing Page',
    img: './images/screenshots/screenshot-blogr.png',
    descriptionPopup: 'Landing Page for Blogr',
    tags: [
      'JavaScript',
      'HTML',
      'SCSS',
      'Flexbox',
      'CSS Grid',
      'Responsive Design',
    ],
    liveLink: 'https://anuarshaidenov.github.io/blogr/',
    sourceLink: 'https://github.com/anuarshaidenov/blogr',
  },
  {
    id: 6,
    title: 'Project 6',
    img: './images/project-img.png',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! ',
    tags: ['javascript', 'html', 'css', 'react', 'ruby', 'scss', 'bootstrap'],
    liveLink: 'https://anuarshaidenov.github.com/portfolio',
    sourceLink: 'https://github.com/anuarshaidenov',
  },
];

function disableBodyScroll() {
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('html').style.overflow = 'hidden';
}

function enableBodyScroll() {
  document.querySelector('body').style.overflow = 'visible';
  document.querySelector('html').style.overflow = 'visible';
}

export function closeModal() {
  enableBodyScroll();

  modal.classList.add('hidden');
  backdrop.classList.add('hidden');
}

export function openModal(id) {
  disableBodyScroll();

  const [curProject] = data.filter((project) => project.id === Number(id));
  const projectList = curProject.tags;

  modalTitle.textContent = curProject.title;
  modalImg.src = curProject.img;
  modalDescription.textContent = curProject.descriptionPopup;
  modalList.innerHTML = '';
  projectList.forEach((list) => {
    const projectListItem = `
    <li class="tech-list__item">${list}</li>
    `;
    modalList.insertAdjacentHTML('beforeend', projectListItem);
  });
  modalLive.href = curProject.liveLink;
  modalSource.href = curProject.sourceLink;

  modal.classList.remove('hidden');
  backdrop.classList.remove('hidden');
}

export function displayCards() {
  data.forEach((card) => {
    const cardEl = `
          <div class="card">
              <img
              src="${card.img}"
              alt="Portfolio image"
              class="card__portfolio-img"
              />
              <div class="card__portfolio-info">
              <h3 class="subheading">${card.title}</h3>
              <ul class="card__list">
                  ${card.tags
    .map((tag) => `<li class="card__list-item">${tag}</li>`)
    .join('')}
              </ul>
              <button data-id=${
  card.id
} class="btn-cta card__btn" type="button">See Project</button>
              </div>
          </div>`;
    projectsContainer.insertAdjacentHTML('beforeend', cardEl);
  });

  document.querySelectorAll('.card__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      openModal(btn.dataset.id);
    });
  });
}
