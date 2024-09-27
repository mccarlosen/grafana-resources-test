return import('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js').then(({$}) => {
  $(function(){
    $(".fold-table tr.view").on("click", function(){
      if($(this).hasClass("open")) {
        $(this).removeClass("open").next(".fold").removeClass("open");
      } else {
        $(".fold-table tr.view").removeClass("open").next(".fold").removeClass("open");
        $(this).addClass("open").next(".fold").addClass("open");
      }
    });
  });
})
