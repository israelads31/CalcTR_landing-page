export const toggleSenha = () => {
  const senhaInput = document.getElementById('senha');
  const icon = document.querySelector('#toggleSenha i');
  senhaInput.type = senhaInput.type === "password" ? "text" : "password";
  icon.classList.toggle('bxs-show');
  icon.classList.toggle('bxs-hide');
}