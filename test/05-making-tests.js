const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Employee = require('../employee');
const Manager = require('../manager');
const { beforeEach } = require('mocha');

describe('The calculateBonus(employee) method:', () => {
    let Hobbes;
    let Calvin;
    let Susie;
    let Lily;
    let Clifford;

    beforeEach(() => {
        Hobbes = new Manager('Hobbes', 1000000, 'Founder', null);
        Calvin = new Manager('Calvin', 130000, 'Director', 'Hobbes');
        Susie = new Manager('Susie', 100000, 'TA Manager', 'Calvin');
        Lily = new Employee('Lily', 90000, 'TA', 'Susie');
        Clifford = new Employee('Clifford', 90000, 'TA', 'Susie');
    });
    
    describe('Employee.calculateBonus()', () => {
        it('should multiply the Employee\'s salary by a passed in multiplier', () => {
            expect(Clifford.calculateBonus(0.05)).to.equal(4500);
        });
    })
    


})