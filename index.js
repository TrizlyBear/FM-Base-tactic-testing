var tactics=[]
var table;axios.get('https://raw.githubusercontent.com/OvroExtraTime/tactictesting/master/tacticresults.json').then(res=>{table=document.getElementById('tactictable').getElementsByTagName('tbody')[0];tacticdata=res.data
tactics=res.data
res.data.sort(function(a,b){return b["Total Score"]-a["Total Score"]})
res.data.forEach(element=>{var newRow=table.insertRow(table.rows.length);console.log(element.URL)
if(element["Total Score"]>20){irow("#2ecc71")}else if(element["Total Score"]>15){irow("#27AE60")}else if(element["Total Score"]>10){irow("#f1c40f")}else{irow("#e74c3c")}
function irow(color){newRow.innerHTML=`<td> ${element.Author} </td><td> <a href="${element.URL}">${element.Tactic} </a></td><td> ${element.Formation} </td> <td> ${element["Points Per Game"]} </td> <td> ${element["Win %"]} </td> <td> ${element["Draw %"]} </td> <td> ${element["Loss %"]} </td> <td> ${element["Goals For"]} </td> <td> ${element["Goals Against"]} </td> <td style="background:${color}"> ${element["Total Score"]} </td>`}})})
var cfilter='none';function filtersubtop(){var Parent=document.getElementById('tablebody');console.log(Parent.children.length)
while(Parent.children.length>0&&(cfilter=='none'||cfilter=='underdog')){Parent.removeChild(Parent.lastChild);if(Parent.children.length==0){cfilter='subtop'
tactics.forEach(element=>{var newRow=table.insertRow(table.rows.length);console.log(element.URL)
if(element["Total Score"]>10&&element["Total Score"]<16){irow("#f1c40f")}
function irow(color){newRow.innerHTML=`<td> ${element.Author} </td><td> <a href="${element.URL}">${element.Tactic} </a></td><td> ${element.Formation} </td> <td> ${element["Points Per Game"]} </td> <td> ${element["Win %"]} </td> <td> ${element["Draw %"]} </td> <td> ${element["Loss %"]} </td> <td> ${element["Goals For"]} </td> <td> ${element["Goals Against"]} </td> <td style="background:${color}"> ${element["Total Score"]} </td>`}})}}}
function filterunderdog(){var Parent=document.getElementById('tablebody');console.log(Parent.children.length)
while(Parent.children.length>0&&(cfilter=='none'||cfilter=='subtop')){Parent.removeChild(Parent.lastChild);if(Parent.children.length==0){cfilter='underdog'
tactics.forEach(element=>{var newRow=table.insertRow(table.rows.length);console.log(element.URL)
if(element["Total Score"]<11){irow("#e74c3c")}
function irow(color){newRow.innerHTML=`<td> ${element.Author} </td><td> <a href="${element.URL}">${element.Tactic} </a></td><td> ${element.Formation} </td> <td> ${element["Points Per Game"]} </td> <td> ${element["Win %"]} </td> <td> ${element["Draw %"]} </td> <td> ${element["Loss %"]} </td> <td> ${element["Goals For"]} </td> <td> ${element["Goals Against"]} </td> <td style="background:${color}"> ${element["Total Score"]} </td>`}})}}}
function filternone(){var Parent=document.getElementById('tablebody');console.log(Parent.children.length)
while(Parent.children.length>0&&(cfilter=='underdog'||cfilter=='subtop')){Parent.removeChild(Parent.lastChild);if(Parent.children.length==0){cfilter='none'
tactics.forEach(element=>{var newRow=table.insertRow(table.rows.length);console.log(element.URL)
if(element["Total Score"]>20){irow("#2ecc71")}else if(element["Total Score"]>15){irow("#27AE60")}else if(element["Total Score"]>10){irow("#f1c40f")}else{irow("#e74c3c")}
function irow(color){newRow.innerHTML=`<td> ${element.Author} </td><td> <a href="${element.URL}">${element.Tactic} </a></td><td> ${element.Formation} </td> <td> ${element["Points Per Game"]} </td> <td> ${element["Win %"]} </td> <td> ${element["Draw %"]} </td> <td> ${element["Loss %"]} </td> <td> ${element["Goals For"]} </td> <td> ${element["Goals Against"]} </td> <td style="background:${color}"> ${element["Total Score"]} </td>`}})}}}
