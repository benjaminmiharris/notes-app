import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import Stack from 'react-bootstrap/Stack';

function HorizontalExample() {
  return (
    <Stack direction="horizontal" gap={3}>
      <div className="bg-light border ms-auto">First item</div>
      <div className="bg-light border ms-auto">Second item</div>
      <div className="bg-light border ms-auto">Third item</div>
    </Stack>
  );
}


function ButtonExample() {
  return (
    <Button variant="primary">
      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}



function App() {
  return (
    <div className="App">
      
      < ButtonExample />
      < HorizontalExample />
    </div>
  );
}

export default App;
