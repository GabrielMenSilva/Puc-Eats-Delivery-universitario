// ---- ESTADO GLOBAL ----
let activeFilter = 'todos';

const FAVORITOS_KEY = "pucEatsFavoritos";

// ---- FAVORITOS ----
function getFavoritos() {
  return JSON.parse(localStorage.getItem(FAVORITOS_KEY)) || [];
}

function saveFavoritos(lista) {
  localStorage.setItem(FAVORITOS_KEY, JSON.stringify(lista));
}

function toggleFav(btn) {

  const card = btn.closest(".card");
  const nome = card.dataset.name;

  let favoritos = getFavoritos();

  if (favoritos.includes(nome)) {

    favoritos = favoritos.filter(item => item !== nome);

    btn.classList.remove("fav-active");
    btn.textContent = "♡";

  } else {

    favoritos.push(nome);

    btn.classList.add("fav-active");
    btn.textContent = "♥";

  }

  saveFavoritos(favoritos);
}

// ---- INICIALIZAÇÃO ----
document.addEventListener('DOMContentLoaded', function () {

  updateStatOpen();
  updateResultsCount();

  const favoritos = getFavoritos();

  document.querySelectorAll(".card").forEach(card => {

    const nome = card.dataset.name;

    const btn = card.querySelector(".card-fav");

    if (!btn) return;

    if (favoritos.includes(nome)) {
      btn.classList.add("fav-active");
      btn.textContent = "♥";
    } else {
      btn.classList.remove("fav-active");
      btn.textContent = "♡";
    }

  });

});

// ---- TROCA DE FILTRO ----
function setFilter(btn, filter) {

  activeFilter = filter;

  document
    .querySelectorAll('.chip')
    .forEach(c => c.classList.remove('active'));

  btn.classList.add('active');

  filterCards();
}

// ---- FILTRAR + BUSCAR ----
function filterCards() {

  const query =
    document
      .getElementById('searchInput')
      .value
      .toLowerCase()
      .trim();

  const cards =
    document.querySelectorAll('.card:not(.empty-state)');

  let visible = 0;

  cards.forEach(card => {

    const name =
      card.dataset.name.toLowerCase();

    const cat =
      card.dataset.cat;

    const matchesSearch =
      name.includes(query);

    const matchesFilter =
      activeFilter === 'todos' ||
      cat === activeFilter;

    if (matchesSearch && matchesFilter) {

      card.style.display = '';

      visible++;

    } else {

      card.style.display = 'none';

    }

  });

  document
    .getElementById('emptyState')
    .classList.toggle('show', visible === 0);

  updateResultsCount(visible);
}

// ---- ORDENAR ----
function sortCards() {

  const sort =
    document.getElementById('sortSelect').value;

  const grid =
    document.getElementById('grid');

  const cards =
    [...grid.querySelectorAll('.card:not(.empty-state)')];

  cards.sort((a, b) => {

    if (sort === 'avaliacao') {
      return parseFloat(b.dataset.rating)
        - parseFloat(a.dataset.rating);
    }

    if (sort === 'tempo') {
      return parseInt(a.dataset.time)
        - parseInt(b.dataset.time);
    }

    if (sort === 'nome') {
      return a.dataset.name.localeCompare(
        b.dataset.name,
        'pt-BR'
      );
    }

    return 0;
  });

  const emptyState =
    grid.querySelector('.empty-state');

  cards.forEach(card =>
    grid.insertBefore(card, emptyState)
  );
}

// ---- CONTAGEM DE ABERTOS ----
function updateStatOpen() {

  const statEl =
    document.getElementById('statOpen');

  if (!statEl) return;

  const open =
    document.querySelectorAll(
      '.card:not(.empty-state)[data-open="true"]'
    ).length;

  statEl.textContent = open;
}

// ---- CONTAGEM DE RESULTADOS ----
function updateResultsCount(count) {

  const el =
    document.getElementById('resultsCount');

  if (!el) return;

  if (count === undefined) {

    count =
      document.querySelectorAll(
        '.card:not(.empty-state)'
      ).length;

  }

  const label =
    count === 1
      ? 'restaurante encontrado'
      : 'restaurantes encontrados';

  el.innerHTML =
    `<strong>${count}</strong> ${label}`;
}