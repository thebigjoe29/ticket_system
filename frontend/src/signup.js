import Loginbox from '../src/Components/signupbox/Loginbox.js';
import './Components/signupbox/Loginbox.css';

import Homecont from '../src/Components/homecont/Homecont.js';
import './Components/homecont/Homecont.css';

function Homepage(){
    return(
        <div>
        <Homecont/>
        <Loginbox/>
        </div>
    )
}
export default Homepage;