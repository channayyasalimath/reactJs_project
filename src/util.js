function isArrayEmpty(prop){
    if(prop != undefined && prop != null){
        return false
    }else{
        return true
    }
}


function displayLog(messageString){
    console.log(messageString);
}

export {displayLog, isArrayEmpty}