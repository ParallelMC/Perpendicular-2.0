// priority: 100

//Perpare for comment spam. -Morg
ServerEvents.recipes(event => {
  // By recipe ID
  [
    // -----------------
    // Bugged items
    // -----------------
    'crittersandcompanions:grappling_hook',

    // -----------------
    // WIP and deprecated items
    // -----------------
    'enderio:glider_wing',
    //'ad_astra_giselle_addon:crafting/gravity_normalizer', //No more ad astra as a whole

    // -----------------
    // Nerfs
    // -----------------

    //This thing is really cool, But for every one placed it creates a dim just named a UUID (Like how compact did.); And it has alot of rendering crashes last I checked.
    'ars_nouveau:planarium',
    
    // Disable oxidization through smelting
    ///essentials:copper_oxidize/, //<M-R>

    // Disable Essentials fertile soil
    ///essentials:fertile_soil/, //<M-R>

    // Remove some IF infinity items
    /* //<M-R> 
     industrialforegoing:dissolution_chamber/infinity_hammer',
    'industrialforegoing:dissolution_chamber/infinity_trident',
    'industrialforegoing:dissolution_chamber/infinity_launcher',
    'industrialforegoing:dissolution_chamber/infinity_nuke',
    */
    
    // New recipe for mob imprisonment tool
    //'industrialforegoing:mob_imprisonment_tool', //<M-R> 

    // Remove chunkloader blocks
    'pneumaticcraft:chunkloader_upgrade',
    'ae2:spatial_anchor',

    // Gating flux blocks behind steel
    'fluxnetworks:flux_block',

    // -----------------
    // Duplicate recipes
    // -----------------

    // Vanilla items
    //'aether:aether_saddle', //<M-R>
    //'essentials:name_tag', //<M-R>
    //'essentials:piston', //<M-R>
    'spelunkery:leather', // Use salt for jerky instead
    'minecraft:gunpowder',

    // Gears
    'enderio:iron_gear',
    /* //<M-R> 
    'industrialforegoing:diamond_gear',
    'industrialforegoing:gold_gear',
    'industrialforegoing:iron_gear',
    *?

    // Crossroads materials
    /* //<M-R>
    'crossroads:base_materials/copper_ingot_nugg',
    'crossroads:base_materials/bronze_ingot_block',
    'crossroads:base_materials/bronze_ingot_nugg',
    'crossroads:base_materials/ruby_block',
    'crossroads:base_materials/tin_ingot_block',
    'crossroads:base_materials/ruby',
    'crossroads:base_materials/bronze_block',
    'crossroads:base_materials/copper_nugget',
    'crossroads:base_materials/bronze_nugget',
    'crossroads:base_materials/tin_nugget',
    'crossroads:base_materials/tin_block',
    'crossroads:base_materials/tin_ingot_nugg',
    'crossroads:base_materials/raw_tin_block',
    'crossroads:base_materials/tin_raw_block',
    'crossroads:base_materials/bronze_alloy_ingot',
    */

    // -----------------
    // Unification
    // -----------------

    // Wrenches
    'ae2:tools/certus_quartz_wrench',
    'ae2:tools/nether_quartz_wrench',
    'enderio:yeta_wrench',
    //'etcetera:wrench', //<M-R>

    // Cheeses 
    /* //<M-R>
    'tconstruct:common/cheese_ingot_from_block',
    'tconstruct:smeltery/casting/cheese_ingot_gold_cast',
    'tconstruct:smeltery/casting/cheese_ingot_sand_cast',
    'refurbished_furniture:cheese',
    */

    // Flour
    'enderio:sag_milling/wheat',
    'enderio:alloy_smelting/cake_base',
    'enderio:alloy_smelting/cookie',
    //'refurbished_furniture:combining/wheat_flour', //<M-R>

    // Dough
    //'refurbished_furniture:dough', //<M-R>
    'minecraft:farmersdelight.dough', //What even is this?
    'enderio:smelting/create/smelting/bread',

    // Toast
    // 'refurbished_furniture:toasting/toast', //<M-R>

    // Eggs
    'naturalist:cooked_egg_from_campfire_cooking',
    'naturalist:cooked_egg_from_smoking',
    'naturalist:cooked_egg',

    // Pancakes
    'supplementaries:pancake',
    //'autumnity:pancake', //<M-R>

    // Salt
    /* //<M-R>
    'refurbished_furniture:baking/sea_salt', //<M-R>
    'meadow:alpine_salt_from_smelting_alpine_salt_ore', //<M-R>
    'meadow:alpine_salt_from_blasting_alpine_salt_ore', //<M-R>
    'enderio:smelting/meadow/alpine_salt_from_smelting_alpine_salt_ore', //<M-R>
    'meadow:cooking_pot/alpine_salt_from_limestone', //<M-R>
    'meadow:cooking_pot/alpine_salt_from_calcite', //<M-R>
    */
    'spelunkery:rock_salt_block',
    'spelunkery:rock_salt_stairs',
    'spelunkery:rock_salt_stairs_from_stonecutting',
    'spelunkery:rock_salt_slab',
    'spelunkery:rock_salt_slab_from_stonecutting',
    'spelunkery:rock_salt_wall',
    'spelunkery:rock_salt_wall_from_stonecutting',
    //'v_slab_compat:spelunkery/rock_salt', //<M-R>
    //'v_slab_compat:spelunkery/rock_salt_stonecutter', //<M-R>

    // Knives
    /* //<M-R>
    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',
    'aquaculture:iron_fillet_knife',
    'aquaculture:gold_fillet_knife',
    'aquaculture:diamond_fillet_knife',
    //'refurbished_furniture:knife',

    // MrCrayfish cutting board recipes
    /refurbished_furniture:slicing/,
    'refurbished_furniture:combining/glow_berry_jam_toast',
    'refurbished_furniture:combining/sweet_berry_jam_toast',
    'refurbished_furniture:combining/raw_meatlovers_pizza',
    'refurbished_furniture:combining/raw_vegetable_pizza',
    'refurbished_furniture:combining/cheese_sandwich',
    */

    // Meadow woodcutting recipes
    // /meadow:wood_cutter/, //<M-R>

    // Storage blocks
    'vinery:apple_bag',
    'vinery:apples',
    /* //<M-R>
    'thermal:storage/apple_block',
    'thermal:storage/apple_from_block',
    'thermal:storage/potato_block',
    'thermal:storage/potato_from_block',
    'thermal:storage/carrot_block',
    'thermal:storage/carrot_from_block',
    'thermal:storage/beetroot_block',
    'thermal:storage/beetroot_from_block',
    'thermal:storage/sugar_cane_block',
    'thermal:storage/sugar_cane_from_block',
    'thermal:storage/gunpowder_block',
    'thermal:storage/gunpowder_from_block',
    */
    'caverns_and_chasms:rotten_flesh_block',
    'caverns_and_chasms:rotten_flesh',

    // Sulfur
    'spelunkery:sulfur_block',

    // Gold bars
    'quark:building/crafting/gold_bars',
    /* //<M-R>
    'tconstruct:common/gold_bars',
    'tconstruct:smeltery/casting/metal/gold/bars',
    'tconstruct:smeltery/melting/metal/gold/nugget_3',
    */

    // Building blocks
    'netherexp:cooking/cracked_quartz_bricks',
    'netherexp:twisting_polished_blackstone_bricks',
    'netherexp:weeping_polished_blackstone_bricks',
    //'endergetic:cracked_end_stone_bricks', //<M-R>
    //'sullysmod:grindstone_polishing/cataclysm/polished_endstone_from_endstone', //<M-R>
    /somemoreblocks.*shingles/,
    ///bbb:.*ladder/, //<M-R>
    'twigs:cracked_bricks',
    'twigs:cracked_polished_tuff_bricks',
    'twigs:cracked_polished_calcite_bricks',
    'somemoreblocks:amethyst_bricks',
    'somemoreblocks:cracked_amethyst_bricks',
    'somemoreblocks:cut_amethyst',
    'somemoreblocks:cracked_cut_amethyst',
    'somemoreblocks:cracked_mud_bricks',
    'architects_palette:packed_ice_pillar',
    'architects_palette:chiseles_packed_ice',

    // Quark azalea removal
    /railways:track_quark_azalea/,
    /dramaticdoors:.*quark_azalea/,
    /everycomp:.*quark.*azalea/,
    /productivebees:.*quark_azalea/,
    /supplementaries:quark.*azalea/,
    'shutter:azalea_quark_shutter',

    // Copper blocks
    /friendsandfoes:.*copper_button/,
    /friendsandfoes:.*lightning_rod/,
    /twigs:.*copper_pillar/,

    //Misc entities
    //'tconstruct:gadgets/fancy_frame/clear', //<M-R>
    'railways:jukeboxcart',

    // Rope
    'beautify:rope',
    //'bbb:rope', //<M-R>
    //'meadow:climbing_rope_topmount', //<M-R>

    // Misc decor
    'supplementaries:lunch_basket',

    // Equipment
    //'thermal:tools/satchel', //<M-R>
    
    // XP
    //'thermal:machines/centrifuge/centrifuge_experience_bottle', //<M-R>

    // Old Crossroads recipes with molten metal //<M-R>
    /*'crossroads:crucible/dust_copper',
    'crossroads:crucible/ingot_copper',
    'crossroads:crucible/nugget_copper',
    'crossroads:crucible/raw_copper',
    'crossroads:ind_blast_furnace/clump_copper',
    'crossroads:ind_blast_furnace/gravel_copper',
    'crossroads:ind_blast_furnace/raw_copper',

    'crossroads:crucible/dust_iron',
    'crossroads:crucible/ingot_iron',
    'crossroads:crucible/nugget_iron',
    'crossroads:crucible/raw_iron',
    'crossroads:crucible/iron_door',
    'crossroads:crucible/iron_trapdoor',
    'crossroads:crucible/iron_pressure_plate',
    'crossroads:crucible/cauldron',
    'crossroads:crucible/bucket',
    'crossroads:crucible/minecart',
    'crossroads:ind_blast_furnace/clump_iron',
    'crossroads:ind_blast_furnace/gravel_iron',
    'crossroads:ind_blast_furnace/raw_iron',
    'crossroads:fluid_cooling/molten_iron',

    'crossroads:crucible/dust_gold',
    'crossroads:crucible/ingot_gold',
    'crossroads:crucible/nugget_gold',
    'crossroads:crucible/raw_gold',
    'crossroads:crucible/gold_pressure_plate',
    'crossroads:ind_blast_furnace/clump_gold',
    'crossroads:ind_blast_furnace/gravel_gold',
    'crossroads:ind_blast_furnace/raw_gold',

    'crossroads:crucible/dust_tin',
    'crossroads:crucible/ingot_tin',
    'crossroads:crucible/nugget_tin',
    'crossroads:crucible/raw_tin',
    'crossroads:ind_blast_furnace/clump_tin',
    'crossroads:ind_blast_furnace/gravel_tin',
    'crossroads:ind_blast_furnace/raw_tin',
    */
    // Rubber
    /* //<M-R>
    'thermal:rubber_3',
    'thermal:rubber_from_vine', 
    'thermal:rubber_from_dandelion',
    'industrialforegoing:dryrubber',
    */

    // Silver equipment //<M-R>
    /*'eidolon:silver_helmet',
    'eidolon:silver_chestplate',
    'eidolon:silver_leggings',
    'eidolon:silver_boots',
    'eidolon:silver_sword',
    'eidolon:silver_pickaxe',
    'eidolon:silver_axe',
    'eidolon:silver_shovel',
    'eidolon:silver_hoe',
    */
    // Milk
    'productivebees:milk_bucket',
    'neapolitan:milk/milk_bottles_from_bucket',
    'neapolitan:milk/milk_bucket_from_bottles',
    'create:filling/compat/farmersdelight/milk_bottle',
    'brewinandchewin:filling/create/milk_bottle',
    'productivebees:bottler/milk_bottle',

    // Oil //<M-R>
    //'productivebees:create/mixing/ad_astra/honeycomb_oily',
    //'productivebees:create/mixing/thermal/honeycomb_oily',
    //'ad_astra_giselle_addon:compat/industrial_foregoing/laser_drill_fluid/oil',

    // Honey
    /* //<M-R>
    'the_bumblezone:honey_bucket/to_honey_bottle',
    'the_bumblezone:honey_bucket/to_honey_block',
    'the_bumblezone:honey_bucket/from_honey_block',
    'the_bumblezone:honey_bucket/from_honey_bottle',
    */
    'productivebees:honey_bucket',
    'productivebees:honey_bucket_from_block',
    'productivebees:honey_bucket_to_honey_block',
    /* //<M-R>
    'productivebees:tconstruct/block_to_honey',
    'productivebees:tconstruct/honey_to_block',
    'productivebees:thermal/machine/chiller/honey_to_honey_block',
    'tconstruct:smeltery/melting/slime/honey_block',
    'tconstruct:smeltery/entity_melting/bee',
    */

    // Clean up bee processing recipes that didn't get automatically removed
    'productivebees:centrifuge/materials/honeycomb_plastic',
    'productivebees:centrifuge/materials/honeycomb_silicon',
    'productivebees:centrifuge/fluids/honeycomb_tea',
    'productivebees:centrifuge/fluids/honeycomb_chocolate',
    'productivebees:centrifuge/ae2/honeycomb_fluix',
    'productivebees:centrifuge/ars_nouveau/honeycomb_arcane',
    /* //<M-R>
    'productivebees:centrifuge/botania/honeycomb_elementium',
    'productivebees:centrifuge/botania/honeycomb_manasteel',
    'productivebees:centrifuge/botania/honeycomb_terrasteel',
    */
    'productivebees:centrifuge/pneumaticcraft/honeycomb_compressed_iron',
    'productivebees:centrifuge/industrialforegoing/honeycomb_pink_slimy',
    /* //<M-R>
    'productivebees:centrifuge/thermal/honeycomb_destabilized_redstone',
    'productivebees:centrifuge/thermal/honeycomb_resonant_ender',
    'productivebees:centrifuge/thermal/honeycomb_energized_glowstone',
    'productivebees:centrifuge/tconstruct/honeycomb_slimesteel',
    'productivebees:centrifuge/tconstruct/honeycomb_soulsteel',
    'productivebees:centrifuge/tconstruct/honeycomb_pig_iron',
    'productivebees:centrifuge/tconstruct/honeycomb_queens_slime',
    'productivebees:centrifuge/tconstruct/honeycomb_manyullyn',
    'productivebees:centrifuge/tconstruct/honeycomb_amethyst_bronze',
    'productivebees:centrifuge/tconstruct/honeycomb_rose_gold',
    'productivebees:centrifuge/tconstruct/honeycomb_hepatizon',
    'productivebees:centrifuge/tconstruct/honeycomb_knightslime',
    */
    'productivebees:create/mixing/honeycomb_ether_gas',
    'productivebees:create/mixing/fluids/honeycomb_tea',
    'productivebees:create/mixing/fluids/honeycomb_chocolate',
    'productivebees:create/mixing/alloys/honeycomb_signalum',
    'productivebees:create/mixing/alloys/honeycomb_brazen',
    'productivebees:create/mixing/alloys/honeycomb_enderium',
    'productivebees:create/mixing/alloys/honeycomb_electrum',
    'productivebees:create/mixing/alloys/honeycomb_constantan',
    'productivebees:create/mixing/alloys/honeycomb_lumium',
    'productivebees:create/mixing/alloys/honeycomb_bronze',
    'productivebees:create/mixing/alloys/honeycomb_invar',
    'productivebees:centrifuge/ae2/honeycomb_silicon',
    'productivebees:create/mixing/ars_nouveau/honeycomb_arcane',
    /* //<M-R>
    'productivebees:create/mixing/botania/honeycomb_elementium',
    'productivebees:create/mixing/botania/honeycomb_manasteel',
    'productivebees:create/mixing/botania/honeycomb_terrasteel',
    */
    'productivebees:create/mixing/create_enchantment_industry/honeycomb_hyper_experience',
    /* //<M-R>
    /* 
    'productivebees:create/mixing/eidolon/honeycomb_arcane_gold',
    'productivebees:create/mixing/eidolon/honeycomb_pewter',
    'productivebees:create/mixing/eidolon/honeycomb_soul_shard',
    */
    'productivebees:create/mixing/pneumaticcraft/honeycomb_compressed_iron',
    /* //<M-R>
    'productivebees:create/mixing/thermal/honeycomb_destabilized_redstone',
    'productivebees:create/mixing/thermal/honeycomb_resonant_ender',
    'productivebees:create/mixing/thermal/honeycomb_energized_glowstone',
    'productivebees:create/mixing/tconstruct/honeycomb_slimesteel',
    'productivebees:create/mixing/tconstruct/honeycomb_soulsteel',
    'productivebees:create/mixing/tconstruct/honeycomb_pig_iron',
    'productivebees:create/mixing/tconstruct/honeycomb_queens_slime',
    'productivebees:create/mixing/tconstruct/honeycomb_manyullyn',
    'productivebees:create/mixing/tconstruct/honeycomb_amethyst_bronze',    
    'productivebees:create/mixing/tconstruct/honeycomb_rose_gold',
    'productivebees:create/mixing/tconstruct/honeycomb_hepatizon',
    'productivebees:create/mixing/tconstruct/honeycomb_knightslime',
    'productivebees:tconstruct/honeycomb/aluminum',
    'productivebees:tconstruct/honeycomb/amethyst_bronze',
    'productivebees:tconstruct/honeycomb/brass',
    'productivebees:tconstruct/honeycomb/aluminum',
    'productivebees:tconstruct/honeycomb/hepatizon',
    'productivebees:tconstruct/honeycomb/knightslime',
    'productivebees:tconstruct/honeycomb/manyullyn',
    'productivebees:tconstruct/honeycomb/pig_iron',
    'productivebees:tconstruct/honeycomb/rose_gold',
    'productivebees:tconstruct/honeycomb/slimesteel',
    'productivebees:tconstruct/honeycomb/soulsteel',
    */

    // Candy items
    'create_confectionery:candy_cane_block_recipe',
    'create_confectionery:candy_cane_recipe_2',
    'create_confectionery:gingerbread_block_recipe',
    'create_confectionery:gingerbread_stairs_recipe',
    'create_confectionery:gingerbread_stairs_recipe_2',
    'create_confectionery:gingerbread_slab_recipe',
    'create_confectionery:gingerbread_slab_recipe_2',
    'create_confectionery:gingerbread_man_recipe',

    // Slag
    //'enderio:smelting/thermal/rockwool/white_rockwool_from_smelting', //<M-R>

    // Laser drill
    // each catalyst can support only one type of entity, so original recipe needs to be removed
    //'industrialforegoing:laser_drill_fluid/ether_gas', //<M-R>

  ].forEach((recipeID) => event.remove({id: recipeID}));

  // By output
  [
    // Toast
    'mynethersdelight:toasts',

    // Building blocks
    'netherexp:nether_brick_pillar',
    'netherexp:polished_blackstone_pillar',
    'cataclysm:blackstone_pillar',
    'cataclysm:polished_end_stone',
    'cataclysm:polished_end_stone_slab',
    'cataclysm:polished_end_stone_stairs',
    //'v_slab_compat:cataclysm/polished_end_stone_vertical_slab', //<M-R>
    'cataclysm:chiseled_end_stone_bricks',
    'cataclysm:end_stone_pillar',
    'architects_palette:chiseled_end_stone_bricks',
    'architects_palette:cracked_end_stone_bricks',
    //'endergetic:chiseled_end_stone_bricks', //<M-R>
    'cataclysm:stone_pillar',
    'cataclysm:stone_tiles',
    'cataclysm:stone_tile_slab',
    'cataclysm:stone_tile_stairs',
    'cataclysm:stone_tile_wall',
    //'v_slab_compat:cataclysm/stone_tile_vertical_slab', //<M-R>
    /* //<M-R>
    'bbb:stone_tiles',
    'bbb:stone_tile_stairs',
    'bbb:stone_tile_slab',
    'bbb:stone_tile_layer',
    */
    'caverns_and_chasms:cobblestone_bricks',
    'caverns_and_chasms:cobblestone_brick_stairs',
    'caverns_and_chasms:cobblestone_brick_slab',
    'caverns_and_chasms:cobblestone_brick_wall',
    //'v_slab_compat:caverns_and_chasms/cobblestone_brick_vertical_slab', //<M-R>
    'caverns_and_chasms:mossy_cobblestone_bricks',
    'caverns_and_chasms:mossy_cobblestone_brick_stairs',
    'caverns_and_chasms:mossy_cobblestone_brick_slab',
    'caverns_and_chasms:mossy_cobblestone_brick_wall',
    //'v_slab_compat:caverns_and_chasms/mossy_cobblestone_brick_vertical_slab', //<M-R>
    'twigs:mossy_bricks',
    'twigs:mossy_brick_stairs',
    'twigs:mossy_brick_slab',
    'twigs:mossy_brick_wall',
    //'v_slab_compat:twigs/mossy_brick_vertical_slab', //<M-R>
    'create:diorite_pillar',
    'create:cut_diorite_bricks',
    'create:cut_diorite_brick_stairs',
    'create:cut_diorite_brick_slab',
    'create:cut_diorite_brick_wall',
    //'v_slab_compat:create/cut_diorite_brick_vertical_slab', //<M-R>
    'create:granite_pillar',
    'create:cut_granite_bricks',
    'create:cut_granite_brick_stairs',
    'create:cut_granite_brick_slab',
    'create:cut_granite_brick_wall',
    //'v_slab_compat:create/cut_granite_brick_vertical_slab', //<M-R>
    'create:andesite_pillar',
    'create:cut_andesite_bricks',
    'create:cut_andesite_brick_stairs',
    'create:cut_andesite_brick_slab',
    'create:cut_andesite_brick_wall',
    //'v_slab_compat:create/cut_granite_brick_vertical_slab', //<M-R>
    'architects_palette:dripstone_pillar',
    'create:polished_cut_dripstone',
    'create:polished_cut_dripstone_stairs',
    'create:polished_cut_dripstone_slab',
    'create:polished_cut_dripstone_wall',
    'create:dripstone_pillar',
    'create:cut_dripstone_bricks',
    'create:cut_dripstone_brick_stairs',
    'create:cut_dripstone_brick_slab',
    'create:cut_dripstone_brick_wall',
    //'v_slab_compat:create/cut_dripstone_brick_vertical_slab', //<M-R>
    /* //<M-R>
    'caverns_and_chasms:tuff_slab',
    'caverns_and_chasms:tuff_stairs',
    'caverns_and_chasms:tuff_wall',
   */
    'architects_palette:tuff_bricks',
    'architects_palette:tuff_brick_slab',
    'architects_palette:tuff_brick_vertical_slab',
    'architects_palette:tuff_brick_stairs',
    'architects_palette:tuff_brick_wall',
    'create:cut_tuff_bricks',
    'create:cut_tuff_brick_stairs',
    'create:cut_tuff_brick_slab',
    'create:cut_tuff_brick_wall',
    //'v_slab_compat:create/cut_tuff_brick_vertical_slab', //<M-R>
    'twigs:polished_tuff_bricks',
    'twigs:polished_tuff_brick_stairs',
    'twigs:polished_tuff_brick_slab',
    'twigs:polished_tuff_brick_wall',
    //'v_slab_compat:twigs/polished_tuff_brick_vertical_slab', //<M-R>
    'caverns_and_chasms:polished_tuff',
    'caverns_and_chasms:polished_tuff_stairs',
    'caverns_and_chasms:polished_tuff_slab',
    'create:polished_cut_tuff',
    'create:polished_cut_tuff_stairs',
    'create:polished_cut_tuff_slab',
    'create:polished_cut_tuff_wall',
    //'v_slab_compat:create/polished_cut_tuff_vertical_slab', //<M-R>
    'twigs:polished_tuff',
    'twigs:polished_tuff_stairs',
    'twigs:polished_tuff_slab',
    'architects_palette:tuff_pillar',
    'create:tuff_pillar',
    'create:cut_calcite_bricks',
    'create:cut_calcite_brick_stairs',
    'create:cut_calcite_brick_slab',
    'create:cut_calcite_brick_wall',
    //'v_slab_compat:create/cut_calcite_brick_vertical_slab', //<M-R>
    'twigs:polished_calcite_bricks',
    'twigs:polished_calcite_brick_stairs',
    'twigs:polished_calcite_brick_slab',
    'twigs:polished_calcite_brick_wall',
    //'v_slab_compat:twigs/polished_calcite_brick_vertical_slab', //<M-R>
    'caverns_and_chasms:polished_calcite',
    'caverns_and_chasms:polished_calcite_stairs',
    'caverns_and_chasms:polished_calcite_slab',
    'create:polished_cut_calcite',
    'create:polished_cut_calcite_stairs',
    'create:polished_cut_calcite_slab',
    'create:polished_cut_calcite_wall',
    //'v_slab_compat:create/polished_cut_calcite_vertical_slab', //<M-R>
    'twigs:polished_calcite',
    'twigs:polished_calcite_stairs',
    'twigs:polished_calcite_slab',
    'architects_palette:calcite_pillar',
    'create:calcite_pillar',
    'architects_palette:polished_packed_ice',
    'architects_palette:polished_packed_ice_slab',
    'architects_palette:polished_packed_ice_vertical_slab',
    'architects_palette:polished_packed_ice_stairs',
    'architects_palette:polished_packed_ice_wall',
    
    // Items for removed mobs
    //'sullysmod:cooked_lanternfish', //<M-R>

  ].forEach((itemID) => event.remove({output: itemID}));

});
