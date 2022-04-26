/* eslint-disable react/react-in-jsx-scope */
import style from "./toolPage.module.scss";
import Search from "../Search";
import Title from "../Title";
import Tool from "../Tool";
import AddTool from "../AddTool";

const ToolPage = () => {
	const toolData = [
		{
			link: "https://angular.io",
			title: "Angular",
			description: "Framework",
			tags: "#Framework",
		},
		{
			link: "https://vuejs.org/",
			title: "Vue",
			description: "Framework",
			tags: "#Framework",
		},
		{
			link: "https://pt-br.reactjs.org/",
			title: "React",
			description: "Framework",
			tags: "#Framework",
		},
	];

	return (
		<>
			<section className={style.container}>
				<Title />
				<div className={style.actionToolContainer}>
					<Search />
					<AddTool />
				</div>
			</section>
			{toolData.map((tool, index) => {
				<div key={index}>
					<Tool
						link={tool.link}
						title={tool.title}
						description={tool.description}
						tags={tool.tags}
					/>
				</div>;
			})};
		</>

	);
};

export default ToolPage;
