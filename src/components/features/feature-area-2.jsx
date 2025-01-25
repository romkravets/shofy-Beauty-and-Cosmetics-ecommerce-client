import React from 'react';
import { ArrowRightSm } from '@/svg';
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
              className="tp-btn" style={{backgroundColor: '#821F40', color: '#fff'}}>
                Приєднатися до курсу
                {" "}<ArrowRightSm/>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAreaTwo;