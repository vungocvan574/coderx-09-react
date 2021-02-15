import React, {Component} from 'react';
import { faCloudUploadAlt, faCog, faGift, faHome, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GoBack extends Component{
    render(){
        return(
            <div class="container-fluid p-1 bg-light feature-container">
                <FontAwesomeIcon className="" icon={this.props.icon} size={"3x"} />
                <br></br>
                <strong>{this.props.title}</strong>
            </div>
        )
    }
}

export default GoBack;