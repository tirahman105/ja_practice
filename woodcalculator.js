function woodCalculator(chair, table, bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairWood = chair * perChairWood;
    const tableWood = table * perTableWood;
    const bedWood = bed * perBedWood;

    const total = chairWood + tableWood + bedWood;

    return total;
}
const totalWood = woodCalculator(1, 3, 5);
console.log(totalWood);