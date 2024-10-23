var i = 1;
        let licznik = 0;
        let interval = 2000;
        let myInterval;

        function restartInterval() {
            clearInterval(myInterval);
            myInterval = setInterval(myfunction, interval);
        }

        function myfunction() {
            i++;
            let str = "Liczba: " + i;
            document.getElementById("text").innerHTML = str;

            n = i.toString();
            if(i % 7 == 0 || n.includes("7")) {   
                document.getElementById('obraz').style.display = 'block';
            } else {
                document.getElementById('obraz').style.display = 'none';
            }

            if (i % 10 === 0) {
                interval = Math.max(200, interval - 200);
                restartInterval();
            }
        }

        function stopInter() {
            n = i.toString();
            if((i % 7 == 0 || n.includes("7")) && i != 0) {   
                licznik++;
                document.getElementById("i").innerHTML = "Licznik: " + licznik;
            } else {
                licznik = 0;
                document.getElementById("i").innerHTML = "Licznik: " + licznik;
                i = 0;
                let str = "Liczba " + i;
                document.getElementById("text").innerHTML = str;
            }
        }

        myInterval = setInterval(myfunction, interval);