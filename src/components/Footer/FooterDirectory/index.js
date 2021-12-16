import React, { useState, useEffect, useRef } from "react";

function FooterDirectory({ dataSource }) {
  return (
    <div className="footer__directory">
      <span className="footer__directory__heading">Danh Mục</span>
      <ul className="footer__directory__list"></ul>
    </div>
  );
}

export default FooterDirectory;
