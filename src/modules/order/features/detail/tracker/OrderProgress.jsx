import {useState} from 'react';

import OrderStep from './step/OrderStep';
import OrderLine from './line/OrderLine';

export default function OrderProgress() {
  //states
  const [currentStep, setCurrentStep] = useState(1); //id == current step
  const [isCancel, setIsCancel] = useState(false);
  //useOrderLine and OrderStep
  return (
    <div>
      <OrderStep id={1} title="Order Placed" />
      <OrderLine />
      <OrderStep id={2} title="Processing" />
      <OrderLine />
      <OrderStep id={3} title="Shipped" />
    </div>
  );
}
