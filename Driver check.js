const hasLicense = true;
const age = 30;
const isDrunk = true;

const canDrive = hasLicense && age >= 18 && isDrunk;

console.log(`Может сесть за руль: ${canDrive ? 'Да' : 'Нет'}`);
