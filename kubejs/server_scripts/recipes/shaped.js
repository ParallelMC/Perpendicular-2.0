// priority: 10

//Im so, so sorry for Whoever comes next and has to deal with this mess...
    const ECCENTRIC_TOME_DATA = {
     "eccentrictome:tome_data":{
      "books":{
      "starcatcher":[
       {
        "count":1,
        "id":"starcatcher:starcatcher_guide"
       }
      ],
      "aether":[
       {
        "count":1,
        "id":"aether:book_of_lore"
       }
      ],
      "adorablehamsterpets":[
       {
        "id":"adorablehamsterpets:hamster_guide_book",
        "components":{
         "patchouli:book":"adorablehamsterpets:hamster_tips_guide_book"
        },
        "count":1
       }
      ],
      "blocksyouneed":[
       {
        "count":1,
        "id":"blocksyouneed_luna:book_of_need"
       }
      ],
      "ae2":[
       {
        "count":1,
        "id":"ae2:guide"
       }
      ],
      "ars_nouveau":[
       {
        "count":1,
        "id":"ars_nouveau:worn_notebook"
       }
      ],
      "neovitae":[
       {
        "id":"neovitae:guide_book",
        "components":{
         "modonomicon:book_open":false,
         "modonomicon:book_id":"neovitae:guide"
        },
        "count":1
       }
      ],
      "productivebees":[
       {
        "id":"patchouli:guide_book",
        "components":{
         "patchouli:book":"productivebees:guide"
        },
        "count":1
       }
      ],
      "netherman":[
       {
        "count":1,
        "id":"netherman:azazel_guide_book"
       }
      ],
      "pastel":[
       {
        "count":1,
        "id":"pastel:melochites_cookbook_vol_2"
       },
       {
        "count":1,
        "id":"pastel:imbrifer_cookbook"
       },
       {
        "count":1,
        "id":"pastel:melochites_cookbook_vol_1"
       },
       {
        "count":1,
        "id":"pastel:gilded_book"
       },
       {
        "count":1,
        "id":"pastel:poisoners_handbook"
       },
       {
        "count":1,
        "id":"pastel:brewers_handbook"
       },
       {
        "count":1,
        "id":"pastel:imperial_cookbook"
       }
      ]
     },
     "tome_id":"b3d880f7-3fea-4c6d-82bd-a6e4f0e7bf08"
     }
    }
//End of JSON mess.

ServerEvents.recipes(event => {

  const RECIPE_PREFIX = 'perpendicular:crafting/';

  function shaped2x2(output, input, recipeID) {
    event.shaped(output, ['AA', 'AA'], {A: input}).id(`${RECIPE_PREFIX}${recipeID}`);
  };

  function shaped3x3(output, input, recipeID) {
    event.shaped(output, ['AAA', 'AAA', 'AAA'], {A: input}).id(`${RECIPE_PREFIX}${recipeID}`);
  };

  function donut (output, input, recipeID) {
    event.shaped(output, ['AAA', 'A A', 'AAA'], {A: input}).id(`${RECIPE_PREFIX}${recipeID}`);
  };

  function bordered (output, wrap, center, recipeID) {
    event.shaped(output, ['AAA', 'ABA', 'AAA'], {A: wrap, B: center}).id(`${RECIPE_PREFIX}${recipeID}`);
  };

  // Storage blocks
  //shaped2x2('alexscaves:dough_block', 'farmersdelight:wheat_dough', 'dough_block_from_dough') //<M-R>
  //shaped3x3('thermal:charcoal_block', 'minecraft:charcoal', 'charcoal_block_from_charcoal') //<M-R>
  //shaped3x3('alexscaves:block_of_chocolate', 'create:bar_of_chocolate', 'chocolate_block_from_chocolate') //<M-R>


  // Red quicksand
  //event.shaped('2x biomeswevegone:red_quicksand', ['AAA', 'ABA', 'AAA'], {A: 'minecraft:red_sand', B: 'minecraft:water_bucket'}).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket').id(`${RECIPE_PREFIX}red_quicksand`); //<M-R>
  

  // Mob imprisonment tool
  //bordered('industrialforegoing:mob_imprisonment_tool', '#perpendicular:plastic', '#minecraft:soul_fire_base_blocks', 'mob_imprisonment_tool') //<M-R>


  // Ice cream
  //event.shaped('neapolitan:vanilla_ice_cream', ['A', 'B'], {A: 'alexscaves:vanilla_ice_cream_scoop', B: 'minecraft:bowl'}).id(`${RECIPE_PREFIX}vanilla_ice_cream`); //<M-R>
  //event.shaped('neapolitan:chocolate_ice_cream', ['A', 'B'], {A: 'alexscaves:chocolate_ice_cream_scoop', B: 'minecraft:bowl'}).id(`${RECIPE_PREFIX}chocolate_ice_cream`); //<M-R>
  //event.shaped('neapolitan:strawberry_ice_cream', ['A', 'B'], {A: 'alexscaves:sweetberry_ice_cream_scoop', B: 'minecraft:bowl'}).id(`${RECIPE_PREFIX}strawberry_ice_cream`); // Renaming the Alex's Caves items to "Strawberry" to make this work

  //Flux block updated to use steel
  event.shaped('fluxnetworks:flux_block', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'fluxnetworks:flux_dust',
    B: 'fluxnetworks:flux_core',
    C: Ingredient.of(['#c:plates/steel', '#c:ingots/steel']) //'#forge:plates/steel' // forge: is now c: for tags.
  }).id(`${RECIPE_PREFIX}flux_block`);

  // Filled eccentric tome
  event.shaped(Item.of('eccentrictome:tome', ECCENTRIC_TOME_DATA), [
    'ABC',
    'DEF',
    'GHI'
  ], {
    A: 'minecraft:lapis_lazuli',
    B: 'minecraft:amethyst_shard',
    C: '#c:raw_materials/cinnabar', //'thermal:cinnabar' // Thermal got removed, Sad that theres not port. 
    D: 'minecraft:diamond',
    E: '#c:bookshelves', //'#forge:bookshelves', // Old forge tag prefx
    F: Ingredient.of(['#c:salt', '#c:dusts/saltpeter', '#perpendicular:rock_salt_blocks']), //'thermal:niter', // Yet again thermal got removed, So I found some salt and saltpeter related stuff and make a mix.
    G: 'minecraft:emerald',
    H: '#c:dusts/sulfur', //'thermal:sulfur', // Theres no sulfer thats not dust.
    I: 'minecraft:quartz'
  }).id(`${RECIPE_PREFIX}filled_eccentric_tome`);
  
});
