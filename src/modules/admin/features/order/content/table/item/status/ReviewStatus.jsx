//
export default function ReviewStatus({status = 'UNREVIEWED'}) {
  //get status from userpayment
  //verifyId and verifyDate if stamp mean reviewed
  //

  const reviewMapping = {
    UNREVIEWED: {
      title: 'Unreviewed',
      color: 'text-red-500 border-red-500 bg-red-50',
    },
    REVIEWED: {
      title: 'Reviewed',
      color: 'text-green-500 border-green-500 bg-green-50',
    },
  };

  const currentStatus = reviewMapping[status] || {
    title: 'Unknown',
    color: 'text-gray-500 border-gray-500 bg-gray-50',
  };

  return (
    <div
      className={`w-[75px] border text-xs text-center rounded-lg p-0.5 ${currentStatus.color}`}
    >
      <p className="font-medium">{currentStatus.title}</p>
    </div>
  );
}
