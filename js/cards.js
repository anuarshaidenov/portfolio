const projectsContainer = document.getElementById('projects');
const backdrop = document.getElementById('backdrop');
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalList = document.getElementById('modal-list');
const modalDescription = document.getElementById('modal-description');
const modalLive = document.getElementById('modal-live');
const modalSource = document.getElementById('modal-source');

const data = [
  {
    id: 1,
    class: 'container',
    title: 'Tonic',
    company: 'Canopi',
    role: 'Backend dev',
    year: 2015,
    img: './images/project-img.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! Assumenda beatae iusto voluptas sint neque, praesentium earum harum corrupti sunt delectus dolores ut a excepturi officiis consequuntur facilis, minima ducimus adipisci. Molestias, hic. Quo accusantium mollitia esse minus harum. Eos fugiat perspiciatis repudiandae molestiae? Saepe, soluta sint magnam et magni ut odio alias natus molestias est non possimus, assumenda in debitis optio similique quod ratione ad? Minus, provident asperiores? Sed quo magnam temporibus in, nam nostrum sunt asperiores modi possimus, qui doloribus harum ex sit tempora earum, eligendi consequatur fugit dicta accusamus?Vitae ipsa perferendis ad at quisquam maxime.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'scss'],
    liveLink: 'https://anuarshaidenov.github.com/portfolio',
  },
  {
    id: 2,
    class: 'container-reverse',
    title: 'Multi-Post Stories',
    company: 'Facebook',
    role: 'Backend dev',
    year: 2015,
    img: './images/project-img.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! Assumenda beatae iusto voluptas sint neque, praesentium earum harum corrupti sunt delectus dolores ut a excepturi officiis consequuntur facilis, minima ducimus adipisci. Molestias, hic. Quo accusantium mollitia esse minus harum. Eos fugiat perspiciatis repudiandae molestiae? Saepe, soluta sint magnam et magni ut odio alias natus molestias est non possimus, assumenda in debitis optio similique quod ratione ad? Minus, provident asperiores? Sed quo magnam temporibus in, nam nostrum sunt asperiores modi possimus, qui doloribus harum ex sit tempora earum, eligendi consequatur fugit dicta accusamus?Vitae ipsa perferendis ad at quisquam maxime.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'css'],
    liveLink: 'https://anuarshaidenov.github.com/portfolio',
  },
  {
    id: 3,
    class: 'container',
    title: 'Facebook 360',
    company: 'Facebook',
    role: 'Backend dev',
    year: 2015,
    img: './images/project-img.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! Assumenda beatae iusto voluptas sint neque, praesentium earum harum corrupti sunt delectus dolores ut a excepturi officiis consequuntur facilis, minima ducimus adipisci. Molestias, hic. Quo accusantium mollitia esse minus harum. Eos fugiat perspiciatis repudiandae molestiae? Saepe, soluta sint magnam et magni ut odio alias natus molestias est non possimus, assumenda in debitis optio similique quod ratione ad? Minus, provident asperiores? Sed quo magnam temporibus in, nam nostrum sunt asperiores modi possimus, qui doloribus harum ex sit tempora earum, eligendi consequatur fugit dicta accusamus?Vitae ipsa perferendis ad at quisquam maxime.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'css'],
    liveLink: 'https://anuarshaidenov.github.com/portfolio',
  },
  {
    id: 4,
    class: 'container-reverse',
    title: 'Uber Navigation',
    company: 'Uber',
    role: 'Backend dev',
    year: 2018,
    img: './images/project-img.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionPopup:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolorem aspernatur, sapiente in aut iste libero impedit suscipit dignissimos, eligendi tempora amet rem minima, aliquid nesciunt dicta hic facere distinctio! Assumenda beatae iusto voluptas sint neque, praesentium earum harum corrupti sunt delectus dolores ut a excepturi officiis consequuntur facilis, minima ducimus adipisci. Molestias, hic. Quo accusantium mollitia esse minus harum. Eos fugiat perspiciatis repudiandae molestiae? Saepe, soluta sint magnam et magni ut odio alias natus molestias est non possimus, assumenda in debitis optio similique quod ratione ad? Minus, provident asperiores? Sed quo magnam temporibus in, nam nostrum sunt asperiores modi possimus, qui doloribus harum ex sit tempora earum, eligendi consequatur fugit dicta accusamus?Vitae ipsa perferendis ad at quisquam maxime.',
    tags: ['javascript', 'html', 'css', 'javascript', 'html', 'css'],
    liveLink: 'https://anuarshaidenov.github.com/portfolio',
  },
];

const closeModal = function () {
  body.style.overflow = 'visible';
  modal.classList.add('hidden');
  backdrop.classList.add('hidden');
};

const openModal = function (id) {
  body.style.overflow = 'hidden';
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

  modal.classList.remove('hidden');
  backdrop.classList.remove('hidden');
};

modalCloseBtn.addEventListener('click', closeModal);

backdrop.addEventListener('click', closeModal);

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
                  .map((tag) => {
                    return `<li class="card__list-item">${tag}</li>`;
                  })
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
