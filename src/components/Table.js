import React from 'react'
import TableRow from './elements/TableRow'
import Select from './elements/Select'

const Table = ({rates, onChange}) => {
  console.log("Rates: ", rates)
  if (!rates.rates) {return null;}

  let currencies = Object.keys(rates.rates);
  let allRates = currencies.map( (currency) => {
    return <TableRow col1={currency} col2={rates.rates[currency]} key={currency} />
  })

  let options = currencies;
  options.unshift(rates.base);

  return (
  	<div>
  		<h2>Rates Base: {rates.base}</h2>
  		<Select onChange={onChange} options={options} selected={rates.base}/>
	    <table className="table table-striped">
	    	<tbody>
	      	{allRates}
	      </tbody>
	    </table>
	  </div>
  )

}





export default Table