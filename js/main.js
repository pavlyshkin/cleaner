$(document).ready(function () {
  
    $('.form').each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Provide a name",
        minlength: "The name must not be shorter than 2 letters",
      },
      phone: {
        required: "Phone is required",
      },
    },
  });
  })
  $('.phone').mask('+0(000)000-00-00', {placeholder: "телефон"});
});