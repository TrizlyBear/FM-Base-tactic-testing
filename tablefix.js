var tactics = [];
(function(){function Tablesort(el,options){if(!(this instanceof Tablesort))return new Tablesort(el,options);if(!el||el.tagName!=='TABLE'){throw new Error('Element must be a table')}
this.init(el,options||{})}
var sortOptions=[];var createEvent=function(name){var evt;if(!window.CustomEvent||typeof window.CustomEvent!=='function'){evt=document.createEvent('CustomEvent');evt.initCustomEvent(name,!1,!1,undefined)}else{evt=new CustomEvent(name)}
return evt};var getInnerText=function(el){return el.getAttribute('data-sort')||el.textContent||el.innerText||''};var caseInsensitiveSort=function(a,b){a=a.trim().toLowerCase();b=b.trim().toLowerCase();if(a===b)return 0;if(a<b)return 1;return-1};var stabilize=function(sort,antiStabilize){return function(a,b){var unstableResult=sort(a.td,b.td);if(unstableResult===0){if(antiStabilize)return b.index-a.index;return a.index-b.index}
return unstableResult}};Tablesort.extend=function(name,pattern,sort){if(typeof pattern!=='function'||typeof sort!=='function'){throw new Error('Pattern and sort must be a function')}
sortOptions.push({name:name,pattern:pattern,sort:sort})};Tablesort.prototype={init:function(el,options){var that=this,firstRow,defaultSort,i,cell;that.table=el;that.thead=!1;that.options=options;if(el.rows&&el.rows.length>0){if(el.tHead&&el.tHead.rows.length>0){for(i=0;i<el.tHead.rows.length;i++){if(el.tHead.rows[i].getAttribute('data-sort-method')==='thead'){firstRow=el.tHead.rows[i];break}}
if(!firstRow){firstRow=el.tHead.rows[el.tHead.rows.length-1]}
that.thead=!0}else{firstRow=el.rows[0]}}
if(!firstRow)return;var onClick=function(){if(that.current&&that.current!==this){that.current.removeAttribute('aria-sort')}
that.current=this;that.sortTable(this)};for(i=0;i<firstRow.cells.length;i++){cell=firstRow.cells[i];cell.setAttribute('role','columnheader');if(cell.getAttribute('data-sort-method')!=='none'){cell.tabindex=0;cell.addEventListener('click',onClick,!1);if(cell.getAttribute('data-sort-default')!==null){defaultSort=cell}}}
if(defaultSort){that.current=defaultSort;that.sortTable(defaultSort)}},sortTable:function(header,update){var that=this,column=header.cellIndex,sortFunction=caseInsensitiveSort,item='',items=[],i=that.thead?0:1,sortMethod=header.getAttribute('data-sort-method'),sortOrder=header.getAttribute('aria-sort');that.table.dispatchEvent(createEvent('beforeSort'));if(!update){if(sortOrder==='ascending'){sortOrder='descending'}else if(sortOrder==='descending'){sortOrder='ascending'}else{sortOrder=that.options.descending?'descending':'ascending'}
header.setAttribute('aria-sort',sortOrder)}
if(that.table.rows.length<2)return;if(!sortMethod){while(items.length<3&&i<that.table.tBodies[0].rows.length){item=getInnerText(that.table.tBodies[0].rows[i].cells[column]);item=item.trim();if(item.length>0){items.push(item)}
i++}
if(!items)return}
for(i=0;i<sortOptions.length;i++){item=sortOptions[i];if(sortMethod){if(item.name===sortMethod){sortFunction=item.sort;break}}else if(items.every(item.pattern)){sortFunction=item.sort;break}}
that.col=column;for(i=0;i<that.table.tBodies.length;i++){var newRows=[],noSorts={},j,totalRows=0,noSortsSoFar=0;if(that.table.tBodies[i].rows.length<2)continue;for(j=0;j<that.table.tBodies[i].rows.length;j++){item=that.table.tBodies[i].rows[j];if(item.getAttribute('data-sort-method')==='none'){noSorts[totalRows]=item}else{newRows.push({tr:item,td:getInnerText(item.cells[that.col]),index:totalRows})}
totalRows++}
if(sortOrder==='descending'){newRows.sort(stabilize(sortFunction,!0))}else{newRows.sort(stabilize(sortFunction,!1));newRows.reverse()}
for(j=0;j<totalRows;j++){if(noSorts[j]){item=noSorts[j];noSortsSoFar++}else{item=newRows[j-noSortsSoFar].tr}
that.table.tBodies[i].appendChild(item)}}
that.table.dispatchEvent(createEvent('afterSort'))},refresh:function(){if(this.current!==undefined){this.sortTable(this.current,!0)}}};if(typeof module!=='undefined'&&module.exports){module.exports=Tablesort}else{window.Tablesort=Tablesort}})();(function(){var cleanNumber=function(i){return i.replace(/[^\-?0-9.]/g,'')},compareNumber=function(a,b){a=parseFloat(a);b=parseFloat(b);a=isNaN(a)?0:a;b=isNaN(b)?0:b;return a-b};Tablesort.extend('number',function(item){return item.match(/^[-+]?[£\x24Û¢´€]?\d+\s*([,\.]\d{0,2})/)||item.match(/^[-+]?\d+\s*([,\.]\d{0,2})?[£\x24Û¢´€]/)||item.match(/^[-+]?(\d)*-?([,\.]){0,1}-?(\d)+([E,e][\-+][\d]+)?%?$/)},function(a,b){a=cleanNumber(a);b=cleanNumber(b);return compareNumber(b,a)})}())

