import 'toastify-js/src/toastify.css';
import Toastify from 'toastify-js';

export const showToastMessage = (message: string, color: 'green' | 'red'): void => {
  const background =
    color === 'green' ? 'linear-gradient(to right, #00b09b, #96c93d)' : 'linear-gradient(to right, #ff758c, #ff9900)';

  Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: 'bottom',
    position: 'right',
    backgroundColor: background
  }).showToast();
};
