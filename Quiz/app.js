const data = [
    {
        pitanje: "Ko je predsednik Srbije?",
        odgovori: [
            {text:"Vucic", tacno: true},
            {text:"Dacic", tacno: false},
            {text:"Seselj", tacno: false},
            {text:"Suljo", tacno: false},
        ]
    },
    {
        pitanje: "Ko je najgori profesor u gimnaziji?",
        odgovori: [
            {text:"Merima", tacno: false},
            {text:"Zijad", tacno: true},
            {text:"Mersad", tacno: false},
            {text:"Azra", tacno: false},
        ]
    },
    {
        pitanje: "Ko je najbolji kafic u gradu?",
        odgovori: [
            {text:"Dunja", tacno: false},
            {text:"Nargilem", tacno: false},
            {text:"Noc Kec", tacno: true},
            {text:"Druga strana", tacno: false},
        ]
    }
]

let index = 0;
let score = 0;
const questionDiv = document.getElementById("question")
const answersDiv = document.getElementsByClassName("odgovor-button")

function start() {
    score = 0;
    index = 0;
    prikazPitanja(data[index])
    
}

function prikazPitanja(question){
    questionDiv.innerText = question.pitanje;
    questionDiv.innerText = question.pitanje;
    question.odgovori.forEach(element => {
        const buttonn = document.createElement("button")
        buttonn.className = "buttonn"
        buttonn.innerText = element.text
        questionDiv.appendChild(buttonn)
        buttonn.addEventListener("click", () =>{
            selekcija(element)
        })

    });
}

function selekcija(odgovor){
    const rezultat = odgovor.tacno;
    if(rezultat){
        score++;
    }
}

function sledecePitanje(){
    index++;
    if(index<data.length){
        prikazPitanja(data[index]);
    }
    else{
        krajKviza();
    }

}

function krajKviza(){
    // alert("Osvojili ste " + score + " od " + data.length + " poena.");
    questionDiv.innerText = `Vas score je: ${score}`;
}


start()