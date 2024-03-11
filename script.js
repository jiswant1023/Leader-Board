console.log("Leader Board");
let section2 = document.querySelector("#section2");

let fName = document.getElementById("first_name");
let lName = document.getElementById("last_name");
let countryName = document.getElementById("country");
let playerSc = document.getElementById("player_score");
let addPlayer = document.getElementById("add_player");
let searchField=document.getElementById("search");
let searchButton=document.getElementById("search_button");

let data = [
  {
    firstName: "Rohit",
    lastName: "Sharma",
    country: "India",
    playerScore: 120,
    curTime: "Jan 2024 18:49:13"
  },

  {
    firstName: "Virat",
    lastName: "Kohli",
    country: "India",
    playerScore: 100,
    curTime: "Mar 2024 16:47:56"
  },

  {
    firstName: "Akhil",
    lastName: "Sharma",
    country: "India",
    playerScore: 209,
    curTime: "Mar 2024 17:40:33"
  },
];

addPlayer.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    fName.value == "" ||
    lName.value == "" ||
    countryName.value == "" ||
    playerSc.value == ""
  ) {
    alert("Please fill all fields...");
  } else {
    let playerObj = {
      firstName: fName.value,
      lastName: lName.value,
      country: countryName.value,
      playerScore: Number(playerSc.value),
      curTime: timeFormate()
    };
    data.push(playerObj);
    uploadData();

    fName.value = "";
    lName.value = "";
    countryName.value = "";
    playerSc.value = "";
  }
});

function uploadData() {
  section2.innerHTML = "";

  sorting();

  display(data);  
}


function display(data){
section2.innerHTML="";
    data.sort((p1, p2) => {
        return p2.playerScore - p1.playerScore;
      });

     
    data.forEach((item, index) => {
        let spanDiv = document.createElement("div");
        spanDiv.style.fontSize = "20px";
    
        let nameDiv = document.createElement("div");
        nameDiv.style.width = "150px";
    
        let spanFirstName = document.createElement("span");
        let spanLastName = document.createElement("span");
        let spanTime=document.createElement("span");
        spanTime.style.width="200px";
        let spanCountry = document.createElement("span");
        spanCountry.style.width="100px";
        let spanPlayerScore = document.createElement("span");
        spanPlayerScore.style.width="100px";
        let lastSpan = document.createElement("div");

        lastSpan.innerHTML = `<button title="${index}" class="delete" style="height: 40px; width: 40px; border-radius: 10px;">🗑️</button><button title="${index}" class="add" style="height: 40px; width: 40px; border-radius: 10px;">+5</button><button title="${index}" class="sub" style="height: 40px; width: 40px; border-radius: 10px;">-5</button>`;

        
        lastSpan.style.display="flex";
        lastSpan.style.gap="3rem";
        lastSpan.style.borderRadius
        
    
        // css
        spanDiv.style.display = "flex";
        spanDiv.style.color="white";
        spanDiv.style.gap = "6rem";
        spanDiv.style.backgroundColor = " rgba(16, 241, 241, 0.5)";
        spanDiv.style.width = "1200px";
        spanDiv.style.height = "100px";
        spanDiv.style.paddingLeft = "10px";
        spanDiv.style.fontSize="23px";
        spanDiv.style.borderRadius="10px";
    
        spanFirstName.innerText = item.firstName;
        spanLastName.innerText = item.lastName;
        spanTime.innerText = item.curTime;
        spanCountry.innerText = item.country;
        spanPlayerScore.innerText = item.playerScore;
       

        let nameFormate = `${spanFirstName.innerText} ${spanLastName.innerText}`;
        nameDiv.innerText = nameFormate;
    
        spanDiv.style.display = "flex";
        spanDiv.style.alignItems = "center";
    
        spanDiv.append(nameDiv, spanTime, spanCountry, spanPlayerScore, lastSpan);
    
        section2.appendChild(spanDiv);


        lastSpan.addEventListener("click", function (e) {
            if (e.target.classList.contains("delete")) {
              let arrIndex = e.target.title;
              data.splice(arrIndex, 1);
            } 
            
            if (e.target.classList.contains("add")) {
              let arrAdd = e.target.title;
              let count=data[arrAdd].playerScore += 5;
              spanPlayerScore.innerText=count;

            } else if (e.target.classList.contains("sub")) {
              let arrAdd = e.target.title;
              let count=data[arrAdd].playerScore -= 5;
              spanPlayerScore.innerText=count;
            }
            display(data);
        });
      });

}

function sorting(){
    data.sort((p1, p2) => {
        return p2.playerScore - p1.playerScore;
      });
}

function timeFormate(){
    let currentTime = new Date();
    let months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec"
      ];

    let month = months[currentTime.getMonth()];
    let year = currentTime.getFullYear();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let formattedTime = `${month + " "}${
        year + "  "
      }${hours}:${minutes}:${seconds}`;

  return formattedTime;
}

 searchField.addEventListener("keyup", filteredData);

function filteredData(e) {
    let value = e.target.value;
    let valLC=value.toLowerCase();
    console.log(valLC);
    
    let filteredPlayers =data.filter((e) => {
      if (e.firstName.toLowerCase().indexOf(valLC) != -1) {
        return true;
      }
    });
    display(filteredPlayers);
  }

  searchButton.addEventListener("click",function(e){
    e. preventDefault();
   });

document.onload = uploadData();
