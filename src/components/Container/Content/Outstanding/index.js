import React, { useState, useEffect } from "react";

function Outstanding() {
  // Get data from parent component
  // const outstandingHotSellingProductsInfo =
  //   dataSource.outstandingHotSellingProductsInfo;
  // const outstandingHotBrandsInfo = dataSource.outstandingHotBrandsInfo;

  // // Function handlers
  // const updateInDOMOutstandingHotSellingProducts = ([
  //   outstandingHotSellingProductsInfoInfo,
  //   outstandingHotSellingProductsListInfo,
  // ]) => {
  //   return (
  //     <>
  //       <div className="outstanding__hot-selling-products__info">
  //         <h4 className="outstanding__hot-selling-products__info__heading">
  //           {outstandingHotSellingProductsInfoInfo.heading}
  //         </h4>
  //         <a
  //           href={outstandingHotSellingProductsInfoInfo.href}
  //           className="outstanding__hot-selling-products__info__view-more-btn"
  //         >
  //           Xem thêm <i className="fas fa-chevron-right"></i>
  //         </a>
  //       </div>
  //       <div className="outstanding__hot-selling-products__list">
  //         {outstandingHotSellingProductsListInfo.map((data) => {
  //           return (
  //             <a
  //               key={data.id}
  //               href={data.href}
  //               className="outstanding__hot-selling-products__item"
  //             >
  //               <img
  //                 src={data.image}
  //                 className="outstanding__hot-selling-products__img"
  //               />
  //               <span className="outstanding__hot-selling-products__price">
  //                 {data.price}
  //               </span>
  //               <div className="outstanding__hot-selling-products__sale-off-label">
  //                 <span className="outstanding__hot-selling-products__sale-off-label__percent">
  //                   {data.percent}
  //                 </span>
  //                 <span className="outstanding__hot-selling-products__sale-off-label__text">
  //                   GIẢM
  //                 </span>
  //               </div>
  //             </a>
  //           );
  //         })}
  //       </div>
  //     </>
  //   );
  // };
  // const updateInDOMOutstandingHotBrands = ([
  //   outstandingHotBrandsInfoInfo,
  //   outstandingHotBrandsListInfo,
  // ]) => {
  //   return (
  //     <>
  //       <div className="outstanding__hot-brands__info">
  //         <h4 className="outstanding__hot-brands__info__heading">
  //           {outstandingHotBrandsInfoInfo.heading}
  //         </h4>
  //         <a
  //           href={outstandingHotBrandsInfoInfo.href}
  //           className="outstanding__hot-brands__info__view-more-btn"
  //         >
  //           Xem thêm <i className="fas fa-chevron-right"></i>
  //         </a>
  //       </div>
  //       <div className="outstanding__hot-brands__list">
  //         {outstandingHotBrandsListInfo.map((data) => {
  //           return (
  //             <a
  //               key={data.id}
  //               href={data.href}
  //               className="outstanding__hot-brands__item"
  //             >
  //               <img
  //                 src={data.image}
  //                 className="outstanding__hot-brands__img"
  //               />
  //               <div className="">
  //                 <img
  //                   src={data.subImage}
  //                   className="outstanding__hot-brands__sub-img"
  //                 />
  //               </div>
  //               <span className="outstanding__hot-brands__text">
  //                 {data.text}
  //               </span>
  //             </a>
  //           );
  //         })}
  //       </div>
  //     </>
  //   );
  // };

  return (
    <div className="outstanding">
      <div className="outstanding__header">
        <img
          src="/assests/img/container/outstanding/picture_header.png"
          className="outstanding__picture-header"
        />
      </div>
      <div className="outstanding__body">
        <div>
          <div className="outstanding__hot-selling-products">
            {/* {outstandingHotSellingProductsInfo &&
              updateInDOMOutstandingHotSellingProducts([
                outstandingHotSellingProductsInfo.info,
                outstandingHotSellingProductsInfo.list,
              ])} */}
          </div>
          <div className="outstanding__hot-brands">
            {/* {outstandingHotBrandsInfo &&
              updateInDOMOutstandingHotBrands([
                outstandingHotBrandsInfo.info,
                outstandingHotBrandsInfo.list,
              ])} */}
          </div>
        </div>
      </div>
      <div className="outstanding__footer">
        <img
          src="/assests/img/container/outstanding/picture_footer.png"
          className="outstanding__picture-footer"
        />
      </div>
    </div>
  );
}

export default Outstanding;
