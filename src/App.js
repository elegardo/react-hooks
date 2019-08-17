import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react'

import TabDemo1 from './containers/TabDemo1'
import TabDemo2 from './containers/TabDemo2'
import TabDemo3 from './containers/TabDemo3'

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
          <Menu.Item name='demo3'
                      active={activeItem === 'demo3'}
                      onClick={(e, { name }) => {setActiveItem(name)}}/>
        </Menu>

        {activeItem === 'demo1' &&
            <TabDemo1/>
        }
        {activeItem === 'demo2' &&
            <TabDemo2/>
        }
        {activeItem === 'demo3' &&
            <TabDemo3/>
        }
      </div>
  );
    
};
  
export default App;
