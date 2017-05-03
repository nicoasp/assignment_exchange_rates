import React from 'react'

const Select = (props) => {
  const {options, ...restOfProps} = props
  const optionElements = options.map((option) => {
  	if (option === props.selected) {
  		return (
	      <option key={option} value={option} selected>
	        {option}
	      </option>
      )	
  	} else {
  		return (
	      <option key={option} value={option} >
	        {option}
	      </option>  		
	    )
  	}

    }
  )

  return (
    <select className="form-control" {...restOfProps} >
      {optionElements}
    </select>
  )
}

export default Select
