var tactics=[]
var table;axios.get('https://raw.githubusercontent.com/OvroExtraTime/tactictesting/master/tacticresults.json').then(res=>{table=document.getElementById('tactictable').getElementsByTagName('tbody')[0];tacticdata=res.data
tactics=res.data
res.data.sort(function(a,b){return b["Total Score"]-a["Total Score"]})
res.data.forEach(element=>{var newRow=table.insertRow(table.rows.length);console.log(element.URL)
if(element["Total Score"]>20){irow("#2ecc71")}else if(element["Total Score"]>15){irow("#27AE60")}else if(element["Total Score"]>10){irow("#f1c40f")}else{irow("#e74c3c")}
function irow(color){newRow.innerHTML=`<td> ${element.Author} </td><td> <a href="${element.URL}">${element.Tactic} </a></td><td> ${element.Formation} </td> <td> ${element["Points Per Game"]} </td> <td> ${element["Win %"]} </td> <td> ${element["Draw %"]} </td> <td> ${element["Loss %"]} </td> <td> ${element["Goals For per Game"]} </td> <td> ${element["Goals Against per Game"]} </td> <td style="background:${color}"> ${element["Total Score"]} </td>`}})})
var cfilter='none';function filtersubtop(){var tableh=document.getElementById('tactictable')
tableh.deleteTHead()
var th=tableh.createTHead()
th.innerHTML='<th class="autor">Author</th><th class="tactic">Tactic</th><th class="formation">Formation</th><th class="score">W</th><th class="score">D</th><th class="score">L</th><th class="score">GF</th> <th class="score">GA</th><th class="score">PPG</th><th class="score">W%</th>    <th class="score">D%</th> <th class="score">L%</th><th class="score">GF PG</th> <th class="score">GA PG</th><th class="score">Total score</th>'
var Parent=document.getElementById('tablebody');tactics.sort(function(a,b){return b.Score-a.Score})
while(Parent.children.length>0&&(cfilter=='none'||cfilter=='underdog')){Parent.removeChild(Parent.lastChild);if(Parent.children.length==0){cfilter='subtop'
tactics.forEach(element=>{var newRow=table.insertRow(table.rows.length);if(element.Score>20){irow("#2ecc71")}else if(element.Score>15){irow("#27AE60")}else if(element.Score>10){irow("#f1c40f")}else{irow("#e74c3c")}
function irow(color){newRow.innerHTML=`<td> ${element.Author} </td><td> <a href="${element.URL}">${element.Tactic} </a></td><td> ${element.Formation} </td> <td> ${element.Won} </td><td> ${element.Draw} </td><td> ${element.Loss} </td><td> ${element["Goals For"]} </td> <td> ${element["Goals Against"]} </td><td> ${element["Points Per Game__1"]} </td> <td> ${element["Win %__1"]} </td> <td> ${element["Draw %__1"]} </td> <td> ${element["Loss %__1"]} </td>  <td> ${element["Goals For per Game__1"]} </td><td> ${element["Goals Against per Game__1"]} </td><td style="background:${color}"> ${element["Score"]} </td>`}})}}}
function filterunderdog(){var tableh=document.getElementById('tactictable')
tableh.deleteTHead()
var th=tableh.createTHead()
th.innerHTML='<th class="autor">Author</th><th class="tactic">Tactic</th><th class="formation">Formation</th><th class="score">W</th><th class="score">D</th><th class="score">L</th><th class="score">GF</th> <th class="score">GA</th><th class="score">PPG</th><th class="score">W%</th>    <th class="score">D%</th> <th class="score">L%</th><th class="score">GF PG</th> <th class="score">GA PG</th><th class="score">Total score</th>'
var Parent=document.getElementById('tablebody');tactics.sort(function(a,b){return b.Score__1-a.Score__1})
while(Parent.children.length>0&&(cfilter=='none'||cfilter=='subtop')){Parent.removeChild(Parent.lastChild);if(Parent.children.length==0){cfilter='underdog'
tactics.forEach(element=>{var newRow=table.insertRow(table.rows.length);if(element.Score__1>20){irow("#2ecc71")}else if(element.Score__1>15){irow("#27AE60")}else if(element.Score__1>10){irow("#f1c40f")}else{irow("#e74c3c")}
function irow(color){newRow.innerHTML=`<td> ${element.Author} </td><td> <a href="${element.URL}">${element.Tactic} </a></td><td> ${element.Formation} </td> <td> ${element.Won__1} </td><td> ${element.Draw__1} </td><td> ${element.Loss__1} </td><td> ${element["Goals For__1"]} </td> <td> ${element["Goals Against__1"]} </td><td> ${element["Points Per Game__2"]} </td> <td> ${element["Win %__2"]} </td> <td> ${element["Draw %__2"]} </td> <td> ${element["Loss %__2"]} </td><td> ${element["Goals For per Game__2"]} </td><td> ${element["Goals Against per Game__2"]} </td>  <td style="background:${color}"> ${element["Score__1"]} </td>`}})}}}
function filternone(){var tableh=document.getElementById('tactictable')
tableh.deleteTHead()
var th=tableh.createTHead()
th.innerHTML=`<th class="autor">Author</th>
    <th class="tactic">Tactic</th>
    <th class="formation">Formation</th>
    <th class="score">PPG</th>
    <th class="score">W%</th>    
    <th class="score">D%</th> 
    <th class="score">L%</th> 
    <th class="score">GF pg</th> 
    <th class="score">GA pg</th>
    <th class="score">Total score</th>`
var Parent=document.getElementById('tablebody');tactics.sort(function(a,b){return b["Total Score"]-a["Total Score"]})
while(Parent.children.length>0&&(cfilter=='underdog'||cfilter=='subtop')){Parent.removeChild(Parent.lastChild);if(Parent.children.length==0){cfilter='none'
tactics.forEach(element=>{var newRow=table.insertRow(table.rows.length);if(element["Total Score"]>20){irow("#2ecc71")}else if(element["Total Score"]>15){irow("#27AE60")}else if(element["Total Score"]>10){irow("#f1c40f")}else{irow("#e74c3c")}
function irow(color){newRow.innerHTML=`<td> ${element.Author} </td><td> <a href="${element.URL}">${element.Tactic} </a></td><td> ${element.Formation} </td> <td> ${element["Points Per Game"]} </td> <td> ${element["Win %"]} </td> <td> ${element["Draw %"]} </td> <td> ${element["Loss %"]} </td> <td> ${element["Goals For"]} </td> <td> ${element["Goals Against"]} </td> <td style="background:${color}"> ${element["Total Score"]} </td>`}})}}}
