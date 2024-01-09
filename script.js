console.log('hiii')

const name = document.querySelector('.name')
const submit = document.querySelector('.submit')
const addText = document.querySelector('.add')
const form1 = document.querySelector('.form1')
const gpadisplay = document.querySelector('.gpa-display')
let merkarr = []
const creditarr = []


submit.addEventListener('click', onSubmit)
addText.addEventListener('click', onAdd)

function onSubmit(e){
    merkarr = [];
    e.preventDefault();

    //putting the marks to an arrey
    $('.mySelect').each(function() {

        merkarr.push($(this).val());
        // console.log(merkarr);
    })

    //putting the credit to an arrey
    $('.credit').each(function() {

        creditarr.push($(this).val());
        // console.log(creditarr);
    })
    
    let convertedMarks = convertMarks(merkarr)
    let convertedCredits = convertCredits(creditarr)
    let gpa = gpaCalc(convertedMarks,convertedCredits);

    console.log(gpa)
    gpadisplay.innerHTML = gpa;
}

let i = 2

function onAdd(e){
    e.preventDefault();

    var credit =  document.createElement("input")
    var label = document.createElement("label");
    var select = document.createElement("select");


    //label.innerHTML = i+'th';
    //form1.appendChild(label);
    credit.type = "text";
    credit.className += ' credit';

    //Create array of options to be added
    var array = ["A+","A","A-","B+","B","B-","C+","C","C-","D+","D","E"];

    //Create and append select list
    var selectList = document.createElement("select");
    selectList.className += ' mySelect';
    form1.appendChild(selectList);

    //Create and append the options
    for (var x = 0; x < array.length; x++) {
        var option = document.createElement("option");
        option.value = array[x];
        option.text = array[x];
        selectList.appendChild(option);
    }

    var br = document.createElement("br");
    form1.appendChild(credit);
    form1.appendChild(br);
    //i++
}

function gpaCalc(convertedMarks,convertedCredits){
    
    let cumulativeSum =0;
    let creditSum = 0;
    let cumultativeGpa = [];

    console.log(convertedMarks);
    console.log(convertedCredits);

    

    /*for(let i=0; i<convertedMarks.length; i++){
        cumultativeGpa[i] = (convertedMarks[i]*convertedCredits[i]);
    }*/
    

    convertedMarks.forEach((convertedMark,index) => {
        cumultativeGpa.push(convertedMark*convertedCredits[index])
    })

    cumultativeGpa.forEach(cgpa => {
        cumulativeSum += cgpa
    });

    convertedCredits.forEach(convertedCredit => {
        creditSum += convertedCredit
    });

    console.log(cumultativeGpa);
    console.log(cumulativeSum);
    console.log(creditSum);

    return cumulativeSum/creditSum;
}


function convertMarks(merkarr){
    for(let i=0; i<merkarr.length ; i++){
        if(merkarr[i] == 'A+' || merkarr[i] == 'A' ){
            merkarr[i]=4.0;
        }else if(merkarr[i] == 'A-'){
            merkarr[i]=3.7;
        }else if(merkarr[i] == 'B+'){
            merkarr[i]=3.3;
        }else if(merkarr[i] == 'B'){
            merkarr[i]=3.0;
        }else if(merkarr[i] == 'B-'){
            merkarr[i]=2.7;
        }else if(merkarr[i] == 'C+'){
            merkarr[i]=2.3;
        }else if(merkarr[i] == 'C'){
            merkarr[i]=2.0;
        }else if(merkarr[i] == 'C-'){
            merkarr[i]=1.7;
        }else if(merkarr[i] == 'D+'){
            merkarr[i]=1.3;
        }else if(merkarr[i] == 'D'){
            merkarr[i]=1.0;
        }else if(merkarr[i] == 'E'){
            merkarr[i]=0.0;
        }
    }
    return merkarr
}

function convertCredits(creditarr){

    let numberArray = [];

    for (let i = 0; i < creditarr.length; i++){
        numberArray.push(parseInt(creditarr[i]));
    }
        
    return numberArray
    // Instead of parseInt(), Number()
    // can also be used  
    
}