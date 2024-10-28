import React from 'react';
import Accordion from '../../../../components/Accordion';

export default function PaymentContainer() {
  return (
    <div className="grid gap-4 w-1/2">
      <Accordion
        article="What payment methods do you accept?"
        answer="For now we only accept Bank wired or transfer."
      />
    </div>
  );
}
