import React from "react";
import "./CreateVoucher.css";
import Icon from "../Icon/Icon";

const CreateVoucher = () => {
  let dateObject = `${new Date().getDate()} | 0${new Date().getMonth() +
    1} | ${new Date().getFullYear()}`;
  return (
    <section className="voucher-form">
      <div className="voucher-form-headers-cont">
        <p className="voucher-date">{dateObject}</p>
        <button className="add-voucher-btn">Add new </button>
      </div>

      <div className="added-item-list">
        <div className="added-item-headers">
          <p>Details</p>
          <p>Amount</p>
          <p>Action</p>
        </div>
        <div className="added-item-list">
          <ul className="added-item-list-cont">
            <li className="added-item-list-item">Microsoft exam</li>
            <li className="added-item-list-item">&#x20a6;25,000</li>
            <li className="added-item-list-item">
              <span className="added-item-list-icon">
                <Icon type="edit" />
              </span>
              <span className="added-item-list-icon added-item-list-icon-danger">
                <Icon type="trash" />
              </span>
            </li>
          </ul>
          <ul className="added-item-list-cont">
            <li className="added-item-list-item">Office TGIF</li>
            <li className="added-item-list-item">&#x20a6;150,000</li>
            <li className="added-item-list-item">
              <span className="added-item-list-icon">
                <Icon type="edit" />
              </span>
              <span className="added-item-list-icon added-item-list-icon-danger">
                <Icon type="trash" />
              </span>
            </li>
          </ul>
        </div>
        <div className="total-amount">
          <h3>Total amount</h3>
          <p>&#x20a6;185,000</p>
        </div>
        <div className="submit-btn-cont">
          <button className="submit-btn">Send</button>
        </div>
      </div>
    </section>
  );
};

export default CreateVoucher;
