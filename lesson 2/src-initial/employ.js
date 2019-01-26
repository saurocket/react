let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(elem => elem.length > 0).map(elem => elem.toLowerCase().trim());

export {employersNames}