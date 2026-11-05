ServerEvents.recipes(event => {
    function pulverizer(recipeID, output, input, count, ticks) {
        event.custom({
            "type": "oritech:pulverizer",
            "ingredients": [{
                "item": input
            }],
            "results": [{
                "id": output,
                "count": count
            }],
            "time": ticks
        }).id(`perpendicular:pulverizer/${recipeID}`)
    }

    function foundry(recipeID, output, inputOne, inputTwo, count, ticks) {
        event.custom({
            "type": "oritech:foundry",
            "ingredients": [
                {
                    "item": inputOne
                },
                {
                    "item": inputTwo
                }
            ],
            "results": [{
                "id": output,
                "count": count
            }],
            "time": ticks
        }).id(`perpendicular:foundry/${recipeID}`)
    }

    function laser(recipeID, output, input, count, ticks) {
        event.custom({
            "type": "oritech:laser",
            "ingredients": [{
                "item": input
            }],
            "results": [{
                "id": output,
                "count": count
            }],
            "time": ticks
        }).id(`perpendicular:laser/${recipeID}`)
    }

    function assembler(recipeID, output, inputs, count, ticks) {
        var items = []
        inputs.forEach(input => {
            items.push({
                "item": input
            })
        })

        event.custom({
            "type": "oritech:assembler",
            "ingredients": items,
            "results": [{
                "id": output,
                "count": count
            }],
            "time": ticks
        }).id(`perpendicular:assembler/${recipeID}`)
    }

    function particleAccelerator(recipeID, output, inputs, count, ticks) {
        var items = []
        inputs.forEach(input => {
            items.push({
                "item": input
            })
        })
        
        event.custom({
            "type": "oritech:particle_collision",
            "ingredients": items,
            "results": [{
                "id": output,
                "count": count 
            }],
            "time": ticks //Why does ticks stand in for Jouls? Wut.
        }).id(`perpendicular:particle_accelerator/${recipeID}`)
    }

    function atomicForge(recipeID, output, inputs, count, ticks) {
        var items = []
        inputs.forEach(input => {
            items.push({
                "item": input
            })
        })
        
        event.custom({
            "type": "oritech:atomic_forge",
            "ingredients": items,
            "results": [{
                "id": output,
                "count": count 
            }],
            "time": ticks
        }).id(`perpendicular:atomic_forge/${recipeID}`)
    }

    function spinyThing(recipeID, output, input, count, ticks) {
        event.custom({
            "type": "oritech:centrifuge_fluid",
            "ingredients": [{
                "item": input
            }],
            "results": [{
                "id": output,
                "count": count
            }],
            "time": ticks
        }).id(`perpendicular:spiny/${recipeID}`)
    }
    
    //spiiiiiiiiiiiiiin
    function spinyThingButWithFluid(recipeID, output, input, fluidId, count, fluidAmount, ticks) {
        event.custom({
            "type": "oritech:centrifuge_fluid",
            "fluidInput": {
                "fluid": fluidId,
                "amount": fluidAmount
            },
            "ingredients": [{
                "item": input
            }],
            "results": [{
                "id": output,
                "count": count
            }],
            "time": ticks
        }).id(`perpendicular:spiny_with_fluid/${recipeID}`)
    }

    function reactorFuel(recipeID, input, ticks) {
        event.custom({
            "type": "oritech:reactor",
            "ingredients": [{
                "item": input
            }],
            "results": [], //Results isn't used, This just hates you.
            "time": ticks
        }).id(`perpendicular:reactor/${recipeID}`)
    }

    function fragmentForge(recipeID, outputs, input, ticks) {
        var itemsOut = []
        outputs.forEach(output => {
            itemsOut.push({
                "id": output.item,
                "count": output.count ? output.count : 1
            })
        })
        
        event.custom({
            "type": "oritech:grinder",
            "ingredients": [{
                "item": input
            }],
            "results": itemsOut,
            "time": ticks
        }).id(`perpendicular:fragment_forge/${recipeID}`)
    }

    function refinery(recipeID, fluidOutputs, fluidId, fluidAmount, itemInput, ticks) {
        var fluidsOut = []
        fluidOutputs.forEach(output => {
            fluidsOut.push({
                "fluid": output.fluid,
                "amount": output.count ? output.count : 1000
            })
        })
        
        event.custom({
            "type": "oritech:refinery",
            "fluidInput": {
                "fluid": fluidId,
                "amount": fluidAmount
            },
            "fluidOutputs": fluidsOut,
            "ingredients": itemInput ? [{"item": itemInput}] : [],
            "results": [],
            "time": ticks
        }).id(`perpendicular:refinery/${recipeID}`)
    }

    /*
    pulverizer("testDebug", "minecraft:glass", "minecraft:dragon_egg", 1, 60)
    foundry("testDebugTwo", "minecraft:ice", "minecraft:dirt", "minecraft:bedrock", 1, 60)
    laser("testDebugThree", "minecraft:mud", "minecraft:bookshelf", 1, 5)
    assembler("testDebugFour", "minecraft:oak_log", ["minecraft:mud", "minecraft:chain"], 1, 60)
    particleAccelerator("testDebugFive", "minecraft:mace", ["minecraft:blaze_rod", "minecraft:bedrock"], 1, 600)
    atomicForge("testDebugSix", "minecraft:mud", ["minecraft:ice", "minecraft:bedrock"], 10, 60)
    spinyThing("testDebugSeven", "minecraft:copper_block", "minecraft:iron_block", 1, 60)
    spinyThingButWithFluid("testDebugEight", "minecraft:copper_block", "minecraft:gold_block", "minecraft:lava", 1, 1000, 60)
    reactorFuel("testDebugNine", "computercraft:computer_advanced", 200)
    fragmentForge("testDebugTen", [{"item":"minecraft:dirt", "count":2}, {"item":"minecraft:ice"}], "minecraft:bedrock", 60)
    refinery("testDebugEleven", [{"fluid":"minecraft:milk", "amount":1000}, {"fluid":"minecraft:lava"}], "minecraft:water", 1000, null, 60)
    */

    //I though it was funny, Please do not behead me.
    reactorFuel("the_cake_is_a_lie", "minecraft:cake", 1000)
})
