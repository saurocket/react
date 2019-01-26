import {employersNames} from './employ';
import {eu, rus, money} from './money';

class MakeBusiness {
    constructor(owner, director = `Victor`, cash, emp){
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
    }
    make () {
        let sumSponsors = eu.concat(rus, 'unexpected sponsor');
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
        console.log(`And we have a sponsors: `);
        console.log.apply(null, sumSponsors);
        console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
    }
}

const makeBus = new MakeBusiness('Sam', undefined, money, employersNames);

makeBus.make();
