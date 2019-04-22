$(document).ready(function (){

  // Проверка формы

  let count = 1;

  $('.form__button').on('click', function (e) {
    let namePattern =  /^([a-zA-ZА-Яа-яЁё]{2,}\s[a-zA-ZА-Яа-яЁё]{1,}'?-?[a-zA-ZА-Яа-яЁё]{2,}\s?([a-zA-ZА-Яа-яЁё]{1,})?)/;
    let mailPattern =  /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;
    let telPattern =  /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;
    $('.form__item-input').each(function () {
      if ($(this).val() == '') {
        e.preventDefault();
        $(this).next().text('Заполните поле!');
        $(this).css('background', 'rgba(255, 0, 0, 0.3)');
      } else if (this.name == 'name' && !$(this).val().match(namePattern)) {      
        getInspect(e, this);
      } else if (this.name == 'email' && !$(this).val().match(mailPattern)) {      
        getInspect(e, this);
      } else if (this.name == 'tel' && !$(this).val().match(telPattern)) {      
        getInspect(e, this);
      } else {
        $(this).next().text('');
        $(this).css('background', 'rgba(0, 255, 0, 0.3)');
      } 
    });
  });

  function getInspect(e, inspect) {
    e.preventDefault();
    $(inspect).next().text('Неверный формат!');
    $(inspect).css('background', 'rgba(255, 0, 0, 0.3)');
  }  

});