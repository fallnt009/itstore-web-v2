import OrderStep from './step/OrderStep';
import OrderLabel from './label/OrderLabel';
import OrderLine from './line/OrderLine';

export default function ProgressVertical({currentStep, isCancel}) {
  return (
    <div className="px-5">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <OrderStep id={1} currentStep={currentStep} isCancel={isCancel} />
            <OrderLabel id={1} title="Order Placed" />
          </div>
          <OrderLine
            id={2}
            currentStep={currentStep}
            isCancel={isCancel}
            width={20}
            height={110}
            left={10}
            top={-2}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <OrderStep
              id={2}
              currentStep={currentStep}
              isCancel={isCancel}
              style={{top: '-5px'}}
            />
            <OrderLabel id={2} title="Processing" />
          </div>
          <OrderLine
            id={3}
            currentStep={currentStep}
            isCancel={isCancel}
            width={20}
            height={110}
            left={10}
            top={-8}
          />
        </div>
        <div className="flex flex-col relative">
          <div className="flex gap-2 items-center">
            <OrderStep
              id={3}
              currentStep={currentStep}
              isCancel={isCancel}
              style={{top: '-11px'}}
            />
            {currentStep === 4 && isCancel ? (
              <OrderLabel id={4} title="Cancelled" />
            ) : (
              <OrderLabel id={3} title="Shipped" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
