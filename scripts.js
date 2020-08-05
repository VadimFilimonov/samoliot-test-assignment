(() => {
  let tnsOuter;
  let form;

  let slider;

  const findElements = () => {
    tnsOuter = document.querySelector('.tns-outer');
    form = document.querySelector('.form');
  };

  const moveForm = () => {
    tnsOuter.append(form);
  };

  const showMessage = (data) => {
    alert(data.message);
    form.reset();
  };

  const sendForm = (target) => {
    return fetch(target.action, {
      method: 'post',
      body: new FormData(target),
    })
      .then(response => response.json())
      .then(showMessage);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    sendForm(event.target);
  };

  const subscribe = () => {
    form.addEventListener('submit', onSubmit);
  };

  const initSlider = () => {
    slider = tns({
      container: '.slider',
      items: 1,
      controls: false,
    });
  };

  const init = () => {
    initSlider();
    findElements();
    moveForm();
    subscribe();
  };

  init();
})();