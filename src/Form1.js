import React, { Component } from "react";
import { connect } from "react-redux";
import { userSubmit } from "./Redux/Action";

class Form1 extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {
        firstname: "",
        lastname: "",
        country: "",
        language: "",
        vehicle: [],
      },
      userData: [],
      tableIndex: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    this.setState({ userData: this.props.TableData || [] });
    const route = window.location.pathname;
    const spliteRoute = route.split("/");
    const id = spliteRoute[spliteRoute.length - 1];
    if (id) {
      this.setState({
        userDetails: this.props.editObject,
        tableIndex: id,
      });
    }
  }

  handleSubmit = () => {
    const { userData, userDetails, tableIndex } = this.state;
    if (tableIndex !== "") {
      userData[tableIndex] = userDetails;
      this.setState({
        userData: [...userData],
        tableIndex: "",
      });
    } else {
      this.setState(
        {
          userData: [...userData, userDetails],
        },
        () => {
          this.props.dispatchSubmit(this.state.userData);
        }
      );
    }

    this.handleReset();
  };
  handleReset = () => {
    this.setState({
      userDetails: {
        firstname: "",
        lastname: "",
        country: "",
        language: "",
        vehicle: [],
      },
      tableIndex: "",
    });
  };
  checkChange = (event) => {
    const vehicle = [...this.state.userDetails.vehicle];
    if (event.target.checked) {
      vehicle.push(event.target.value);
    } else {
      const i = vehicle.indexOf(event.target.value);
      vehicle.splice(i, 1);
    }
    this.setState({
      userDetails: {
        ...this.state.userDetails,
        vehicle: vehicle,
      },
    });
  };

  render() {
    const { userDetails } = this.state;
    return (
      <div className="container">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          value={userDetails.firstname}
          onChange={(event) => this.handleChange(event)}
          placeholder="Your name.."
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          value={userDetails.lastname}
          onChange={(event) => this.handleChange(event)}
          placeholder="Your last name.."
        />

        <label htmlFor="country">Country</label>
        <select
          id="country"
          value={userDetails.country}
          onChange={(event) => this.handleChange(event)}
          name="country"
        >
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <p>Please select your favorite Web language:</p>
        <input
          type="radio"
          id="html"
          name="language"
          onChange={(event) => this.handleChange(event)}
          checked={userDetails.language === "HTML"}
          value="HTML"
        />
        <label htmlFor="html">HTML</label>
        <br />
        <input
          type="radio"
          id="css"
          name="language"
          onChange={(event) => this.handleChange(event)}
          checked={userDetails.language === "CSS"}
          value="CSS"
        />
        <label htmlFor="css">CSS</label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="language"
          onChange={(event) => this.handleChange(event)}
          checked={userDetails.language === "JavaScript"}
          value="JavaScript"
        />
        <label htmlFor="javascript">JavaScript</label>
        <br />

        <p>Please select your favorite Vehicles:</p>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle"
          value="Bike"
          checked={userDetails.vehicle.includes("Bike")}
          onChange={(event) => this.checkChange(event)}
        />
        <label htmlFor="vehicle1"> I have a bike</label>
        <br />
        <input
          type="checkbox"
          id="vehicle2"
          name="vehicle"
          checked={userDetails.vehicle.includes("Car")}
          onChange={(event) => this.checkChange(event)}
          value="Car"
        />
        <label htmlFor="vehicle2"> I have a car</label>
        <br />
        <input
          type="checkbox"
          id="vehicle3"
          name="vehicle"
          checked={userDetails.vehicle.includes("Boat")}
          onChange={(event) => this.checkChange(event)}
          value="Boat"
        />
        <label for="vehicle3"> I have a boat</label>
        <br />
        <br />

        <button type="button" onClick={() => this.handleSubmit()}>
          Submit
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSubmit: (data) => dispatch(userSubmit(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    TableData: state?.data || [],
    editObject: state?.editFormData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form1);
