export default function PaymentBankTransferItem() {
  return (
    <>
      <div className="flex flex-col gap-1 mt-5 border-2 p-3 py-4 rounded-lg ">
        <div className="flex justify-between">
          <h4 className="font-semibold ">KASIKORN BANK</h4>
          <h4 className="font-semibold ">XXX-XXX-XXXX</h4>
        </div>

        <p className="text-sm text-stone-600">Branch: Big C Chiang Mai </p>
        <p className="text-sm text-stone-600">Account name: ITSTORE.INC</p>
      </div>
      <div className="flex flex-col gap-1 mt-5 border-2 p-3 py-4 rounded-lg ">
        <div className="flex justify-between">
          <h4 className="font-semibold ">SIAM COMMERCIAL BANK</h4>
          <h4 className="font-semibold ">XXX-XXX-XXXX</h4>
        </div>

        <p className="text-sm text-stone-600">Branch: Big C Chiang Mai </p>
        <p className="text-sm text-stone-600">Account name: ITSTORE.INC</p>
      </div>
    </>
  );
}
