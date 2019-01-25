
let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((name) => {
    return (name.length > 0 && name.length != '');
});

employersNames = employersNames.map((item) => item.toLowerCase().trim());
console.log(employersNames);

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

function makeBusiness(owner, director = `Victor`, cash, emp) {
    let sumSponsors = eu.concat(rus, 'unexpected sponsor');
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log(`And we have a sponsors: `);
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', , money, employersNames]);