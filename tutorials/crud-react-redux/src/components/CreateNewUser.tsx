import { Badge, Button, Card, TextInput, Title } from "@tremor/react";
import { useState } from "react";
import { useUserActions } from "../hooks/useUserActions";

type Props = {};

export const CreateNewUser = () => {
	const { addUser } = useUserActions();
	const [result, setResult] = useState<"ok" | "ko" | null>(null);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Submitted");

		const form = event.target;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		console.log("informacion");
		if (!name || !email || !github) {
			console.log(name);
			return setResult("ko");
		}
		addUser({ name, email, github });
		//form.reset();
	};

	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>
			<form className="" onSubmit={handleSubmit}>
				<TextInput placeholder="Aqui el nombre" />
				<TextInput placeholder="Aqui el email" />
				<TextInput placeholder="Aquie el usuario de github" />
				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Crear Usuario
					</Button>
					<span>
						{result === "ok" && (
							<Badge color='green'>Guardado Correctamente</Badge>
						)}
						{result === "ko" && <Badge color='red'>Error en los campos</Badge>}
					</span>
				</div>
			</form>
		</Card>
	);
};
