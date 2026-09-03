/* ============================================================
   PUC EATS — Sistema de Notificações de Promoções
   ============================================================ */

(function () {

  const container = document.getElementById('puc-notif-container');

  if (!container) {
    console.error('Container #puc-notif-container não encontrado.');
    return;
  }

  let _idCounter = 0;

  window.PucNotif = {

    show: function (opts) {

      const {
        icon = '🔔',
        tag = 'Aviso',
        title = '',
        desc = '',
        action = '',
        onAction = null,
        duration = 5000,
      } = opts;

      const id = 'puc-n' + (++_idCounter);

      const el = document.createElement('div');
      el.className = 'puc-notif';
      el.id = id;

      const actionHtml = action
        ? `<button class="puc-notif__action" id="${id}-action">${action} →</button>`
        : '';

      el.innerHTML = `
        <div class="puc-notif__icon">${icon}</div>

        <div class="puc-notif__body">
          <div class="puc-notif__tag">${tag}</div>
          <div class="puc-notif__title">${title}</div>
          <div class="puc-notif__desc">${desc}</div>
          ${actionHtml}
        </div>

        <button
          class="puc-notif__close"
          id="${id}-close"
          aria-label="Fechar notificação">
          ✕
        </button>

        <div class="puc-notif__progress" id="${id}-prog"></div>
      `;

      container.appendChild(el);

      /* botão fechar */
      el.querySelector(`#${id}-close`).addEventListener('click', function () {
        window.PucNotif.dismiss(id);
      });

      /* botão ação */
      if (action) {
        el.querySelector(`#${id}-action`).addEventListener('click', function () {

          if (typeof onAction === 'function') {
            onAction();
          }

          window.PucNotif.dismiss(id);
        });
      }

      /* animação entrada */
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          el.classList.add('puc-notif--show');
        });
      });

      /* barra progresso */
      const prog = document.getElementById(id + '-prog');

      if (prog) {
        prog.style.transition =
          'transform ' + duration + 'ms linear';

        setTimeout(function () {
          prog.style.transform = 'scaleX(0)';
        }, 50);
      }

      /* fechamento automático */
      const timer = setTimeout(function () {
        window.PucNotif.dismiss(id);
      }, duration);

      el._pucTimer = timer;

      return id;
    },

    dismiss: function (id) {

      const el = document.getElementById(id);

      if (!el) return;

      clearTimeout(el._pucTimer);

      el.classList.remove('puc-notif--show');
      el.classList.add('puc-notif--hide');

      setTimeout(function () {

        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }

      }, 420);
    },

    dismissAll: function () {

      const items =
        container.querySelectorAll('.puc-notif');

      items.forEach(function (el) {
        window.PucNotif.dismiss(el.id);
      });
    }
  };

  /* =====================================================
     PROMOÇÕES AUTOMÁTICAS
     ===================================================== */

  const PROMOCOES_AUTO = [

    {
      delay: 2000,
      icon: '🔥',
      tag: 'Promoção',
      title: 'Combo Universitário com 30% OFF',
      desc: 'Só hoje até às 20h no Restaurante Central.',
      action: 'Ver oferta',
      onAction: function () {
        window.location.href = 'cardapio.html';
      },
      duration: 6000
    },

    {
      delay: 10000,
      icon: '🎟️',
      tag: 'Cupom Exclusivo',
      title: 'Use PUCFOOD10 e economize',
      desc: '10% de desconto no seu próximo pedido.',
      action: 'Pedir agora',
      onAction: function () {
        window.location.href = 'cardapio.html';
      },
      duration: 7000
    },

    {
      delay: 20000,
      icon: '🛵',
      tag: 'Entrega',
      title: 'Frete grátis acima de R$ 30',
      desc: 'Válido para todos os restaurantes abertos.',
      action: 'Ver restaurantes',
      onAction: function () {
        window.location.href = 'ver-todos.html';
      },
      duration: 6000
    }

  ];

  PROMOCOES_AUTO.forEach(function (promo) {

    setTimeout(function () {

      window.PucNotif.show({
        icon: promo.icon,
        tag: promo.tag,
        title: promo.title,
        desc: promo.desc,
        action: promo.action,
        onAction: promo.onAction,
        duration: promo.duration
      });

    }, promo.delay);

  });

})();