const slimed = extend(StatusEffect, "slimed", {
    isHidden() {
        return false
    },
    localizedName: "Slimed",
    speedMultiplier: 0.3,
    damageMultiplier: 0.5,
    effect: Fx.wet,
    color: Color.blue
});

const radioactive = extend(StatusEffect, "radioactive", {
    isHidden() {
        return false
    },
    localizedName: "Radioactive",
    speedMultiplier: 1.1,
    damageMultiplier: 1.2,
    armorMultiplier: 0.1,
    reloadMultiplier: 0.1,
    healthMultiplier: 0.5,
    damage: 1,
    effect: Fx.shootHeal,
    color: Color.green
});

const circuitfailure = extend(StatusEffect, "circuitfailure", {
    isHidden() {
        return false
    },
    localizedName: "Circuit Failure",
    speedMultiplier: 3,
    damageMultiplier: 0,
    reloadMultiplier: 0,
    healthMultiplier: 0.1,
    damage: 3,
    effect: Fx.electrified,
    color: Liquids.slag.color
});

const blizzard = extend(StatusEffect, "blizzard", {
    isHidden() {
        return false
    },
    localizedName: "Blizzard",
    speedMultiplier: 0.3,
    armorMultiplier: 0.7,
    damage: 2,
    effect: Fx.freezing,
    color: Color.white
});