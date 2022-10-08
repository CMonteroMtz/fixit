import './Playground.scss';

interface Item {
  id: number,
  title: string,
  description: string,
};

interface ListProps {
  items: Item[];
};

const items: Item[] = [
  {
    id: 1,
    title: 'Item 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis at labore eligendi dignissimos ut quasi sed excepturi accusamus sapiente reprehenderit, eos suscipit sit fuga? Repellendus cumque assumenda corrupti sunt maiores!'
  },
  {
    id: 2,
    title: 'Item 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis at labore eligendi dignissimos ut quasi sed excepturi accusamus sapiente reprehenderit, eos suscipit sit fuga? Repellendus cumque assumenda corrupti sunt maiores!'
  },
  {
    id: 3,
    title: 'Item 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis at labore eligendi dignissimos ut quasi sed excepturi accusamus sapiente reprehenderit, eos suscipit sit fuga? Repellendus cumque assumenda corrupti sunt maiores!'
  }

];

const List = ({items}: ListProps) => {
  return (
    <div className="list">
      <h2>List</h2>
      {
        items.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))
      }
    </div>
  );
};

const Playground = () => {
  return (
    <div className="playground">
      <h1>Playground</h1>
      <List items={items} />
    </div>
  );
};

export default Playground;

const sum = (a: number, b:number) => a + b;