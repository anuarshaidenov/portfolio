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
    title: 'Tonic',
    img: './images/project-img-2.png',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! Assumenda beatae iusto voluptas sint neque, praesentium earum harum corrupti sunt delectus dolores ut a excepturi officiis consequuntur facilis, minima ducimus adipisci. Molestias, hic. Quo accusantium mollitia esse minus harum. Eos fugiat perspiciatis repudiandae molestiae? Saepe, soluta sint magnam et magni ut odio alias natus molestias est non possimus, assumenda in debitis optio similique quod ratione ad? Minus, provident asperiores? Sed quo magnam temporibus in, nam nostrum sunt asperiores modi possimus, qui doloribus harum ex sit tempora earum, eligendi consequatur fugit dicta accusamus?Vitae ipsa perferendis ad at quisquam maxime.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'scss'],
    liveLink: 'https://anuarshaidenov.github.com/portfolio',
    sourceLink: 'https://github.com/anuarshaidenov',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    img: './images/project-img.png',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! Assumenda beatae iusto voluptas sint neque, praesentium earum harum corrupti sunt delectus dolores ut a excepturi officiis consequuntur facilis, minima ducimus adipisci. Molestias, hic. Quo accusantium mollitia esse minus harum. Eos fugiat perspiciatis repudiandae molestiae? Saepe, soluta sint magnam et magni ut odio alias natus molestias est non possimus, assumenda in debitis optio similique quod ratione ad? Minus, provident asperiores? Sed quo magnam temporibus in, nam nostrum sunt asperiores modi possimus, qui doloribus harum ex sit tempora earum, eligendi consequatur fugit dicta accusamus?Vitae ipsa perferendis ad at quisquam maxime.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'css'],
    liveLink: 'https://anuarshaidenov.github.com/portfolio',
    sourceLink: 'https://github.com/anuarshaidenov',
  },
  {
    id: 3,
    title: 'Facebook 360',
    img: './images/project-img-2.png',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! Assumenda beatae iusto voluptas sint neque, praesentium earum harum corrupti sunt delectus dolores ut a excepturi officiis consequuntur facilis, minima ducimus adipisci. Molestias, hic. Quo accusantium mollitia esse minus harum. Eos fugiat perspiciatis repudiandae molestiae? Saepe, soluta sint magnam et magni ut odio alias natus molestias est non possimus, assumenda in debitis optio similique quod ratione ad? Minus, provident asperiores? Sed quo magnam temporibus in, nam nostrum sunt asperiores modi possimus, qui doloribus harum ex sit tempora earum, eligendi consequatur fugit dicta accusamus?Vitae ipsa perferendis ad at quisquam maxime.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'css'],
    liveLink: 'https://anuarshaidenov.github.com/portfolio',
    sourceLink: 'https://github.com/anuarshaidenov',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    img: './images/project-img.png',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! Assumenda beatae iusto voluptas sint neque, praesentium earum harum corrupti sunt delectus dolores ut a excepturi officiis consequuntur facilis, minima ducimus adipisci. Molestias, hic. Quo accusantium mollitia esse minus harum. Eos fugiat perspiciatis repudiandae molestiae? Saepe, soluta sint magnam et magni ut odio alias natus molestias est non possimus, assumenda in debitis optio similique quod ratione ad? Minus, provident asperiores? Sed quo magnam temporibus in, nam nostrum sunt asperiores modi possimus, qui doloribus harum ex sit tempora earum, eligendi consequatur fugit dicta accusamus?Vitae ipsa perferendis ad at quisquam maxime.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'css'],
    liveLink: 'https://anuarshaidenov.github.com/portfolio',
    sourceLink: 'https://github.com/anuarshaidenov',
  },
  {
    id: 5,
    title: 'Project 5',
    img: './images/project-img-2.png',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! Assumenda beatae iusto voluptas sint neque, praesentium earum harum corrupti sunt delectus dolores ut a excepturi officiis consequuntur facilis, minima ducimus adipisci. Molestias, hic. Quo accusantium mollitia esse minus harum. Eos fugiat perspiciatis repudiandae molestiae? Saepe, soluta sint magnam et magni ut odio alias natus molestias est non possimus, assumenda in debitis optio similique quod ratione ad? Minus, provident asperiores? Sed quo magnam temporibus in, nam nostrum sunt asperiores modi possimus, qui doloribus harum ex sit tempora earum, eligendi consequatur fugit dicta accusamus?Vitae ipsa perferendis ad at quisquam maxime.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'css'],
    liveLink: 'https://anuarshaidenov.github.com/portfolio',
    sourceLink: 'https://github.com/anuarshaidenov',
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
  modalLive.src = curProject.liveLink;
  modalSource.src = curProject.sourceLink;

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
