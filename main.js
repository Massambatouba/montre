
const months =[
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "JDecembre"

]

let initDate = () =>{
    let date = new Date()

    let currentDate = {
        day: date.getDay(),
        month: months[date.getMonth()],
        year: date.getFullYear(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        seconde: date.getSeconds()
    
    }
    
    return currentDate
}


let displayDate = () =>{
   let currentDate = initDate()
   let div = document.createElement("div") 
   let div2 = document.createElement("div")
   div2.className = "currentTime"
   div.className = "currentDate"
   let date = `Date: ${currentDate.day} ${currentDate.month} ${currentDate.year}`
   let time2 = `Time: ${currentDate.hour}:${currentDate.minute}:${currentDate.seconde}`

   let text = document.createTextNode(date)
   let text_time = document.createTextNode(time2)
   div.appendChild(text)
   div2.appendChild(text_time)
   document.getElementById("app").innerHTML = ""
   document.getElementById("app").appendChild(div)

   document.getElementById("app").appendChild(div2)

}
setInterval(displayDate, 1000)

//console.log(currentDate);