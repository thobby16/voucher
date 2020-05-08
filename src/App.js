import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CreateVoucher from "./components/CreateVoucher/CreateVoucher";
import VoucherDetails from "./components/VoucherDetails/VoucherDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={CreateVoucher} />
        <Route path="/voucher-details" component={VoucherDetails} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Layout>
  );
}

export default App;
