export const Select = ({ label, values, selectedValue, onChange}) => {
  return (
      <div>
        <label 
        htmlFor={`select-${label}`}
        className="block mb-2 text-base font-medium text-zinc-950 uppercase"
        >{label}:</label>

        <select 
        id={`select-${label}`} 
        value={selectedValue} 
        onChange={onChange} 
        className="w-80 border rounded-md py-3"
        >
          <option value="">Selecciona una opción</option>
          {values?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };