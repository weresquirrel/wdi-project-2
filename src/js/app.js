// client side js here
console.log('JS loaded');

$(() => {

  if($('.add-pictures').length !== 0) {

    const pictures = [];

    $('.add-picture-button').on('click', () => {
      const picture = {
        url: $('#picture').val(),
        caption: $('#caption').val()
      };

      console.log(picture);
      pictures.push(picture);

      $('#picture').val('');
      $('#caption').val('');
      
      $('#pictures').val(JSON.stringify(pictures));
    });


  }

});
