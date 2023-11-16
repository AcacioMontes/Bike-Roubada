import { useState } from "react";

import Button from "../Button"

import { Form, Input } from "./styles";

export default function TaskForm({ buttonLabel, onSave, task }) {
  const [numSerie, setnumSerie] = useState(task?.name ?? '');
  const [description, setDescription] = useState(task?.description ?? '');
  const [name, setName] = useState(task?.name ?? '');
  const [insertImage, setInsertName] = useState(task?.name ?? '');


  return (
    <Form>
      <Input
        placeholder="Nome"
        placeholderTextColor="#666"
        value={name}
        onChangeText={setName}
      />

      <Input
        placeholder="Descrição"
        placeholderTextColor="#666"
        value={description}
        onChangeText={setDescription}
      />
      <Input
        placeholder="Número de série"
        placeholderTextColor="#666"
        value={numSerie}
        onChangeText={setnumSerie}
      />
      <Input
        placeholder="Inserir imagem"
        placeholderTextColor="#666"
        value={insertImage}
        onChangeText={setInsertName}

      />
      <Button
        onPress={() => onSave({ name, description, numSerie, insertImage })}
        disabled={name.length === 0 || description.length === 0 || numSerie.length === 0 || insertImage.length === 0} 
      >
        {buttonLabel}
      </Button>
    </Form>
  );
}