
import { Row, Coluna } from "../componentes/coluna";
import HeaderNav from "../componentes/nav";
import Task1 from "../componentes/Task";
// interface Task {
//   id: number;
//   title:string;
//   status: string;
// }
// const initialTasks: Task[] =[
//   {id:{id}, title: {title}, }
// ]
const Kanban = () : JSX.Element => {
 
  return (
 <>
 <HeaderNav/>
  
  
  <Row>
  <Coluna><Task1/></Coluna>
    <Coluna>TO DO</Coluna>
    <Coluna>DOING</Coluna>
    <Coluna>DONE</Coluna>
  </Row>
 
 </>
  )}

export default Kanban;
