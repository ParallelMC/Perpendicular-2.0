// priority: 10

ServerEvents.recipes(event => {

    // -----------------
    // Industrial Crucible
    // -----------------

    function crucible(input, output, fluidAmount, id) {
        let recipe = {
            "type": "crossroads:crucible",
            "input": {},
            "output": {
                "amount": fluidAmount
            }
        }

        if (input.tag) {
            recipe.input.tag = input.tag;
        } else {
            recipe.input.item = input.item;
        }

        if (output.tag) {
            recipe.output.tag = output.tag;
        } else {
            recipe.output.fluid = output.fluid;
        }

        event.custom(recipe).id(`perpendicular:crucible/${id}`);
    }

    // Replace default recipes for fluid compatibility
    // Iron
    crucible({tag: 'forge:dusts/iron'}, {fluid: 'tconstruct:molten_iron'}, 90, 'dust_iron')
    crucible({tag: 'forge:ingots/iron'}, {fluid: 'tconstruct:molten_iron'}, 90, 'ingot_iron')
    crucible({tag: 'forge:nuggets/iron'}, {fluid: 'tconstruct:molten_iron'}, 10, 'nugget_iron')
    crucible({tag: 'forge:raw_materials/iron'}, {fluid: 'tconstruct:molten_iron'}, 180, 'raw_iron')
    crucible({item: 'minecraft:iron_door'}, {fluid: 'tconstruct:molten_iron'}, 180, 'iron_door')
    crucible({item: 'minecraft:iron_trapdoor'}, {fluid: 'tconstruct:molten_iron'}, 360, 'iron_trapdoor')
    crucible({item: 'minecraft:iron_pressure_plate'}, {fluid: 'tconstruct:molten_iron'}, 180, 'iron_pressure_plate')
    crucible({item: 'minecraft:cauldron'}, {fluid: 'tconstruct:molten_iron'}, 630, 'cauldron')
    crucible({item: 'minecraft:bucket'}, {fluid: 'tconstruct:molten_iron'}, 270, 'bucket')
    crucible({item: 'minecraft:minecart'}, {fluid: 'tconstruct:molten_iron'}, 450, 'minecart')

    // Copper
    crucible({tag: 'forge:dusts/copper'}, {fluid: 'tconstruct:molten_copper'}, 90, 'dust_copper')
    crucible({tag: 'forge:ingots/copper'}, {fluid: 'tconstruct:molten_copper'}, 90, 'ingot_copper')
    crucible({tag: 'forge:nuggets/copper'}, {fluid: 'tconstruct:molten_copper'}, 10, 'nugget_copper')
    crucible({tag: 'forge:raw_materials/copper'}, {fluid: 'tconstruct:molten_copper'}, 180, 'raw_copper')

    // Gold
    crucible({tag: 'forge:dusts/gold'}, {fluid: 'tconstruct:molten_gold'}, 90, 'dust_gold')
    crucible({tag: 'forge:ingots/gold'}, {fluid: 'tconstruct:molten_gold'}, 90, 'ingot_gold')
    crucible({tag: 'forge:nuggets/gold'}, {fluid: 'tconstruct:molten_gold'}, 10, 'nugget_gold')
    crucible({tag: 'forge:raw_materials/gold'}, {fluid: 'tconstruct:molten_gold'}, 180, 'raw_gold')
    crucible({item: 'minecraft:light_weighted_pressure_plate'}, {fluid: 'tconstruct:molten_gold'}, 180, 'gold_pressure_plate')

    // Tin
    crucible({tag: 'forge:dusts/tin'}, {fluid: 'tconstruct:molten_tin'}, 90, 'dust_tin')
    crucible({tag: 'forge:ingots/tin'}, {fluid: 'tconstruct:molten_tin'}, 90, 'ingot_tin')
    crucible({tag: 'forge:nuggets/tin'}, {fluid: 'tconstruct:molten_tin'}, 10, 'nugget_tin')
    crucible({tag: 'forge:raw_materials/tin'}, {fluid: 'tconstruct:molten_tin'}, 180, 'raw_tin')

    // -----------------
    // Industrial Blast Furnace
    // -----------------

    function ibf(input, output, fluidAmount, slag, id) {
        let recipe = {
            "type": "crossroads:cr_blast_furnace",
            "ingredient": [Ingredient.of(input).toJson()],
            "output": {
                "amount": fluidAmount
            },
            "slag": slag
        }

        if (output.tag) {
            recipe.output.tag = output.tag;
        } else {
            recipe.output.fluid = output.fluid;
        }

        event.custom(recipe).id(`perpendicular:ind_blast_furnace/${id}`);
    }

    // Replace default recipes for fluid compatibility
    // Iron
    ibf(Item.of('crossroads:ore_clump', '{material:"iron"}'), {fluid: 'tconstruct:molten_iron'}, 90, 1, 'clump_iron')
    ibf(Item.of('crossroads:ore_gravel', '{material:"iron"}'), {fluid: 'tconstruct:molten_iron'}, 90, 2, 'gravel_iron')
    ibf('#forge:raw_materials/iron', {fluid: 'tconstruct:molten_iron'}, 180, 4, 'raw_iron')

    // Copper
    ibf(Item.of('crossroads:ore_clump', '{material:"copper"}'), {fluid: 'tconstruct:molten_copper'}, 90, 1, 'clump_copper')
    ibf(Item.of('crossroads:ore_gravel', '{material:"copper"}'), {fluid: 'tconstruct:molten_copper'}, 90, 2, 'gravel_copper')
    ibf('#forge:raw_materials/copper', {fluid: 'tconstruct:molten_copper'}, 180, 4, 'raw_copper')

    // Gold
    ibf(Item.of('crossroads:ore_clump', '{material:"gold"}'), {fluid: 'tconstruct:molten_gold'}, 90, 1, 'clump_gold')
    ibf(Item.of('crossroads:ore_gravel', '{material:"gold"}'), {fluid: 'tconstruct:molten_gold'}, 90, 2, 'gravel_gold')
    ibf('#forge:raw_materials/gold', {fluid: 'tconstruct:molten_gold'}, 180, 4, 'raw_gold')

    // Tin
    ibf(Item.of('crossroads:ore_clump', '{material:"tin"}'), {fluid: 'tconstruct:molten_tin'}, 90, 1, 'clump_tin')
    ibf(Item.of('crossroads:ore_gravel', '{material:"tin"}'), {fluid: 'tconstruct:molten_tin'}, 90, 2, 'gravel_tin')
    ibf('#forge:raw_materials/tin', {fluid: 'tconstruct:molten_tin'}, 180, 4, 'raw_tin')

    // -----------------
    // Fluid Cooling
    // -----------------

    function cooling(input, fluidAmount, output, maxTemp, tempChange, id) {
        let recipe = {
            "type": "crossroads:fluid_cooling",
            "fluid_amount": fluidAmount,
            "item": output,
            "max_temp": maxTemp,
            "temp_change": tempChange
        }

        if (input.tag) {
            recipe.tag = input.tag;
        } else {
            recipe.fluid = input.fluid;
        }

        event.custom(recipe).id(`perpendicular:fluid_cooling/${id}`);
    }

    // Replace default recipes for fluid compatibility
    cooling({fluid: 'tconstruct:molten_iron'}, 90, 'minecraft:iron_ingot', 1500, 100)
})