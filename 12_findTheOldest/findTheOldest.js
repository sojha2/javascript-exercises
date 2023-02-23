const findTheOldest = function(peopleToBeChecked) {
    let index = 0; 

    for(let i = 0; i < peopleToBeChecked.length; i++) {
        let currentPersonBirth =  peopleToBeChecked[i].yearOfBirth;
        let currentPersonDeath = peopleToBeChecked[i].yearOfDeath;

        if (!peopleToBeChecked[i].hasOwnProperty('yearOfDeath')) {
            currentPersonDeath = new Date();
            currentPersonDeath = currentPersonDeath.getFullYear();
        }

        let indexedPersonBirth = peopleToBeChecked[index].yearOfBirth;
        let indexedPersonDeath = peopleToBeChecked[index].yearOfDeath;

        if (!peopleToBeChecked[index].hasOwnProperty('yearOfDeath')) {
            indexedPersonDeath = new Date();
            indexedPersonDeath = indexedPersonDeath.getFullYear();
        }
        

        let currentPersonAge = currentPersonDeath - currentPersonBirth;
        let indexedPersonAge = indexedPersonDeath - indexedPersonBirth;

        if (currentPersonAge > indexedPersonAge) {
            index = i;
        } 
    }
    
    return peopleToBeChecked[index];
};


// Do not edit below this line
module.exports = findTheOldest;


















