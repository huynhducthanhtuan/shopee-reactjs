import './FooterDirectory.css';
import React from 'react';
import { FooterDirectoryInfo } from 'types';
import { useDataSourceContext } from 'hooks';

function FooterDirectory() {
  const { footerDirectoryListInfo } = useDataSourceContext();

  const renderFooterDirectoryList = (datas: FooterDirectoryInfo[][]) =>
    datas.map((data1: FooterDirectoryInfo[], index1: number) => (
      <li key={index1} className="footer__directory__item">
        {data1.map((data2: FooterDirectoryInfo, index2: number) => {
          const { heading, footerDirectoryItemPartListInfo } = data2;
          const { href: href2, innerHTML: innerHTML2 } = heading;

          return (
            <div key={index2} className="footer__directory__item__part">
              <a
                href={href2}
                className="footer__directory__item__part__heading"
              >
                {innerHTML2}
              </a>

              <div className="footer__directory__item__part__list">
                {footerDirectoryItemPartListInfo.map((data3, index3) => {
                  const { href: href3, innerHTML: innerHTML3 } = data3;

                  return (
                    <a
                      key={index3}
                      href={href3}
                      className="footer__directory__item__part__item"
                    >
                      {innerHTML3}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </li>
    ));

  return (
    <div className="footer__directory">
      <span className="footer__directory__heading">Danh Mục</span>
      <ul className="footer__directory__list">
        {footerDirectoryListInfo &&
          renderFooterDirectoryList(footerDirectoryListInfo)}
      </ul>
    </div>
  );
}

export default FooterDirectory;
