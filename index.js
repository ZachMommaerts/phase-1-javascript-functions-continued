function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function (work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective (string = '*') {
    return function (inner = 'special') {
        return `You are ${string}${inner}${string}!`;
    }
}