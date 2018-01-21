$(() => {
  if( $('.pictures-form').length !== 0 ) {
    let pictures = null;

    if ($('.edit-project').length !== 0) {
      pictures = JSON.parse($('#allPictures').val());
    } else {
      pictures = [];
    }

    $('.add-picture-button').on('click', () => {
      const picture = {
        url: $('#picture').val(),
        caption: $('#caption').val()
      };

      pictures.push(picture);

      $('.pictures-container').append(`
        <li id="${pictures.length -1}">
          <div class="pic-wrap" style="background-image: url('${picture.url}')">
            <p class="btn btn-danger deletePicture right" id="${pictures.length -1}">x</p>
          </div>
          <p class="pre-view-caption">${picture.caption}</p>
        </li>
      `);

      $('#picture').val('');
      $('#caption').val('');

      $('#allPictures').html(JSON.stringify(pictures));
    });

    $('.pictures-container').on('click', '.deletePicture', function() {
      const index = parseInt(this.id);
      pictures.splice(index, 1);

      $(`#${index}`).remove();
      $('#allPictures').html(JSON.stringify(pictures));
    });
  }
});
