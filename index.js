btn.addEventListener("click", increaseCount);
  let count = 0;
    function increaseCount() {
      count++;
      document.getElementById("count").innerText = "you clicked me " + count + " time";

    }
