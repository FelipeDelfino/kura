// src/components/contact/ContactForm.tsx
"use client"
import { useState } from 'react';
import { Flex, Text, Button, Input, Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { toaster } from "@/components/ui/toaster";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({

    name: '',
    brand: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setIsLoading(false); // após a resposta da API

    if (res.ok) {
      toaster.create({
        title: "Mensagem enviada com sucesso!",
        description: "Agradecemos pelo seu contato.",
        type: 'success',
      });
      setFormData({ name: '', brand: '', email: '', phone: '', message: '' });
    } else {
      toaster.create({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        type: 'error',
      });
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <Flex direction='column' bg='#111111' p='6' gap='4' borderRadius='lg'>
        <Text>
          Quer transformar sua marca?
          Deixe seu contato e receba uma análise gratuita!
        </Text>
        <Flex direction='column' gap={5} minW='20vw'>
          <Flex gap={5}>
            <Field label="Nome" errorText="Nome é Obrigatório" required>
              <Input
                name="name"
                type="text"
                placeholder="Digite seu Nome"
                value={formData.name}
                onChange={handleChange}
              />
            </Field>
            <Field label="Marca" optionalText='Opcional'>
              <Input
                name="brand"
                type="text"
                placeholder="Digite sua Marca"
                value={formData.brand}
                onChange={handleChange}
              />
            </Field>
          </Flex>
          <Flex gap={5}>
            <Field label="Email" errorText="Email é Obrigatório" required>
              <Input
                name="email"
                type="email"
                placeholder="Digite seu Email"
                value={formData.email}
                onChange={handleChange}
              />
            </Field>
            <Field label="Telefone" errorText="Telefone é Obrigatório" required>
              <Input
                name="phone"
                type="tel"
                placeholder="Digite seu Telefone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Field>
          </Flex>
          <Field label="Mensagem" errorText="Texto Obrigatório" required>
            <Textarea
              name="message"
              placeholder="Escreva aqui sua mensagem..."
              value={formData.message}
              onChange={handleChange}
            />
          </Field>
        </Flex>
        <Button
          type="submit"
          loading={isLoading}
          borderRadius='lg'
          mt='2'
          bg='#f29f1e'
          color='black'
        >
          Enviar
        </Button>
      </Flex>
    </form>
  );
}