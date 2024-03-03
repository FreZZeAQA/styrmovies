import {FC, PropsWithChildren} from "react";
import {Movies} from "../components/MoviesContainer";

interface IProps extends PropsWithChildren {

}

const MoviesPage : FC<IProps> = () => {
 return (
  <div>
   <Movies/>
  </div>
 );
};

export {MoviesPage};