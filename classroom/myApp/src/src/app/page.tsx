import Card from './components/card/Card';

export default function Home() {
  return (
    <div className="grid">
      <Card
        href="/turma/estrutura-de-software"
        title="IJ - Estrutura de Software"
        group="PROFESSOR"

      />
      <Card
        href="/turma/programacao"
        title="IJ - Programação"
        group="LORI RONALDO FLORES MACHADO FILHO"
      />
    </div>
  );
}
