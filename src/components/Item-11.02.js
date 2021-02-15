import React, {Component} from 'react';

class Item extends Component{
    constructor(){
        super();

    }
    render(){
        let className="";
        var comp=document.getElementsByClassName('chosen');
        switch (comp) {
            case "1":
                return(
                    <div className={className}>
                        <p>{ this.props.item.title }</p>
                    </div>
                )
                break;
        
            case "2":
                return(
                    <div className={className}>
                        <p>{ this.props.item.title }</p>
                    </div>
                )
                break;
        
            case "3":
                return(
                    <div className={className}>
                        <p>{ this.props.item.title }</p>
                    </div>
                )
                break;
        
            default:
                return(
                    <div className={className}>
                        <p>{ this.props.item.title }</p>
                    </div>
                )
                break;
        }
        return(
            <div className={className}>
                <p>{ this.props.item.title }</p>
            </div>
        )
    }
}

export default Item;