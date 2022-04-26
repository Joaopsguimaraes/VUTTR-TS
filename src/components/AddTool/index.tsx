/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { Button, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import style from "./button.module.scss";

const AddTool = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [nameTool, setNameTool] = useState<string>("");
	const [linkTool, setLinkTool] = useState<string>("");
	const [descriptionTool, setDescriptionTool] = useState<string>("");
	const [tags, setTags] = useState<string>("");

	const handleOpen = () => setOpen(!false);
	const handleName = (event: { target: { value: string } }) =>
		setNameTool(event.target.value);
	const handleLink = (event: { target: { value: string } }) =>
		setLinkTool(event.target.value);
	const handleDescription = (event: { target: { value: string } }) =>
		setDescriptionTool(event.target.value);
	const handleTags = (event: { target: { value: string } }) =>
		setTags(event.target.value);

	const newTool = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setNameTool("");
		setLinkTool("");
		setDescriptionTool("");
		setTags("");
		setOpen(false);
	};

	return (
		<>
			<Button
				className={style.buttonStyle}
				variant="contained"
				color="primary"
				size="medium"
				onClick={handleOpen}
			>
				New Tool
			</Button>
			<Modal
				open={open}
				onClose={handleOpen}
				aria-labelledby="modal-modal-title"
				component="form"
				onSubmit={newTool}
			>
				<Box className={style.boxStyle}>
					<Typography variant="h6" className={style.typographyStyle}>
						Add New Tool
					</Typography>
					<Box className={style.inputContainer}>
						<Typography variant="subtitle1" className={style.typographyStyle}>
							Tool Name
						</Typography>
						<TextField
							variant="outlined"
							className={style.inputStyle}
							size="small"
							value={nameTool}
							onChange={handleName}
						/>
					</Box>
					<Box className={style.inputContainer}>
						<Typography variant="subtitle1" className={style.typographyStyle}>
							Tool Link
						</Typography>
						<TextField
							variant="outlined"
							className={style.inputStyle}
							size="small"
							value={linkTool}
							onChange={handleLink}
						/>
					</Box>
					<Box className={style.inputContainer}>
						<Typography variant="subtitle1" className={style.typographyStyle}>
							Tool Description
						</Typography>
						<TextField
							variant="outlined"
							className={style.inputStyle}
							rows={4}
							multiline
							value={descriptionTool}
							onChange={handleDescription}
						/>
					</Box>
					<Box className={style.inputContainer}>
						<Typography variant="subtitle1" className={style.typographyStyle}>
							Tags
						</Typography>
						<TextField
							variant="outlined"
							className={style.inputStyle}
							size="small"
							value={tags}
							onChange={handleTags}
						/>
					</Box>
					<Button
						className={style.buttonAddTool}
						variant="contained"
						color="primary"
						size="medium"
						type="submit"
					>
						Add Tool
					</Button>
				</Box>
			</Modal>
		</>
	);
};

export default AddTool;
