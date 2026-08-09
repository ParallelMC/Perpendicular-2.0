// priority: 100

ServerEvents.tags('fluid', event => {

    // Replace Tinkers molten lead with Oreganized version
    event.add('c:molten_lead', 'oreganized:molten_lead')
    /* // Tinkers was removed, So was ad astra.
    event.removeAllTagsFrom('tconstruct:molten_lead')
    event.removeAllTagsFrom('tconstruct:flowing_molten_lead')

    // Replace Tinkers molten bronze with Big Cannons version
    event.removeAllTagsFrom('tconstruct:molten_bronze')
    event.removeAllTagsFrom('tconstruct:flowing_molten_bronze')
    
    // Replace Tinkers molten steel with Big Cannons version
    event.removeAllTagsFrom('tconstruct:molten_steel')
    event.removeAllTagsFrom('tconstruct:flowing_molten_steel')

    // Use PneumaticCraft oil
    event.removeAllTagsFrom('thermal:crude_oil')
    event.removeAllTagsFrom('ad_astra:oil')
    */
  });