var table;
axios.get('https://raw.githubusercontent.com/OvroExtraTime/tactictesting/master/tacticresults.json').then(res => {
    table = document.getElementById('tactictable').getElementsByTagName('tbody')[0];
    tacticdata = res.data
    res.data.forEach(element => {
        element.Formation = element.Formation.split(',').join('-').split('.').join('-').split(' ')[0]
        console.log(element.Formation.split(',').join('-'))
        if (element.Tactic.length < 21) {
            tactics.push(element)
            // console.log(element.Tactic.length)
        } else {
            element.fulltactic = element.Tactic
            var splitedel = element.Tactic.split('')
            var combined = splitedel[0] + splitedel[1] + splitedel[2] + splitedel[3] + splitedel[4] + splitedel[5] + splitedel[6] + splitedel[7] + splitedel[8] + splitedel[9] + splitedel[10] + splitedel[11] + splitedel[12] + splitedel[13] + splitedel[14] + splitedel[15] + splitedel[16] + splitedel[17] + splitedel[18] + splitedel[19] + splitedel[20] + '...'
            element.Tactic = combined
            // console.log(combined)
            tactics.push(element)
        }
    });
    res.data.sort(function(a, b){return b["Total Score"]-a["Total Score"]})
    res.data.forEach(element => {
        var newRow = table.insertRow(table.rows.length);
        // console.log(element.URL)
        if(element["Total Score"] > 20) {
            irow("#2ecc71") 
        } else if(element["Total Score"] > 15) {
            irow("#27AE60")
        } else if(element["Total Score"] > 10){
            irow("#f1c40f")
        } else {
            irow("#e74c3c")
        }
        function irow(color){newRow.innerHTML = `<td> ${element.Author} </td><td class="tactic"> <a href="${element.URL}" title="${element.fulltactic}">${element.Tactic} </a></td><td> ${element.Formation} </td> <td class="score"> ${element["Points Per Game"]} </td> <td class="score"> ${element["Win %"]} </td> <td class="score"> ${element["Draw %"]} </td> <td class="score"> ${element["Loss %"]} </td class="score"> <td class="score"> ${element["Goals For per Game"]} </td> <td class="score"> ${element["Goals Against per Game"]} </td> <td style="background:${color}" class="score"> ${element["Total Score"]} </td>`;  }
        
    });
})
var cfilter = 'none';
function filtersubtop() {
    
    var tableh = document.getElementById('tactictable')
    tableh.deleteTHead()
    var th = tableh.createTHead()
    th.innerHTML = '<th class="autor">Author</th><th class="tactic">Tactic</th><th class="formation">Formation</th><th class="score">W</th><th class="score">D</th><th class="score">L</th><th class="score">GF</th> <th class="score">GA</th><th class="score">PPG</th><th class="score">W%</th>    <th class="score">D%</th> <th class="score">L%</th><th class="score">GF PG</th> <th class="score">GA PG</th><th class="score">Total score</th>'
    
    var Parent = document.getElementById('tablebody');
    // console.log(Parent.children.length)
    tactics.sort(function(a, b){return b["Score"]-a["Score"]})
    while(Parent.children.length > 0 && (cfilter == 'none' || cfilter == 'underdog'))  {
        
            Parent.removeChild(Parent.lastChild);
            if (Parent.children.length == 0) {
                
                cfilter = 'subtop'
                tactics.forEach(element => {
                    var newRow = table.insertRow(table.rows.length);
                    // console.log(element.URL)
                    if(element["Score"] > 20) {
                        irow("#2ecc71") 
                    } else if(element["Score"] > 15) {
                        irow("#27AE60")
                    } else if(element["Score"] > 10){
                        irow("#f1c40f")
                    } else {
                        irow("#e74c3c")
                    }
                    function irow(color){newRow.innerHTML = `<td> ${element.Author} </td><td class="tactic"> <a href="${element.URL}" title="${element.fulltactic}">${element.Tactic} </a></td><td> ${element.Formation} </td> <td class="score"> ${element.Won} </td><td class="score"> ${element.Draw} </td><td class="score"> ${element.Loss} </td><td class="score"> ${element["Goals For"]} </td> <td class="score"> ${element["Goals Against"]} </td><td class="score"> ${element["Points Per Game__1"]} </td> <td class="score"> ${element["Win %__1"]} </td> <td class="score"> ${element["Draw %__1"]} </td> <td class="score"> ${element["Loss %__1"]} </td>  <td class="score"> ${element["Goals For per Game__1"]} </td><td class="score"> ${element["Goals Against per Game__1"]} </td><td style="background:${color}" class="score"> ${element["Score"]} </td>`;  }

                });
            }

    }
    new Tablesort(document.getElementById('tactictable'));
}
function filterunderdog() {
    
    var tableh = document.getElementById('tactictable')
    tableh.deleteTHead()
    var th = tableh.createTHead()
    th.innerHTML = '<th class="autor">Author</th><th class="tactic">Tactic</th><th class="formation">Formation</th><th class="score">W</th><th class="score">D</th><th class="score">L</th><th class="score">GF</th> <th class="score">GA</th><th class="score">PPG</th><th class="score">W%</th>    <th class="score">D%</th> <th class="score">L%</th><th class="score">GF PG</th> <th class="score">GA PG</th><th class="score">Total score</th>'

    var Parent = document.getElementById('tablebody');
    // console.log(Parent.children.length)
    tactics.sort(function(a, b){return b["Score__1"]-a["Score__1"]})
    while(Parent.children.length > 0 && (cfilter == 'none' || cfilter == 'subtop'))  {
        
            Parent.removeChild(Parent.lastChild);
            if (Parent.children.length == 0) {
                
                cfilter = 'underdog'
                tactics.forEach(element => {
                    var newRow = table.insertRow(table.rows.length);
                    // console.log(element.URL)
                    if(element["Score__1"] > 20) {
                        irow("#2ecc71") 
                    } else if(element["Score__1"] > 15) {
                        irow("#27AE60")
                    } else if(element["Score__1"] > 10){
                        irow("#f1c40f")
                    } else {
                        irow("#e74c3c")
                    }
                    function irow(color){newRow.innerHTML = `<td> ${element.Author} </td><td class="tactic"> <a href="${element.URL}" title="${element.fulltactic}">${element.Tactic} </a></td><td> ${element.Formation} </td> <td class="score"> ${element.Won__1} </td><td class="score"> ${element.Draw__1} </td><td class="score"> ${element.Loss__1} </td><td class="score"> ${element["Goals For__1"]} </td> <td class="score"> ${element["Goals Against__1"]} </td><td class="score"> ${element["Points Per Game__2"]} </td> <td class="score"> ${element["Win %__2"]} </td> <td class="score"> ${element["Draw %__2"]} </td> <td class="score"> ${element["Loss %__2"]} </td><td class="score"> ${element["Goals For per Game__2"]} </td><td class="score"> ${element["Goals Against per Game__2"]} </td>  <td style="background:${color}" class="score"> ${element["Score__1"]} </td>`;  }

                });
            }

    }
    new Tablesort(document.getElementById('tactictable'));
}

