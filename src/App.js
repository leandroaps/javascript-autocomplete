import { useEffect } from 'react';
import './style.css';

function App() {
  useEffect(() => {
    (function () {
      let inputField = document.getElementById('search');
      let ulField = document.getElementById('suggestions');
      inputField.addEventListener('input', changeAutoComplete);
      ulField.addEventListener('click', selectItem);

      function changeAutoComplete({ target }) {
        let data = target.value;
        ulField.innerHTML = ``;
        if (data.length) {
          let autoCompleteValues = autoComplete(data);
          autoCompleteValues.forEach((value) => {
            addItem(value);
          });
        }
      }

      function autoComplete(inputValue) {
        let destination = ['Italy', 'Spain', 'Portugal', 'Brazil'];
        return destination.filter((value) =>
          value.toLowerCase().includes(inputValue.toLowerCase())
        );
      }

      function addItem(value) {
        ulField.innerHTML =
          ulField.innerHTML + `<li class="list-group-item">${value}</li>`;
      }

      function selectItem({ target }) {
        if (target.tagName === 'LI') {
          inputField.value = target.textContent;
          ulField.innerHTML = ``;
        }
      }
    })();
  }, []);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <ul className="list-group" id="suggestions"></ul>
    </div>
  );
}

export default App;
