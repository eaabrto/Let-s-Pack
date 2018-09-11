/*Show and hide the loading animation*/
(function(){
    var myDiv = document.getElementById("myDiv"),

      show = function(){
        myDiv.style.display = "block";
        setTimeout(hide, 6000); // 6 seconds
        document.getElementById("bob").style.display="none";
          document.getElementById("bib").style.display="none";
      },

      hide = function(){
        myDiv.style.display = "none";
        document.getElementById("bob").style.display="block";
          document.getElementById("bib").style.display="block";
      };

    show();
  })();
