

const RESTAURANTE = {
  nome: "Restaurante Genérico Exemplo",          // Nome exibido no hero
  tipo: "Cafeteria • Bebidas • Lanches",  // Categorias exibidas no hero
  avaliacao: "4.9",
  totalAvaliacoes: "2.4k",
  distancia: "200m",
  tempo: "10-15 min",
  entrega: "Grátis",
  aberto: true,

};

const CARDAPIO = [

  {
    id: "destaques",
    emoji: "🔥",
    titulo: "Destaques",
    itens: [
      {
        id: 1,
        nome: "Combo Universitário",
        desc: "Combo Ilustrativo",
        preco: 29.90,
        precoOrig: 38.90,
        badge: "mais-pedido",
        emoji: "🍔",
        img: null, 
      },
      {
        id: 2,
        nome: "Café + Croissant",
        desc: "Combo Ilustrativo",
        preco: 16.90,
        precoOrig: null,
        badge: "novo",
        emoji: "☕",
        img: null,
      },
      {
        id: 3,
        nome: "Açaí 500ml",
        desc: "Combo Ilustrativo",
        preco: 22.00,
        precoOrig: null,
        badge: null,
        emoji: "🫐",
        img: null,
      },
    ]
  },

  {
    id: "lanches",
    emoji: "🍔",
    titulo: "Lanches",
    itens: [
      {
        id: 4,
        nome: "HamBurger Clássico",
        desc: "Comida Ilustrativa",
        preco: 22.90,
        precoOrig: null,
        badge: null,
        emoji: "🍔",
        img: null,
      },
      {
        id: 5,
        nome: "Cheese Salada",
        desc: "Comida Ilustrativa",
        preco: 26.90,
        precoOrig: null,
        badge: "mais-pedido",
        emoji: "🍔",
        img: null,
      },
      {
        id: 6,
        nome: "Bacon Duplo",
        desc: "Comida Ilustrativa",
        preco: 29.90,
        precoOrig: null,
        badge: null,
        emoji: "🥓",
        img: null,
      },
      {
        id: 7,
        nome: "Veggie Burger",
        desc: "Comida Ilustrativa",
        preco: 24.90,
        precoOrig: null,
        badge: "vegetariano",
        emoji: "🌿",
        img: null,
      },
    ]
  },

  {
    id: "pratos",
    emoji: "🍽️",
    titulo: "Pratos",
    itens: [
      {
        id: 8,
        nome: "PF Tradicional",
        desc: "Comida Ilustrativa",
        preco: 24.90,
        precoOrig: null,
        badge: null,
        emoji: "🍽️",
        img: null,
      },
      {
        id: 9,
        nome: "Frango Grelhado",
        desc: "Comida Ilustrativa",
        preco: 22.90,
        precoOrig: null,
        badge: "mais-pedido",
        emoji: "🍗",
        img: null,
      },
      {
        id: 10,
        nome: "Prato Vegetariano",
        desc: "Comida Ilustrativa",
        preco: 20.90,
        precoOrig: null,
        badge: "vegetariano",
        emoji: "🥦",
        img: null,
      },
    ]
  },

  {
    id: "pizza",
    emoji: "🍕",
    titulo: "Pizzas",
    itens: [
      {
        id: 11,
        nome: "Pizza Margherita",
        desc: "Comida Ilustrativa",
        preco: 39.90,
        precoOrig: null,
        badge: null,
        emoji: "🍕",
        img: null,
      },
      {
        id: 12,
        nome: "Pizza Pepperoni",
        desc: "Comida Ilustrativa",
        preco: 44.90,
        precoOrig: 52.90,
        badge: "mais-pedido",
        emoji: "🍕",
        img: null,
      },
      {
        id: 13,
        nome: "Pizza 4 Queijos",
        desc: "Comida Ilustrativa",
        preco: 46.90,
        precoOrig: null,
        badge: null,
        emoji: "🧀",
        img: null,
      },
    ]
  },

  {
    id: "bebidas",
    emoji: "🥤",
    titulo: "Bebidas",
    itens: [
      {
        id: 14,
        nome: "Café Coado",
        desc: "Comida Ilustrativa",
        preco: 7.00,
        precoOrig: null,
        badge: null,
        emoji: "☕",
        img: null,
      },
      {
        id: 15,
        nome: "Iced Latte",
        desc: "Comida Ilustrativa",
        preco: 14.90,
        precoOrig: null,
        badge: "novo",
        emoji: "🧋",
        img: null,
      },
      {
        id: 16,
        nome: "Suco Natural",
        desc: "Comida Ilustrativa",
        preco: 9.90,
        precoOrig: null,
        badge: null,
        emoji: "🍊",
        img: null,
      },
      {
        id: 17,
        nome: "Refrigerante Lata",
        desc: "Comida Ilustrativa",
        preco: 6.00,
        precoOrig: null,
        badge: null,
        emoji: "🥤",
        img: null,
      },
      {
        id: 18,
        nome: "Água Mineral",
        desc: "Comida Ilustrativa",
        preco: 3.50,
        precoOrig: null,
        badge: null,
        emoji: "💧",
        img: null,
      },
    ]
  },

  {
    id: "doces",
    emoji: "🍰",
    titulo: "Doces",
    itens: [
      {
        id: 19,
        nome: "Brownie com Sorvete",
        desc: "Comida Ilustrativa",
        preco: 18.90,
        precoOrig: null,
        badge: "mais-pedido",
        emoji: "🍫",
        img: null,
      },
      {
        id: 20,
        nome: "Cheesecake de Frutas",
        desc: "Comida Ilustrativa",
        preco: 16.90,
        precoOrig: null,
        badge: null,
        emoji: "🍰",
        img: null,
      },
    ]
  },

];


