// priority: 100

ServerEvents.tags("worldgen/biome", (event) => {

  // Ice maze on Glacio
  //event.add("aquamirae:ice_maze", "ad_astra:glacio_ice_peaks") //<M-R>

  // Prevent Ad Astra oil well from spawning
  //event.removeAll("ad_astra:has_structure/oil_well") //<M-R>


  // -----------------
  // CUSTOM BIOME TAGS
  // -----------------

  // Create new birch forest biome tag
  event.add('perpendicular:is_birch_forest', [
    /* //<M-R>
    'biomeswevegone:aspen_boreal',
    'biomeswevegone:howling_peaks',
    'biomeswevegone:overgrowth_woodlands',
    'biomeswevegone:temperate_grove',
    */
    'minecraft:birch_forest',
	  'minecraft:old_growth_birch_forest'
  ])
  
  // Create new meadow biome tag
  event.add('perpendicular:is_meadow', [
    /* //<M-R>
    'biomeswevegone:allium_shrubland',
    'biomeswevegone:coconino_meadow',
    'biomeswevegone:rose_fields',
    */
    'minecraft:meadow',
    'neapolitan:strawberry_fields'
  ])
  
  // Create new tag to actually properly place BWG snowy biomes in a #snowy tag
  event.add('perpendicular:is_snowy', [
    '#c:is_snowy',
    /* //<M-R>
    'biomeswevegone:eroded_borealis',
    'biomeswevegone:frosted_coniferous_forest',
    'biomeswevegone:frosted_taiga',
    'biomeswevegone:howling_peaks'
    */
  ])

  // Create new tag to actually properly place BWG taiga biomes in a #taiga tag
  event.add('perpendicular:is_taiga', [
    '#minecraft:is_taiga',
    /*
    'biomeswevegone:black_forest',
    'biomeswevegone:canadian_shield',
    'biomeswevegone:cika_woods',
    'biomeswevegone:coniferous_forest',
    'biomeswevegone:dacite_ridges',
    'biomeswevegone:frosted_coniferous_forest',
    'biomeswevegone:frosted_taiga',
    'biomeswevegone:maple_taiga'
    */
  ])

  // Create new River Redux biome tag
  
  event.add('perpendicular:river_redux_biomes', [
    /* //<M-R>
    'riverredux:gravelly_river',
    'riverredux:sandy_river',
    'riverredux:tropical_river'
    */
  ])


  // ---------------------
  // FEATURES BIOME COMPAT
  // ---------------------
  // Add pink and white clovers from Buzzier Bees to BWG biomes
  /* //<M-R>
  event.add('buzzier_bees:has_feature/pink_clover', 'biomeswevegone:temperate_grove')
  event.add('buzzier_bees:has_feature/white_clover', [
    'biomeswevegone:orchard',
    'biomeswevegone:temperate_grove'
  ])
  */

  // Add BWG biomes to Friends & Foes feature placement
  let flowerbiomes = [
    /*
    'biomeswevegone:allium_shrubland',
    'biomeswevegone:amaranth_grassland',
    'biomeswevegone:orchard',
    'biomeswevegone:sakura_grove'
    */
  ]
  event.add('friendsandfoes:has_buttercup_patch', flowerbiomes)

  // Fix Quark fallen log tags
  event.add('quark:has_fallen_dark_oak', 'minecraft:dark_forest')
  event.add('quark:has_fallen_mangrove', 'minecraft:mangrove_swamp')

  // Add more BWG biomes to Some More Blocks feature placement
  event.add('somemoreblocks:generates_tiny_cactus', '#c:is_desert')
  event.add('somemoreblocks:generates_small_lily_pads', [
      /*
      'biomeswevegone:bayou',
      'biomeswevegone:crag_gardens',
      'biomeswevegone:cypress_swamplands',
      'biomeswevegone:fragment_jungle',
      'biomeswevegone:tropical_rainforest',
      'biomeswevegone:white_mangrove_marshes'
      */
  ])
  

  // Stop Some More Blocks tiny cactuses from spawning in forests
  event.remove('somemoreblocks:generates_tiny_cactus', '#minecraft:is_forest')

  // Add BWG biomes to Spelunkery feature placement

  event.add('spelunkery:has_desert_noise', '#c:is_desert')
  event.add('spelunkery:has_end_noise', '#nullscape:all_nullscape_biomes')
  event.add('spelunkery:has_stone_noise', [
      '#ars_nouveau:archwood_biome',
      '#autumnity:has_structure/maple_hut',
      '#biomeswevegone:overworld',
      'neapolitan:strawberry_fields', 
      '#perpendicular:river_redux_biomes'
  ])
  event.add('spelunkery:has_swamp_noise', '#c:is_swamp')


  // Add BWG biomes to Twigs feature placement
  event.add('twigs:spawns_pebble', [
      '#c:is_plains',
      '#c:is_swamp',
      '#perpendicular:is_meadow'
  ])
  //event.add('twigs:spawns_sea_shell', 'biomeswevegone:rainbow_beach') //<M-R>
  event.add('twigs:spawns_twig', '#c:is_swamp')

  // Add extra biomes to Upgrade Aquatic feature placements
  event.add('upgrade_aquatic:has_feature/beachgrass', '#perpendicular:river_redux_biomes')
  event.add('upgrade_aquatic:has_feature/driftwood_river', '#perpendicular:river_redux_biomes')
  event.add('upgrade_aquatic:has_feature/flowering_rush', '#perpendicular:river_redux_biomes')
  event.add('upgrade_aquatic:has_feature/pickerelweed', '#perpendicular:river_redux_biomes')
  event.add('upgrade_aquatic:has_feature/river_tree', '#perpendicular:river_redux_biomes')
  

  // -----------------
  // MOBS BIOME COMPAT
  // -----------------
  // Add extra biome tags to Backported Wolves spawns
  /* //<M-R>
  event.add('backported_wolves:spawns_rusty_wolf', '#minecraft:is_jungle')
  event.add('backported_wolves:spawns_spotted_wolf', '#minecraft:is_savanna')
  event.add('backported_wolves:spawns_striped_wolf', '#minecraft:is_badlands')
  // POSSIBLE TO DO WOODS WOLF MINUS GROVE?
  // event.add('backported_wolves:spawns_woods_wolf', '#minecraft:is_forest')
  */

  // Add all caves to Creeper Overhaul #is_cave tag
  event.add('creeperoverhaul:is_cave', '#c:is_cave')


  // Make Enderman Overhaul enderman spawn in more biomes
  event.add('endermanoverhaul:cave_spawns', '#c:is_cave')
  event.add('endermanoverhaul:flower_field_spawns', [
    //'#biomeswevegone:floral', //<M-R>
    'neapolitan:strawberry_fields'
  ])

  // Add BWG flower biomes to Friends & Foes mob spawns
  event.add('friendsandfoes:has_moobloom/allium', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/azure_bluet', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/blue_orchid', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/buttercup', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/cornflower', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/dandelion', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/lilac', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/lily_of_the_valley', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/orange_tulip', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/oxeye_daisy', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/peony', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/pink_tulip', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/poppy', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/red_tulip', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/rose_bush', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/sunflower', flowerbiomes)
  event.add('friendsandfoes:has_moobloom/white_tulip', flowerbiomes)

  event.add('friendsandfoes:has_crab', [
    /* //<M-R>
    'biomeswevegone:rainbow_beach',
    'biomeswevegone:white_mangrove_marshes'
    */
  ])

  // Prevent Friends and Foes iceologer from spawning naturally
  event.removeAll('friendsandfoes:has_iceologer')

  // Add BWG biomes to Hamsters mod hamsters spawns
  //event.add('hamsters:has_hamster', '#perpendicular:is_meadow') //<M-R>

  // Add BWG biomes to Let's Do Meadow buffalo spawns
  //event.add('meadow:spawns_buffalo', '#perpendicular:is_taiga') //<M-R>

  // Prevent Naturalist dragonfly from spawning naturally
  //event.removeAll('naturalist:has_dragonfly') //<M-R>

  // Add BWG biomes to Unusual Prehistory mob spawns
  /* //<M-R>
  event.add('unusualprehistory:is_megatherium_biome', '#minecraft:is_savanna')
  event.add('unusualprehistory:is_paracer_biome', '#minecraft:is_savanna')
  event.add('unusualprehistory:is_petrified_wood_forest_biome', [
      '#minecraft:is_badlands',
      '#c:is_desert'
  ])
  */

  // event.add('unusualprehistory:is_tar_biome', [
  //     '#forge:is_desert',
  //     '#forge:is_plains',
  //     '#minecraft:is_savanna',
  //     '#forge:is_swamp'
  // ])
  //event.add('unusualprehistory:is_veloci_biome', '#c:is_desert') //<M-R>

  // Add extra biomes to Upgrade Aquatic mob spawns
  event.add('upgrade_aquatic:has_spawn/pike', '#perpendicular:river_redux_biomes')
  event.add('upgrade_aquatic:has_spawn/squid', '#c:is_swamp')


  // ----------------------
  // STRUCTURE BIOME COMPAT
  // ----------------------

  // Allow Better Archaeology structures to spawn in modded biomes
  event.add('betterarcheology:collections/badlands', '#minecraft:is_badlands')
  event.add('betterarcheology:collections/birch_forests', '#perpendicular:is_birch_forest')
  event.add('betterarcheology:collections/deserts', '#biomeswevegone:desert')
  event.add('betterarcheology:collections/forests', [
    '#minecraft:is_forest',
    //'biomeswevegone:temperate_grove' //<M-R>
  ])
  event.add('betterarcheology:collections/jungles', '#minecraft:is_jungle')
  event.add('betterarcheology:collections/meadows', '#perpendicular:is_meadow')
  event.add('betterarcheology:collections/oceans', '#minecraft:is_ocean')
  event.add('betterarcheology:collections/plains', '#c:is_plains')
  event.add('betterarcheology:collections/taigas', '#perpendicular:is_taiga')

  // Fix Beautify structure biome tags
  event.add('beautify:has_structure/botanist_house_desert_biomes', '#c:is_desert')
  event.add('beautify:has_structure/botanist_house_plains_biomes', '#c:is_plains')
  event.add('beautify:has_structure/botanist_house_savanna_biomes', '#minecraft:is_savanna')
  event.add('beautify:has_structure/botanist_house_snowy_biomes', '#perpendicular:is_snowy')
  event.add('beautify:has_structure/botanist_house_taiga_biomes', '#perpendicular:is_taiga')

  // INVESTIGATE THIS
  // Remove Beautify botanist house from spawning bc the botanist villager bed ai is wacked
  event.removeAll('beautify:has_structure/botanist_house_desert_biomes')
  event.removeAll('beautify:has_structure/botanist_house_plains_biomes')
  event.removeAll('beautify:has_structure/botanist_house_savanna_biomes')
  event.removeAll('beautify:has_structure/botanist_house_snowy_biomes')
  event.removeAll('beautify:has_structure/botanist_house_taiga_biomes')

  // Add some BWG biomes to YUNG's better dungeons
  /*
  event.add('betterdungeons:has_structure/skeleton_dungeon', '#biomeswevegone:icy')
  event.add('betterdungeons:has_structure/small_dungeon', '#biomeswevegone:icy')
  event.add('betterdungeons:has_structure/spider_dungeon', '#biomeswevegone:icy')
  event.add('betterdungeons:has_structure/zombie_dungeon', '#biomeswevegone:icy')
  */

  // Add some biomes to YUNG's better mineshafts
  /* //<M-R>
  event.add('bettermineshafts:has_structure/better_mineshaft_acacia', '#biomeswevegone:savanna')
  event.add('bettermineshafts:has_structure/better_mineshaft_ice', '#biomeswevegone:icy')
  event.add('bettermineshafts:has_structure/better_mineshaft_oak', '#c:is_plains')
  event.add('bettermineshafts:has_structure/better_mineshaft_overgrown', 'biomeswevegone:tropical_rainforest')
  event.remove('bettermineshafts:has_structure/better_mineshaft_spruce', 'biomeswevegone:frosted_taiga')
  event.add('bettermineshafts:has_structure/better_mineshaft_spruce', [
      'biomeswevegone:black_forest',
      'biomeswevegone:canadian_shield',
      'biomeswevegone:cika_woods',
      'biomeswevegone:dacite_ridges'
  ])
  event.add('bettermineshafts:has_structure/better_mineshaft_spruce_snowy', [
      'biomeswevegone:frosted_coniferous_forest',
      'biomeswevegone:frosted_taiga'
  ])
  */

  // Add more biomes to Let's Do Blooming Nature structures
  /* //<M-R>
  event.add('bloomingnature:has_structure/jungle', '#minecraft:is_jungle')
  event.add('bloomingnature:has_structure/swamp', '#c:is_swamp')
  event.add('bloomingnature:has_structure/taiga', '#perpendicular:is_taiga')
  event.add('bloomingnature:has_structure/temperate', [
      '#c:is_plains',
      '#perpendicular:is_taiga'
  ])
  */

  // Add more biomes to Bosses of Mass Destruction structures
  /* //<M-R>
  event.add('bosses_of_mass_destruction:collections/cold', '#c:is_cold/overworld')
  event.add('bosses_of_mass_destruction:collections/in_end', '#nullscape:all_nullscape_biomes')
  */

  // Add more biomes to Dimensional Doors structures
  event.add('dimdoors:enclosed_endstone_gateway', '#minecraft:is_end')
  event.add('dimdoors:enclosed_gateway', [
      '#c:is_coniferous',
      '#c:is_plains',
      '#minecraft:is_beach',
      '#minecraft:is_forest',
      '#minecraft:is_hill',
      '#minecraft:is_mountain',
      '#minecraft:is_savanna',
      '#minecraft:is_taiga',
  ])
  event.add('dimdoors:enclosed_mud_gateway', '#c:is_swamp')
  event.add('dimdoors:enclosed_prismarine_gateway', '#minecraft:is_ocean')
  event.add('dimdoors:enclosed_quartz_gateway', '#perpendicular:is_snowy')
  event.add('dimdoors:enclosed_red_sandstone_gateway', '#minecraft:is_badlands')
  event.add('dimdoors:enclosed_sandstone_gateway', '#c:is_desert')

  // Add more biomes to Friends & foes structures
  /* //<M-R>
  event.add('friendsandfoes:has_structure/beekeeper_hut', [
    'biomeswevegone:coconino_meadow',
    'biomeswevegone:rose_fields'
  ])
  event.add('friendsandfoes:collections/snowy', '#perpendicular:is_snowy')
  event.add('friendsandfoes:collections/taigas', '#perpendicular:is_taiga')
  */

  // Add more biomes to Integrated Villages structures
  /*//<M-R>
  event.add('integrated_villages:collections/any_taiga', '#perpendicular:is_taiga')
  event.add('integrated_villages:collections/floral', [
    '#biomeswevegone:floral',
    'neapolitan:strawberry_fields'
  ])
  event.add('integrated_villages:collections/mangroves', 'biomeswevegone:white_mangrove_marshes')
  event.add('integrated_villages:collections/plains', '#c:is_plains')
  event.add('integrated_villages:collections/regular_forests', [
    "biomeswevegone:aspen_boreal",
    "biomeswevegone:black_forest",
    "biomeswevegone:canadian_shield",
    "biomeswevegone:cika_woods",
    "biomeswevegone:coniferous_forest",
    "biomeswevegone:dacite_ridges",
    "biomeswevegone:ebony_woods",
    "biomeswevegone:orchard",
    "biomeswevegone:redwood_thicket",
    "biomeswevegone:sakura_grove",
    "biomeswevegone:zelkova_forest"
  ])
  event.add('integrated_villages:collections/snowy_forests', [
    'biomeswevegone:frosted_coniferous_forest',
    'biomeswevegone:frosted_taiga',
    'biomeswevegone:howling_peaks'
  ])
  event.add('integrated_villages:collections/taigas', [ // they're talking about warm taigas here
    'biomeswevegone:black_forest',
    'biomeswevegone:canadian_shield',
    'biomeswevegone:cika_woods',
    'biomeswevegone:coniferous_forest',
    'biomeswevegone:dacite_ridges',
    'biomeswevegone:maple_taiga'
  ])
  event.add('integrated_villages:collections/warm_beaches', 'biomeswevegone:rainbow_beach')
  */

  // Add more biomes to Iron's Spells & Spellbooks structures
  /* //<M-R>
  event.add('irons_spellbooks:has_structure/catacombs', '#minecraft:is_savanna')
  event.add('irons_spellbooks:has_structure/mountain_tower', [
    'biomeswevegone:frosted_coniferous_forest',
    'biomeswevegone:frosted_taiga',
    'biomeswevegone:howling_peaks',
  ])
  event.add('irons_spellbooks:has_structure/catacombs', [
    '#c:is_desert',
    '#c:is_plains',
    '#c:is_swamp',
    '#minecraft:is_savanna'
  ])
  */

  // Add more biomes to Minecraft structures
  event.add('minecraft:has_structure/mineshaft', [
    '#c:is_desert',
    '#c:is_plains',
    '#c:is_swamp',
    '#minecraft:is_savanna'
  ])
  event.add('minecraft:has_structure/ruined_portal_desert', '#c:is_desert')
  event.add('minecraft:has_structure/ruined_portal_swamp', '#c:is_swamp')
  event.add('minecraft:has_structure/stronghold', [
      '#ars_nouveau:archwood_biome',
      //'#autumnity:has_structure/maple_hut', //<M-R>
      //'#biomeswevegone:overworld', //<M-R>
      '#c:is_cave', 
      'neapolitan:strawberry_fields',
      '#perpendicular:river_redux_biomes'
  ])

  // Add more biomes to Dungeons and Taverns (NovaStructures) structures
  event.add('nova_structures:illager_hideout', [
    '#c:is_cave',
    '#c:is_desert',
    '#c:is_plains'
  ])
  event.add('nova_structures:collections/any_taiga', '#perpendicular:is_taiga')  
  event.add('nova_structures:collections/birch_forests', '#perpendicular:is_birch_forest')
  //event.add('nova_structures:collections/cherry_forests', 'biomeswevegone:sakura_grove') //<M-R>
  event.add('nova_structures:collections/floral', [
    //'#biomeswevegone:floral', //<M-R>
    'neapolitan:strawberry_fields'
  ])
  event.add('nova_structures:collections/giant_taigas', [ // they're talking about warm taigas here + redwood thicket
    /* //<M-R>
    'biomeswevegone:cika_woods',
    'biomeswevegone:coniferous_forest',
    'biomeswevegone:dacite_ridges',
    'biomeswevegone:redwood_thicket'
    */
  ])
  event.add('nova_structures:collections/giant_trees', [
    /* //<M-R>
    'biomeswevegone:cika_woods',
    'biomeswevegone:coniferous_forest',
    'biomeswevegone:crag_gardens',
    'biomeswevegone:dacite_ridges',
    'biomeswevegone:ebony_woods',
    'biomeswevegone:jacaranda_jungle',
    'biomeswevegone:orchard',
    'biomeswevegone:redwood_thicket',
    'biomeswevegone:sakura_grove',
    'biomeswevegone:tropical_rainforest'
    */
  ])
  event.add('nova_structures:collections/illager_camps', [
    '#c:is_cave',
    '#c:is_desert',
    '#c:is_plains',
  ])

  //event.add('nova_structures:collections/mangroves', 'biomeswevegone:white_mangrove_marshes') //<M-R>
  event.add('nova_structures:collections/meadows', '#perpendicular:is_meadow')
  event.add('nova_structures:collections/plains', '#c:is_plains')
  event.add('nova_structures:collections/regular_forests', [
    /* //<M-R>
    "biomeswevegone:aspen_boreal",
    "biomeswevegone:black_forest",
    "biomeswevegone:canadian_shield",
    "biomeswevegone:cika_woods",
    "biomeswevegone:coniferous_forest",
    "biomeswevegone:dacite_ridges",
    "biomeswevegone:ebony_woods",
    "biomeswevegone:orchard",
    "biomeswevegone:redwood_thicket",
    "biomeswevegone:sakura_grove",
    "biomeswevegone:zelkova_forest"
    */
  ])
  //event.add('nova_structures:collections/rocky_mountains', 'biomeswevegone:canadian_shield') //<M-R>
  event.add('nova_structures:collections/snowy_forests', [
    /* //<M-R>
    'biomeswevegone:frosted_coniferous_forest',
    'biomeswevegone:frosted_taiga',
    'biomeswevegone:howling_peaks'
    */
  ])
  event.add('nova_structures:collections/snowy_structures', [
    /* //<M-R>
    'biomeswevegone:frosted_coniferous_forest',
    'biomeswevegone:frosted_taiga',
    'biomeswevegone:howling_peaks'
    */
  ])
  event.add('nova_structures:collections/spooky_forests', [
    /* //<M-R>
    'biomeswevegone:ebony_woods',
    'biomeswevegone:forgotten_forest',
    'biomeswevegone:overgrowth_woodlands',
    'biomeswevegone:weeping_witch_forest',
    */
  ])
  event.add('nova_structures:collections/taiga', [ // they're talking about warm taigas here
    /* //<M-R>
    'biomeswevegone:black_forest',
    'biomeswevegone:canadian_shield',
    'biomeswevegone:cika_woods',
    'biomeswevegone:coniferous_forest',
    'biomeswevegone:dacite_ridges',
    'biomeswevegone:maple_taiga'
    */
  ])

  // Add more biomes to It Takes a Pillage structures
  event.add('takesapillage:has_structure/pillager_structure', [
    /* //<M-R>
    'biomeswevegone:allium_shrubland',
    'biomeswevegone:amaranth_grassland',
    'biomeswevegone:araucaria_savanna',
    'biomeswevegone:baobab_savanna',
    'biomeswevegone:crimson_tundra',
    'biomeswevegone:coconino_meadow',
    'biomeswevegone:firecracker_chaparral',
    'biomeswevegone:prairie',
    'biomeswevegone:rose_fields'
    */
  ])

  // Add more biomes to Tinkers' Construct structures
  //event.add('tconstruct:islands/enderslime', '#nullscape:all_nullscape_biomes') //<M-R>

});
