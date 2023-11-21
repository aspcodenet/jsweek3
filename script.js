// EN VARIABEL SOM ÄR ETT HTMLELEMENT
// letar vi i DOM
const btnClickMe = document.getElementById("btnClickMe")
const allPlayersTBody = document.querySelector("#allPlayers tbody")
//const allPlayersTBody = document.querySelector("#allPlayerstbody")
const searchPlayer = document.getElementById("searchPlayer")








function Player(id, name,jersey,team, position){
    this.id = id
    this.name = name
    this.jersey = jersey
    this.team = team
    this.position = position
    this.visible = true
}

let players = [ 
    new Player(1,"Peter Forsberg", 21,"Colorado","Forward"),
    new Player(2,"Mats Sundin",13,"Toronto", "Forward"),
    new Player(3,"Niklas Lidström",5,"Detroit","Defence"),
    new Player(4,"Mikko Rantanen",96,"Colorado", "Forward"),
    new Player(5,"Jack Johnson",3,"Colorado","Defence"),
]

const createTableTdOrTh = function(elementType, txt){
    let element = document.createElement(elementType)
    element.textContent = txt
    return element
}

let clickOnButton=function(event){
    //alert(players[i].name)                        detta funkar fast med sk closures = magi
    let htmlElementet = event.target   // 
    console.log(event.target)
    console.log(event.currentTarget)
    //alert(htmlElementet.dataset.stefansplayerid)
}



const fillTable = function(){
    while(allPlayersTBody.firstChild){
        allPlayersTBody.firstChild.remove()
    }
    for(let i = 0; i < players.length;i++){
        if(players[i].visible == false){
            continue
        }
        //skapa en tr och stoppar in
        let tr = document.createElement("tr")
        // problem = att använda innerHTML rekommenderas inte
        //let tds = `<th>${players[i].name}</th><td>${players[i].jersey}</td><td>${players[i].position}</td><td>${players[i].team}</td>`
        //tr.innerHTML = tds

        // // BEST PRACTICE 
        // let th = document.createElement("th")
        // th.textContent = players[i].name
        // tr.appendChild(th)

        // let td = document.createElement("td")
        // td.textContent = players[i].jersey
        // tr.appendChild(td)

        // td = document.createElement("td")
        // td.textContent = players[i].position
        // tr.appendChild(td)

        // td = document.createElement("td")
        // td.textContent = players[i].team
        // tr.appendChild(td)

        // BEST PRACTICE - refactorized
        tr.appendChild(createTableTdOrTh("th",players[i].name))
        tr.appendChild(createTableTdOrTh("td",players[i].jersey))
        tr.appendChild(createTableTdOrTh("td",players[i].position))
        tr.appendChild(createTableTdOrTh("td",players[i].team))

        let td = document.createElement("td")
        let btn = document.createElement("button")
        btn.textContent = "EDIT"
        btn.dataset.stefansplayerid=players[i].id
        //btn.addEventListener("click",clickOnButton)
        td.appendChild(btn)
        tr.appendChild(td)
        


        allPlayersTBody.appendChild(tr)
        tr.addEventListener("click",clickOnButton)
    }

}

// EFTER RASTEN 
// 1. search filter
// 2. click on row

fillTable()

console.log(players)



searchPlayer.addEventListener("input",function(){ //
    //
    // loopar igenom alla players och matchar med searchPlayer.value
    // och sätter en egenskap på Player som heter visible
    const searchFor = searchPlayer.value.toLowerCase()
    for(let i = 0; i < players.length;i++){ 
        if(players[i].name.toLowerCase().includes(searchFor) || players[i].position.toLowerCase().includes(searchFor) || players[i].team.toLowerCase().includes(searchFor) ){
            players[i].visible = true                            
        }else{
            players[i].visible = false 
        }
    }
    fillTable()
})




function clickMe(){
    alert('Jepp');
}
btnClickMe.addEventListener("click",clickMe) // börjar prenumeera
// let x = 4
// test(1,x)
// test(1,4)


/*
	frågor?
	events	
		-addEventListener
			vad finns? "click"
		
`			click - when the element clicked
			dbclick - when the element double clicked
			mouseout -when the mouse pointer out from the element
			change -when value change on input field
			blur -when the element is not focused
			keydown - when a key is down
			keyup - when a key is up
			keypress - when we press any key


		Skillnad mot <button onclick="clickMe()">Click Me</button>


	Coding session:
		- Vi skapar en ARRAY med OBJECT (HockeyPlayers)
			Id
			Namn
			Jersey
			Team
		- Vi skapar en table rows på TVÅ sätt 
		- Vi skapar en FILTER funktion - onchange
		- fånga info...när man klickar på en spelare - hur kan man få veta VEM man klickat på

    15:15 Stefan visar - Stefan hjälper
	*HJÄLP* med inlämning: Github osv?
		Mål: alla ska ha lämnat in idag. Dvs Repository skapat och Stefan är inbjuden. 
            1 ni skapar koden VS Code
            2 ni pushar upp
            3 ni bjuder in mig som collaborator
            4 ni lämna in Learnpoint (ENDAST LÄNK - ingen ZIP)
            5 ni jobbar vidare till den 24:e och commitar/pushar
            6 den 25:e STEFAN RÄTTAR DET SOM LIGGER I GITHUB DÅ 
*/ 