import React, {useEffect, useState} from 'react';
import './Insurance.css';
import Button from './Button';
import { FaPlus, FaMinus } from "react-icons/fa";

import {getInsuranceInfo} from '../services/insuranceInfoServices';

interface InsuranceInfoProps {
    companyName: string | undefined;
    policyNumber: number;
    startDate: string | undefined;
    buttonLabels: string[];
    buttonHandlers: (() => void)[];
}

const InsuranceInfo: React.FC<InsuranceInfoProps> = ({ companyName, policyNumber, startDate, buttonLabels, buttonHandlers }) => {

    const [showButtons, setShowButtons] = useState(true)

    useEffect(() => {
        const fetchInsuranceInfo = async () => {
            try {
                const data = await getInsuranceInfo();

                console.log('data', data)

            } catch (error) {
                console.error('Failed to fetch insurance info', error);
            }
        };

        fetchInsuranceInfo();
    }, []);

    const handleShowButtons = () => {
        console.log('!showButtons', !showButtons);

        setShowButtons(!showButtons);
    }

    return (
        <div className="Container">
            <div className="HeaderContainer">
                <div className="Header">Acidentes de Trabalho</div>
            </div>

            <hr />
            <div className="InsuranceInfoContainer">
                <div className="InfoTextContainer">
                    <div className="TextInfo">{companyName}</div>
                    <div className="Text">Apólice {policyNumber}</div>
                    <div className="Text">Data início {startDate}</div>
                    {showButtons ? (
                        <FaMinus onClick={handleShowButtons} color='#007bff'/>
                    ) : (
                        <FaPlus onClick={handleShowButtons} color='#007bff'/>
                    )}
                </div>
            </div>
            {showButtons && (
                <div className="ButtonContainer">
                    {buttonLabels.map((label, index) => (
                        <Button key={index} text={label} onClick={buttonHandlers[index]} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default InsuranceInfo;
