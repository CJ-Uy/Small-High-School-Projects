//Card changeing
var card_index = 1;

function change_card(n) {
  card_index += n;
  show_card(card_index);
}

function show_card(n) {
  var cards = document.getElementsByClassName("survey_card");

  if (n > cards.length) {
    card_index = 4;
  }
  if (n < 1) {
    card_index = 1;
  }

  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  cards[card_index - 1].style.display = "block";
}



show_card(card_index);



var survey_cards = document.getElementsByClassName("survey_card");
//Color styling functions
function solid_bg() {
  document.getElementById("grad_color1").value = "0";
  document.getElementById("grad_color2").value = "0";
  document.getElementById("grad_angle").value = "0"

  document.body.style = "background-color: white";
  for (let i = 0; i < document.getElementsByClassName("grad_bg").length; i++) {
    document.getElementsByClassName("grad_bg")[i].style.display = "none";
  }
  for (let i = 0; i < document.getElementsByClassName("solid_bg_color").length; i++) {
    document.getElementsByClassName("solid_bg_color")[i].style.display = "inline-block";
  }
  //color background
  var solid_bg = document.getElementById("solid_color").value;
  document.body.style.backgroundColor = solid_bg;
}

function grad_bg() {
  document.getElementById("solid_color").value = "0";

  document.body.style.backgroundColor = "white";
  for (let i = 0; i < document.getElementsByClassName("grad_bg").length; i++) {
    document.getElementsByClassName("grad_bg")[i].style.display = "inline-block";
  }
  for (let i = 0; i < document.getElementsByClassName("solid_bg_color").length; i++) {
    document.getElementsByClassName("solid_bg_color")[i].style.display = "none";
  }
  //color background
  var grad_angle = parseInt(document.getElementById("grad_angle").value);
  var grad_bg = [grad_angle, document.getElementById("grad_color1").value, document.getElementById("grad_color2").value];

  if (grad_angle != 0) {
    document.getElementById("grad_color1").disabled = false;
    document.getElementById("grad_color2").disabled = false;
  }

  switch (grad_angle) {
    case 0:
      document.body.style = "background-color: white";
      document.getElementById("grad_color1").disabled = true;
      document.getElementById("grad_color2").disabled = true;
      break;
    case 1:
      document.body.style = "background-image: linear-gradient(180deg," + grad_bg[1] + "," + grad_bg[2] + ");";
      break;
    case 2:
      document.body.style = "background-image: linear-gradient(90deg," + grad_bg[1] + "," + grad_bg[2] + ");";
      break;
    case 3:
      document.body.style = "background-image: linear-gradient(45deg," + grad_bg[1] + "," + grad_bg[2] + ");";
      break;
    case 4:
      document.body.style = "background-image: linear-gradient(135deg," + grad_bg[1] + "," + grad_bg[2] + ");";
      break;
  }
}

function cards_bg() {
  var card_bg = document.getElementById("card_bg").value;
  var survey_cards = document.getElementsByClassName("survey_card");

  for (let i = 0; i < survey_cards.length; i++) {
    survey_cards[i].style.backgroundColor = card_bg;
  }
}

function color_text() {
  var text_color = document.getElementById("text_color").value;
  document.body.style.color = text_color;
}

function color_border() {
  var border_color = document.getElementById("border_color").value;
  for (var i = 0; i < survey_cards.length; i++) {
    survey_cards[i].style.borderColor = border_color;
  }
}

function change_border_width() {
  var border_width = document.getElementById("border_width").value;
  for (var i = 0; i < survey_cards.length; i++) {
    survey_cards[i].style.borderWidth = border_width + "px";
  }
}

