import {useState} from 'react';

import OrderStep from './step/OrderStep';
import OrderLine from './line/OrderLine';
import OrderLabel from './label/OrderLabel';

export default function OrderProgress() {
  //states
  const [currentStep, setCurrentStep] = useState(2); //id == current step
  const [isCancel, setIsCancel] = useState(false);
  //useOrderLine and OrderStep
  return (
    <div className="flex  justify-center items-center">
      <div className="flex flex-col">
        <div className="flex px-5">
          <div className="flex items-center">
            <OrderStep id={1} currentStep={currentStep} isCancel={isCancel} />
            <OrderLine id={2} currentStep={currentStep} isCancel={isCancel} />
          </div>
          <div className="flex items-center relative -left-6">
            <OrderStep id={2} currentStep={currentStep} isCancel={isCancel} />
            <OrderLine id={3} currentStep={currentStep} isCancel={isCancel} />
          </div>
          <div className="flex items-center relative -left-12">
            <OrderStep id={3} currentStep={currentStep} isCancel={isCancel} />
          </div>
        </div>
        <div className="flex justify-between items-center w-full pt-2">
          <OrderLabel id={1} title="Order Placed" />
          <div className="flex relative -left-9">
            <OrderLabel id={2} title="Processing" />
          </div>
          <div className="flex relative -left-14">
            <OrderLabel id={3} title="Shipped" />
          </div>
        </div>
      </div>
    </div>
  );
}
