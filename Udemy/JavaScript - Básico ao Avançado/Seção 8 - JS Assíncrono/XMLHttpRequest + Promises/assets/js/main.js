const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true); // Abre a requisição
        xhr.send(); // Envia a requisição

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText); 
            } else { 
                reject({
                    code: xhr.status, 
                    message: xhr.statusText 
                });
            }
        });
    });
};

const loadPage = async (element) => {
    const href = element.getAttribute('href');
    const objConfig = {
        method: 'GET',
        url: href
    };

    try {
        const response = await request(objConfig);
        loadResult(response);
    } catch (error) {
        errorTreatment(error);
    }
};

const loadResult = (response) => {
    const result = document.querySelector('.result');
    result.innerHTML = response;
};

const errorTreatment = (error) => {
    const result = document.querySelector('.result');
            result.innerHTML = `
            <section class="container">
                <h1 class="error">Erro ${error.code}</h1>
                <p class="error">${error.message}</p>
            </section>
            `;
};

document.addEventListener('click', (event) => {
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if(tag === 'a') {
        event.preventDefault();
        loadPage(element);
    }
});
