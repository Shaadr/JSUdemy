//func takes score int and total possible score int
// -> string "You got a {letter Grade} ({score/possible score})"
// ie "You got a C (15/20)"
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

//my solution

function calcTotal(score, total) {
    return score / total;
}

function letterGrade(score, total) {

    var p = (score/total) * 100

    if (p <= 100 && p >= 90) {
        return "A"
    } else if (p <= 89 && p >= 80) {
        return "B"
    } else if (p <= 79 && p >= 70) {
        return "C"
    } else if (p <= 69 && p >= 60) {
        return "D"
    } else {
        return "F"
    }
}

function gradeCalc (letterGrade, percentage, studentScore, totalPossibleScore){
    return `You got ${studentScore}/${totalPossibleScore}. Grade: ${letterGrade} (${percentage * 100}%)`
}

var studentScore = 19
var totalPossibleScore = 20

var letter = letterGrade(studentScore, totalPossibleScore)
var percentage = calcTotal(studentScore, totalPossibleScore)
var grade = gradeCalc(letter,percentage, studentScore, totalPossibleScore)

// console.log(grade)

//Alex solution

const gradeCalc2 = function (score, totalScore) {
//original function. restructured below
//    let percent = (score/totalScore) * 100;
//     if (percent >= 90) {   
//         return `You got an A ${percent}%!`
//     } else if (percent >= 80) {
//         return `You got a B ${percent}%!`
//     }
//          ...etc

    if(typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('Please provide numbers only')
    }   
    
    const percent = (score/totalScore) * 100;
    let letterGrade = ``;

    if (percent >= 90) {
        letterGrade = `A`
    } else if (percent >= 80) {
        letterGrade = `B`
    } else if (percent >= 70) {
        letterGrade = `C`
    }else if (percent >= 60) {
        letterGrade = `D`
    }else if (percent < 60) {
        letterGrade = `F`
    }

    return `You got a ${letterGrade} ${percent}%!`
}


try {
    const result = gradeCalc2(true)
    // const result = gradeCalc2(19, 20);
    console.log(result)
} catch (e) {
    console.log(e.message) // references the throw error message
}
