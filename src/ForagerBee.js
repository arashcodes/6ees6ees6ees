class ForagerBee extends Bee {
  constructor() {
    super()
    this.age = 10;
    this.job = 'find pollen';
    this.color = 'yellow';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(teasure) {
    this.treasureChest.push(teasure)
  }
};
