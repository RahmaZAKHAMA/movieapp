import React from 'react'
import { Form } from 'react-bootstrap';

const FilterByTitle = ({searchInput, setSearchInput}) => {
  //const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <Form.Control
        type="texte"
        placeholder="Enter title"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default FilterByTitle