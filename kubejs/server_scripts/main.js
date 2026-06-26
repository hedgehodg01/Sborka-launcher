ServerEvents.recipes(event => {
	
  event.remove({ output: 'tacz:gun_smith_table' })
  event.remove({ output: 'tacz:workbench_c[custom_data={BlockId:"tacz:attachment_workbench"}]' })
  event.remove({ output: 'tacz:workbench_a[custom_data={BlockId:"tacz:ammo_workbench"}]' })
  
  event.shaped(
  Item.of('tacz:gun_smith_table', 1), // arg 1: output
  [
    'DDD',
    'ACA', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: '#c:ingots/steel',
    B: 'tacz:ammo_box',
    C: '#c:player_workstations/crafting_tables',
	D: '#minecraft:planks'
  }
)
  
  event.shaped(
  Item.of('tacz:workbench_c[custom_data={BlockId:"tacz:attachment_workbench"}]', 1), // arg 1: output
  [
    'CCC',
    'CDC', 
    'ABA'
  ],
  {
    A: '#c:ingots/steel' ,
    B: 'minecraft:chest',
    C: '#createbigcannons:glass',
	D: 'create:mechanical_arm'
  }
)

	event.shaped(
  Item.of('tacz:workbench_a[custom_data={BlockId:"tacz:ammo_workbench"}]', 1), // arg 1: output
  [
    'CC ',
    'AB ', 
    '   '
  ],
  {
    A: '#c:ingots/steel',
    B: 'tacz:ammo_box',
    C: 'createbigcannons:big_cartridge_sheet'
  }
) 

  event.shaped(
  Item.of('tacz:ammo_box[custom_data={Creative:1b}]', 1), // arg 1: output
  [
    'AAA',
    'ABA', 
    'AAA'
  ],
  {
    A: 'apothic_enchanting:infused_breath',
    B: 'tacz:ammo_box[custom_data={Level:2}]'
  }
)
  console.log('Hello! The recipe event has fired!')
})