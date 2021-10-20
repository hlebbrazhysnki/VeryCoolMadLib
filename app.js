function createParagraph(){

    var text1 = document.getElementById('text1').value
    var text2 = document.getElementById('text2').value
    var text3 = document.getElementById('text3').value
    var text4 = document.getElementById('text4').value
    var text5 = document.getElementById('text5').value
    var text6 = document.getElementById('text6').value
    var text7 = document.getElementById('text7').value
    var text8 = document.getElementById('text8').value
    var text9 = document.getElementById('text9').value
    var text10 = document.getElementById('text10').value
    var text11 = document.getElementById('text11').value
    var text12 = document.getElementById('text12').value
    var text13 = document.getElementById('text13').value
    var text14 = document.getElementById('text14').value

    var paragraph =   "<p>It was a " + text1 +" cold November day. I woke up to the "+ text2+ " smell of " + text3 + " roasting in the " + text4 + " downstairs.  I " + text5 +" down the stairs to see if I could help " + text6 + " the dinner. My mom said, See if " + text7 + " needs a fresh " + text8 + " So I carried a tray of glasses full of " + text9 + " into the " + text10 + " room. When I got there, I couldn't believe my " + text11 +"! There were " + text12 +" on the " + text13 +"!</p>"
  


document.getElementById('answer').innerHTML = paragraph;
}