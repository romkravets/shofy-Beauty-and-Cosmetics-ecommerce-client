import React from 'react';
import { ArrowRightSmTwo } from '@/svg';
import Link from 'next/link';


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