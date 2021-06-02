import { Navbar, NavbarBrand } from 'reactstrap';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import {useState} from 'react'
import TodoItem from './TodoItem';
import { useHistory } from 'react-router';
const Header = ({todos, onDelete, onComplete}) => {

  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Navbar color="primary" dark>
        <div className="navTitle">
          <NavbarBrand href="/" className="mr-auto">ToDoStack</NavbarBrand>
        </div>
        {/* <div className="searchBox">
          <InputGroup>
            <Input className="rounded" placeholder="Find my to do" color="red" onChange={(e) => {setSearchTerm(e.target.value)} }/>
            <InputGroupAddon><Button color="warning" className="ml-1">Search</Button></InputGroupAddon>
            {todos.filter((val) =>{
              if(searchTerm === ""){
                return val
              }else if(val.desc.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
              }
            }).map((todo) => {
              history.push("/todos");
              return <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} onComplete={onComplete}/>
            })}
          </InputGroup>
        </div> */}
      </Navbar>
    </div>
  );
}

export default Header;