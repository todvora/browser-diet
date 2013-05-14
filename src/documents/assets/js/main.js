// $('.animate').bind('click',function(e){
//     var id = $(this).attr('href');

//     e.preventDefault();
//     $('html,body').animate({scrollTop: $(''+id+'').offset().top},'slow');
// });

// $("#menu a").on("click", function(){
//   var location = $(this).attr('href').replace("#","");
//   $(".topics").css("padding-top", "0");
//   $("#" + location).css("padding-top", "95px");
// })

// $(function () {
//   $(window).scroll(function () {
//     if ( this.scrollTop() > 560) {
//       // $("#menu").addClass("fixing-menu");
//       // $("#github-ribbon").hide();
//       // $("#top").show();
//       console.log("if");
//     } else {
//       // $("#menu").removeClass("fixing-menu");
//       // $("#github-ribbon").show();
//       // $("#top").hide();
//     }
//   });
// });
// getElementsByClassName

// function scrola($sobe_ou_desce){
//     if($sobe_ou_desce=='sobe'){
//         while(document.body.scrollTop>1){
//             window.scrollTo(0,document.body.scrollTop - 3);
//         }
//     }else{
//         while(document.body.scrollTop<document.body.scrollHeight - document.body.clientHeight){
//             window.scrollTo(0,document.body.scrollTop + 3);
//         }
//     }
// }
// scrola();
// console.log( scrola("sobe") );





// while( document.body.scroll ) {
//   console.log( document.body.scroll );
// }

  console.log( document.body.scroll(0,560) );







