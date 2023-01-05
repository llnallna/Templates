
  // Wrap every letter in a span
  var textW1 = document.querySelector('.ml');
  var textW2 = document.querySelector('.ml2');
  textW1.innerHTML = textW1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  textW2.innerHTML = textW2.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

  anime.timeline({loop: true})
    .add({
      targets: '.ml .letter',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 1,
      easing: "easeOutExpo",
      duration: 950,
      fontSize : "20px",
      delay: (el, i) => 150*i
    }).add({
      targets: '.ml2 .letter2',
      scale: [4,1],
      opacity: [0,1],
      translateZ: 1,
      easing: "easeOutExpo",
      duration: 950,
      fontSize : "36px",
      delay: (el, i) => 150*i
    })



   


  
  