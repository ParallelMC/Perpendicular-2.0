// priority: 90

ServerEvents.recipes(event => {
  const replaceEverywhere = (from, to) => {
    event.replaceInput({}, from, to)
    event.replaceOutput({}, from, to)
  };

  // -----------------
  // Material integration
  // -----------------

  // XP storage crystal
  //event.replaceInput({id: 'thermal:tools/xp_crystal'}, 'minecraft:experience_bottle', 'create:experience_block') //<M-R>

  // Give fur some uses
  /* //<M-R>
  event.replaceInput({id: 'meadow:fur_helmet'}, 'minecraft:rabbit_hide', 'naturalist:fur')
  event.replaceInput({id: 'meadow:fur_chestplate'}, 'minecraft:rabbit_hide', 'naturalist:fur')
  event.replaceInput({id: 'meadow:fur_leggings'}, 'minecraft:rabbit_hide', 'naturalist:fur')
  event.replaceInput({id: 'meadow:fur_boots'}, 'minecraft:rabbit_hide', 'naturalist:fur')
  */
  event.replaceInput({id: 'naturalist:teddy_bear'}, 'minecraft:string', 'naturalist:fur')

  // -----------------
  // UNIFICATION
  // -----------------

  // Wrenches
  //event.replaceInput({id: 'ae2:tools/network_tool'}, '#ae2:quartz_wrench', 'thermal:wrench') //Thermal be-gone.
  
  // Cheeses
  //event.replaceOutput({},  'rats:cheese', 'meadow:piece_of_cheese') //<M-R>
  
  // Flour
  replaceEverywhere('create:wheat_flour', 'pneumaticcraft:wheat_flour')

  // Dough
  replaceEverywhere('create:dough', 'farmersdelight:wheat_dough')

  // Sliced bread
  event.replaceOutput({id: 'mynethersdelight:cutting/slices_of_bread'}, 'mynethersdelight:slices_of_bread', 'some_assembly_required:bread_slice')

  // Toast
  //event.replaceInput({}, 'refurbished_furniture:toast', 'some_assembly_required:toasted_bread_slice') //<M-R>

  // Pancakes
  //event.replaceInput({id: 'supplementaries:pancake_fd'}, 'minecraft:sugar', 'autumnity:syrup_bottle') //<M-R>

  // Salt
  replaceEverywhere('spelunkery:rock_salt', 'galosphere:pink_salt_shard')
  event.replaceInput({}, 'spelunkery:rock_salt_block', '#perpendicular:rock_salt_blocks')
  //event.replaceInput({id: 'crossroads:base_materials/salt_block'}, '#forge:dusts/salt', 'crossroads:dust_salt') //<M-R>
  event.replaceInput({id: 'galosphere:cured_membrane'}, 'galosphere:pink_salt_shard', '#forge:dusts/salt')
  event.replaceInput({id: 'galosphere:salted_jerky'}, 'galosphere:pink_salt_shard', '#forge:dusts/salt')

  // Storage blocks
  /* //<M-R>
  event.replaceOutput({id: 'thermal:machines/press/packing3x3/press_apple_packing'}, 'thermal:apple_block', 'quark:apple_crate')
  event.replaceInput({id: 'thermal:machines/press/unpacking/press_apple_unpacking'}, 'thermal:apple_block', 'quark:apple_crate')
  event.replaceOutput({id: 'thermal:machines/press/packing3x3/press_potato_packing'}, 'thermal:potato_block', 'farmersdelight:potato_crate')
  event.replaceInput({id: 'thermal:machines/press/unpacking/press_potato_unpacking'}, 'thermal:potato_block', 'farmersdelight:potato_crate')
  event.replaceOutput({id: 'thermal:machines/press/packing3x3/press_carrot_packing'}, 'thermal:carrot_block', 'farmersdelight:carrot_crate')
  event.replaceInput({id: 'thermal:machines/press/unpacking/press_carrot_unpacking'}, 'thermal:carrot_block', 'farmersdelight:carrot_crate')
  event.replaceOutput({id: 'thermal:machines/press/packing3x3/press_beetroot_packing'}, 'thermal:beetroot_block', 'farmersdelight:beetroot_crate')
  event.replaceInput({id: 'thermal:machines/press/unpacking/press_beetroot_unpacking'}, 'thermal:beetroot_block', 'farmersdelight:beetroot_crate')
  event.replaceOutput({id: 'thermal:machines/press/packing3x3/press_sugar_cane_packing'}, 'thermal:sugar_cane_block', 'quark:sugar_cane_block')
  event.replaceInput({id: 'thermal:machines/press/unpacking/press_sugar_cane_unpacking'}, 'thermal:sugar_cane_block', 'quark:sugar_cane_block')
  event.replaceOutput({id: 'thermal:machines/press/packing3x3/press_gunpowder_packing'}, 'thermal:gunpowder_block', 'quark:gunpowder_sack')
  event.replaceInput({id: 'thermal:machines/press/unpacking/press_gunpowder_unpacking'}, 'thermal:gunpowder_block', 'quark:gunpowder_sack')
  */

  // Amber
  //event.replaceOutput({id: 'unusualprehistory:amber_block'}, 'unusualprehistory:amber_block', 'sullysmod:amber') //<M-R>
  //replaceEverywhere('alexscaves:amber', 'sullysmod:amber') //<M-R>

  // Dragon loot
  //event.replaceInput({id: 'irons_spellbooks:dragonskin_spell_book'}, 'irons_spellbooks:dragonskin', 'tconstruct:dragon_scale') //<M-R>

  // Misc natural blocks
  //event.replaceOutput({id: 'bloomingnature:quicksand'}, 'bloomingnature:quicksand', 'biomeswevegone:quicksand') //<M-R>
  event.replaceInput({id: 'upgrade_aquatic:beachgrass_thatch'}, 'upgrade_aquatic:beachgrass', 'somemoreblocks:dune_grass')

  // Plastic bricks
  event.replaceInput({id: /pneumaticcraft:plastic_brick/}, 'pneumaticcraft:plastic', '#perpendicular:plastic')

  // Rope
  event.replaceInput({id: 'beautify:hanging_pot'}, 'beautify:rope', 'supplementaries:rope')
  replaceEverywhere('farmersdelight:rope', 'supplementaries:rope')

  // Items for removed mobs
  //event.replaceInput({id: 'naturalist:shellstone'}, 'naturalist:snail_shell', 'autumnity:snail_shell_piece') //<M-R>

  // Silicon
  replaceEverywhere('ae2:silicon', 'enderio:silicon')

  // Latex
  //event.replaceOutput({}, Fluid.of('thermal:latex'), Fluid.of('industrialforegoing:latex')) //<M-R>

  // Rubber
  /* //<M-R>
  event.replaceOutput({id: 'thermal:storage/rubber_from_block'}, 'thermal:rubber', 'industrialforegoing:dryrubber')
  event.replaceInput({id: 'thermal:storage/rubber_block'}, 'thermal:rubber', 'industrialforegoing:dryrubber')
  event.replaceInput({id: 'thermal:smelting/cured_rubber_from_smelting'}, 'thermal:rubber', 'industrialforegoing:dryrubber')
  event.replaceInput({id: 'industrialforegoing:plastic'}, 'industrialforegoing:dryrubber', 'thermal:cured_rubber')
  */

  // Fertilizer
  //replaceEverywhere('alexscaves:fertilizer', 'industrialforegoing:fertilizer') //<M-R>

  // Milk
  // event.replaceOutput({id: 'thermal:compat/farmersdelight/bottler_farmersdelight_milk_bottle'}, 'farmersdelight:milk_bottle', 'neapolitan:milk_bottle') //<M-R>

  // Crude oil
  /* //<M-R>
  event.replaceOutput({id: 'thermal:machines/centrifuge/centrifuge_oil_red_sand'}, Fluid.of('thermal:crude_oil'), Fluid.of('pneumaticcraft:oil'))
  event.replaceOutput({id: 'thermal:machines/centrifuge/centrifuge_oil_sand'}, Fluid.of('thermal:crude_oil'), Fluid.of('pneumaticcraft:oil'))
  */

  // Vegetable oil
  event.replaceOutput({id: 'createaddition:compacting/seed_oil'}, Fluid.of('createaddition:seed_oil'), Fluid.of('pneumaticcraft:vegetable_oil'))

  // Biofuel
  event.replaceOutput({id: 'createaddition:mixing/bioethanol'}, Fluid.of('createaddition:bioethanol'), Fluid.of('pneumaticcraft:ethanol'))

  // Honey
  event.replaceOutput({}, Fluid.of('productivebees:honey'), Fluid.of('create:honey'))
  //replaceEverywhere(Fluid.of('cofh_core:honey'), Fluid.of('create:honey')) //<M-R>

  // Candy items
  //event.replaceOutput({id: 'create_confectionery:candy_cane_recipe'}, 'create_confectionery:candy_cane', 'alexscaves:candy_cane') //<M-R>
  //event.replaceInput({id: 'create_confectionery:music_disc_the_bright_side_recipe'}, 'create_confectionery:candy_cane', 'alexscaves:candy_cane') //<M-R>

  // Slag
  //replaceEverywhere('thermal:slag', 'crossroads:slag') //<M-R>

  // Withered bones
  //replaceEverywhere('architects_palette:withered_bone'), 'tconstruct:necrotic_bone') //<M-R>

});
