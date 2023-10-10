
function onCatSelectBtn(click) {
  if (click.target.nodeName !== 'BUTTON') {
    return;
  };
  const privActiveBtn = document.querySelector('.categories-active');
  privActiveBtn.classList.remove('categories-active');
  click.target.classList.add('categories-active');
  return click.srcElement.id;
  // Возвращает название категории для феча
};


export default onCatSelectBtn;