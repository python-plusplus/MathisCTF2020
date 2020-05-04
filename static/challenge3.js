function on_click_do( classid )
{
    var form = $('<form action="/flag3" method="post">' +
  '<input type="text" name="classid" value="' + classid +'">' +
  '</form>');
    $('body').append(form);
    form.submit();

}