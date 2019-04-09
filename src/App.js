import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'

import Demo_1 from './containers/Demo_1'
import Demo_2 from './containers/Demo_2'

import './App.css'

export const App = () => {

  const [activeItem, setActiveItem] = useState('demo1')

  return(
      <div>
        <Menu pointing inverted>
          <Menu.Item name='demo1' 
                      active={activeItem === 'demo1'} 
                      onClick={(e, { name }) => {setActiveItem(name)}}/>
          <Menu.Item name='demo2'
                      active={activeItem === 'demo2'}
                      onClick={(e, { name }) => {setActiveItem(name)}}/>
        </Menu>

        {activeItem === 'demo1' &&
            <Demo_1/>
        }
        {activeItem === 'demo2' &&
            <Demo_2/>
        }
      </div>
  );
    
};
  
export default App;
