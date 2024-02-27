import { postData } from "../services/services";

function subscribe (formSelector, adress) {
    
    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'icons/spinner.svg',
        success: 'Спасибо!',
        failure: 'Ошибка'
    };

    forms.forEach (item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;

            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData(adress, json) 
            .then(data => {
                console.log(data);
                showThanks(message.success);
                form.reset();
                statusMessage.remove();
            })
            .catch(() => {
                showThanks(message.failure);
            })
            .finally(() => {
                form.reset();
            });
        });
    }

    function showThanks(message) {
        const button = document.getElementById("subscribeButton");
        button.textContent = message;
        button.classList.add("btn__subscribed");
        setTimeout(() => {
            button.textContent = "Подписаться";
            button.classList.remove("btn__subscribed");
        }, 3000);
    }
}

export default subscribe;