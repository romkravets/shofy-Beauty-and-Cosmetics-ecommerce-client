import React from 'react';
import { ArrowRightSmTwo, Delivery, Discount, Refund, Support } from '@/svg';
import Link from 'next/link';

export const feature_data = [
  {
    icon: <Delivery />,
    title: 'Free Delivery',
    subtitle: 'Orders from all item'
  },
  {
    icon: <Refund />,
    title: 'Return & Refund',
    subtitle: 'Money back guarantee'
  },
  {
    icon: <Discount />,
    title: 'Member Discount',
    subtitle: 'Onevery order over $140.00'
  },
  {
    icon: <Support />,
    title: 'Support 24/7',
    subtitle: 'Contact us 24 hours a day'
  },
]


const FeatureAreaTwo = () => {
  return (
    <section className={`tp-feature-area pb-45`}>
      <div className="container">
        <div className="tp-feature-inner-2 text-center">
          <div className="row align-items-center">
          <div className="tp-collection-btn">
            <Link 
             target="_blank"
             href="https://t.me/+ShQlJzyD7MA0ZDRi"
             className="tp-btn" style={{backgroundColor: '#BD844C', color: '#fff'}}>
                Приєднатися до курсу
                {" "}<ArrowRightSmTwo/>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAreaTwo;