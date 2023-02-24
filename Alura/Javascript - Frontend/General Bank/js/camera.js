const buttonInitCamera = document.querySelector('[data-video-botao]');
const cameraField = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const buttonTakePicture = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const message = document.querySelector('[data-mensagem]');
const buttonSendPicture = document.querySelector('[data-enviar]');

let imageURL = "";

buttonInitCamera.addEventListener('click', async function () {
    const initVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    buttonInitCamera.style.display = 'none';
    cameraField.style.display = 'block';

    video.srcObject = initVideo;
});

buttonTakePicture.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imageURL = canvas.toDataURL('image/jpeg');

    cameraField.style.display = 'none';
    message.style.display = 'block';
});

buttonSendPicture.addEventListener('click', () => {
    const receiveExistingData = localStorage.getItem('register');
    const convertedData = JSON.parse(receiveExistingData);

    convertedData.image = imageURL;
    localStorage.setItem('register', JSON.stringify(convertedData));

    window.location.href = './abrir-conta-form-3.html';
});