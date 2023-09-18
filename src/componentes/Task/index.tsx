import {Conteiner, Título,Conteudo, Icone}from "./style"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"
const Task1 = ()  => (
  <Conteiner>
    <form>
    <Título placeholder="Título"/>
    <Conteudo placeholder="Conteúdo"/>
    <Icone><FontAwesomeIcon icon={faCirclePlus} style={{color: "#3a72f8",}} /></Icone>
    </form>
  </Conteiner>
)
export default Task1