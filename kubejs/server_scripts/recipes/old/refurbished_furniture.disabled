// priority: 10

ServerEvents.recipes(event => {

    // -----------------
    // Cutting board combining
    // -----------------

    function combining(inputs, output, id) {
        let recipe = {
            "type": "refurbished_furniture:cutting_board_combining",
            "count": output.count || 1,
            "ingredients": [],
            "result": output.item
        }

        inputs.forEach(input => {
            let ingredients = {}

            if (input.tag) {
                ingredients.tag = input.tag;
            } else {
                ingredients.item = input.item;
            }

            recipe.ingredients.push(ingredients);
        });

        event.custom(recipe).id(`perpendicular:cutting_board_combining/${id}`);
    }

    // Unify toast and cheese
    combining([{item: 'some_assembly_required:toasted_bread_slice'}, {item: 'refurbished_furniture:glow_berry_jam'}], {item: 'refurbished_furniture:glow_berry_jam_toast'}, 'glow_berry_jam_toast')
    combining([{item: 'some_assembly_required:toasted_bread_slice'}, {item: 'refurbished_furniture:sweet_berry_jam'}], {item: 'refurbished_furniture:sweet_berry_jam_toast'}, 'sweet_berry_jam_toast')
    combining([{item: 'farmersdelight:wheat_dough'}, {tag: 'forge:cooked_beef'}, {tag: 'forge:cooked_chicken'}, {tag: 'forge:cooked_pork'}, {tag: 'forge:cheese'}], {item: 'refurbished_furniture:raw_meatlovers_pizza'}, 'raw_meatlovers_pizza')
    combining([{item: 'farmersdelight:wheat_dough'}, {item: 'minecraft:carrot'}, {item: 'minecraft:beetroot'}, {item: 'minecraft:potato'}, {tag: 'forge:cheese'}], {item: 'refurbished_furniture:raw_vegetable_pizza'}, 'raw_vegetable_pizza')
    combining([{item: 'some_assembly_required:bread_slice'}, {tag: 'forge:cheese'}, {item: 'some_assembly_required:bread_slice'}], {item: 'refurbished_furniture:cheese_sandwich'}, 'cheese_sandwich')
    
    // -----------------
    // Toaster heating
    // -----------------

    function toasting(input, output, time, id) {
        event.custom({
            "type": "refurbished_furniture:toaster_heating",
            "category": "food",
            "ingredient": Ingredient.of(input).toJson(),
            "result": output,
            "time": time
        }).id(`perpendicular:toaster_heating/${id}`);
    }

    // Unify toast
    toasting('some_assembly_required:bread_slice', 'some_assembly_required:toasted_bread_slice', 300, 'toast')

})