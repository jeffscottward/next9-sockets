import React from "react";
import { withRouter } from "next/router";

import { useStateValue } from "../state/state";
// import {get, post} from "axios";

import FormGroup from "./FormGroup";
import SubFormWrap from "./SubFormWrap";
import PurchaseBtn from "./PurchaseBtn"

const OrderForm = props => {
  const [{ cart }, dispatch] = useStateValue();
  
  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(e)
  }
  
  const handleInputChange = e => {
    e.preventDefault();
    console.log(e.target.id.split("-"));
    dispatch({
      type: "CHANGE_USERINFO",
      payload: {
        [e.target.id.split("-")[0]]: {
          [e.target.id.split("-")[1]]: e.target.value
        }
      }
    });
  };

  // NOTE: value={someVal || '' }
  // Short-circuit evaluation to force to "controlled" input
  // https://bit.ly/2TWV7JI
  return (
    <form id="OrderForm" onSubmit={handleFormSubmit}>
      <div className="form-billing">
        <h3>Billing</h3>
        <div className="form-area">
          <h4>Address</h4>
          <div className="address-input">
            <FormGroup
              group="billing"
              field="name"
              onChange={handleInputChange}
              state={cart}
              type="text"
              required
            />
            <FormGroup
              group="billing"
              field="addr1"
              onChange={handleInputChange}
              state={cart}
              type="text"
              required
            />
            <FormGroup
              group="billing"
              field="addr2"
              onChange={handleInputChange}
              state={cart}
              type="text"
              optional
            />
            <FormGroup
              group="billing"
              field="city"
              onChange={handleInputChange}
              state={cart}
              type="text"
              required
            />
            <FormGroup
              group="billing"
              field="state"
              onChange={handleInputChange}
              state={cart}
              type="text"
              required
            />
            <FormGroup
              group="billing"
              field="zip"
              size="small"
              onChange={handleInputChange}
              state={cart}
              type="number"
              min={10000}
              max={99999}
              required
            />
          </div>
        </div>
        <div className="form-area">
          <h4>Credit Card</h4>
          <div className="creditCard-input">
            <FormGroup
              group="creditCard"
              field="name"
              onChange={handleInputChange}
              state={cart}
              type="text"
              required
            />
            <FormGroup
              group="creditCard"
              field="number"
              onChange={handleInputChange}
              state={cart}
              type="number"
              min={1000000000000000}
              max={9999999999999999}
              required
            />
            <SubFormWrap label="Expires">
              <FormGroup
                group="creditCard"
                field="month"
                onChange={handleInputChange}
                state={cart}
                type="number"
                size="small"
                min={0}
                max={12}
                required
                subFormGroup
              />
              <FormGroup
                group="creditCard"
                field="year"
                onChange={handleInputChange}
                state={cart}
                type="number"
                size="small"
                min={String(new Date().getFullYear()).split("20")[1]}
                max={12}
                required
                subFormGroup
              />
            </SubFormWrap>
            <FormGroup
              group="creditCard"
              field="cvc"
              onChange={handleInputChange}
              state={cart}
              type="number"
              size="small"
              allCapsLabel
              min={0}
              max={999}
              required
            />
          </div>
        </div>
      </div>
      <div className="form-shipping">
        <h3>Shipping</h3>
        <div className="form-area">
          <h4>Address</h4>
          <div className="address-input">
            <FormGroup
              group="shipping"
              field="name"
              onChange={handleInputChange}
              state={cart}
              type="text"
              required
            />
            <FormGroup
              group="shipping"
              field="addr1"
              onChange={handleInputChange}
              state={cart}
              type="text"
              required
            />
            <FormGroup
              group="shipping"
              field="addr2"
              onChange={handleInputChange}
              state={cart}
              type="text"
              optional
            />
            <FormGroup
              group="shipping"
              field="city"
              onChange={handleInputChange}
              state={cart}
              type="text"
              required
            />
            <FormGroup
              group="shipping"
              field="state"
              onChange={handleInputChange}
              state={cart}
              type="text"
              required
            />
            <FormGroup
              group="shipping"
              field="zip"
              size="small"
              onChange={handleInputChange}
              state={cart}
              type="number"
              min={10000}
              max={99999}
              required
            />
          </div>
        </div>
        <PurchaseBtn />
      </div>
      <style jsx>{`
        #OrderForm {
          display: flex;
          justify-content: space-between;
        }
        #OrderForm > * {
          width: 48%;
          margin-bottom: 4rem;
        }
        h3 {
          margin-bottom: 0.5rem;
        }
        h4 {
          margin-bottom: 0.5rem;
        }
        h4 + div {
          margin-left: 0.5rem;
        }
        .form-area {
          margin-bottom: 2rem;
          margin-left: 0.5rem;
        }
      `}</style>
    </form>
  );
};

export default withRouter(OrderForm);
