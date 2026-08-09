// priority: 10

ServerEvents.recipes(event => {

    // -----------------
    // SAG Mill
    // -----------------

    function sagMill(input, outputs, energy, recipeID, bonusType) {
        (!bonusType)? bonusType=SagMillBonus.MULTIPLY_OUTPUT : bonusType=bonusType;
        

        let outputsbuffer = []
        outputs.forEach(output => {
            (!output.count)? output.count=1 : output.count=output.count;
            (!output.nbt)? output.nbt={} : output.nbt=output.nbt;

            if (output.chance) {
                outputsbuffer.push(SagMillOutput.of(Item.of(output.item, output.count, output.nbt), output.chance)) //SagMillOutput.of(`${output.count}x ${output.item}`, output.chance))
            } else {
                outputsbuffer.push(SagMillOutput.of(Item.of(output.item, output.count, output.nbt))) //outputsbuffer.push(SagMillOutput.of(`${output.count}x ${output.item}`))
            }
        })

        event.recipes.enderio.sag_milling(
         outputsbuffer,
         input,
         energy,
         bonusType
        ).id(`perpendicular:sag_milling/${recipeID}`)

        //event.custom(recipe).id(`perpendicular:sag_milling/${recipeID}`)
    }

    // Unify flour
    sagMill('#c:crops/wheat', [{item: 'pneumaticcraft:wheat_flour'}, {item: 'minecraft:wheat_seeds', chance: 0.2}], 2400, 'wheat')

    // Salt
    sagMill('galosphere:pink_salt_shard', [{item: 'spelunkery:salt', count: 2}, {item: 'spelunkery:salt', chance: 0.75}], 2400, 'salt')
    

    //Shitpost item. With the lack of crossroads I wanted too add something dumb.
    sagMill("oritech:banana", [{item:"oritech:banana", count:1, chance:0.5, nbt:{"minecraft:lore": [{"color":"#77EBC0","text":"Delta Periphery; Do not Touch, or Eat."}],"minecraft:custom_name": {"color":"#77EBC0","italic":false,"text":"Δ-0012"},"minecraft:rarity": "epic", "aeronautics:levitating":{}}}], 20000, "delta-0012")
    
    // -----------------
    // Alloy Smelting
    // -----------------

    function alloySmelting(inputs, output, energy, xp, recipeID) {
        (!output.count)? output.count=1 : output.count=output.count;

        let inputsbuffer = []
        inputs.forEach(input => {
            (!input.count)? input.count=1 : input.count=input.count;
        
            inputsbuffer.push(Ingredient.of(input.item, input.count))
        })
       
        event.recipes.enderio.alloy_smelting(
         `${output.count}x ${output.item}`, //Pro-tip! Don't do this.
         inputsbuffer,
         energy,
         xp
        ).id(`perpendicular:alloy_smelting/${recipeID}`)

        //event.custom(recipe).id(`perpendicular:alloy_smelting/${recipeID}`)
    }
    
    // Unify flour
    //alloySmelting([{item: 'pneumaticcraft:wheat_flour', count: 3}, {item: 'minecraft:egg'}], {item: 'enderio:cake_base', count: 2}, 2000, 0.3, 'cake_base') //Cake base was removed
    alloySmelting([{item: 'pneumaticcraft:wheat_flour'}, {item: 'minecraft:cocoa_beans'}], {item: 'minecraft:cookie', count: 8}, 2000, 0.3, 'cookie')

})