function filternone() {
    
    var tableh = document.getElementById('tactictable')
    tableh.deleteTHead()
    var th = tableh.createTHead()
    th.innerHTML = `<th class="autor">Author</th>
    <th class="tactic" role="columnheader">Tactic</th>
    <th class="formation" role="columnheader">Formation</th>
    <th class="score" role="columnheader">PPG</th>
    <th class="score" role="columnheader">W%</th>    
    <th class="score" role="columnheader">D%</th> 
    <th class="score" role="columnheader">L%</th> 
    <th class="score" role="columnheader">GF pg</th> 
    <th class="score" role="columnheader">GA pg</th>
    <th class="score" role="columnheader">Total score</th>`

    var Parent = document.getElementById('tablebody');
    // console.log(Parent.children.length)
    tactics.sort(function(a, b){return b["Total Score"]-a["Total Score"]})
    while(Parent.children.length > 0 && (cfilter == 'underdog' || cfilter == 'subtop'))  {
        
            Parent.removeChild(Parent.lastChild);
            if (Parent.children.length == 0) {
                
                cfilter = 'none'
                tactics.forEach(element => {
                    var newRow = table.insertRow(table.rows.length);
                    // console.log(element.URL)
                    if(element["Total Score"] > 20) {
                        irow("#2ecc71") 
                    } else if(element["Total Score"] > 15) {
                        irow("#27AE60")
                    } else if(element["Total Score"] > 10){
                        irow("#f1c40f")
                    } else {
                        irow("#e74c3c")
                    }
                    function irow(color){newRow.innerHTML = `<td> ${element.Author} </td><td class="tactic"> <a href="${element.URL}" title="${element.fulltactic}">${element.Tactic} </a></td><td> ${element.Formation} </td> <td class="score"> ${element["Points Per Game"]} </td> <td class="score"> ${element["Win %"]} </td> <td class="score"> ${element["Draw %"]} </td> <td class="score"> ${element["Loss %"]} </td class="score"> <td class="score"> ${element["Goals For per Game"]} </td> <td class="score"> ${element["Goals Against per Game"]} </td> <td style="background:${color}" class="score"> ${element["Total Score"]} </td>`;  }

                });
            }

    }
    new Tablesort(document.getElementById('tactictable'));
}

