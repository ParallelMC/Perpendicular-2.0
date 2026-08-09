// priority: 100

ServerEvents.tags('block', event => {
  // Allow Sully's Mod amber to prevent Alex's Caves dinosaurs from hatching
  //event.add('alexscaves:stops_dinosaur_eggs', 'sullysmod:amber'); //ALEXS MODS BEGONE!

  // Ores with missing tag
  event.add('forge:ores', [
    'spelunkery:andesite_zinc_ore',
    'spelunkery:diorite_zinc_ore',
    'spelunkery:granite_zinc_ore',
    /* //Mod(s) got removed
    'aether_redux:veridium_ore',
    'unusualprehistory:stone_amber_ore',
    'unusualprehistory:deepslate_amber_ore',
    'unusualprehistory:stone_opal_ore',
    'unusualprehistory:deepslate_opal_ore',
    'unusualprehistory:stone_tar_fossil',
    'unusualprehistory:deepslate_tar_fossil',
    'unusualprehistory:permafrost_fossil'
    */
  ]);

  // AE2 growth accelerator compat
  event.add('ae2:growth_acceleratable', 'opalescence:budding_opal');

  // Logs
  /* //Mod got removed
  event.add('minecraft:logs', [
    'biomeswevegone:imbued_blue_enchanted_wood',
    'biomeswevegone:imbued_green_enchanted_wood'
  ]);
  */
});