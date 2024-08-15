//Card changeing
var card_index = 1;

function change_card(n) {
  card_index += n;
  show_card(card_index);
}

function show_card(n) {
  var cards = document.getElementsByClassName("graphs_section");

  if (n > cards.length) {
    location.replace("../../index.html");
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



/*
var trial_data = [1,2,3,4,5];
localStorage.setItem("trial_data", JSON.stringify(trial_data));

var trial_data = JSON.parse(localStorage.getItem("trial_data"));
alert(trial_data[0]);

Local storage variables:

<color card>
bg_solid
bg_solid_color [10]

bg_grad 
bg_grad_angle [4]
bg_grad_color1 [10]
bg_grad_color2 [10]

card_bg_color [10]
text_color [10]
border_color [10]

border_width


<font card>
heading_fontfamily [8]
content_fontfamily [8]

main_heading_fontsize
sub_heading_fontsize
content_fontsize

heading_letterspacing


<Satisfaction>
satisfaction [5]
*/

//Color card
var bg_solid = JSON.parse(localStorage.getItem("bg_solid"));
var bg_solid_color = JSON.parse(localStorage.getItem("bg_solid_color"));

var bg_grad = JSON.parse(localStorage.getItem("bg_grad"));
var bg_grad_angle = JSON.parse(localStorage.getItem("bg_grad_angle"));
var bg_grad_color1 = JSON.parse(localStorage.getItem("bg_grad_color1"));
var bg_grad_color2 = JSON.parse(localStorage.getItem("bg_grad_color2"));

var card_bg_color = JSON.parse(localStorage.getItem("card_bg_color"));
var text_color = JSON.parse(localStorage.getItem("text_color"));
var border_color = JSON.parse(localStorage.getItem("border_color"));

var border_width = JSON.parse(localStorage.getItem("border_width"));

//Font card
var heading_fontfamily = JSON.parse(localStorage.getItem("heading_fontfamily"));
var content_fontfamily = JSON.parse(localStorage.getItem("content_fontfamily"));

var main_heading_fontsize = JSON.parse(localStorage.getItem("main_heading_fontsize"));
var sub_heading_fontsize = JSON.parse(localStorage.getItem("sub_heading_fontsize"));
var content_fontsize = JSON.parse(localStorage.getItem("content_fontsize"));

var heading_letterspacing = JSON.parse(localStorage.getItem("heading_letterspacing"));

//Satisfaction
var satisfaction = JSON.parse(localStorage.getItem("satisfaction"));

function get_2d_context(n) {
  return n.getContext("2d");
}

var ctx;

Chart.defaults.font.family = "verdana";
var colors = ["#141414", "#95a5a6", "#ecf0f1", "#e74c3c", "#e67e22", "#f1c40f", "#2ecc71", "#3498db", "#3f51b5", "#9b59b6"];

ctx = get_2d_context(document.getElementById("bg_color"));
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Gradient Background', 'Solid Background'],
    datasets: [{
      label: "# of times picked",
      data: [bg_grad, bg_solid],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
      barPercentage: 0.3,
      categoryPercentage: 1.0,
    }]
  },
  options: {
    layout: {
      padding: 20 // remeber heree
    },
    indexAxis: "x",
    scales: {
      y: {
        beginAtZero: true
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Solid and Gradient Backgrounds",
        padding: {
          top: 12,
          bottom: 10
        },
        font: {
          size: 25,
        },
      }
    },
  },
});


ctx = get_2d_context(document.getElementById("bg_color_solid"))
var chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Black', 'Grey', 'White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'],
    datasets: [{
      data: bg_solid_color,
      backgroundColor: colors,
      hoverOffset: 5,
    }]
  },    
  options: {
    layout: {
      padding: 20 // remeber heree
    },
    plugins: {
      title: {
        display: true,
        text: "Colors Chosen for Solid backgrounds",
        padding: {
          top: 12,
          bottom: 10
        },
        font: {
          size: 20,
        },
      },
      legend: {
        display: true,
        position: "right",
      }
    },
  },
});


ctx = get_2d_context(document.getElementById("grad_angle"));
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Horizontal', 'Vertical', '45', '135'],
    datasets: [{
      label: "# picked",
      data: bg_grad_angle,
      backgroundColor: "#3498db",
      borderWidth: 1,

    }]
  },
  options: {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true
      },
    },
    layout: {
      padding: 20 // remeber heree
    },
    plugins: {
      title: {
        display: true,
        text: "Gradient Background Angle",
        padding: {
          top: 12,
          bottom: 10,
        },
        font: {
          size: 20,
        },
      }
    },
  },
});

ctx = get_2d_context(document.getElementById("grad_color1"));
var chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Black', 'Grey', 'White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'],
    datasets: [{
      label: "# of times picked",
      data: bg_grad_color1,
      backgroundColor: colors,
      hoverOffset: 5,
    }]
  },    
  options: {
    layout: {
      padding: 20 // remeber heree
    },
    plugins: {
      title: {
        display: true,
        text: "Gradient Color 1",
        padding: {
          top: 12,
          bottom: 10
        },
        font: {
          size: 18,
        },
      },
      legend: {
        display: false,
      }
    },
  },
});

ctx = get_2d_context(document.getElementById("grad_color2"));
var chart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Black', 'Grey', 'White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'],
    datasets: [{
      data: bg_grad_color2,
      backgroundColor: colors,
      hoverOffset: 5,
    }]
  },    
  options: {
    layout: {
      padding: 20 // remeber heree
    },
    plugins: {
      title: {
        display: true,
        text: "Gradient Color 2",
        padding: {
          top: 12,
          bottom: 10
        },
        font: {
          size: 18,
        },
      },
      legend: {
        display: false,
      }
    },
  },
});


ctx = get_2d_context(document.getElementById("card_bg_color"));
var chart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Black', 'Grey', 'White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'],
    datasets: [{
      data: card_bg_color,
      backgroundColor: colors,
      hoverOffset: 5,
    }]
  },    
  options: {
    layout: {
      padding: 20 // remeber heree
    },
    plugins: {
      title: {
        display: true,
        text: "Card Background Color",
        padding: {
          top: 12,
          bottom: 10
        },
        font: {
          size: 20,
        },
      },
      legend: {
        display: false,
      }
    },
  },
});

ctx = get_2d_context(document.getElementById("text_color"));
var chart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Black', 'Grey', 'White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'],
    datasets: [{
      data: text_color,
      backgroundColor: colors,
      hoverOffset: 5,
    }]
  },    
  options: {
    layout: {
      padding: 20 // remeber heree
    },
    plugins: {
      title: {
        display: true,
        text: "Text Color",
        padding: {
          top: 12,
          bottom: 10
        },
        font: {
          size: 20,
        },
      },
      legend: {
        display: false,
      }
    },
  },
});

ctx = get_2d_context(document.getElementById("border_color"))
var chart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Black', 'Grey', 'White', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'],
    datasets: [{
      data: border_color,
      backgroundColor: colors,
      hoverOffset: 5,
    }]
  },    
  options: {
    layout: {
      padding: 20 // remeber heree
    },
    plugins: {
      title: {
        display: true,
        text: "Border Color",
        padding: {
          top: 12,
          bottom: 10
        },
        font: {
          size: 20,
        },
      },
      legend: {
        display: false,
      }
    },
  },
});

document.getElementById("avrg_border_width_value").innerHTML = border_width + "px";


//Font Graphs

var font_families = ["Arial", "Verdana", "Helvetica", "Tahoma", "Times New Roman", "Georgia", "Courier New", "Brush Script MT"];

ctx = get_2d_context(document.getElementById("heading_font_fam"));
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: font_families,
    datasets: [{
      label: "# picked",
      data: heading_fontfamily,
      backgroundColor: "#3498db",
      borderWidth: 1,

    }]
  },
  options: {
    indexAxis: "x",
    scales: {
      y: {
        beginAtZero: true
      },
    },
    layout: {
      padding: 20 // remeber heree
    },
    plugins: {
      title: {
        display: true,
        text: "Heading Font Famly",
        padding: {
          top: 12,
          bottom: 10,
        },
        font: {
          size: 20,
        },
      }
    },
  },
});

ctx = get_2d_context(document.getElementById("content_font_fam"));
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: font_families,
    datasets: [{
      label: "# picked",
      data: content_fontfamily,
      backgroundColor: "#e74c3c",
      borderWidth: 1,

    }]
  },
  options: {
    indexAxis: "x",
    scales: {
      y: {
        beginAtZero: true
      },
    },
    layout: {
      padding: 20 // remeber heree
    },
    plugins: {
      title: {
        display: true,
        text: "Content Font Famly",
        padding: {
          top: 12,
          bottom: 10,
        },
        font: {
          size: 20,
        },
      }
    },
  },
});


document.getElementById("avrg_heading_font_size").innerHTML = main_heading_fontsize + "px";
document.getElementById("avrg_subheading_font_size").innerHTML = sub_heading_fontsize + "px";
document.getElementById("avrg_content_fontsize").innerHTML = content_fontsize + "px";
document.getElementById("avrg_heading_letter_spacing").innerHTML = content_fontsize + "px";


//satisfaction
ctx = get_2d_context(document.getElementById("satisfaction_graph"));
var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["😓", "😅", "😐", "😄", "🤩"],
    datasets: [{
      label: "# picked",
      data: satisfaction,
      backgroundColor: "#e74c3c",
      borderWidth: 1,
    }]
  },
  options: {
    indexAxis: "y", //wont work on x axis for some reason 
    scales: {
      y: {
        beginAtZero: true
      },
    },
    layout: {
      padding: 20 // remeber heree
    },
    plugins: {
      title: {
        display: true,
        text: "User Satisfaction",
        padding: {
          top: 12,
          bottom: 10,
        },
        font: {
          size: 20,
        },
      }
    },
  },
});