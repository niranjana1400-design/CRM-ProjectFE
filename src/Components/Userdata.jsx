import React, { useEffect, useState } from "react";
import axios from "axios";

import StatsChart from "./StatsChart";
import RecentCustomers from "./RecentCustomers";
import DashboardCards from "./DashboardCards";
import SearchBar from "./SearchBar";
import CustomerForm from "./CustomerForm";
import DashboardLayout from "./DashboardLayout";
import CustomerTable from "./CustomerTable";
import CustomerProfile from "./CustomerProfile";
import RecentActivity from "./RecentActivity";
import TopCustomers from "./TopCustomers";
import Pagination from "./Pagination";
import StatusFilter from "./StatusFilter";

import { toast } from "react-toastify";


const Userdata = () => {


  const [customers, setCustomers] = useState([]);


  const [form,setForm]=useState({

name:"",
email:"",
phone:"",
company:"",
status:"",
industry:"",
address:"",
notes:""

});


  const [editId, setEditId] = useState(null);


  const [search, setSearch] = useState("");


  const [status, setStatus] = useState("All");


  const [currentPage, setCurrentPage] = useState(1);


  const customersPerPage = 5;


  const [selectedCustomer, setSelectedCustomer] =
    useState(null);





  // ===========================
  // Fetch Customers
  // ===========================


  const fetchData = () => {


    const token = localStorage.getItem("token");


    axios

      .get(
        "https://batch25-be-x9el.onrender.com/api/customers",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )


      .then((res)=>{

        setCustomers(res.data);

      })


      .catch((err)=>{


        toast.error(
          "Failed to load customers"
        );


        console.log(
          err.response?.data || err.message
        );


      });


  };




  useEffect(()=>{

    fetchData();

  },[]);




  // Reset pagination when search/filter changes

  useEffect(()=>{

    setCurrentPage(1);

  },[search,status]);






  // ===========================
  // Input Change
  // ===========================


  const handleChange=(e)=>{


    setForm({

      ...form,

      [e.target.name]:e.target.value,

    });


  };







  // ===========================
  // Add Customer
  // ===========================


  const addCustomer=()=>{


    const token =
    localStorage.getItem("token");


    axios

    .post(

      "https://batch25-be-x9el.onrender.com/api/customers",

      form,

      {

        headers:{

          Authorization:`Bearer ${token}`,

        },

      }

    )


    .then(()=>{


      toast.success(
        "Customer Added Successfully 🎉"
      );


     setForm({

name: customer.name,

email: customer.email,

phone: customer.phone,

company: customer.company || "",

status: customer.status || "Active",

industry: customer.industry || "",

address: customer.address || "",

notes: customer.notes || ""

});


      fetchData();


    })


    .catch((err)=>{


      toast.error(
        "Failed to add customer"
      );


      console.log(
        err.response?.data || err.message
      );


    });


  };








  // ===========================
  // Delete Customer
  // ===========================


  const deleteCustomer=(id)=>{


    const token =
    localStorage.getItem("token");


    axios

    .delete(

      `https://batch25-be-x9el.onrender.com/api/customers/${id}`,

      {

        headers:{

          Authorization:`Bearer ${token}`,

        },

      }

    )


    .then(()=>{


      toast.success(
        "Customer Deleted Successfully 🗑️"
      );


      fetchData();


    })


    .catch((err)=>{


      toast.error(
        "Delete Failed"
      );


      console.log(
        err.response?.data || err.message
      );


    });


  };








  // ===========================
  // Edit Customer
  // ===========================


  const editCustomer=(customer)=>{


    setForm({

      name:customer.name,

      email:customer.email,

      phone:customer.phone,

    });


    setEditId(customer._id);


  };








  // ===========================
  // Update Customer
  // ===========================


  const updateCustomer=()=>{


    const token =
    localStorage.getItem("token");


    axios

    .put(

      `https://batch25-be-x9el.onrender.com/api/customers/${editId}`,

      form,

      {

        headers:{

          Authorization:`Bearer ${token}`,

        },

      }

    )


    .then(()=>{


      toast.success(
        "Customer Updated Successfully ✏️"
      );


      setEditId(null);


      setForm({

        name:"",
        email:"",
        phone:"",

      });


      fetchData();


    })


    .catch((err)=>{


      toast.error(
        "Update Failed"
      );


      console.log(
        err.response?.data || err.message
      );


    });


  };







  // ===========================
  // Search + Status Filter
  // ===========================


  const filteredCustomers = customers.filter(
    (customer)=>{


      const keyword =
      search.toLowerCase();



      const searchMatch =

      customer.name
      ?.toLowerCase()
      .includes(keyword)


      ||

      customer.email
      ?.toLowerCase()
      .includes(keyword)


      ||

      customer.phone
      ?.toLowerCase()
      .includes(keyword);





      const statusMatch =

      status==="All"

      ||

      customer.status===status;




      return searchMatch && statusMatch;


    }
  );








  // ===========================
  // Pagination
  // ===========================


  const totalPages =
  Math.ceil(
    filteredCustomers.length /
    customersPerPage
  );



  const indexOfLastCustomer =
  currentPage * customersPerPage;



  const indexOfFirstCustomer =
  indexOfLastCustomer - customersPerPage;



  const currentCustomers =
  filteredCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );








  return (

    <DashboardLayout>


      <div className="container-fluid">



        <DashboardCards
          customers={customers}
        />



        <RecentActivity />



        <SearchBar

          search={search}

          setSearch={setSearch}

        />



        <StatusFilter

          status={status}

          setStatus={setStatus}

        />




        <h2 className="text-center fw-bold mb-4">

          Customer Dashboard

        </h2>





        <CustomerForm

          form={form}

          handleChange={handleChange}

          addCustomer={addCustomer}

          updateCustomer={updateCustomer}

          editId={editId}

        />





        <StatsChart

          customers={customers}

        />





        <CustomerTable

          customers={currentCustomers}

          editCustomer={editCustomer}

          deleteCustomer={deleteCustomer}

          viewCustomer={setSelectedCustomer}

        />





        <Pagination

          currentPage={currentPage}

          totalPages={totalPages}

          setCurrentPage={setCurrentPage}

        />





        <TopCustomers

          customers={customers}

        />





        <RecentCustomers

          customers={customers}

        />






        <CustomerProfile

          customer={selectedCustomer}

          onClose={()=>

            setSelectedCustomer(null)

          }

        />



      </div>


    </DashboardLayout>

  );

};


export default Userdata;