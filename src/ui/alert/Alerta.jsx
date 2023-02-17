import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export const Alerta = ({msj="¡Guardado!", severity="success", tiempo=1000}) => {
  const [state, setState] = React.useState({ open: false});
  const { open } = state;

  const handleClickAlerta = () => () => {
    setState({ 
      open: true, 
      });
  };

  const handleClose = () => {
    setState({ open: false });
  };



  return (
    <div>
      
     {/*  <Button
        onClick={handleClickAlerta()}
      >
        Top-Right
      </Button> */}

      <Snackbar
        anchorOrigin={{vertical: "top", horizontal:"right" }}
        autoHideDuration={tiempo}
        open={open}
        onClose={handleClose}
        key={"top" + "right"}
      >
        <Alert severity={severity} >      {/* severity= error success ::::  sx={{ width: "100%" }}*/}
            {msj}
        </Alert>
      </Snackbar>
    </div>
  );
}


/* 

import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export const Alerta = ({msj="¡Guardado!", severity="success", tiempo=1000}) => {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = () => () => {
    setState({ 
      open: true, 
      vertical: 'top',
      horizontal: 'right',});
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      
      <Button
        onClick={handleClick()}
      >
        Top-Right
      </Button>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={tiempo}
        open={open}
        onClose={handleClose}
        
        key={vertical + horizontal}
      >
         <Alert severity={severity} sx={{ width: "100%" }}>     
            {msj}
        </Alert>
      </Snackbar>
    </div>
  );
}


////////////////////////////////////////////////////////

import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export const Alerta = () => {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'center',
        })}
      >
        Top-Center
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'right',
        })}
      >
        Top-Right
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'right',
        })}
      >
        Bottom-Right
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'center',
        })}
      >
        Bottom-Center
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'bottom',
          horizontal: 'left',
        })}
      >
        Bottom-Left
      </Button>
      <Button
        onClick={handleClick({
          vertical: 'top',
          horizontal: 'left',
        })}
      >
        Top-Left
      </Button>
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </div>
  );
}
 */