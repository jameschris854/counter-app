import React from 'react';
import Button from '../button/button.component'

const row = ({handleDelete,id}) => {
    return(
        <div className="row-container">
            <Button content='zero' color='yellow' />
            <Button content='+' color='grey'/>
            <Button content='-' color='blue' />
            <Button content={<i class="fas fa-trash-alt"></i>} color='red' onClick={() => handleDelete(id)}/>
        </div>
    )
}

export default row;