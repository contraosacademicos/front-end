"use client";

import React, { useState } from "react";

import { ButtonCoa } from "@/components/core/buttons/button-coa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserAreaHome = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	function handleContactSubmit(e: React.FormEvent) {
		e.preventDefault();

		console.log({
			name,
			email,
			subject,
			message,
		});

		setName("");
		setEmail("");
		setSubject("");
		setMessage("");
	}
	return (
		<div className="flex w-full flex-col items-center justify-center gap-8">
			<div className="text-center">
				<p className="text-p">SUPORTE COA</p>
				<h3 className="font-heading text-h3 text-primary">
					ENTRE EM CONTATO
				</h3>
			</div>

			<form
				onSubmit={handleContactSubmit}
				className="w-full max-w-[500px] space-y-6"
			>
				<div className="space-y-2">
					<Label htmlFor="name" className="text-coagray">
						Nome
					</Label>
					<Input
						id="name"
						type="text"
						placeholder="Digite seu nome"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						className="h-12 w-full border-coagray bg-[#1E1E1E] placeholder:text-coagray focus:border-primary focus:ring-primary"
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="email" className="text-coagray">
						E-mail
					</Label>
					<Input
						id="email"
						type="email"
						placeholder="Digite seu e-mail"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="h-12 w-full border-coagray bg-[#1E1E1E] placeholder:text-coagray focus:border-primary focus:ring-primary"
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="subject" className="text-coagray">
						Assunto
					</Label>
					<Input
						id="subject"
						type="text"
						placeholder="Digite o assunto"
						value={subject}
						onChange={(e) => setSubject(e.target.value)}
						required
						className="h-12 w-full border-coagray bg-[#1E1E1E] placeholder:text-coagray focus:border-primary focus:ring-primary"
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="message" className="text-coagray">
						Mensagem
					</Label>
					<textarea
						id="message"
						placeholder="Digite sua mensagem"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
						className="text-sm min-h-[120px] w-full resize-none rounded-md border border-coagray bg-[#1E1E1E] p-3 placeholder:text-coagray focus:border-primary focus:ring-primary"
					/>
				</div>

				<ButtonCoa type="submit" className="h-12 w-full">
					Enviar mensagem
				</ButtonCoa>
			</form>
		</div>
	);
};

export default UserAreaHome;
