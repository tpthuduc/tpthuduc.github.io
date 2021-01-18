import React from "react";
import { connect } from "react-redux";
import "../../../styles/raleway-font.css";
import "../../../styles/style.css";
import "../../../fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";

class SetUpPage extends React.PureComponent {
    render() {
        return (
            <div className="page-content">
                <div className="wizard-v1-content">
                    <div className="wizard-form">
                        <form className="form-register" id="form-register" action="#" method="post" novalidate="novalidate">
                            <div id="form-total" role="application" className="wizard clearfix">
                                <div className="steps clearfix">
                                    <ul role="tablist">
                                        <li role="tab" className="first current" aria-disabled="false" aria-selected="true">
                                            <a id="form-total-t-0" href="#form-total-h-0" aria-controls="form-total-p-0">
                                                <span className="current-info audible"> </span>
                                                <div className="title">
                                                    <span className="step-icon">
                                                        <i className="zmdi zmdi-account"></i>
                                                    </span>
                                                    <span className="step-number">Bước 1</span>
                                                    <span className="step-text">Chọn thông tin địa phương</span>
                                                </div></a></li>
                                        <li role="tab" className="done" aria-disabled="false" aria-selected="false">
                                            <a id="form-total-t-1" href="#form-total-h-1" aria-controls="form-total-p-1">
                                                <div className="title">
                                                    <span className="step-icon">
                                                        <i className="zmdi zmdi-card"></i></span>
                                                    <span className="step-number">Bước 2</span>
                                                    <span className="step-text">Thiết lập từ khóa</span>
                                                </div></a></li>
                                        <li role="tab" className="last done" aria-disabled="false" aria-selected="false">
                                            <a id="form-total-t-2" href="#form-total-h-2" aria-controls="form-total-p-2">
                                                <div className="title">
                                                    <span className="step-icon">
                                                        <i className="zmdi zmdi-receipt"></i></span>
                                                    <span className="step-number">Bước 3</span>
                                                    <span className="step-text">Thiết lập nguồn tin tức</span>
                                                </div></a></li></ul></div>
                                <div className="content clearfix">
                                    {/*  <!-- SECTION 1 --> */}
                                    <h2 id="form-total-h-0" tabindex="-1" className="title current">
                                        <span className="step-icon"><i className="zmdi zmdi-account"></i></span>
                                        <span className="step-number">Bước 1</span>
                                        <span className="step-text">Chọn thông tin địa phương</span>
                                    </h2>
                                    <section id="form-total-p-0" role="tabpanel" aria-labelledby="form-total-h-0" className="body current" aria-hidden="false">
                                        <div className="inner">
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <label for="username">Username*</label>
                                                    <input type="text" placeholder="Username" className="form-control valid" id="username" name="username" required="" aria-required="true" aria-invalid="false"></input>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <label for="email">Email Address*</label>
                                                    <input type="email" placeholder="Your Email" className="form-control valid" id="email" name="email" required="" pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" aria-required="true" aria-invalid="false"></input>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder">
                                                    <label for="password">Password*</label>
                                                    <input type="password" placeholder="Password" className="form-control valid validate-equalTo-blur" id="password" name="password" required="" aria-required="true" aria-invalid="false"></input>
                                                </div>
                                                <div className="form-holder">
                                                    <label for="confirm_password">Confirm Password*</label>
                                                    <input type="password" placeholder="Confirm Password" className="form-control valid" id="confirm_password" name="confirm_password" required="" aria-required="true" aria-invalid="false"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {/*  <!-- SECTION 2 --> */}
                                    <h2 id="form-total-h-1" tabindex="-1" className="title">
                                        <span className="step-icon"><i className="zmdi zmdi-card"></i></span>
                                        <span className="step-number">Step 2</span>
                                        <span className="step-text">Payment Infomation</span>
                                    </h2>
                                    <section id="form-total-p-1" role="tabpanel" aria-labelledby="form-total-h-1" className="body" aria-hidden="true" style={{ display: "none" }}>
                                        <div className="inner">
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <label for="card-type">Card Type</label>
                                                    <select name="card-type" id="card-type" className="form-control">
                                                        <option value="" disabled="" selected="">Select Credit Card Type</option>
                                                        <option value="Business Credit Cards">Business Credit Cards</option>
                                                        <option value="Limited Purpose Cards">Limited Purpose Cards</option>
                                                        <option value="Prepaid Cards">Prepaid Cards</option>
                                                        <option value="Charge Cards">Charge Cards</option>
                                                        <option value="Student Credit Cards">Student Credit Cards</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-3">
                                                    <label for="card-number">Card Number</label>
                                                    <input type="text" name="card-number" className="card-number" id="card-number" placeholder="ex: 489050625008xxxx"></input>
                                                </div>
                                                <div className="form-holder">
                                                    <label for="cvc">CVC</label>
                                                    <input type="text" name="cvc" className="cvc" id="cvc" placeholder="xxx"></input>
                                                </div>
                                            </div>
                                            <div className="form-row form-row-2">
                                                <div className="form-holder">
                                                    <label for="month">Expiry Month</label>
                                                    <select name="month" id="month" className="form-control">
                                                        <option value="" disabled="" selected="">Expiry Month</option>
                                                        <option value="January">January</option>
                                                        <option value="February">February</option>
                                                        <option value="March">March</option>
                                                        <option value="February">February</option>
                                                        <option value="April">April</option>
                                                        <option value="May">May</option>
                                                    </select>
                                                </div>
                                                <div className="form-holder">
                                                    <label for="year">Expiry Year</label>
                                                    <select name="year" id="year" className="form-control">
                                                        <option value="" disabled="" selected="">Expiry Year</option>
                                                        <option value="2018">2018</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2016">2016</option>
                                                        <option value="2015">2015</option>
                                                        <option value="2014">2014</option>
                                                        <option value="2013">2013</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {/*  <!-- SECTION 3 --> */}
                                    <h2 id="form-total-h-2" tabindex="-1" className="title">
                                        <span className="step-icon"><i className="zmdi zmdi-receipt"></i></span>
                                        <span className="step-number">Step 3</span>
                                        <span className="step-text">Confirm Your Details</span>
                                    </h2>
                                    <section id="form-total-p-2" role="tabpanel" aria-labelledby="form-total-h-2" className="body" aria-hidden="true" style={{ display: "none" }}>
                                        <div className="inner">
                                            <h3>Comfirm Details</h3>
                                            <div className="form-row table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                        <tr className="space-row">
                                                            <th>Username:</th>
                                                            <td id="username-val">thaoltt1</td>
                                                        </tr>
                                                        <tr className="space-row">
                                                            <th>Email Address:</th>
                                                            <td id="email-val">thao.ltt@phongvu.vn</td>
                                                        </tr>
                                                        <tr className="space-row">
                                                            <th>Card Type:</th>
                                                            <td id="card-type-val"></td>
                                                        </tr>
                                                        <tr className="space-row">
                                                            <th>Card Number:</th>
                                                            <td id="card-number-val"></td>
                                                        </tr>
                                                        <tr className="space-row">
                                                            <th>CVC:</th>
                                                            <td id="cvc-val"></td>
                                                        </tr>
                                                        <tr className="space-row">
                                                            <th>Expiry Month:</th>
                                                            <td id="month-val"></td>
                                                        </tr>
                                                        <tr className="space-row">
                                                            <th>Expiry Year:</th>
                                                            <td id="year-val"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </section>
                                </div><div className="actions clearfix"><ul role="menu" aria-label="Pagination"><li className="disabled" aria-disabled="true"><a href="#previous" role="menuitem">Back</a></li><li aria-hidden="false" aria-disabled="false"><a href="#next" role="menuitem"><i className="zmdi zmdi-arrow-right"></i></a></li><li aria-hidden="true" style={{ display: 'none' }}><a href="#finish" role="menuitem"><i className="zmdi zmdi-arrow-right"></i></a></li></ul></div></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authReducer }) {
    return {
        authReducer
    }
}

export const SetUpContainer = connect(
    mapStateToProps
)(SetUpPage);