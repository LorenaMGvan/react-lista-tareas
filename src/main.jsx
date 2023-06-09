import React from "react";
import ReactDOM from "react-dom/client";
import { Saludos, UserCard } from "./Saludos";
import ProductoX, { Navbar } from "./Product";
import {Boton} from './Boton';
import {TaskCard} from './Task'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TaskCard/>
  </>
);
