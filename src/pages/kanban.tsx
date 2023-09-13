
import { Row, Coluna } from "../componentes/coluna";
import HeaderNav from "../componentes/nav";
const Kanban = () : JSX.Element => {
 
  return (
 <>
 <HeaderNav/>
  
  
  <Row>
    <Coluna>NOVO</Coluna>
    <Coluna>TO DO</Coluna>
    <Coluna>DOING</Coluna>
    <Coluna>DONE</Coluna>
  </Row>
 
 </>
  )}

export default Kanban;
