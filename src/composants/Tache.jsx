import './Tache.scss';
/* Ex3 - Point F)ii) */
import formaterDateEtHeure from '../services/utilitaires';
import { Check, Delete } from '@material-ui/icons';

export default function Tache({id, texte, completee, date}) {
  return (
    <div className="Tache">
      {/* Ex3 - Point F)iii) basculer */}
      <Check/>
      {/* Ex3 - Point F)i) */}
      <span className="texte">{texte}</span>
      {/* Ex3 - Point F)ii) */}
      <span className="date">{formaterDateEtHeure(date)}</span>
      {/* Ex3 - Point F)iii) supprimer */}
      <Delete />
    </div>
  );
}