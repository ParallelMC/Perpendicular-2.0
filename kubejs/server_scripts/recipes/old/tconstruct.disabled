// priority: 10

ServerEvents.recipes(event => {

    // -----------------
    // Casting
    // -----------------

    function casting(cast, fluidTag, fluidAmount, output, coolTime, id) {
        event.custom({
            "type": "tconstruct:casting_table",
            "cast": {
                "tag": `tconstruct:casts/single_use/${cast}`
            },
            "cast_consumed": true,
            "cooling_time": coolTime,
            "fluid": {
                "amount": fluidAmount,
                "tag": fluidTag
            },
            "result": output
        }).id(`perpendicular:smeltery/casting/${id}_sand_cast`);

        event.custom({
            "type": "tconstruct:casting_table",
            "cast": {
                "tag": `tconstruct:casts/multi_use/${cast}`
            },
            "cooling_time": coolTime,
            "fluid": {
                "amount": fluidAmount,
                "tag": fluidTag
            },
            "result": output
        }).id(`perpendicular:smeltery/casting/${id}_gold_cast`);
    }

    function castingWithoutTemplate(fluidTag, fluidAmount, output, coolTime, id) {
        event.custom({
            "type": "tconstruct:casting_table",
            "cooling_time": coolTime,
            "fluid": {
                "amount": fluidAmount,
                "tag": fluidTag
            },
            "result": output
        }).id(`perpendicular:smeltery/casting/${id}`);
    }

    // Gold bars
    castingWithoutTemplate('forge:molten_gold', 30, 'caverns_and_chasms:golden_bars', 33, 'golden_bars')

    // Experience
    casting('gem', 'forge:experience', 60, 'ars_nouveau:experience_gem', 80, 'experience_gem')
    casting('ingot', 'forge:experience', 60, 'create:experience_nugget', 80, 'experience_nugget')

    // Latex
    casting('coin', 'forge:latex', 750, 'industrialforegoing:dryrubber', 80, 'rubber')

    // -----------------
    // Melting
    // -----------------

    function melting(input, output, fluidAmount, temperature, time, id) {
        let recipe = {
            "type": "tconstruct:melting",
            "ingredient": {
                "item": input
            },
            "result": {
                "amount": fluidAmount
            },
            "temperature": temperature,
            "time": time
        }

        if (output.tag) {
            recipe.result.tag = output.tag;
        } else {
            recipe.result.fluid = output.fluid;
        }

        event.custom(recipe).id(`perpendicular:smeltery/melting/${id}`);
    }

    // Gold bars
    melting('caverns_and_chasms:golden_bars', {tag: 'forge:molten_gold'}, 30, 700, 33, 'molten_gold_from_golden_bars')

    // Experience
    melting('ars_nouveau:experience_gem', {fluid: 'pneumaticcraft:memory_essence'}, 60, 450, 18, 'memory_essence_from_experience_gem')
    melting('ars_nouveau:greater_experience_gem', {fluid: 'pneumaticcraft:memory_essence'}, 240, 450, 72, 'memory_essence_from_greater_experience_gem')
    melting('create:experience_nugget', {fluid: 'pneumaticcraft:memory_essence'}, 60, 450, 18, 'memory_essence_from_experience_nugget')
    melting('create:experience_block', {fluid: 'pneumaticcraft:memory_essence'}, 540, 450, 162, 'memory_essence_from_experience_block')
    melting('minecraft:honey_block', {fluid: 'create:honey'}, 1000, 1, 94, 'honey_block')

    // -----------------
    // Entity melting
    // -----------------

    // Create honey from bee melting
    event.custom({
        "type": "tconstruct:entity_melting",
        "damage": 2,
        "entity": {
            "type": "minecraft:bee"
        },
        "result": {
            "amount": 25,
            "fluid": "create:honey"
        }
    }).id(`perpendicular:entity_melting/bee`);

})