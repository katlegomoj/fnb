
//-----------------------------------------------------------Please clear your localStorage and SessionStorage!--------------------------------------------------------------------


//Check localStorage for Anagrams values on page load
function Checkstorage() {
    if (localStorage.length != 0) {
        var count = 0;
        for (let i = 0; i < localStorage.length; i++) {
            var localkey = localStorage.key(i);
            var val = localStorage.getItem(localkey);
            var elnodetr = document.createElement("TR");
            var elnodetd = document.createElement("TD");
            count++;
            var valnode = document.createTextNode(count);
            elnodetr.appendChild(elnodetd);
            elnodetd.appendChild(valnode);
            var elnodetd = document.createElement("TD");
            elnodetr.appendChild(elnodetd);
            var valnode = document.createTextNode(localkey);
            elnodetd.appendChild(valnode);
            var elnodetd = document.createElement("TD");
            elnodetr.appendChild(elnodetd);
            var valnode = document.createTextNode(val);
            elnodetd.appendChild(valnode);
            document.getElementById("Ana").appendChild(elnodetr);
        }

        //Check sessionStorage for None-Anagrams values on page load
        if (sessionStorage.length != 0) {
            var count = 0;
            for (let i = 0; i < sessionStorage.length; i++) {
                var localkey = sessionStorage.key(i);
                var val = sessionStorage.getItem(localkey);
                var elnodetr = document.createElement("TR");
                var elnodetd = document.createElement("TD");
                count++;
                var valnode = document.createTextNode(count);
                elnodetr.appendChild(elnodetd);
                elnodetd.appendChild(valnode);
                var elnodetd = document.createElement("TD");
                elnodetr.appendChild(elnodetd);
                var valnode = document.createTextNode(localkey);
                elnodetd.appendChild(valnode);
                var elnodetd = document.createElement("TD");
                elnodetr.appendChild(elnodetd);
                var valnode = document.createTextNode(val);
                elnodetd.appendChild(valnode);
                document.getElementById("Nonena").appendChild(elnodetr);
            }
        }
    }
}

//Validate the 2 Input fields
function ValidateValue() {
    var F_word = document.getElementById("fir_word");
    var S_word = document.getElementById("sec_word");
    if (F_word.value.length == 0) {
        alert("Please enter valid 1st Word/Phrase!");
    } else if (S_word.value.length == 0) {
        alert("Please enter valid 2nd Word/Phrase!");
    } else {
        var f_word = F_word.value.trim();
        var s_word = S_word.value.trim();
        ValidateAna(f_word, s_word);
    }
}

//Validate Anagram 
function ValidateAna(f_word, s_word) {
    var isana;
    if (typeof f_word !== 'string' || typeof s_word !== 'string') {
        isana = false
        alert('Number cannot be Anagram');
        return false;
    }

    if (f_word.length !== s_word.length) {
        isana = false
        if (sessionStorage.length >= 1) {
            var counts = null;
            counts = sessionStorage.length + 1;
        } else {
            var counts = 1
        }
        sessionStorage.setItem(f_word, s_word);

        var elnodetr = document.createElement("TR");
        var elnodetd = document.createElement("TD");

        var valnode = document.createTextNode(counts);
        elnodetr.appendChild(elnodetd);
        elnodetd.appendChild(valnode);

        var elnodetd = document.createElement("TD");
        elnodetr.appendChild(elnodetd);
        var valnode = document.createTextNode(f_word);
        elnodetd.appendChild(valnode);

        var elnodetd = document.createElement("TD");
        elnodetr.appendChild(elnodetd);
        var valnode = document.createTextNode(s_word);
        elnodetd.appendChild(valnode);

        document.getElementById("Nonena").appendChild(elnodetr);
        var F_word = document.getElementById("fir_word");
        var S_word = document.getElementById("sec_word");
        F_word.value = "";
        S_word.value = "";
    } else {
        var word1 = f_word.split('').sort().join('');
        var word2 = s_word.split('').sort().join('');
        if (word1 === word2) {
            isana = true
            if (localStorage.length >= 1) {
                var count = null;
                count = localStorage.length + 1;
            } else {
                var count = 1
            }
            localStorage.setItem(f_word, s_word);

            var elnodetr = document.createElement("TR");
            var elnodetd = document.createElement("TD");

            var valnode = document.createTextNode(count);
            elnodetr.appendChild(elnodetd);
            elnodetd.appendChild(valnode);

            var elnodetd = document.createElement("TD");
            elnodetr.appendChild(elnodetd);
            var valnode = document.createTextNode(f_word);
            elnodetd.appendChild(valnode);

            var elnodetd = document.createElement("TD");
            elnodetr.appendChild(elnodetd);
            var valnode = document.createTextNode(s_word);
            elnodetd.appendChild(valnode);

            document.getElementById("Ana").appendChild(elnodetr);
            word1.value = "";
            word2.value = "";
            var F_word = document.getElementById("fir_word");
            var S_word = document.getElementById("sec_word");
            F_word.value = "";
            S_word.value = "";
        } else {
            isana = false
            debugger;

            if (sessionStorage.length >= 1) {
                var counts = null;
                counts = sessionStorage.length + 1;
            } else {
                var counts = 1
            }
            sessionStorage.setItem(f_word, s_word);

            var elnodetr = document.createElement("TR");
            var elnodetd = document.createElement("TD");

            var valnode = document.createTextNode(counts);
            elnodetr.appendChild(elnodetd);
            elnodetd.appendChild(valnode);

            var elnodetd = document.createElement("TD");
            elnodetr.appendChild(elnodetd);
            var valnode = document.createTextNode(f_word);
            elnodetd.appendChild(valnode);

            var elnodetd = document.createElement("TD");
            elnodetr.appendChild(elnodetd);
            var valnode = document.createTextNode(s_word);
            elnodetd.appendChild(valnode);

            document.getElementById("Nonena").appendChild(elnodetr);
            word1.value = "";
            word2.value = "";
            var F_word = document.getElementById("fir_word");
            var S_word = document.getElementById("sec_word");
            F_word.value = "";
            S_word.value = "";
        }
    }
}