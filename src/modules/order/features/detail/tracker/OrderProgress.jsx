import ProgressHorizontal from './style/ProgressHorizontal';
import ProgressVertical from './style/ProgressVertical';

export default function OrderProgress({currentStep, isCancel}) {
  //useOrderLine and OrderStep
  return (
    <div>
      <div className="hidden lg:flex justify-center">
        <ProgressHorizontal currentStep={currentStep} isCancel={isCancel} />
      </div>
      <div className="flex justify-center lg:hidden">
        <ProgressVertical currentStep={currentStep} isCancel={isCancel} />
      </div>
    </div>
  );
}
