
import { Cast } from "../interfaces/cast.interface";
import { MovieDBCast } from "../interfaces/moviedb-cast-response";


export class CastMapper {

    static fromTheMovieDBCastToEntity = (actor: MovieDBCast): Cast => {

        return {
            id: actor.id,
            name: actor.name,
            avatar: actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : 'https://i.stack.imgur.com/l60Hf.png', // esto en caso de no tener imagen
            character: actor.character ?? 'No character'
        }

    }
}