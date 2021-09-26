export const generateModal = (videoGame: any, modal: HTMLFormElement) => {
    modal.style.display = 'block'
    modal.innerHTML = ''
    const modalContent = document.createElement('div')
    modalContent.setAttribute('class', 'animate__animated animate__slideInLeft modal-content mt-5')
    modal.appendChild(modalContent)

    const closeBtn = document.createElement('span')
    closeBtn.setAttribute('class', 'close')
    closeBtn.innerHTML = `<div style="margin:20px 0 0 20px; cursor:pointer;">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
    </svg>
    </div>`

    closeBtn.style.width = '30px'
    modalContent.innerHTML = ''
    modalContent.appendChild(closeBtn)

    let errorMessage: HTMLDivElement
    errorMessage = document.createElement('div')
    errorMessage.setAttribute('class', 'container-error-msg p-5 mx-auto')
    errorMessage.innerHTML += `
    <div class="col-md-8">
    <h3>${videoGame.name}</h3>
    <hr>
    <p>${videoGame.description}</p>
    </div>
    `
    modalContent.appendChild(errorMessage)

    closeBtn.addEventListener('click', async (e) => {
        e.preventDefault()
        modal.style.display = 'none'
        const codeInput = document.querySelector('#code-input') as HTMLInputElement
        if (codeInput !== null) codeInput.focus();

    })
}