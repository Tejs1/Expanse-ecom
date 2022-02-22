const labels = document.querySelectorAll('.form-control label')
const passwordInput = document.querySelector('.password')
const icon = document.querySelector('.form-control img')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) =>
    `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')

    
});


icon.addEventListener('mouseover',() => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
})
icon.addEventListener('mouseout',() => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
})