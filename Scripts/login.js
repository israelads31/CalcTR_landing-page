import { toggleSenha } from "./modules/toggleSenha.js";

document.addEventListener('DOMContentLoaded', function () {
  const usuarioSalvo = localStorage.getItem('usuario');
  if (usuarioSalvo) {
    document.getElementById('usuario').value = usuarioSalvo;
    document.getElementById('lembrarUsuario').checked = true;
  }
  document.getElementById('loginForm').addEventListener('submit', fazerLogin);

  document.getElementById('toggleSenha').addEventListener('click', function (e) {
    e.preventDefault();
    toggleSenha();
  });
});

function fazerLogin(event) {
  event.preventDefault();

  const usuarioLogin = document.getElementById('usuario').value;
  const senhaLogin = document.getElementById('senha').value;
  const lembrarUsuario = document.getElementById('lembrarUsuario').checked;

  if (lembrarUsuario) {
    localStorage.setItem('usuario', usuarioLogin);
  } else {
    localStorage.removeItem('usuario');
  }

  const dadosLogin = {
    usuario: usuarioLogin,
    senha: senhaLogin
  };

  fetch('/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(dadosLogin)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Falha ao fazer login');
    }
  })
  .then(textoResposta => {
    console.log(textoResposta);
    window.location.href = '/calculator.html';
  })
  .catch(error => {
    console.error('Erro no login', error);
  });
};