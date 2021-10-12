import React from 'react';
import './AdvanceCard.css'

const AdvanceCard = (props) => {
    return (
        <div className="col-12 col-lg-4">
            <div className={"card rounded-3 p-3 text-md-start " + props.margin}>
                <div className="card-img-bg mx-auto ms-lg-3">
                    <img src={props.icon} alt="" />
                </div>
                {/* Card Content */}
                <div className="p-3">
                    <h6 className="mt-3" style={{fontWeight: '700'}}>{props.title}</h6>
                    <p className="card-text">{props.content}</p>
                </div>
            </div>
        </div>
    );
};

export default AdvanceCard;