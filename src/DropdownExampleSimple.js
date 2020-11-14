import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const options = [
  { key: 1, text: 'A1', value: 1 },
  { key: 2, text: 'A2', value: 2 },
  { key: 3, text: 'B1', value: 3 },
   { key: 3, text: 'B2', value: 3 },
]

const DropdownExampleSimple = () => (
  <Menu compact>
    <Dropdown text='選擇程度' options={options} simple item />
  </Menu>
)

export default DropdownExampleSimple