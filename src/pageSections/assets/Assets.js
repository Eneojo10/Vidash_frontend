import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Assets({titles, firstOpt, secOpt, thirdOpt}) {
  return (
    <div>
        <DropdownButton
          id='dropdown-button-dark-example2'
          variant='secondary'
          title= {titles}
          className='mt-2'
          data-bs-theme='light'
        >
          <Dropdown.Item href='#/action-1'>{firstOpt}</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>{secOpt} </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href='#/action-3'>{thirdOpt}</Dropdown.Item>
        </DropdownButton>

    </div>
  );
}

export default Assets