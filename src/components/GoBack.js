import React, {Component} from 'react';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GoBack extends Component{
    render(){
        return(
            <div class="col">
                <a className="blk-a-none" href="#">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <strong> Go back</strong>
                </a>
            </div>
        )
    }
}

export default GoBack;