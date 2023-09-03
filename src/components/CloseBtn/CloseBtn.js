import React from 'react';
import { Button }  from './CloseBtn.style';
import { useNavigate } from 'react-router-dom';

const CloseBtn = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/')
    }

  return (
    <Button onClick={handleClose} />
  )
}

export default CloseBtn