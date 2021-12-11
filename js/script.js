/*code for dysplaying multi form start */
var formContinue = document.getElementById("formContinue");
formContinue.onclick = function (e) {
    e.preventDefault();
    formTwo.style.display = "block";
    formOne.style.display = "none";
};

var formBack = document.getElementById("formBack");
formBack.onclick = function (e) {
    e.preventDefault();
    formOne.style.display = "block";
    formTwo.style.display = "none";
};

/*code for displaying multi form end */

/*code for patient Type and Choose condition drop down start */
var patientCondition = {
    Select: ["-"],
    Adult: [
        "Stroke",
        "Voice Disorder",
        "Stuttering",
        "Pronunciation Issues",
        "Swallowing Issues"
    ],
    Child: [
        "Autism",
        "Down Syndrome",
        "Speech Delay",
        "Unclear Speech",
        "Stuttering",
        "Cleft Lip & Palate",
        "Slow Learner",
        "Reading & Writing Issues",
        "Oro-Motor/Feeding Issues"
    ]
};

el_parent = document.getElementById("patientType"); //parent select element
el_child = document.getElementById("condition"); //child select element

for (key in patientCondition) {
    el_parent.innerHTML = el_parent.innerHTML + "<option>" + key + "</option>";
}

el_parent.addEventListener("change", function populate_child(e) {
    el_child.innerHTML = "";
    itm = e.target.value;
    if (itm in patientCondition) {
        for (i = 0; i < patientCondition[itm].length; i++) {
            el_child.innerHTML =
                el_child.innerHTML +
                "<option>" +
                patientCondition[itm][i] +
                "</option>";
        }
    }
});

/*code for patient Type and Choose condition drop down end */

/* code for axios */

/*
axios.get("http://localhost:8888/.netlify/functions/hello").then((response) => {
    console.log(response);
});

axios
    .post("http://localhost:8888/.netlify/functions/user", {
        firstName: "Fred",
        lastName: "Flintstone"
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
*/
