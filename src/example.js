import React from 'react'
import { Dropdown } from 'semantic-ui-react'

// const profOptions = [
//   { id: 0, key: 'af', value: 'Bob Smith', text: 'Bob Smith' },
//   { id: 1, key: 'ax', value: 'Jane Smith',  text: 'Jane Smith' },
//   { id: 2, key: 'al', value: 'Michael Michael',  text: 'Michael Michael' },
//   { id: 3, key: 'dz', value: 'Brady B',  text: 'Brady B' },
//   { id: 4, key: 'as', value: 'Eric E',  text: 'Eric E' },
//   { id: 5, key: 'ad', value: 'Nilima N', text: 'Nilima N' },
//   { key: 'ao', value: 'Marque M',  text: 'Marque M' },
//   { key: 'ai', value: 'Epharra E',  text: 'Epharra E' },
//   { key: 'ag', value: 'Red Bull', text: 'Red Bull' },
//   { key: 'ar', value: 'Cindy Lou',  text: 'Cindy Lou' },
//   { key: 'am', value: 'Patty Hat',  text: 'Patty hat' },
//   { key: 'aw', value: 'Tod Ham',  text: 'Tod Ham' },
// ]

function getSelection(e){
  console.log(e);
}

const DropdownExampleSearchSelection = (props, event) => (
  <Dropdown
    placeholder='Select Professor'
    fluid
    search
    selection
    options={props.profOptions}
    defaultValue={props.profOptions[0].value}
    onChange={getSelection(event)}
  />
)


export default DropdownExampleSearchSelection
