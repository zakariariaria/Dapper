import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/PlanSelection.css';

function PlanSelection() {
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    const [billing, setBilling] = useState('monthly'); // state to manage billing option
    
    const plans = [
        { 
            title: 'Essentials', 
            monthlyPrice: '$24', 
            yearlyPrice: '$270', 
            features: [
                'Affordable price',
                'Versatile and easy to wear',
                'Quality clothes'
            ]
        },
        { 
            title: 'Elevated', 
            monthlyPrice: '$50', 
            yearlyPrice: '$550', 
            features: [
                'Access to latest trends and styles',
                'Stands out from the crowd',
                'High-quality and on-trend',
                'Curated selection of mid-range clothing and accessories'
            ]
        },
        { 
            title: 'Deluxe', 
            monthlyPrice: '$120',
            yearlyPrice: '$1350',
            features: [
                'Exclusive items',
                'Finest quality clothing and accessories',
                'Unmatched luxury fashion experience'
            ]
        },
    ];


    const handleClick = (i) => {
        setIndex(i);
        navigate("/address");
    };

    return (
        <div className="page-container">
            <h2 className="plan-title">Select Your Plan</h2>
            <div className="billing-options text-center mb-4">
    <span className="billing-text">Bill me </span>
    <span 
        onClick={() => setBilling('monthly')} 
        className={billing === 'monthly' ? 'billing-active' : 'billing-option'}
    >
        Monthly
    </span>
    <span className="divider"> • </span>
    <span 
        onClick={() => setBilling('yearly')} 
        className={billing === 'yearly' ? 'billing-active' : 'billing-option'}
    >
        Yearly
    </span>
</div>
            <div className="container mt-5">
    <div className="row plan-container">
        {plans.map((plan, i) => (
            <div key={i} className="col-md-4">
                <div className="card plan-card">
                    <div className="card-body">
                    <div className="title-container">

                        <h5 className="card-title">{plan.title}</h5>
                        {plan.title === 'Elevated' && <span className="best-tag">BEST!</span>}
                        </div>
                        <h6 className="price-text">
                            {billing === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                            <span className="billing-cycle"> / {billing === 'monthly' ? 'month' : 'year'}</span>
                        </h6>
                        <ul className="list-unstyled features-list">
                            {plan.features.map((feature, index) => (
                                <li key={index}><span role="img" aria-label="check">✔️</span> {feature}</li>
                            ))}
                        </ul>
                        <button className="plan-btn btn btn-primary" onClick={() => handleClick(i)}>Choose Plan</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
        </div>
    );
}

export default PlanSelection;
