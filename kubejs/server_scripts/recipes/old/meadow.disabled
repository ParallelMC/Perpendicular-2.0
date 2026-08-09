// priority: 10

ServerEvents.recipes(event => {

    // -----------------
    // Cooking cauldron
    // -----------------

    function cooking(inputs, output, waterAmount, time, id) {
        let recipe = {
            "type": "meadow:cooking",
            "ingredients": [],
            "fluid_amount": waterAmount,
            "crafting_duration": time,
            "result": {
                "item": output.item,
                "count": output.count || 1,
            }
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

        event.custom(recipe).id(`perpendicular:cooking_pot/${id}`);
    }

    // Replace alpine salt recipes
    cooking([{tag: 'perpendicular:limestone_blocks'}], {item: 'spelunkery:salt', count: 4}, 50, 150, 'salt_from_limestone')
    cooking([{item: 'minecraft:calcite'}], {item: 'spelunkery:salt', count: 2}, 50, 120, 'salt_from_calcite')

})