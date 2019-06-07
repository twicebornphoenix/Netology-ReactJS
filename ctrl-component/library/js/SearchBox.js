const SearchBox = ({value, filterBooks}) => {
		let input;
    return (
        <input ref={field => input = field}
        			 onChange={() => filterBooks(input.value)}
        			 type="text" 
        			 placeholder="Поиск по названию или автору"
        			 value={value} />
    );
};