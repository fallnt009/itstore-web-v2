import React from 'react';
import Accordion from '../../../../components/Accordion';

export default function OrderInfoContainer() {
  return (
    <div className="grid gap-4 w-1/2">
      <Accordion
        article="How to Order ?"
        answer="To order ours product. Choose the items that you like and Click 'Add to Cart'. Check yours items and proceed to pay."
      />
      <Accordion
        article="How Track Order ?"
        answer="You can tracking your order in Help Center by Click Track Order Button. and Use your Order Number to track."
      />
      <Accordion
        article="When Will I receive my order ?"
        answer="3-5 business days on Standard Parcel "
      />
      <Accordion
        article="Can I canceled my order ?"
        answer="Yes, you can cancel manually during the order pending phase. However, in the Processing phase, you need to contact the call center to cancel. Once an order has been completed and shipped, you can't cancel anymore."
      />
    </div>
  );
}
