// ---- TROCA DE TAB ----
    function switchTab(tab) {
      const isLogin = tab === 'login';

      document.getElementById('tabLogin').classList.toggle('active', isLogin);
      document.getElementById('tabCadastro').classList.toggle('active', !isLogin);
      document.getElementById('formLogin').classList.toggle('active', isLogin);
      document.getElementById('formCadastro').classList.toggle('active', !isLogin);
      document.getElementById('tabIndicator').style.left = isLogin ? '4px' : 'calc(50% + 2px)';

      document.getElementById('authTitle').textContent = isLogin
        ? 'Bem-vindo\nde volta 👋'
        : 'Crie sua conta\ne comece a pedir';
      document.getElementById('authSubtitle').textContent = isLogin
        ? 'Acesse sua conta e continue aproveitando os melhores restaurantes do campus.'
        : 'Acesse promoções exclusivas, salve seus pedidos favoritos e receba no campus.';
    }

    // ---- MOSTRAR/OCULTAR SENHA ----
    function togglePass(id, btn) {
      const input = document.getElementById(id);
      const isText = input.type === 'text';
      input.type = isText ? 'password' : 'text';
      btn.textContent = isText ? '👁' : '🙈';
    }

    // ---- FORÇA DA SENHA ----
    document.getElementById('cadSenha').addEventListener('input', function () {
      const val = this.value;
      const bar = document.getElementById('passBar');
      const label = document.getElementById('passLabel');
      let score = 0;
      if (val.length >= 8)  score++;
      if (/[A-Z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      const levels = [
        { pct: '0%',   color: '',          txt: '' },
        { pct: '25%',  color: '#e53935',   txt: 'Fraca' },
        { pct: '50%',  color: '#fb8c00',   txt: 'Razoável' },
        { pct: '75%',  color: '#fdd835',   txt: 'Boa' },
        { pct: '100%', color: '#43a047',   txt: 'Forte 💪' },
      ];
      const lvl = val.length === 0 ? levels[0] : levels[score] || levels[1];
      bar.style.width = lvl.pct;
      bar.style.background = lvl.color;
      label.textContent = lvl.txt;
      label.style.color = lvl.color;
    });

    // ---- LOGIN ----
    function handleLogin() {
      const email = document.getElementById('loginEmail').value.trim();
      const senha = document.getElementById('loginSenha').value;
      if (!email || !senha) { showToast('Preencha e-mail e senha.', 'erro'); return; }
      const usuario = JSON.parse(localStorage.getItem('usuario'));
      if (!usuario || usuario.email !== email || usuario.senha !== senha) {
        showToast('E-mail ou senha incorretos.', 'erro'); return;
      }
      showToast('Bem-vindo de volta, ' + usuario.nome.split(' ')[0] + '! ✓');
      setTimeout(() => window.location.href = 'index.html', 1400);
    }

    // ---- CADASTRO ----
    function handleCadastro() {
      const nome    = document.getElementById('cadNome').value.trim();
      const email   = document.getElementById('cadEmail').value.trim();
      const senha   = document.getElementById('cadSenha').value;
      const curso   = document.getElementById('cadCurso').value;
      const campus  = document.getElementById('cadCampus').value;
      const tipo    = document.getElementById('cadTipo').value;
      const tel     = document.getElementById('cadTelefone').value.trim();
      const end     = document.getElementById('cadEndereco').value.trim();
      const termos  = document.getElementById('cadTermos').checked;

      if (!nome || !email || !senha || !tipo) {
        showToast('Preencha os campos obrigatórios.', 'erro'); return;
      }
      if (!termos) {
        showToast('Aceite os Termos de Uso para continuar.', 'erro'); return;
      }
      if (senha.length < 8) {
        showToast('Senha deve ter pelo menos 8 caracteres.', 'erro'); return;
      }

      const usuario = { nome, email, senha, curso, campus, tipoUsuario: tipo, telefone: tel, endereco: end };
      localStorage.setItem('usuario', JSON.stringify(usuario));
      showToast('Conta criada com sucesso! ✓');
      setTimeout(() => window.location.href = 'index.html', 1400);
    }

    // ---- TOAST ----
    function showToast(msg, tipo = 'ok') {
      const t = document.getElementById('toast');
      t.textContent = msg;
      t.className = 'toast show' + (tipo === 'erro' ? ' toast-erro' : '');
      setTimeout(() => t.classList.remove('show'), 2600);
    }

    // Inicia indicador da tab
    document.getElementById('tabIndicator').style.left = '4px';
    