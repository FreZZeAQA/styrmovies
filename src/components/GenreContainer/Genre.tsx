import {FC, PropsWithChildren} from "react";
import {IGenre} from "../../interfaces/genreInterface";

interface IProps extends PropsWithChildren {
genre:IGenre
}

const Genre : FC<IProps> = () => {
 return (
  <div>
   Genre
  </div>
 );
};

export {Genre};