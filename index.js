axios.get('https://raw.githubusercontent.com/OvroExtraTime/tactictesting/master/tacticresults.json').then(res => {
    var table = document.getElementById('tactictable').getElementsByTagName('tbody')[0];
    tacticdata = res.data
    res.data.sort(function(a, b){return b["Total Score"]-a["Total Score"]})
    res.data.forEach(element => {
        var newRow = table.insertRow(table.rows.length);
        if(element["Total Score"] > 20) {
            irow("#2ecc71") 
        } else if(element["Total Score"] > 15) {
            irow("#27AE60")
        } else if(element["Total Score"] > 10){
            irow("#f1c40f")
        } else {
            irow("#e74c3c")
        }
        function irow(color){newRow.innerHTML = `<td> ${element.Author} </td><td> ${element.Tactic} </td><td> ${element.Formation} </td> <td> ${element["Points Per Game"]} </td> <td> ${element["Win %"]} </td> <td> ${element["Draw %"]} </td> <td> ${element["Loss %"]} </td> <td> ${element["Goals For"]} </td> <td> ${element["Goals Against"]} </td> <td style="background:${color}"> ${element["Total Score"]} </td>`;  }
    });
})