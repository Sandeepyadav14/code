


import {cal} from './tax_calculator'

test (`testing tax function `, ()=>{
  expect(cal("10%",250000,500000)).toBe(225000)
})
