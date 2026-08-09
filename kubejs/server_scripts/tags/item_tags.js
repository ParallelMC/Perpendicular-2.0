// priority: 100

// Reasons why something is commented out:
// <M-R> == A mod was removed/not in pack, And this line is not-longer applicable.
// <F-R> == Something that was from Forge, And is now something diffrent in Neoforge.

ServerEvents.tags('item', event => {
  // Make armor from Alex's Caves space biomes usable with the space suit
  // Still requires either the space suit chestplate or the space breathing enchantmen
  /* // Alexs caves got removed, So did ad astra.
  event.add('ad_astra:space_suit_items', [
    'alexscaves:hood_of_darkness',
    'alexscaves:cloak_of_darkness',
    'alexscaves:hazmat_mask',
    'alexscaves:hazmat_chestplate',
    'alexscaves:hazmat_leggings',
    'alexscaves:hazmat_boots',
    'alexscaves:primordial_helmet',
    'alexscaves:primordial_tunic',
    'alexscaves:primordial_pants'
  ]);
  */

  // Allow protection from the hazmat suit on Venus
  /* //<M-R>
  event.add('ad_astra:heat_resistant_armor', [
    'alexscaves:hazmat_mask',
    'alexscaves:hazmat_chestplate',
    'alexscaves:hazmat_leggings',
    'alexscaves:hazmat_boots'
  ]);
  */

  // Morph-O-Tool wrench-like items
  event.add('perpendicular:morph_tools', [
    //'ad_astra:wrench', //<M-R>
    'ae2:memory_card',
    'ae2:network_tool',
    'ars_nouveau:dominion_wand',
    'betterp2p:advanced_memory_card',
    /* //<M-R>
    'botania:dreamwood_wand',
    'botania:obedience_stick',
    'botania:twig_wand',
    */
    'create:wrench',
    //'crossroads:omnimeter', //<M-R>
    /* //<M-R>
    'essentials:circuit_wrench',
    'essentials:linking_tool',
    'essentials:wrench',
    */
    'fluxnetworks:flux_configurator',
    'functionalstorage:configuration_tool',
    'functionalstorage:linking_tool',
    'pneumaticcraft:logistics_configurator',
    'pneumaticcraft:pneumatic_wrench',
    /* //<M-R>
    'rats:cheese_stick',
    'rats:patrol_staff',
    'rats:radius_stick',
    'refurbished_furniture:wrench',
   */
    'supplementaries:wrench',
    //'thermal:wrench' //<M-R>
  ]);

  // Unify cheeses
  //c:cheese? Nah c(heese):Cheese
  event.add('c:cheese', [
    //'ad_astra:cheese', //<M-R>
    'brewinandchewin:flaxen_cheese_wedge',
    'brewinandchewin:scarlet_cheese_wedge',
    'netherexp:glowcheese',
    /* //<M-R>
    'rats:blue_cheese',
    'rats:nether_cheese'
    */
  ]);

  event.add('brewinandchewin:cheese_wedges', 'c:cheese');

  // Unify knives
  //event.add('farmersdelight:tools/knives', 'aquaculture:neptunium_fillet_knife'); //<M-R>

  // Unify gold bars
  /* //<M-R>
  event.add('tconstuct:casts', 'caverns_and_chasms:golden_bars');
  event.add('tconstuct:casts/empty/table', 'caverns_and_chasms:golden_bars');
  */

  // Shared recipes for plastic
  event.add('perpendicular:plastic', [
    'pneumaticcraft:plastic',
    //'industrialforegoing:plastic' //<M-R>
  ]);

  // Rock salt blocks
  event.add('perpendicular:rock_salt_blocks', [
    'galosphere:pink_salt',
    'galosphere:rose_pink_salt',
    'galosphere:pastel_pink_salt'
  ]);
    
  // Limestone blocks
  event.add('perpendicular:limestone_blocks', [
    //'alexscaves:limestone', //<M-R>
    'create:limestone',
    'quark:limestone',
    //'meadow:limestone' //<M-R>
  ]);

  // Salt
  //event.add('meadow:salt', 'crossroads:dust_salt'); //<M-R>
  event.add('c:dusts/salt', 'spelunkery:salt');

  // Uranium ore tag 
  //event.add('c:ores/uranium', 'alexscaves:radrock_uranium_ore'); //<M-R>

  // -----------------
  // Curios
  // -----------------
  
  // AE2 terminals don't work with hotkey in curios slot
  //event.remove('curios:curio', 'expatternprovider:wireless_ex_pat'); //<M-R>
  
  // Move prestigious palm to hand slot
  //event.remove('curios:charm', 'eidolon:prestigious_palm') //<M-R>
  //event.add('curios:hands', 'eidolon:prestigious_palm') //<M-R>

  // Configure curios to fit in a few different slots
  event.remove('curios:curio', [
    'pneumaticcraft:memory_stick',
    //'ad_astra_giselle_addon:oxygen_can', //<M-R>
    //'ad_astra_giselle_addon:netherite_oxygen_can' //<M-R>
  ]);

  event.add('curios:back', [
    //'ad_astra_giselle_addon:oxygen_can', //<M-R>
    //'ad_astra_giselle_addon:netherite_oxygen_can' //<M-R>
  ]);

  event.add('curios:bundle', [
    //'crossroads:leyden_jar', //<M-R>
    'pneumaticcraft:memory_stick',
    //'ad_astra_giselle_addon:oxygen_can', //<M-R>
    //'ad_astra_giselle_addon:netherite_oxygen_can' //<M-R>
  ]);
  
  event.add('curios:belt', [
    //'crossroads:leyden_jar', //<M-R>
    'pneumaticcraft:memory_stick'
  ])

  //event.add('curios:spellbook', 'aether_redux:solar_emblem') //<M-R>
});