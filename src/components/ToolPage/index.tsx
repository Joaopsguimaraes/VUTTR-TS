/* eslint-disable react/react-in-jsx-scope */
import style from "./toolPage.module.scss";
import Search from "../Search";
import Title from "../Title";
import Button from "../Button";
import Tool from "../Tool";


const ToolPage = () => {
	return(
		<div className={style.container}>
			<Title/>
			<div className={style.navContainer}>
				<Search/>
				<Button/>
			</div>
			<Tool/>
        
		</div>
	);
};

export default ToolPage;