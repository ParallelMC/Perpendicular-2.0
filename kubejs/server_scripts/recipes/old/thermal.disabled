// priority: 10

ServerEvents.recipes(event => {

    // -----------------
    // Pulverizer
    // -----------------
    const PULVERIZER_PREFIX = 'perpendicular:pulverizer/';

    // Salt
    event.recipes.thermal.pulverizer(Item.of('spelunkery:salt').withChance(2.25), 'galosphere:pink_salt_shard').id(`${PULVERIZER_PREFIX}salt`);


    // -----------------
    // Centrifuge
    // -----------------

    const CENTRIFUGE_PREFIX = 'perpendicular:centrifuge/';
    event.recipes.thermal.centrifuge(['minecraft:glass_bottle', Fluid.of('pneumaticcraft:memory_essence', 250)], 'minecraft:experience_bottle').id(`${CENTRIFUGE_PREFIX}experience_bottle`);

    // -----------------
    // Alchemical imbuer
    // -----------------

    const BREWER_PREFIX = 'perpendicular:brewer/';

    // -----------------
    // Arboreal extractor
    // -----------------

    const EXTRACTOR_PREFIX = 'perpendicular:tree_extractor/';

    // Replace default recipes with IF latex
    // The Thermal kubejs integration throws an error so we will use datapack files instead
    /*
    event.custom({
        "type": "thermal:tree_extractor",
        "trunk": {
            "Name": "minecraft:jungle_log",
            "Properties": {
                "axis": "y"
            }
        },
        "leaves": {
            "Name": "minecraft:jungle_leaves",
            "Properties": {
                "persistent": "false"
            }
        },
        "sapling": "minecraft:jungle_sapling",
        "min_height": 5,
        "max_height": 16,
        "min_leaves": 16,
        "max_leaves": 24,
        "result": {
            "fluid": "industrialforegoing:latex",
            "amount": 15
        }
    }).id(`${EXTRACTOR_PREFIX}jungle`);

    event.custom({
        "type": "thermal:tree_extractor",
        "trunk": {
            "Name": "thermal:rubberwood_log",
            "Properties": {
                "axis": "y"
            }
        },
        "leaves": {
            "Name": "thermal:rubberwood_leaves",
            "Properties": {
                "persistent": "false"
            }
        },
        "sapling": "thermal:rubberwood_sapling",
        "min_height": 4,
        "max_height": 16,
        "min_leaves": 16,
        "max_leaves": 24,
        "result": {
            "fluid": "industrialforegoing:latex",
            "amount": 30
        }
    }).id(`${EXTRACTOR_PREFIX}rubberwood`);
    */
})