Events.on(ClientLoadEvent, () => {
    const subzero = new Planet("subzero", Planets.sun, 0, 0.6);
    //sirius.generator = new SerpuloPlanetGenerator();
    subzero.mesh = new SunMesh(
                subzero, 4,
                5, 0.3, 1.7, 1.2, 1,
                1.3,
                Liquids.cryofluid.color,
                Liquids.cryofluid.color.cpy().lerp(Color.white, 0.2),
                Liquids.cryofluid.color.cpy().lerp(Color.white, 0.4),
                Liquids.cryofluid.color.cpy().lerp(Color.white, 0.6),
                Liquids.cryofluid.color.cpy().lerp(Color.white, 0.8),
                Color.white
        );

    subzero.orbitRadius = 40;
    subzero.orbitTime = 120;
    subzero.rotateTime = 50;
    subzero.bloom = true;
    subzero.accessible = true;
    subzero.hasAtmosphere = true;
    subzero.atmosphereColor = Liquids.cryofluid.color;
    subzero.atmosphereRadIn = 0.05;
    subzero.atmosphereRadOut = 0.3;
    subzero.localizedName = "[sky]Subzero";

    const purity = new Planet("purity", Planets.sun, 0, 0.3);
    //cornal.generator = new SerpuloPlanetGenerator();
    purity.mesh = new SunMesh(
                purity, 4,
                5, 0.3, 1.7, 1.2, 1,
                1.3,
                Pal.sap,
                Pal.sap.cpy().lerp(Color.white, 0.2),
                Pal.sap.cpy().lerp(Color.white, 0.3),
                Pal.sap.cpy().lerp(Color.white, 0.4),
                Pal.sap.cpy().lerp(Color.white, 0.5)
        );

    purity.orbitRadius = 12;
    purity.orbitTime = 60;
    purity.rotateTime = 30;
    purity.bloom = true;
    purity.accessible = true;
    purity.hasAtmosphere = true;
    purity.atmosphereColor = Blocks.moss.mapColor;
    purity.atmosphereRadIn = 0.001;
    purity.atmosphereRadOut = 0.3;
    purity.localizedName = "[purple]Purity";

    const submarium = new Planet("submarium", purity, 0, 0.2);
    submarium.mesh = new SunMesh(
                submarium, 4,
                5, 0.3, 1.7, 1.2, 1,
                1.3,
                Liquids.water.color,
                Liquids.water.color.cpy().lerp(Color.white, 0.2),
                Liquids.water.color.cpy().lerp(Color.white, 0.3),
                Liquids.water.color.cpy().lerp(Color.white, 0.4),
                Liquids.water.color.cpy().lerp(Color.white, 0.5)
        );
    //slagia.mesh = new PlanetMesh(slagia, new MeshBuilder(1, 0.5), Shaders.slag);
    submarium.orbitRadius = 4;
    submarium.orbitTime = 60;
    submarium.rotateTime = 30;
    submarium.bloom = true;
    submarium.accessible = true;
    submarium.hasAtmosphere = true;
    submarium.atmosphereColor = Liquids.water.color;
    submarium.atmosphereRadIn = 0.1;
    submarium.atmosphereRadOut = 0.3;
    submarium.localizedName = "[blue]Submarium";


    var arrs = [
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandWater, Blocks.stone, Blocks.stone],
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandWater, Blocks.stone, Blocks.stone, Blocks.stone],
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksandWater, Blocks.stone, Blocks.stone, Blocks.stone],
        [Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.salt, Blocks.salt, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.snow, Blocks.iceSnow, Blocks.ice],
        [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.basalt, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice],
        [Blocks.deepwater, Blocks.water, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.snow, Blocks.ice],
        [Blocks.deepwater, Blocks.sandWater, Blocks.sand, Blocks.sand, Blocks.grass, Blocks.grass, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice],
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.basalt, Blocks.grass, Blocks.basalt, Blocks.hotrock, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
        [Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.grass, Blocks.dirt, Blocks.snow, Blocks.basalt, Blocks.basalt, Blocks.ice, Blocks.snow, Blocks.ice, Blocks.ice],
        [Blocks.darksandWater, Blocks.darksand, Blocks.darksand, Blocks.dirt, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice],
        [Blocks.water, Blocks.darksandWater, Blocks.darksand, Blocks.mud, Blocks.mud, Blocks.ice, Blocks.ice, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
        [Blocks.darksandWater, Blocks.darksandWater, Blocks.darksand, Blocks.dirt, Blocks.grass, Blocks.dirt, Blocks.iceSnow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice],
        [Blocks.darksandWater, Blocks.darksand, Blocks.snow, Blocks.ice, Blocks.iceSnow, Blocks.snow, Blocks.snow, Blocks.snow, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice, Blocks.ice]
    ];
    const valkyriaGenerator = extend(SerpuloPlanetGenerator, {
        getBlock(p){
            this.arr = arrs;
            this.super$getBlock(p);
        }
    });


    //water to slag, ice to hotrock, snow and icesnow to magmarock, grass to mud, salt to basalt
    var arrss = [
        [Blocks.slag, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.stone, Blocks.stone],
        [Blocks.slag, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.stone, Blocks.stone, Blocks.stone],
        [Blocks.slag, Blocks.darksand, Blocks.darksand, Blocks.sand, Blocks.salt, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.darksand, Blocks.stone, Blocks.stone, Blocks.stone],
        [Blocks.slag, Blocks.sand, Blocks.sand, Blocks.basalt, Blocks.basalt, Blocks.basalt, Blocks.sand, Blocks.stone, Blocks.stone, Blocks.stone, Blocks.magmarock, Blocks.magmarock, Blocks.hotrock],
        [Blocks.slag, Blocks.slag, Blocks.sand, Blocks.sand, Blocks.basalt, Blocks.sand, Blocks.sand, Blocks.basalt, Blocks.magmarock, Blocks.magmarock, Blocks.magmarock, Blocks.magmarock, Blocks.hotrock],
        [Blocks.slag, Blocks.slag, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.mud, Blocks.magmarock, Blocks.magmarock, Blocks.magmarock, Blocks.hotrock, Blocks.magmarock, Blocks.hotrock],
        [Blocks.slag, Blocks.sand, Blocks.sand, Blocks.sand, Blocks.mud, Blocks.mud, Blocks.magmarock, Blocks.basalt, Blocks.basalt, Blocks.basalt, Blocks.hotrock, Blocks.magmarock, Blocks.hotrock],
        [Blocks.slag, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.basalt, Blocks.mud, Blocks.basalt, Blocks.hotrock, Blocks.basalt, Blocks.hotrock, Blocks.magmarock, Blocks.hotrock, Blocks.hotrock],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.mud, Blocks.dirt, Blocks.magmarock, Blocks.basalt, Blocks.basalt, Blocks.hotrock, Blocks.magmarock, Blocks.hotrock, Blocks.hotrock],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.dirt, Blocks.hotrock, Blocks.hotrock, Blocks.magmarock, Blocks.magmarock, Blocks.magmarock, Blocks.magmarock, Blocks.hotrock, Blocks.hotrock, Blocks.hotrock],
        [Blocks.slag, Blocks.darksand, Blocks.darksand, Blocks.mud, Blocks.mud, Blocks.hotrock, Blocks.hotrock, Blocks.magmarock, Blocks.magmarock, Blocks.hotrock, Blocks.hotrock, Blocks.hotrock, Blocks.hotrock],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.dirt, Blocks.grass, Blocks.dirt, Blocks.magmarock, Blocks.magmarock, Blocks.hotrock, Blocks.hotrock, Blocks.hotrock, Blocks.hotrock, Blocks.hotrock],
        [Blocks.darksand, Blocks.darksand, Blocks.magmarock, Blocks.hotrock, Blocks.magmarock, Blocks.magmarock, Blocks.magmarock, Blocks.magmarock, Blocks.hotrock, Blocks.hotrock, Blocks.hotrock, Blocks.hotrock, Blocks.hotrock]
    ];
    const scorgexGenerator = extend(SerpuloPlanetGenerator, {
        getBlock(p) {
            this.arr = arrss;
            this.super$getBlock(p);
        }
    });

    valkyriaGenerator.arr = arrs;
    const valkyria = new Planet("valkyria", purity, 4, 0.8);
    valkyria.generator = valkyriaGenerator;
    valkyria.mesh = new HexMesh(valkyria, 6);
    valkyria.orbitRadius = 7;
    valkyria.orbitTime = 1.5 * 60;
    valkyria.rotateTime = 60;
    valkyria.bloom = true;
    valkyria.accessible = true;
    valkyria.hasAtmosphere = true;
    valkyria.atmosphereColor = Blocks.moss.mapColor.cpy().mul(Liquids.slag.color);
    valkyria.atmosphereRadIn = 0.075;
    valkyria.atmosphereRadOut = 0.3;
    valkyria.startSector = 1;
    valkyria.localizedName = "[pink]Valkyria";

    const scorgex = new Planet("scorgex", subzero, 4, 1);
    scorgex.generator = scorgexGenerator;
    scorgex.mesh = new HexMesh(scorgex, 8);
    scorgex.orbitRadius = 10;
    scorgex.orbitTime = 1.5 * 60;
    scorgex.rotateTime = 60;
    scorgex.bloom = true;
    scorgex.accessible = true;
    scorgex.hasAtmosphere = true;
    scorgex.atmosphereColor = Liquids.slag.color.cpy().mul(Liquids.slag.color);
    scorgex.atmosphereRadIn = 0.001;
    scorgex.atmosphereRadOut = 0.5;
    scorgex.startSector = 1;
    scorgex.localizedName = "[orange]Scorgex";

    const demetria = new Planet("demetria", scorgex, 4, 0.5);
    demetria.generator = scorgexGenerator;
    demetria.mesh = new HexMesh(demetria, 3);
    demetria.orbitRadius = 3;
    demetria.orbitTime = 1.5 * 30;
    demetria.rotateTime = 25;
    demetria.bloom = true;
    demetria.accessible = true;
    demetria.hasAtmosphere = true;
    demetria.atmosphereColor = Liquids.oil.color.cpy().mul(Blocks.basalt.mapColor);
    demetria.atmosphereRadIn = 0.01;
    demetria.atmosphereRadOut = 0.5;
    demetria.startSector = 1;
    demetria.localizedName = "[darkgray]Demetria";

    const arcticus = new Planet("arcticus", subzero, 3, 0.7);
    arcticus.generator = valkyriaGenerator;
    arcticus.mesh = new HexMesh(arcticus, 6);
    arcticus.orbitRadius = 7;
    arcticus.orbitTime = 1.5 * 60;
    arcticus.rotateTime = 120;
    arcticus.bloom = true;
    arcticus.accessible = true;
    arcticus.hasAtmosphere = true;
    arcticus.atmosphereColor = Liquids.cryofluid.color.cpy().mul(Blocks.sandWater.mapColor);
    arcticus.atmosphereRadIn = 0.075;
    arcticus.atmosphereRadOut = 0.3;
    arcticus.startSector = 1;
    arcticus.localizedName = "[cyan]Arcticus";


    Planets.sun.accessible = true;
    Planets.sun.localizedName = "[coral]Sun"








    const antarcticaSurvival = new SectorPreset("antarcticaSurvival", scorgex, 1);
    antarcticaSurvival.captureWave = 60;
    antarcticaSurvival.localizedName = "Antarctica Survival";
    antarcticaSurvival.difficulty = 6;
    antarcticaSurvival.alwaysUnlocked = true;

    const centralBase = new SectorPreset("centralBase", valkyria, 6);
    centralBase.captureWave = 55;
    centralBase.localizedName = "Centeral Base";
    centralBase.difficulty = 6;
    centralBase.alwaysUnlocked = true;


    const desertCanyon = new SectorPreset("desertCanyon", valkyria, 7);
    desertCanyon.captureWave = 40;
    desertCanyon.localizedName = "Desert Canyon";
    desertCanyon.difficulty = 5;
    desertCanyon.alwaysUnlocked = true;

    const iceBreak = new SectorPreset("iceBreak", scorgex, 2);
    iceBreak.localizedName = "Ice Break";
    iceBreak.difficulty = 8;
    iceBreak.alwaysUnlocked = true;

    const polarOutpost = new SectorPreset("polarOutpost", scorgex, 3);
    polarOutpost.localizedName = "Polar Outpost";
    polarOutpost.difficulty = 5;
    polarOutpost.alwaysUnlocked = true;

    const saltirekArchipelago = new SectorPreset("saltirekArchipelago", Planets.serpulo, 4);
    saltirekArchipelago.localizedName = "Saltirek Archipelago";
    saltirekArchipelago.difficulty = 5;
    saltirekArchipelago.alwaysUnlocked = true;

    const saltirekLanding = new SectorPreset("saltirekLanding", Planets.serpulo, 5);
    saltirekLanding.localizedName = "Saltirek Landing";
    saltirekLanding.difficulty = 7;
    saltirekLanding.alwaysUnlocked = true;

    const sporeErosion = new SectorPreset("sporeErosion", Planets.serpulo, 8);
    sporeErosion.localizedName = "Spore Erosion";
    sporeErosion.difficulty = 8;
    sporeErosion.alwaysUnlocked = true;

});
