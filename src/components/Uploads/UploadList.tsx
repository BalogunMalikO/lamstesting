import React, { useState } from "react";
import Upload from "./Upload";
import ReactPaginate from "react-paginate";
import Logout from "../auth/Logout";

// thinking that I should have this things here
interface iUpload {
  title: string;
  language: string;
  level: string;
}

// or Array<iUpload>

const Uploads: iUpload[] = [
  {
    title: "Chidi",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Chidi",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Onyi",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Kachi",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Emma",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Ony",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Kach",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Emm",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Onyi",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Kachi",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Emma",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Ony",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Kach",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Emm",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Chidi",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Chidi",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Onyi",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Kachi",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Emma",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Ony",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Kach",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Emm",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Onyi",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Kachi",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Emma",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Ony",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Kach",
    language: "Igbo",
    level: "2",
  },
  {
    title: "Emm",
    language: "Igbo",
    level: "2",
  },
];

function UploadList() {
  //set the inital state of the pages
  const [currentPage, setCurrentPage] = useState(0);

  //the amount of items to be displayed per page
  const itemsPerPage = 5;

  //calculate the total number of page based on the data length
  const setTotalPages = Math.ceil(Uploads.length / itemsPerPage);

  //set total page
  const totalPages = setTotalPages;

  //calculate the startIndex and endIndex based on the total item to be displayed per page and
  //slice the data array into a subset of items
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = Uploads.slice(startIndex, endIndex);

  //this even will run when the user clicks on the next page
  const handlePageChange = (selectedPage: any) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <><Logout /><div>
      <section className="container">
        <h1 className="h3 mb-0 text-gray-800 mt-5"> Audio Assets</h1>

        <div className="card border-left-primary shadow h-100 py-2 mt-5">
          <table className="table table-hover">
            <tbody>
              {subset.map((upload, i) => (
                <>
                  <Upload
                    key={i}
                    title={upload.title}
                    language={upload.language}
                    level={upload.level} />
                </>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <div className="position-absolute bottom-0 start-50 translate-middle-x">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          pageCount={totalPages}
          onPageChange={handlePageChange}
          forcePage={currentPage}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link" />
      </div>
    </div></>
  );
}

export default UploadList;
