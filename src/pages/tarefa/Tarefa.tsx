import { useEffect, useState } from "react"

function Tarefa() {

  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns! Você concluiu a tarefa!')
    }
  }, [completed]);

  return (
    <div>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      {/* colocou a mudança de estado da função direto dentro do botão com arrow function */}
      <button onClick={() => setCompleted(true)}>
        Concluir Tarefa  
      </button> 
    </div>
  )
}

export default Tarefa