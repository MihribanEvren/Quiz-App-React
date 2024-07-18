import './Dropdown.css';

function Dropdown({ data, setDifficultyChange }) {
  return (
    <div className="dropdown">
      <select
        onChange={(e) => setDifficultyChange(e.target.value)}
        name=""
        id=""
      >
        {data.map((dt, i) => {
          return (
            <option key={i} value={dt}>
              {dt}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
