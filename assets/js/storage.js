let save = $('[id=save-button]');

//this function is a click handler that will save user input into localstorage relative to button you click
function saveEvent(e){
    //this assigns a key name based on the hour that a button is associated with (e.g. nineAM, tenAM, elevenAM) 
    let key = $(e.target).parent().siblings('.input-group').attr('id');
    //this assigns the value to be equal to the user input in the textarea that is associated with the hour of button clicked
    let inputVal = $(e.target).parent().siblings().children('textarea').val();
    
    let toDoArr = JSON.parse(localStorage.getItem('toDoText')) || [{}];
    //this adds new key-value pair into the object in local storage or new object if there is none in localstorage
    toDoArr[0][key] = inputVal;
    localStorage.setItem('toDoText', JSON.stringify(toDoArr));   
}
//this function will pull the object from local storage and update the text in the textarea using the key in the object to target an id
function getEvents(){
    let storedArr = JSON.parse(localStorage.getItem('toDoText'));
    let storedObj = storedArr[0];
    let objKeys = Object.keys(storedObj);
    for (let i = 0; i < objKeys.length; i++){
        $(`#${objKeys[i]}`).children('textarea').val(storedObj[objKeys[i]]);
    }
}

save.on('click', saveEvent);
getEvents();