function color_card_clear() {
  document.body.style.backgroundImage = "none";
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  for (let i = 0; i < survey_cards.length; i++) {
    survey_cards[i].style.backgroundColor = "white";
    survey_cards[i].style.borderColor = "black";
    survey_cards[i].style.borderWidth = "2px";
  }
  for (let i = 0; i < document.getElementsByClassName("solid_bg_color").length; i++) {
    document.getElementsByClassName("solid_bg_color")[i].style.display = "none";
  }
  for (let i = 0; i < document.getElementsByClassName("grad_bg").length; i++) {
    document.getElementsByClassName("grad_bg")[i].style.display = "none";
  }
}





var h1_elements = document.getElementsByTagName("h1");
var h2_elements = document.getElementsByTagName("h2");
var h3_elements = document.getElementsByTagName("h3");
var label_elements = document.getElementsByTagName("label");
var p_elements = document.getElementsByTagName("p");
//Fonts styling functions
function head_change_fontfam() {
  var head_font_family = document.getElementById("head_font_family").value;
  for (let i = 0; i < h1_elements.length; i++) {
    h1_elements[i].style.fontFamily = head_font_family;
  }
  for (let i = 0; i < h2_elements.length; i++) {
    h2_elements[i].style.fontFamily = head_font_family;
  }
}

function size_head_font() {
  var head_font_size = document.getElementById("h1_font_size").value;
  for (let i = 0; i < h1_elements.length; i++) {
    h1_elements[i].style.fontSize = head_font_size + "px";
  }
}

function letter_space_head() {
  var head_letter_space = document.getElementById("h1_letter_spacing").value;
  for (let i = 0; i < h1_elements.length; i++) {
    h1_elements[i].style.letterSpacing = head_letter_space + "px";
  }
}

function size_subhead_font() {
  var subhead_font_size = document.getElementById("h2_font_size").value;
  for (let i = 0; i < h2_elements.length; i++) {
    h2_elements[i].style.fontSize = subhead_font_size + "px";
  }
}

function content_change_fontfam() {
  var content_font_family = document.getElementById("content_font_family").value;
  for (let i = 0; i < h3_elements.length; i++) {
    h3_elements[i].style.fontFamily = content_font_family;
  }
  for (let i = 0; i < label_elements.length; i++) {
    label_elements[i].style.fontFamily = content_font_family;
  }   
}

function size_content_font() {
  var content_font_size = document.getElementById("content_font_size").value;
  for (let i = 0; i < h3_elements.length; i++) {
    h3_elements[i].style.fontSize = content_font_size + "px";
  }
  for (let i = 0; i < label_elements.length; i++) {
    label_elements[i].style.fontSize = content_font_size + "px";
  }
  for (let i = 0; i < form_elements.length; i++) {
    form_elements[i].style.fontSize = content_font_size + "px";
  }
}

function fonts_card_reset() {
  for (let i = 0; i < h1_elements.length; i++) {
    h1_elements[i].style.fontFamily = "serif";
    h1_elements[i].style.fontSize = "3.5vw";
    h1_elements[i].style.letterSpacing = "0px";
  }

  for (let i = 0; i < h2_elements.length; i++) {
    h2_elements[i].style.fontFamily = "serif";
    h2_elements[i].style.fontSize = "2vw";
  }

  for (let i = 0; i < h3_elements.length; i++) {
    h3_elements[i].style.fontFamily = "serif";
    h3_elements[i].style.fontSize = "1vw";
  }

  for (let i = 0; i < label_elements.length; i++)
    label_elements[i].style.fontFamily = "serif";
}


var slider = document.getElementById("like_range");
var output = document.getElementById("emoji");

slider.oninput = function () {

  if (this.value == 1) {
    output.innerHTML = "😓";
  } else if (this.value == 2) {
    output.innerHTML = "😅";
  } else if (this.value == 3) {
    output.innerHTML = "😐";
  } else if (this.value == 4) {
    output.innerHTML = "😄";
  } else if (this.value == 5) {
    output.innerHTML = "🤩";
  }

}





var empty_color_set = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var empty_font_set = [0, 0, 0, 0, 0, 0, 0, 0];

