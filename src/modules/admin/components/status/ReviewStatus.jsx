// import {MdCircle} from 'react-icons/md';

export default function ReviewStatus({status = 'UNREVIEWED'}) {
  //get status from userpayment
  //verifyId and verifyDate if stamp mean reviewed
  //

  const reviewMapping = {
    UNREVIEWED: {
      title: 'Unreviewed',
      color: 'text-red-500 border-red-500 bg-red-200 bg-opacity-50',
    },
    REVIEWED: {
      title: 'Reviewed',
      color: 'text-green-500 border-green-500 bg-green-200 bg-opacity-50',
    },
  };

  const currentStatus = reviewMapping[status] || {
    title: 'Unknown',
    color: 'text-gray-500 border-gray-500 bg-gray-200 bg-opacity-50',
  };

  return (
    <span
      className={`text-xs rounded-lg font-medium p-1.5 ${currentStatus.color}`}
    >
      {currentStatus.title}
    </span>
  );
}
