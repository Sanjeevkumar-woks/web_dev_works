const body=document.querySelector("body");
const div=document.createElement("div");
div.setAttribute("class","main-container");
const h1=document.createElement("h1");
h1.setAttribute("id","count-display");
const button=document.createElement("button");
button.setAttribute("class","btn btn-dark btn-lg start-btn bg-primery");
button.innerHTML="Start";
div.appendChild(h1);
div.appendChild(button);
body.appendChild(div);




const val = document.getElementById("count-display");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  setTimeout(function () {
    let value = 10;
    val.innerText = value;
    setTimeout(function () {
      val.innerText = 9;
      setTimeout(function () {
        val.innerText = 8;
        setTimeout(function () {
          val.innerText = 7;
          setTimeout(function () {
            val.innerText = 6;
            setTimeout(function () {
              val.innerText = 5;
              setTimeout(function () {
                val.innerText = 4;
                setTimeout(function () {
                  val.innerText = 3;
                  setTimeout(function () {
                    val.innerText = 2;
                    setTimeout(function () {
                      val.innerText = 1;
                      setTimeout(function () {
                        val.innerText = 0;
                        setTimeout(function () {
                          document
                            .getElementById("count-display")
                            .setAttribute(
                              "class",
                              "display-1 text-uppercase font-weight-bolder text-center text-danger bg-warning"
                            );
                          val.innerText = "Happy Independence Day";
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
