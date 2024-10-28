import React from 'react';
import Accordion from '../../../../components/Accordion';

export default function WarrantyContainer() {
  return (
    <div className="grid gap-4 w-1/2">
      <Accordion
        article="Do you have any Warranty Cover ?"
        answer="We offer 7 days Warranty on most products. In 7 days you can returned to get replaced new one. and actual product warranty from their product."
      />
    </div>
  );
}
