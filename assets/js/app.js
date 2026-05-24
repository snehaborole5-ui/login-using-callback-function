const cl = console.log;

// 0 to 0.9999

function hrCall(){
    // API Call >> Async Js (non-blocking) 

setTimeout(() => {
    let err = Math.random() > .5 ? false : true;
    if(!err){
        // API success
        cl(`Candidate is shortlisted for 1st tech interview`)
        firstTechInterview()
    }else{
        // API fail 
        let err = {
            msg : `looking for another candidate !!!`
        }
        // cl(`looking for another candidate`)
        Swal.fire({
            title : err.msg,
            icon:'error',
            timer : 3000
        })
    }
}, 700)
}



function firstTechInterview () {
    // API Call >> Async js (non-blocking) 
    setTimeout(() => {
        let err = Math.random() > .2 ? false : true
        if(!err){
            cl(`Candidate short listed for 2nd round!!!`)
            secondTech()
        }else{
            cl(`Candidate is very poor in basics !!!`)
        }
    }, 600)
}

function secondTech(){
    // API CALL >> Async js (non-blocking)
    setTimeout(() => {
        let err = Math.random() > .2 ? false : true
        if(!err){
            cl(`Candidate is shortlisted for final Round !!!`)
            finalRound()
        }else{
            cl(`Candidate is not able to write code`)
        }
    }, 500)
}

function finalRound(){
    // API CALL >> Asunc js (non-blocking)
    setTimeout(() => {
        let err = Math.random() > .5 ? false : true
        if(!err){
            Swal.fire({
                title : `Candidate is selected for given profile !!!`,
                icon : 'success',
                timer : 3000
            })
        cl(`Candidate is selected for given profile!!!`)
    }else{
        cl(`Candidate is not able to explain project!!!`)
    }
}, 400)
    }

hrCall()

