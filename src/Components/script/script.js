import './script.css';

import React from 'react';

class Script extends React.Component{
    
    render() {
        const {title, yields, description, amount, type} = this.props;
        return(
            <div className="script">
                <div className={"script-title-" + type}>
                    {title}
                </div>
                <div className="script-yields">
                    Доходность: {yields+'%'}
                </div>
                
                <div className={"script-income-" + type}>
                    Доход: {((amount * (1 + yields / 100))-amount).toFixed(2)} рублей.
                </div>
                <div className="script-description">
                    {description}
                </div>
            </div>
        );
    }
}

export default Script;