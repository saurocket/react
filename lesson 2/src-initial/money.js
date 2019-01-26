const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

function calcCash(...everyCash) {
    let total = everyCash[1].reduce(( accumulator, currentValue ) => accumulator + currentValue, everyCash[0]);
    return total;    
}

let money = calcCash(null, cash);

export {eu, rus, money}