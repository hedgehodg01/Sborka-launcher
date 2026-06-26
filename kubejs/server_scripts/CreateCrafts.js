ServerEvents.recipes(event => {	
	event.recipes.create.mechanical_crafting('simulated:creative_physics_staff', [
    '   BCB   ',
    '   BDB   ',
    '  BCACB  ',
    '   FEF   ',
    '   BDB   ',
	'  BCDCB  ',
	'   BCB   ',
  ], {
    A: 'create:wand_of_symmetry',
	B: 'apothic_enchanting:infused_breath',
	C: 'minecraft:obsidian',
	D: 'aeronautics:end_stone_powder',
	E: 'minecraft:pearlescent_froglight',
	F: '#createbigcannons:glass'
  })
  
    event.recipes.create.mixing(['create:blaze_cake', CreateItem.of('create:creative_blaze_cake', 0.01)], 'apothic_enchanting:infused_breath').superheated()
})