let cart = JSON.parse(localStorage.getItem("cart-cardapio")) || [];

function formatBRL(v) {
  return `R$ ${v.toFixed(2).replace(".", ",")}`;
}

function renderCardapio(filtro = "") {
  const container = document.getElementById("cardapioContainer");
  const emptyState = document.getElementById("emptyState");
  const tabs = document.getElementById("catsTabs");

  container.innerHTML = "";
  tabs.innerHTML = "";

  // Botão "Todos"
  const btnAll = document.createElement("button");
  btnAll.className = "cat-tab active";
  btnAll.textContent = "🍽️ Todos";
  btnAll.dataset.cat = "todos";
  btnAll.addEventListener("click", () => scrollToSection(null, btnAll));
  tabs.appendChild(btnAll);

  let totalItens = 0;

  CARDAPIO.forEach(cat => {
    const itensFiltrados = filtro
      ? cat.itens.filter(i =>
          i.nome.toLowerCase().includes(filtro) ||
          i.desc.toLowerCase().includes(filtro) ||
          cat.titulo.toLowerCase().includes(filtro)
        )
      : cat.itens;

    if (itensFiltrados.length === 0) return;

    totalItens += itensFiltrados.length;

    // Tab
    const tab = document.createElement("button");
    tab.className = "cat-tab";
    tab.textContent = `${cat.emoji} ${cat.titulo}`;
    tab.dataset.cat = cat.id;
    tab.addEventListener("click", () => scrollToSection(cat.id, tab));
    tabs.appendChild(tab);

    // Seção
    const section = document.createElement("section");
    section.className = "cardapio-section";
    section.id = `cat-${cat.id}`;

    section.innerHTML = `
      <h2 class="cardapio-section-title">
        <span class="cat-emoji">${cat.emoji}</span>
        ${cat.titulo}
      </h2>
      <div class="food-grid"></div>
    `;

    const grid = section.querySelector(".food-grid");

    itensFiltrados.forEach(item => {
      const card = document.createElement("div");
      card.className = "food-card";

      // Imagem ou placeholder
      let imgHtml;
      if (item.img) {
        imgHtml = `<img src="${item.img}" alt="${item.nome}" class="food-img">`;
      } else {
        imgHtml = `
          <div class="food-img-placeholder">
            <span>${item.emoji}</span>
          </div>`;
      }

      const badgeHtml = item.badge
        ? `<div class="food-badge ${item.badge}">${badgeLabel(item.badge)}</div>`
        : "";

      const precoHtml = item.precoOrig
        ? `<span class="food-price-original">${formatBRL(item.precoOrig)}</span>
           <span class="food-price">${formatBRL(item.preco)}</span>`
        : `<span class="food-price">${formatBRL(item.preco)}</span>`;

      card.innerHTML = `
        <div class="food-img-wrap">
          ${imgHtml}
          ${badgeHtml}
        </div>
        <div class="food-body">
          <h3 class="food-title">${item.nome}</h3>
          <p class="food-desc">${item.desc}</p>
          <div class="food-footer">
            <div>${precoHtml}</div>
            <button class="btn-add" data-id="${item.id}">+ Adicionar</button>
          </div>
        </div>
      `;

      card.querySelector(".btn-add").addEventListener("click", () => addToCart(item));
      grid.appendChild(card);
    });

    container.appendChild(section);
  });

  emptyState.style.display = totalItens === 0 ? "block" : "none";
}

