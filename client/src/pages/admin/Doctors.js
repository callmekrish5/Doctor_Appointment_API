// import React, { useState, useEffect } from "react";
// import Layout from "./../../components/Layout";
// import axios from "axios";
// import { message, Table } from "antd";

// const Doctors = () => {
//   const [doctors, setDoctors] = useState([]);
//   //getUsers
//   const getDoctors = async () => {
//     try {
//       const res = await axios.get("/api/v1/admin/getAllDoctors", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (res.data.success) {
//         setDoctors(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // handle account
//   const handleAccountStatus = async (record, status) => {
//     try {
//       const res = await axios.post(
//         "/api/v1/admin/changeAccountStatus",
//         { doctorId: record._id, userId: record.userId, status: status },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       if (res.data.success) {
//         message.success(res.data.message);
//         window.location.reload();
//       }
//     } catch (error) {
//       message.error("Something Went Wrong");
//     }
//   };

//   useEffect(() => {
//     getDoctors();
//   }, []);

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       render: (text, record) => (
//         <span>
//           {record.firstName} {record.lastName}
//         </span>
//       ),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//     },
//     {
//       title: "phone",
//       dataIndex: "phone",
//     },
//     {
//       title: "Actions",
//       dataIndex: "actions",
//       render: (text, record) => (
//         <div className="d-flex">
//           {record.status === "pending" ? (
//             <button
//               className="btn btn-success"
//               onClick={() => handleAccountStatus(record, "approved")}
//             >
//               Approve
//             </button>
//           ) : (
//             <button className="btn btn-danger">Reject</button>
//           )}
//         </div>
//       ),
//     },
//   ];

//   return (
//     <Layout>
//       <h1 className="text-center m-3">All Doctors</h1>
//       <Table columns={columns} dataSource={doctors} />
//     </Layout>
//   );
// };

// export default Doctors;



// import { Table, message } from "antd";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Layout from "./../../components/Layout";

// const Doctors = () => {
//   const [doctors, setDoctors] = useState([]);

//   // getUsers
//   const getDoctors = async () => {
//     try {
//       const res = await axios.get("/api/v1/admin/getAllDoctors", {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       if (res.data.success) {
//         setDoctors(res.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // handle account
//   const handleAccountStatus = async (record, status) => {
//     try {
//       const res = await axios.post(
//         "/api/v1/admin/changeAccountStatus",
//         { doctorId: record._id, userId: record.userId, status: status },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       if (res.data.success) {
//         message.success(res.data.message);
//         window.location.reload();
//       }
//     } catch (error) {
//       message.error("Something Went Wrong");
//     }
//   };

//   useEffect(() => {
//     getDoctors();
//   }, []);

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       render: (text, record) => (
//         <span>
//           {record.firstName} {record.lastName}
//         </span>
//       ),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//     },
//     {
//       title: "Actions",
//       dataIndex: "actions",
//       render: (text, record) => (
//         <div className="flex">
//           {record.status === "pending" ? (
//             <button
//               className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
//               onClick={() => handleAccountStatus(record, "approved")}
//             >
//               Approve
//             </button>
//           ) : (
//             <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2">
//               Reject
//             </button>
//           )}
//         </div>
//       ),
//     },
//   ];

//   return (
//     <Layout>
//       <h1 className="text-center m-3 text-3xl font-bold">All Doctors</h1>
//       <Table columns={columns} dataSource={doctors} />
//     </Layout>
//   );
// };

// export default Doctors;





import { Table, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  const getDoctors = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllDoctors", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAccountStatus = async (record, status) => {
    try {
      const res = await axios.post(
        "/api/v1/admin/changeAccountStatus",
        { doctorId: record._id, userId: record.userId, status: status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        window.location.reload();
      }
    } catch (error) {
      message.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="flex flex-wrap">
          {record.status === "pending" ? (
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2 mb-2 md:mb-0"
              onClick={() => handleAccountStatus(record, "approved")}
            >
              Approve
            </button>
          ) : (
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2 mb-2 md:mb-0"
              onClick={() => handleAccountStatus(record, "rejected")}
            >
              Reject
            </button>
          )}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="text-center m-3 text-3xl font-bold">All Doctors</h1>
      <div className="overflow-x-auto">
        <Table
          className="w-full table-auto"
          columns={columns}
          dataSource={doctors}
          pagination={false}
        />
      </div>
    </Layout>
  );
};

export default Doctors;
