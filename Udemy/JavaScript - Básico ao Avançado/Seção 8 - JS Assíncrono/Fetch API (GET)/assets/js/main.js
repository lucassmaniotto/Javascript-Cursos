const loadPage = async (element) => {
    try{
        const href = element.getAttribute('href');
        const response = await fetch(href);
        if(response.status !== 200) throw new Error(`Erro ${response.status} - ${response.statusText}`);
        const html = await response.text();
        loadResult(html);
    } catch(error) {
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
                <h1 class="error">${error.message}</h1>
                <p class="error">Ocorreu um erro ao carregar a página.</p>
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
