$( "#git1, #git2, #git3" ).hover(
    function() {
      $( this ).append( $( "<span>Stop hovering over me!</span>" ) );
    }, function() {
      $( this ).find( "span:last" ).remove();
    }
  );
   
  $( "li.fade" ).hover(function() {
    $( this ).fadeOut( 100 );
    $( this ).fadeIn( 500 );
  });