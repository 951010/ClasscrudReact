import React, { Component } from "react";
import { Table } from "antd";
import { connect } from "react-redux";
import { userDelete } from "./Redux/Action";
import { userEdit } from "./Redux/Action";
import { Link } from "react-router-dom";

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleDelete = (index) => {
    this.props.deleteData(index);
  };

  handleEdit = (record) => {
    this.props.editData(record);
  };
  render() {
    const { TableData } = this.props;

    const columns = [
      {
        title: "firstname",
        dataIndex: "firstname",
        key: "firstname",
      },
      {
        title: "lastname",
        dataIndex: "lastname",
        key: "lastname",
      },
      {
        title: "country",
        dataIndex: "country",
        key: "country",
      },
      {
        title: "language",
        dataIndex: "language",
        key: "language",
      },
      {
        title: "vehicle",
        dataIndex: "vehicle",
        key: "vehicle",
      },
      {
        title: "Actions",
        dataIndex: "Actions",
        key: "Actions",
        render: (text, record, index) => (
          <>
            <Link to={`/edit/${index}`}>
              <button type="button" onClick={() => this.handleEdit(record)}>
                Edit
              </button>
            </Link>
            <button
              type="button"
              style={{ background: "Red", margin: 5 }}
              onClick={() => this.handleDelete(index)}
            >
              Delete
            </button>
          </>
        ),
      },
    ];
    return (
      <div>
        <Table dataSource={TableData} columns={columns} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    TableData: state?.data || [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteData: (data) => dispatch(userDelete(data)),
    editData: (data) => dispatch(userEdit(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableData);
