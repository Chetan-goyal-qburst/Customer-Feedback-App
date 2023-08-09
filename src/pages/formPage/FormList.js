import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export const FormList = () => {
  useEffect(() => {
    updateTable();
  }, []);

  function updateTable() {
    // Make a GET request to the mock API server to fetch the form data
    fetch('https://localhost:44366/api/Forms', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Network response was not ok');
      })
      .then((forms) => {
        const tableBody = document.getElementById('form-table-body');

        // Clear the existing table rows
        tableBody.innerHTML = '';

        forms.forEach((form) => {
          const newRow = tableBody.insertRow();

          const id = newRow.insertCell();
          const titleCell = newRow.insertCell();
          const descriptionCell = newRow.insertCell();
          const actionCell = newRow.insertCell();

          id.textContent = form.id;
          titleCell.textContent = form.title;
          descriptionCell.textContent = form.description;

          const deleteButton = document.createElement('button');
          deleteButton.className = 'btn btn-danger';
          deleteButton.textContent = 'Delete';
          actionCell.appendChild(deleteButton);

          deleteButton.addEventListener('click', function () {
            const formId = form.id;

            fetch(`https://localhost:44366/api/Forms/${formId}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                tableBody.removeChild(newRow);
              })
              .catch((error) => {
                console.error('Error deleting form data:', error);
              });
          });
        });
      })
      .catch((error) => {
        console.error('Error fetching form data:', error);
        alert('An error occurred while fetching the form data. Please try again later.');
      });
  }

  return (
    <div className="bg-dark w-100 text-center">
      <h1 className="my-4 text-light">Form List</h1>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="bg-warning bg-gradient">ID</th>
            <th scope="col" className="bg-warning bg-gradient">Form Title</th>
            <th scope="col" className="bg-warning bg-gradient">Form Description</th>
            <th scope="col" className="bg-warning bg-gradient">Action</th>
          </tr>
        </thead>
        <tbody id="form-table-body"></tbody>
      </table>
      <Link to="/form">
        <button id="create-new-form-button" className="btn btn-primary mb-3">
          Create New Form
        </button>
      </Link>
    </div>
  );
};

export default FormList;
