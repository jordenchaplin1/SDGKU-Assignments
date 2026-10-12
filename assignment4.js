const restaurantName = "Your Restaurant Name";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const sales = [320, 410, 290, 505, 480, 620, 710]

function generateReport() {

let output = "";
let total = 0;

for (let i=0; i < days.length; i++ ){
    let daySales = sales[i];
    let label = getDayLabel(daySales);

    total = total + daySales;

    output += `${days[i]} $${daySales} ${label}\n`
}
let average = total / days.length;
output += `\nWeekly total: $${total}\n`;
output += `\nWeekly average: $${average}\n`

console.log(output);
}

function getDayLabel(daySales){
    if(daySales < 400) {
        return "Slow day";
    } else if (daySales >= 400 && daySales < 600) {
        return "Good day";
    } else if (daySales >= 600) {
        return "Excellent day";
    }

}
generateReport();