function badgeLabel(badge) {
  const map = {
    "mais-pedido": "🔥 Mais Pedido",
    "novo":        "✨ Novo",
    "vegetariano": "🌿 Vegetariano",
    "vegano":      "🌱 Vegano",
  };
  return map[badge] || badge;
}

function scrollToSection(catId, activeTab) {
  // Atualizar tab ativa
  document.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active"));
  activeTab.classList.add("active");

  if (!catId) return;
  const section = document.getElementById(`cat-${catId}`);
  if (section) {
    const offset = 140;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

// ---- CARRINHO ----

function addToCart(item) {
  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  saveCart();
  renderCart();
  showToast(`${item.nome} adicionado!`);
}

function removeFromCart(id) {
  const idx = cart.findIndex(i => i.id === id);
  if (idx === -1) return;
  if (cart[idx].qty > 1) {
    cart[idx].qty--;
  } else {
    cart.splice(idx, 1);
  }
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("cart-cardapio", JSON.stringify(cart));
  document.getElementById("cartCount").textContent = cart.reduce((s, i) => s + i.qty, 0);
}

function renderCart() {
  const itemsEl   = document.getElementById("cartItems");
  const footerEl  = document.getElementById("cartFooter");
  const totalEl   = document.getElementById("cartTotal");

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p>Nenhum item adicionado ainda.</p>
      </div>`;
    footerEl.style.display = "none";
    return;
  }

  itemsEl.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.preco * item.qty;
    const el = document.createElement("div");
    el.className = "cart-item";
    el.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-name">${item.nome}</div>
        <div class="cart-item-price">${formatBRL(item.preco * item.qty)}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" data-action="minus" data-id="${item.id}">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" data-action="plus" data-id="${item.id}">+</button>
      </div>
    `;
    el.querySelector('[data-action="minus"]').addEventListener("click", () => removeFromCart(item.id));
    el.querySelector('[data-action="plus"]').addEventListener("click", () => addToCart(item));
    itemsEl.appendChild(el);
  });

  totalEl.textContent = formatBRL(total);
  footerEl.style.display = "block";
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = `✓ ${msg}`;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2200);
}

// ---- HERO INFO (atualiza via JS) ----

function aplicarInfoRestaurante() {
  const nomeEl = document.querySelector(".rest-hero-nome");
  const tipoEl = document.querySelector(".rest-hero-tipo");
  if (nomeEl) nomeEl.textContent = RESTAURANTE.nome;
  if (tipoEl) tipoEl.textContent = RESTAURANTE.tipo;

  // Atualiza meta
  const metas = document.querySelectorAll(".meta-item strong");
  if (metas[0]) metas[0].textContent = `${RESTAURANTE.avaliacao} (${RESTAURANTE.totalAvaliacoes} avaliações)`;
  // (os demais podem ser editados diretamente no HTML se preferir)
}

// ---- INIT ----

document.addEventListener("DOMContentLoaded", () => {
  aplicarInfoRestaurante();
  renderCardapio();
  renderCart();
  saveCart();

  // Busca
  document.getElementById("cardapioSearch").addEventListener("input", e => {
    renderCardapio(e.target.value.toLowerCase().trim());
  });

  // Carrinho open/close
  const cartBtn     = document.getElementById("cartBtn");
  const cartPanel   = document.getElementById("cartPanel");
  const cartOverlay = document.getElementById("cartOverlay");
  const cartClose   = document.getElementById("cartClose");

  function openCart()  { cartPanel.classList.add("open");  cartOverlay.classList.add("active");  }
  function closeCart() { cartPanel.classList.remove("open"); cartOverlay.classList.remove("active"); }

  cartBtn.addEventListener("click", openCart);
  cartClose.addEventListener("click", closeCart);
  cartOverlay.addEventListener("click", closeCart);
});