if (typeof (Storage) !== "undefined") {

  if (localStorage.has_been_here_before == null) {
    localStorage.setItem("has_been_here_before", true);

    //color card
    localStorage.setItem("bg_solid", 0);
    localStorage.setItem("bg_solid_color", JSON.stringify(empty_color_set));

    localStorage.setItem("bg_grad", 0);
    localStorage.setItem("bg_grad_angle", JSON.stringify([0, 0, 0, 0]));
    localStorage.setItem("bg_grad_color1", JSON.stringify(empty_color_set));
    localStorage.setItem("bg_grad_color2", JSON.stringify(empty_color_set));

    localStorage.setItem("card_bg_color", JSON.stringify(empty_color_set));
    localStorage.setItem("text_color", JSON.stringify(empty_color_set));
    localStorage.setItem("border_color", JSON.stringify(empty_color_set));
    localStorage.setItem("border_width", 2);


    //font card
    localStorage.setItem("heading_fontfamily", JSON.stringify(empty_font_set));
    localStorage.setItem("content_fontfamily", JSON.stringify(empty_font_set));

    localStorage.setItem("main_heading_fontsize", 70);
    localStorage.setItem("sub_heading_fontsize", 30);
    localStorage.setItem("content_fontsize", 15);

    localStorage.setItem("heading_letterspacing", 2);

    //satisfaction
    localStorage.setItem("satisfaction", JSON.stringify([0,0,0,0,0]));
  }
} else {
  alert("Your browser does not yet support local storage the graphs may not work!");
}


function color_check(n){
  switch (n) {
    case ("#000000"):
      return 0;
    case ("#141414"):
      return 0;
    case ("#95a5a6"):
      return 1;
    case ("#ffffff"):
      return 2;
    case ("#ecf0f1"):
      return 2;
    case ("#e74c3c"):
      return 3;
    case ("#e67e22"):
      return 4;
    case ("#f1c40f"):
      return 5;
    case ("#2ecc71"):
      return 6;
    case ("#3498db"):
      return 7;
    case ("#3f51b5"):
      return 8;
    case ("#9b59b6"):
      return 9;
  }
}

function font_check(n) {
  switch (n) {
    case ("Arial"):
      return 0;
    case ("Verdana"):
      return 1;
    case ("Helvetica"):
      return 2;
    case ("Tahoma"):
      return 3;
    case ("Times New Roman"):
      return 4;
    case ("Georgia"):
      return 5;
    case ("Courier New"):
      return 6;
    case ("Brush Script MT"):
      return 7;
  }
}

//Local storgae incrementation
//NOTTT DONEEE FROM HERE DOWNNNNNNNNNNNN

var temp;
var temp_arr;

