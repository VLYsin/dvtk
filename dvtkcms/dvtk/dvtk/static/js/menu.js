$(document).ready(function() {  
  // SideNav Initialization
	$(".button-collapse").sideNav();
  
  // Navbar title adjust
  $(window).resize(function() {
    if ($(window).width() >= 1440) {
      $('.navbar .breadcrumb-dn').css('padding-left', '240px');
    } else {
      $('.navbar .breadcrumb-dn').css('padding-left', '0');
    }
  });
});
