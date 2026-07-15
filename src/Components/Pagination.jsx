import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage
}) => {


  return (

    <div className="d-flex justify-content-center mt-4">


      <button

        className="btn btn-primary me-2"

        disabled={currentPage===1}

        onClick={()=>
          setCurrentPage(currentPage-1)
        }

      >

        Previous

      </button>





      {

        [...Array(totalPages)].map((_,index)=>(

          <button

            key={index}

            className={
              currentPage===index+1
              ?
              "btn btn-dark mx-1"
              :
              "btn btn-outline-dark mx-1"
            }


            onClick={()=>
              setCurrentPage(index+1)
            }

          >

            {index+1}

          </button>


        ))

      }





      <button

        className="btn btn-primary ms-2"

        disabled={currentPage===totalPages}

        onClick={()=>
          setCurrentPage(currentPage+1)
        }

      >

        Next

      </button>


    </div>

  );

};


export default Pagination;