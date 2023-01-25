import { Box, Divider, Drawer, FormControl, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import {  TurnedInNot } from "@mui/icons-material";



export const SideBar = ({window, drawerWidth, handleDrawerToggle, mobileOpen }) => {

  

    const drawer = (
        <div>
          <Toolbar sx={{backgroundColor:"primary.main"}}>
            <FormControl sx={{ width:drawerWidth } }>   {/* width:`calc(${drawerWidth}px )` */}
              <InputLabel id="demo-simple-select-label" >Curso</InputLabel>
              {/* <Select
              sx={{backgroundColor:"error.main"}}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                //value={age}
                label="Age"
                //onChange={handleChange}
                
              >
                <MenuItem value={10}>1ro A</MenuItem>
                <MenuItem value={20}>1ro B</MenuItem>
                <MenuItem value={30}>5to A</MenuItem>
              </Select> */}
            </FormControl>
          </Toolbar>
          <Divider />

          <List>
            {['Carátula', 'Filiación'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon >
                    <TurnedInNot sx={{color:"secondary.main"}} /> 
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <TurnedInNot sx={{color:"secondary.main"}} />
                  </ListItemIcon>
                  <ListItemText primary="Asistencia" />
                </ListItemButton>
              </ListItem>
          </List>

          <List>
            {['1er. Trimestre', '2do. Trimestre', '3er. Trimestre'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot sx={{color:"secondary.main"}} />
                  </ListItemIcon>
                  <ListItemText primary="Evaluación" />
                </ListItemButton>
              </ListItem>
          </List>

          <List>
            {['1er. Trimestre', '2do. Trimestre', '3er. Trimestre'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            {['Centralizador 1', 'Centralizador 2','Estadísticas','Avance','Destacados','Inf. de Usuario'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                  <TurnedInNot sx={{color:"secondary.main"}} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          
        </div>
    )

    const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
  )
}
