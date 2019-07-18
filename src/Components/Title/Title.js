import React from 'react'

const Title = ({ name }) => {

	return(
		<div>
			<p className='f2 black courier tc fl w-100'>
				{`Greetings, ${name}!`}
			</p>
		</div>
	)
}

export default Title