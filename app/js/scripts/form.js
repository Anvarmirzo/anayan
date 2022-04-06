export const formSubmit = () => {
  const modal = document.getElementById('contact-modal');
  const form = document.getElementById('contact-form');
  const name = document.getElementById('contract-form-name');
  const email = document.getElementById('contract-form-email');
  const message = document.getElementById('contract-form-msg');

  if (!form || !modal || !name || !email || !message) return;


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      return;
    }

    const data = {
      name: name.value,
      email: email.value,
      message: message.value
    };

    name.value = '';
    email.value = '';
    message.value = '';
    
    modal.classList.add('active');
  });

  modal.addEventListener('click', (e) => {
    modal.classList.remove('active');
  });
};
