function convertTime(s : string) : void {
    let res = s.slice(2,-2)
    let when = s.slice(-2) 
    var hours = s.slice(0,2)
    
    if(when == "AM") {
        if(parseInt(hours) >= 12) {
            hours = "00"
        }
    } else if(when == "PM") {
        if(parseInt(hours) < 12) {
            hours = (parseInt(hours) + 12).toString()
        }
    }

    console.log(`${hours}${res}`)
}

convertTime("07:05:45PM")
//  to return "19:05:45"

convertTime("12:01:00PM")
// to return "12:01:00"

convertTime("12:01:00AM")
// to return "00:01:00"