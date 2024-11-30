document.addEventListener('DOMContentLoaded', function() {
  // Добавляем обработчик для всех кнопок
  var buttons = document.querySelectorAll('.show-pdf-button');
  
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      var pdfId = button.getAttribute('data-pdf');  // Получаем id связанного PDF
      var pdfEmbed = document.getElementById(pdfId);
      
      // Меняем состояние отображения
      if (pdfEmbed.style.display === 'none') {
        pdfEmbed.style.display = 'block';
        button.textContent = 'Скрыть сертификат';
      } else {
        pdfEmbed.style.display = 'none';
        button.textContent = 'Посмотреть сертификат';
      }
    });
  });
});
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert('Копирование запрещено!');
});
document.addEventListener('keydown', function(e) {
  if (e.keyCode === 123) { // F12
    e.preventDefault();
    alert('Инструменты разработчика отключены!');
  }
});



function toggleDetails(button) {
  var details = button.nextElementSibling; // Находим блок с дополнительной информацией, который идет сразу после кнопки

  // Переключаем класс 'show', который будет управлять отображением блока
  details.classList.toggle('show');
}






