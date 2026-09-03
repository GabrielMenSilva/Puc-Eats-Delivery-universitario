const FAVORITOS_KEY = "pucEatsFavoritos";

function getFavoritos() {
    return JSON.parse(localStorage.getItem(FAVORITOS_KEY)) || [];
}

function saveFavoritos(lista) {
    localStorage.setItem(FAVORITOS_KEY, JSON.stringify(lista));
}

// FAVORITAR NA HOME
function iniciarFavoritosHome() {

    const favoritos = getFavoritos();

    document.querySelectorAll(".restaurante").forEach(restaurante => {

        const nome = restaurante
            .querySelector(".rest-nome")
            .textContent
            .trim();

        const btn = restaurante.querySelector(".rest-fav");

        if (!btn) return;

        // Estado inicial
        if (favoritos.includes(nome)) {
            btn.textContent = "♥";
            btn.classList.add("fav-active");
        }

        btn.addEventListener("click", () => {

            let favoritosAtualizados = getFavoritos();

            if (favoritosAtualizados.includes(nome)) {

                favoritosAtualizados =
                    favoritosAtualizados.filter(item => item !== nome);

                btn.textContent = "♡";
                btn.classList.remove("fav-active");

            } else {

                favoritosAtualizados.push(nome);

                btn.textContent = "♥";
                btn.classList.add("fav-active");

            }

            saveFavoritos(favoritosAtualizados);

            carregarFavoritosHome();
        });

    });

}

function carregarFavoritosHome() {

    const favoritos = getFavoritos();

    const container =
        document.querySelector(".favoritos-grid");

    if (!container) return;

    container.innerHTML = "";

    if (favoritos.length === 0) {

        container.innerHTML = `
            <div class="fav-card">
                <div class="fav-info">
                    <h4>Nenhum favorito ainda</h4>
                    <span>Adicione restaurantes aos favoritos ❤️</span>
                </div>
            </div>
        `;

        return;
    }

    favoritos.forEach(nome => {

        let emoji = "🍽️";

        if (nome.toLowerCase().includes("cafeteria"))
            emoji = "☕";

        if (nome.toLowerCase().includes("pizza"))
            emoji = "🍕";

        if (nome.toLowerCase().includes("subway"))
            emoji = "🥪";

        if (nome.toLowerCase().includes("pf"))
            emoji = "🍛";

        if (nome.toLowerCase().includes("cacau"))
            emoji = "🍫";

        container.innerHTML += `
            <div class="fav-card">

                <div class="fav-img">
                    <div class="fav-emoji">${emoji}</div>
                    <div class="fav-coracaoo">❤️</div>
                </div>

                <div class="fav-info">
                    <h4>${nome}</h4>
                    <span>Favoritado</span>
                </div>

            </div>
        `;
    });

}

document.addEventListener("DOMContentLoaded", () => {

    carregarFavoritosHome();

    iniciarFavoritosHome();

});