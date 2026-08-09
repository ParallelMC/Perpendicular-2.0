// priority: 10

ServerEvents.recipes(event => {
    const RECIPE_PREFIX = 'perpendicular:stonecutting/';

    // Add missing ice tiles recipe
    event.stonecutting('somemoreblocks:cracked_ice_tiles', 'somemoreblocks:ice_tiles').id(`${RECIPE_PREFIX}cracked_ice_tiles`);
})