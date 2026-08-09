// priority: 10

ServerEvents.recipes(event => {

    // -----------------
    // Fluid extractor
    // -----------------

    event.custom({
        "type": "industrialforegoing:fluid_extractor",
        "breakChance": 0.01,
        "defaultRecipe": false,
        "input": {
            "item": "thermal:rubberwood_log"
        },
        "output": "{Amount:5,FluidName:\"industrialforegoing:latex\"}",
        "result": "thermal:stripped_rubberwood_log"
    }).id(`perpendicular:fluid_extractor/rubberwood`);


    // -----------------
    // Laser drill
    // -----------------

    event.custom({
        "type": "industrialforegoing:laser_drill_fluid",
        "catalyst": {
            "item": "industrialforegoing:laser_lens7"
        },
        "entity": "minecraft:empty",
        "output": "{Amount:50,FluidName:\"pneumaticcraft:oil\"}",
        "pointer": 0,
        "rarity": [
            {
                "blacklist": {},
                "depth_max": 60,
                "depth_min": 20,
                "weight": 8,
                "whitelist": {
                    "type": "minecraft:worldgen/biome",
                    "values": [
                        "minecraft:ocean",
                        "minecraft:cold_ocean",
                        "minecraft:deep_cold_ocean",
                        "minecraft:deep_frozen_ocean",
                        "minecraft:deep_lukewarm_ocean",
                        "minecraft:warm_ocean"
                    ]
                }
            }
        ]
    }).id(`perpendicular:laser_drill_fluid/oil`);


    event.custom({
        "type": "industrialforegoing:laser_drill_fluid",
        "catalyst": {
            "item": "industrialforegoing:laser_lens10"
        },
        "entity": "progressivebosses:wither",
        "output": "{Amount:10,FluidName:\"industrialforegoing:ether_gas\"}",
        "pointer": 0,
        "rarity": [
            {
            "blacklist": {},
            "depth_max": 256,
            "depth_min": -64,
            "weight": 8,
            "whitelist": {}
            }
        ]
    }).id(`perpendicular:laser_drill_fluid/ether_gas`);
})