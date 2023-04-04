let title = window.document.title;

const getMessage = (message) => {
  setInterval(() => {
    return console.log(message);
  }, 5000);
};

getMessage(title);

export default getMessage;