function set_local_storage() {
  //COLOR CARD
    //Background color
  if(document.getElementById("solid_color").value != "0"){
    //Solid color incrementation
    localStorage.bg_solid = Number(localStorage.bg_solid)+1;

    temp = color_check(document.getElementById("solid_color").value);
    temp_arr = JSON.parse(localStorage.getItem("bg_solid_color"));
    temp_arr[temp] += 1;
    localStorage.setItem("bg_solid_color", JSON.stringify(temp_arr));

  } else {
    //Gradient color incrementation
    localStorage.bg_grad = Number(localStorage.bg_grad)+1;

    //Grad angle increment
    temp = Number(document.getElementById("grad_angle").value) - 1;
    temp_arr = JSON.parse(localStorage.getItem("bg_grad_angle"));
    temp_arr[temp] += 1;
    localStorage.setItem("bg_grad_angle", JSON.stringify(temp_arr));

    //Grad color 1 increment
    temp = color_check(document.getElementById("grad_color1").value);
    temp_arr = JSON.parse(localStorage.getItem("bg_grad_color1"));
    temp_arr[temp] += 1;
    localStorage.setItem("bg_grad_color1", JSON.stringify(temp_arr));

    //Grad color 2 increment
    temp = color_check(document.getElementById("grad_color2").value);
    temp_arr = JSON.parse(localStorage.getItem("bg_grad_color2"));
    temp_arr[temp] += 1;
    localStorage.setItem("bg_grad_color2", JSON.stringify(temp_arr));
  }

  //Card background color incrementation 
  temp = color_check(document.getElementById("card_bg").value);
  temp_arr = JSON.parse(localStorage.getItem("card_bg_color"));
  temp_arr[temp] += 1;
  localStorage.setItem("card_bg_color", JSON.stringify(temp_arr));

  //Card text color incrementation
  temp = color_check(document.getElementById("text_color").value);
  temp_arr = JSON.parse(localStorage.getItem("text_color"));
  temp_arr[temp] += 1;
  localStorage.setItem("text_color", JSON.stringify(temp_arr));

  //Card border color incrementation
  temp = color_check(document.getElementById("border_color").value);
  temp_arr = JSON.parse(localStorage.getItem("border_color"));
  temp_arr[temp] += 1;
  localStorage.setItem("border_color", JSON.stringify(temp_arr));

  //Border width average
  temp = (parseInt(localStorage.border_width) + parseInt(document.getElementById("border_width").value))/2;
  localStorage.setItem("border_width", temp);
  
  
  //FONTS card
    //Heading font family incrementation
  temp = font_check(document.getElementById("head_font_family").value);
  temp_arr = JSON.parse(localStorage.getItem("heading_fontfamily"));
  temp_arr[temp] += 1;
  localStorage.setItem("heading_fontfamily", JSON.stringify(temp_arr));
  
  //Content font family incrementation
  temp = font_check(document.getElementById("content_font_family").value);
  temp_arr = JSON.parse(localStorage.getItem("content_fontfamily"));
  temp_arr[temp] += 1;
  localStorage.setItem("content_fontfamily", JSON.stringify(temp_arr));

  //Main Heading Font-size average
  temp = (parseInt(localStorage.main_heading_fontsize) + parseInt(document.getElementById("h1_font_size").value))/2;
  localStorage.setItem("main_heading_fontsize", temp);

  //Sub Heading Font-size average
  temp = (parseInt(localStorage.sub_heading_fontsize) + parseInt(document.getElementById("h2_font_size").value))/2;
  localStorage.setItem("sub_heading_fontsize", temp);

  //Content Font-size Average
  temp = (parseInt(localStorage.content_fontsize) + parseInt(document.getElementById("content_font_size").value))/2;
  localStorage.setItem("content_fontsize", temp);

  //Letter Spacing Average
  temp = (parseInt(localStorage.heading_letterspacing) + parseInt(document.getElementById("h1_letter_spacing").value))/2;
  localStorage.setItem("heading_letterspacing", temp);


  //Satisfaction Level
  temp = parseInt(document.getElementById("like_range").value) - 1;
  temp_arr = JSON.parse(localStorage.getItem("satisfaction"));
  temp_arr[temp] += 1;
  localStorage.setItem("satisfaction", JSON.stringify(temp_arr));
}

//User validation
function final_submit() {
  if (
    document.getElementById("solid_color").value != "0" ||
    (document.getElementById("grad_color1").value != "0" && document.getElementById("grad_color2").value != "0") &&
    document.getElementById("card_bg").value != "0" &&
    document.getElementById("text_color").value != "0" &&
    document.getElementById("border_color").value != "0"
  ) {
    if (
      document.getElementById("head_font_family").value != "0" &&
      document.getElementById("content_font_family").value != "0"
    ) {

      set_local_storage();

      color_card_clear();
      fonts_card_reset();
      location.replace("graphs.html");

    } else {
      alert("You have not filled out all of the questions in FONTS card!");
    }
  } else {
    alert("You have not filled out all of the questions in COLOR card!");
  }
}