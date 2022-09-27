async function getJson(url) {
    let response = await fetch(url);  
    return response.json();
}
var structureObject = {};

async function loadDataAndPageEvents() {
    structureObject = JSON.parse(JSON.stringify(await getJson('./js/data.min.json')))

    for (i = 0; i < 2; i++) {   // Pre-populate table
        newstructure()
    }
    
    document.getElementById("newstrutbtn").addEventListener("click", function() {
        newstructure()
    });
    document.getElementById("resetbtn").addEventListener("click", function() {
        resetTable();
    });

    document.getElementById("perMinTab").addEventListener("click", recompute);
    document.getElementById("perHourTab").addEventListener("click", recompute);
}

loadDataAndPageEvents();

function deleteStructure() {
    const row = this.parentNode.parentNode;
    const tbody = row.parentNode;
    tbody.removeChild(row);
    recompute();
}

function resetTable() {                             
    document.getElementById("structuretable").lastElementChild.replaceChildren();   // ECMA2022
    for (i = 0; i < 2; i++) {                                                       // Re-populate Table
        newstructure();
    }
    recompute();
}

function getIndexById(idToSearch, list) {           // Searches NodeList for value, returns position of value in list
    return list.findIndex(function(elem) {return elem.id == idToSearch});
}

function setAttributes (el, attrs) {                // Allows bulk assigning of Attributes
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function getColumnCells(arr, cols, index) {         // Finds the Nth field in a list. Array, Columns, Position of Nth item
    const output = [];
    if (cols > index) {
        for (let i = 0; i < arr.length; i += cols) {
            const row = arr.slice(i, i + cols);
            index > row.length ? output.push(null) : output.push(row[index]);
        }
    }
    return output;
}

function newstructure() {

    function createStructure(row) {
        const column = document.createElement("td");
        row.appendChild(column);
        return column;
    }
    
    function FindSearchElement(soughtElementID, indent) {       // Gets the Structure dropdown menu ID to find the other related dropdowns
        let id_list = Array.from(document.querySelector("#structuretable").querySelectorAll("select"));
        return document.getElementById(id_list.at(getIndexById(soughtElementID.target.id, id_list) + indent).getAttribute("id"));
    }

    const structurelist = Object.keys(structureObject);
    const newrow = document.createElement("tr");
    const structureColumn = createStructure(newrow);
    const structureSelect = document.createElement("select");   // Starting point of creating Structure dropdown menu
    setAttributes(structureSelect, {
        "id": "id" + Math.random().toString(16).slice(2),
        "class": "form-select",
        "aria-label": "Structure Selection Field"
    })

    structureSelect.addEventListener('change', function(element) {
        let routineElement = FindSearchElement(element, 1);
        let amountElement = FindSearchElement(element, 2);
        routineElement.length = 1;
        amountElement.value = 1;
        amountElement.setAttribute("disabled","");
        recompute();
        if (this.value == "0") {
            routineElement.setAttribute("disabled","");
            amountElement.setAttribute("disabled","");
        } else {
            routineElement.removeAttribute("disabled","");
            amountElement.removeAttribute("disabled","");
        }
        let b = this.value;
        let c = Object.keys(Object.values(structureObject)[b])
        while (routineElement.firstChild) {
            routineElement.firstChild.remove()
        }
        for (let i = 0; i < c.length; i++) {
            routineElement.options[routineElement.options.length] = new Option(c[i], b[i]);
        }
    });
    for (let i = 0; i < structurelist.length; i++) {
        structureSelect.options[structureSelect.options.length] = new Option(structurelist[i], i);
        structureColumn.appendChild(structureSelect);
    }

    const routineColumn = createStructure(newrow);
    const routineSelect = document.createElement("select");     // Starting point of creating Task dropdown menu
    setAttributes(routineSelect, {
        "id": "id" + Math.random().toString(16).slice(2),
        "class": "form-select",
        "aria-label": "Task Selection Field",
        "disabled": ""
    })

    routineSelect.addEventListener('change', function(element) {
        recompute();
    });

    let c = Object.keys(Object.values(structureObject)[0]);
    for (let i = 0; i < c.length; i++) {
        routineSelect.options[routineSelect.options.length] = new Option(c[i], [i]);
        routineColumn.appendChild(routineSelect);
    }

    const amountColumn = createStructure(newrow);
    const amountSelect = document.createElement("select");      // Starting point of creating Amount dropdown menu
    amountSelect.addEventListener('change', recompute);
    setAttributes(amountSelect, {
        "id": "id" + Math.random().toString(16).slice(2),
        "class": "form-select",
        "aria-label": "Amount Selection Field",
        "disabled": ""
    })
    for (let i = 1; i < 21; i++) {
        amountSelect.options[amountSelect.options.length] = new Option (i);
        amountColumn.appendChild(amountSelect);
    }

    const removeColumn = createStructure(newrow);
    const removeBtn = document.createElement("button")
    removeBtn.addEventListener("click", deleteStructure);
    removeBtn.insertAdjacentHTML( 'afterbegin', '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/></svg>');
    setAttributes(removeBtn, {
        "class": "btn btn-danger",
        "type": "button",
        "value": "Remove Structure",
        "aria-label": "Delete Row"
    })
    removeColumn.appendChild(removeBtn);
    let tbody = document.getElementById("structuretable").querySelector("tbody") || table;
    tbody.appendChild(newrow);
}

function setText(id,newvalue) {                     // Puts content inside <div> by ID
    let s = document.getElementById(id);
    s.innerHTML = newvalue;
}

function powerlimit(num) {                          // Sets Max possible integer to 30 and min to 0
    let parse = parseFloat(num);
    return Math.min(Math.max(parse, 0), 30);
}

function tidy(num) {                                // Ensures only two decimal places if any
    let i = Math.round(num*100)/100;
    return i;
}

function recompute() {
    let currentvalues = Array(39).fill(0);                                                                      // Reset counter
    let structureTableArray = Array.from(document.querySelector("#structuretable").querySelectorAll("select"));
    let selectedStructureArray = getColumnCells(structureTableArray, 3, 0);
    let totalRoutinesArray = [];
    for (let i = 0 ; i < selectedStructureArray.length; i++) {    
        let a = Object.keys(structureObject)[selectedStructureArray[i].value];                                  // Get name of Structure in column
        let b = (Object.keys(structureObject[a])[getColumnCells(structureTableArray, 3, 1)[i].selectedIndex]);  // Get name of Task in column                                                     
        let c = getColumnCells(structureTableArray, 3, 2)[i].value;                                                                  // Get Amount in column
        let d = Object.values(structureObject[a][b]);                                                           // Get Values for Structure>Task
        for (let i = 0; i < c; i++) {                                                                           // Add Values x Amount
            totalRoutinesArray.push(d);
        }
    }
    
    for (let i = 0; i < totalRoutinesArray.length; i++) {                                   // Adds the values from totalRoutinesArray to currentvalues array
        let x = totalRoutinesArray[i];
        currentvalues = currentvalues.map(function (num, idx) {
            return num + x[idx];
        })
    }

    let valuefields = ["PowerGen", "PowerCon", "fWater", "fOil", "fPetrol", "fDiesel", "fHOil", "fEOil", "cMats", "pCMats", "sCMats", "asMat1", "asMat2", "asMat3", "asMat4", "asMat5", "aFlame", "a250", "a3c", "a4c", "a75", "a945", "a300", "a120", "a150", "rScrap", "rCoal", "rCoke", "rComp", "rDComp", "rSulfur", "rEMat", "rHEMat", "mGsupp", "mSand", "mBarb", "mMBeam", "mConc", "mPipe" ]
    
    for (let i = 0; i < valuefields.length; i++) {
        if (valuefields[i].includes("PowerGen")) {
            setText(valuefields[0], powerlimit(currentvalues[0]));
        }
        else if (valuefields[i].includes("PowerCon")) {
            setText(valuefields[i], currentvalues[i]);
        }
        else {
            if (document.getElementById('perHourTab').getAttribute('class').includes("active")) {
                setText(valuefields[i], tidy(currentvalues[i]*60));
            }
            else {
                setText(valuefields[i], tidy(currentvalues[i]));
            }
        }
    }
    setText("PowerFree", powerlimit(currentvalues[0] - currentvalues[1]));
}

/**
 *  Light Switch @version v0.1.4
 *  https://github.com/han109k/light-switch-bootstrap
 */

 (function () {
    let lightSwitch = document.getElementById('lightSwitch');
    if (!lightSwitch) {
      return;
    }
  
    /**
     * @function darkmode
     * @summary: changes the theme to 'dark mode' and save settings to local stroage.
     * Basically, replaces/toggles every CSS class that has '-light' class with '-dark'
     */
    function darkMode() {
      document.querySelectorAll('.bg-light').forEach((element) => {
        element.className = element.className.replace(/-light/g, '-dark');
      });
  
      document.body.classList.add('bg-dark');
  
      if (document.body.classList.contains('text-dark')) {
        document.getElementById("titleText").classList.replace('text-dark', 'text-light');
        document.getElementById("structuretable").parentNode.classList.replace('bg-light', 'bg-dark')
        document.body.classList.replace('text-dark', 'text-light');
        
      } else {
        document.getElementById("titleText").classList.add('text-light');
        document.getElementById("structuretable").parentNode.classList.add('bg-dark')
        document.body.classList.add('text-light');
      }
  
      if (document.getElementById("lightSwitchIcon").getAttribute("fill").includes("black")) {
        document.getElementById("lightSwitchIcon").setAttribute("fill", "white")
      }
  
      // Tables
      var tables = document.querySelectorAll('table');
      for (var i = 0; i < tables.length; i++) {
        // add table-dark class to each table
        tables[i].classList.add('table-dark');
      }
  
      // set light switch input to true
      if (!lightSwitch.checked) {
        lightSwitch.checked = true;
      }
      localStorage.setItem('lightSwitch', 'dark');
    }
  
    /**
     * @function lightmode
     * @summary: changes the theme to 'light mode' and save settings to local stroage.
     */
    function lightMode() {
      document.querySelectorAll('.bg-dark').forEach((element) => {
        element.className = element.className.replace(/-dark/g, '-light');
      });
  
      document.body.classList.add('bg-light');
  
      if (document.body.classList.contains('text-light')) {
        document.getElementById("titleText").classList.replace('text-light', 'text-dark');
        document.getElementById("structuretable").parentNode.classList.replace('bg-dark', 'bg-light')
        document.body.classList.replace('text-light', 'text-dark');
      } else {
        document.getElementById("titleText").classList.add('text-dark');
        document.getElementById("structuretable").parentNode.classList.add('bg-light')
        document.body.classList.add('text-dark');
      }
  
      if (document.getElementById("lightSwitchIcon").getAttribute("fill").includes("white")) {
        document.getElementById("lightSwitchIcon").setAttribute("fill", "black")
      }
  
      // Tables
      var tables = document.querySelectorAll('table');
      for (var i = 0; i < tables.length; i++) {
        if (tables[i].classList.contains('table-dark')) {
          tables[i].classList.remove('table-dark');
        }
      }
  
      if (lightSwitch.checked) {
        lightSwitch.checked = false;
      }
      localStorage.setItem('lightSwitch', 'light');
    }
  
    /**
     * @function onToggleMode
     * @summary: the event handler attached to the switch. calling @darkMode or @lightMode depending on the checked state.
     */
    function onToggleMode() {
      if (lightSwitch.checked) {
        darkMode();
      } else {
        lightMode();
      }
    }
  
    /**
     * @function getSystemDefaultTheme
     * @summary: get system default theme by media query
     */
    function getSystemDefaultTheme() {
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkThemeMq.matches) {
        return 'dark';
      }
      return 'light';
    }
  
    function setup() {
      var settings = localStorage.getItem('lightSwitch');
      if (settings == null) {
        settings = getSystemDefaultTheme();
      }
  
      if (settings == 'dark') {
        lightSwitch.checked = true;
      }
  
      lightSwitch.addEventListener('change', onToggleMode);
      onToggleMode();
    }
  
    setup();
  })();

/*
    TODO: 
    Do calculations from inputs instead of pre-processed
    Toggle Power slider
*/
