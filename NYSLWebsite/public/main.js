$("#navbar a").bind('click', e => {
  e.preventDefault();
  var nextPage = $(e.target.hash);
  $("#app .current").removeClass("current");
  nextPage.addClass("current");
  $('#navbar').addClass('ocultar')
 });

