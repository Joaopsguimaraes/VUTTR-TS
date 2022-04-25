/* eslint-disable react/react-in-jsx-scope */
import style from "./search.module.scss";

const Search = () =>{
	return(
		<div className={style.searchContainer}>
			<input type="text" placeholder="search" />
			<input type="checkbox" />
			<p>Search in tags only</p>
		</div>
	);
};

export default Search;