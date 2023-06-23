import { Nav } from "../componentes/Componentes";

interface Card {
  id: number;
  title: string;
  column: string;
}
interface Column {
    title: string;
    cards: Card[];
  }

const Kanban = () : JSX.Element => {
  const columns = [
    { title: 'TODO', cards: [{ id: 1, title: 'Card 1', column: 'TODO' }] },
    {
      title: 'DOING',
      cards: [
        { id: 2, title: 'Card 2', column: 'DOING' },
        { id: 3, title: 'Card 3', column: 'DOING' }
      ]
    },
    {
      title: 'DONE',
      cards: [
        { id: 4, title: 'Card 4', column: 'DONE' },
        { id: 5, title: 'Card 5', column: 'DONE' },
      ],
    },
  ];

  return (
 
    <div>
       <Nav>Bem vindo, </Nav>
      {columns.map(column => (
        <div className="column" key={column.title}>
          <div className="column-header">{column.title}</div>
          {column.cards.map(card => (
            <div className="card" key={card.id}>
              {card.title}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Kanban;
