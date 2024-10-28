import React from 'react';
import Accordion from '../../../../components/Accordion';

export default function ParcelContainer() {
  return (
    <div className="grid gap-4 w-1/2">
      <Accordion
        article="What parcel services do we use?"
        answer="Actually we mainly partner with Kerry."
      />
    </div>
  );
}
