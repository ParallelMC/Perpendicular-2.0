// priority: 10

ServerEvents.recipes(event => {

    const CUTTING_PREFIX = 'perpendicular:cutting/';

    // -----------------
    // Cutting
    // -----------------

    // Replace Crayfish cutting board
    // <Input(Ingredent/Item)> <Tool(Item)> <Outputs(Item[])>
    //event.recipes.farmersdelight.cutting('refurbished_furniture:cooked_vegetable_pizza', '#c:tools/knives', ['6x refurbished_furniture:vegetable_pizza_slice']).id(`${CUTTING_PREFIX}vegetable_pizza_slice`);
    //event.recipes.farmersdelight.cutting('refurbished_furniture:cooked_meatlovers_pizza', '#c:tools/knives', ['6x refurbished_furniture:meatlovers_pizza_slice']).id(`${CUTTING_PREFIX}meatlovers_pizza_slice`);
    event.recipes.farmersdelight.cutting('pneumaticcraft:failed_pcb', '#computercraft:computer', ['sfm:manager']).id(`${CUTTING_PREFIX}testRecipeImGoingToForgetToRemove`);
})