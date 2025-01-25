import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// internal
import logo from '@assets/img/logo/logo.svg';
import pay from '@assets/img/footer/footer-pay.png';
import social_data from '@/data/social-data';
import { Email, Location } from '@/svg';
import { right } from '@popperjs/core';

const Footer = ({ style_2 = false, style_3 = false,primary_style=false }) => {
  return (
    <footer>
      <div className={`tp-footer-area ${primary_style?'tp-footer-style-2 tp-footer-style-primary tp-footer-style-6':''} ${style_2 ?'tp-footer-style-2':style_3 ? 'tp-footer-style-2 tp-footer-style-3': ''}`}
        data-bg-color={`${style_2 ? 'footer-bg-white' : 'footer-bg-grey'}`}>
        <div className="tp-footer-bottom">
          <div className="container">
            <div className="tp-footer-bottom-wrapper" style={{textAlign: 'center'}}>
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="tp-footer-copyright">
                    <p>© {new Date().getFullYear()} All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;