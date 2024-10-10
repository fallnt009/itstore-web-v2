import OrderStep from './step/OrderStep';
import OrderLabel from './label/OrderLabel';
import OrderLine from './line/OrderLine';

export default function ProgressHorizontal({currentStep, isCancel}) {
  //width 500 line
  return (
    <div className="flex flex-col">
      <div className="flex px-5">
        <div className="flex items-center">
          <OrderStep id={1} currentStep={currentStep} isCancel={isCancel} />
          <OrderLine
            id={2}
            currentStep={currentStep}
            isCancel={isCancel}
            width={500}
            height={20}
            left={-2}
          />
        </div>
        <div className="flex items-center relative -left-6">
          <OrderStep id={2} currentStep={currentStep} isCancel={isCancel} />
          <OrderLine
            id={3}
            currentStep={currentStep}
            isCancel={isCancel}
            width={500}
            height={20}
            left={-2}
          />
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
          {currentStep === 4 && isCancel ? (
            <OrderLabel id={4} title="Cancelled" />
          ) : (
            <OrderLabel id={3} title="Shipped" />
          )}
        </div>
      </div>
    </div>
  );
}
