/* МОдальное окно */
$(function () {
    $('.header-block__request, .hero__btn, .differ-card__btn, .catalog-slide__btn, .delivery-block__btn').click(function () {
      $('#modal-1').addClass('modal_active');
      $('body').addClass('hidden');
    });
   
    $('.modal__close').click(function () {
      $('#modal-1').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
  
    $('#modal-1').mouseup(function (e) {
      let modalContent = $(".modal-block");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });