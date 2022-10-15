var town='Iowa-City';

//'https://goweather.herokuapp.com/weather/%7B'

function setWeather(data) {
    document.getElementById("location").innerText=town;
    document.getElementById("weather").innerText=JSON.stringify(data["current_condition"][0]["weatherDesc"][0]["value"]).substring(1,JSON.stringify(data["current_condition"][0]["weatherDesc"][0]["value"]).length-1);
    document.getElementById("temp").innerText=JSON.stringify(data["current_condition"][0]["temp_F"]).substring(1,JSON.stringify(data["current_condition"][0]["temp_F"]).length-1)+"°F";
};

fetch("https://wttr.in/"+town+"?format=j1")
  .then((response) => response.json())
  .then((data) => 
  setWeather(data));

var elements=[];

elements=document.getElementsByClassName("button");

for(let i=0; i<elements.length; i++) {
    if(String(elements[i].id)!="home") {
        document.getElementById(String(elements[i].id)+"-view").style.display="none";
    }
}

document.getElementById("home").style.display="none";

for(let i=0; i<elements.length; i++) {
    document.getElementsByTagName("button")[i].onclick=function() {
        document.getElementById("home-view").style.display="none";

        for(let j=0; j<elements.length; j++) {
            document.getElementById(elements[j].id).style.display="Block";
            document.getElementById(String(elements[j].id)+"-view").style.display="none";
        }

        document.getElementById(elements[i].id).style.display="none";

        document.getElementById(String(elements[i].id)+"-view").style.display="Block";
    };
}