import React, {  useState } from "react";
import "./VoucherDetails.css";
import Icon from "../Icon/Icon";
import Modal from '../VoucherDetails/Modal/Modal';
import Viewdetails from "./ViewDetails/ViewDetails";



const VoucherDetails = () => {
  const[viewModal, setViewModal] = useState(false)

  const viewModalHandler = ()=>{
    setViewModal(true)
  }

  return(
    <div className="voucher-form">

    <table className="VoucherDetails">
    <tr>
      <th className="VoucherDetails-th">VoucherDetails</th>
      <th  className="VoucherDetails-th">Approved By</th>
      <th  className="VoucherDetails-th">Date Created</th>
      <th  className="VoucherDetails-th">Status</th>
      <th  className="VoucherDetails-th">Action</th>
    </tr>
    <tr>
      <td  className="VoucherDetails-td">Transport</td>
      <td  className="VoucherDetails-td">Mike</td>
      <td  className="VoucherDetails-td">13-02-2020</td>
      <td  className="VoucherDetails-td"> Approved <Icon type="thumbs-up" color="blue"/></td>
      <td  className="VoucherDetails-td">   <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          View
        </button></td>
      
    </tr>
    <tr>
      <td className="VoucherDetails-td">Fuel</td>
      <td className="VoucherDetails-td">Mike</td>
      <td className="VoucherDetails-td">17-02-2020</td>
      <td className="VoucherDetails-td"> Disapproved <Icon type="thumbs-down" color="red"/></td>
      <td  className="VoucherDetails-td">   <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          View
        </button></td>
    </tr>
    <tr>
      <td className="VoucherDetails-td">Electronics</td>
      <td className="VoucherDetails-td">Sunday</td>
      <td className="VoucherDetails-td">25-02-2020</td>
      <td className="VoucherDetails-td"> Approved <Icon type="thumbs-up"  color="blue"/></td>
      <td  className="VoucherDetails-td"> 
       <div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          View
        </button>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">Details</h4>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      </td>
    </tr>
    
  
    
  </table>
  <Modal show={viewModal}>
    <Viewdetails/>
  </Modal>
  
    </div>
  
  );

}
 

export default VoucherDetails;

