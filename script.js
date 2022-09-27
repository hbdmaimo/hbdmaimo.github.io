(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

          //do something later when date is reached
        console.log(distance);
        if (distance < 0) {
          document.getElementById("countdown-container").innerHTML = "",
          document.querySelector(".card-container").innerHTML = `
          <div class="card">
            <div class="imgBox">
              <div class="bark"></div>
              <img src="https://image.ibb.co/fYzTrb/lastofus.jpg">
            </div>
            <div class="details">
              <h4 class="color1">You're not a Fossil! (YET)</h2>
              <h4 class="color2 margin">(HAPPY BIRTHDAY)</h3>
              <div id="cardBody">
                <p>Dear Maimo,</p>
                <p>I don’t know whether or not</p>
                <p>this will mean so much for you.</p>
                <p>But I am certain of one thing </p>
                <p>that you really mean so much for me.</p>
                <p>I wish for your happiness, health and</p>
                <p>longevity.</p>
                <p>Ke budhe, bawa foto</p>
                <p>Hepibede, maimoo</p>
                <p class="text-right">Happy Birthday, Maimo!</p>
                <p class="text-right">~arput</p>
              </div>
              </div>
              </div>
              `;
              clearInterval(x);
        }
        //seconds
      }, 0)
  }());

