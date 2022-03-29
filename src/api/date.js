
let lastDaysData = []

for(let i = 10; i > 0; i--){
    var yesterday = new Date(Date.now() - i * 86400000);
    var yyyy = yesterday.getFullYear();
    var mm = String(yesterday.getMonth() + 1).padStart(2, '0');
    var dd = String(yesterday.getDate()).padStart(2, '0');

    yesterday = yyyy + '/' + mm + '/' + dd;

    lastDaysData.push(yesterday);
}

export default lastDaysData;