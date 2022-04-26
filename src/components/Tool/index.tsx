/* eslint-disable react/react-in-jsx-scope */
import style from "./tool.module.scss";
interface Props {
  title: string;
  link: string;
  description: string;
  tags: string;
}

const Tool = ({ title, link, description, tags }: Props) => {
	return (
		<>
			<div className={style.toolContainer}>
				<a href={link} target="_blank" rel="noreferrer">
					<h3>{title}</h3>
				</a>
				<p>{description}</p>
				<span>{tags}</span>
			</div>
		</>
	);
};

export default Tool;
