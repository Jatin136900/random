 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let btn = document.getElementById("btn");
        let output = document.getElementById("output");
        btn.addEventListener("click", () => {
            output.innerHTML = "";
            let randomIndex = Math.floor(Math.random() * arr.length);
            let randomElement = arr[randomIndex];
            for (let i = 0; i < randomElement; i++) {
                let h1 = document.createElement("h1");
                h1.textContent = "Jatin";
                h1.style.color = "red";
                output.appendChild(h1);
            }
        });