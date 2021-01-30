  
import React from 'react';

import Directory from '../../directory/directory.component';
import './homepage.styles.scss';

// function because we dont really need lifecycle components here

const HomePage = () => (
<div className="homepage">
 <Directory/> 
</div>
);

export default HomePage;
// beacuse we are not gonna export anything else from our homepage