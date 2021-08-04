import React from "react";
import { connect } from "react-redux";
import fetchCities from "../actions/fetchCities";

const Home = (props) => {
  const { store, fetchCities } = props;
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const mapStateToProps = (store) => ({ store });
const mapDispatchToProps = {
  fetchCities,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
