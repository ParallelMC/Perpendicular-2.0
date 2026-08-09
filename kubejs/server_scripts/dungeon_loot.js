LootJS.modifiers((event) => {
    const DUNGEON_LOOT_TABLES = [
        'minecraft:chests/simple_dungeon',
        'minecraft:chests/jungle_temple',
        'minecraft:chests/abandoned_mineshaft',
        'minecraft:chests/bastion_treasure',
        'minecraft:chests/desert_pyramid',
        'minecraft:chests/end_city_treasure',
        'minecraft:chests/ruined_portal',
        'minecraft:chests/pillager_outpost',
        'minecraft:chests/nether_bridge',
        'minecraft:chests/stronghold_corridor',
        'minecraft:chests/stronghold_crossing',
        'minecraft:chests/stronghold_library',
        'minecraft:chests/woodland_mansion',
        'minecraft:chests/underwater_ruin_big',
        'minecraft:chests/underwater_ruin_small'
    ];

    DUNGEON_LOOT_TABLES.forEach((lootTable) => event.addTableModifier(lootTable).removeLoot([
        // Ars Nouveau
        'ars_nouveau:source_gem',
        'ars_nouveau:wilden_horn',
        'ars_nouveau:wilden_spike',
        'ars_nouveau:wilden_wing',
        'ars_nouveau:starbuncle_shards',
        'ars_nouveau:whirlisprig_shards',
        'ars_nouveau:drygmy_shard',
        'ars_nouveau:wixie_shards',
        'ars_nouveau:amplify_arrow',
        'ars_nouveau:split_arrow',
        'ars_nouveau:pierce_arrow',
        /ars_nouveau:ritual/,
        // Botania
        //'botania:manasteel_ingot', //Botania isn't in the pack.
        //'botania:lexicon',
        // Ender IO
        'enderio:dark_steel_ingot',
        //'enderio:wood_gear', //Wood gear is no-more in enderio
        'enderio:dark_steel_sword',
        // Sophisticated Backpacks
        
        'sophisticatedbackpacks:backpack', //Yall are evil for diableding these, At least let us have the basic ones... Get disabled-disabled lol.
        'sophisticatedbackpacks:copper_backpack',
        //'sophisticatedbackpacks:iron_backpack',
        //'sophisticatedbackpacks:gold_backpack'
    ]));

    event.addTableModifier('minecraft:chests/simple_dungeon').pool((p) => {
        p.addEntry(LootEntry.of("supplementaries:rope").setCount([2, 12]));
    })

    event.addTableModifier('minecraft:chests/abandoned_mineshaft').pool((p) => {
        p.addEntry(LootEntry.of("supplementaries:rope").setCount([2, 12]));
    })
});
