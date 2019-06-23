import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Sortable from 'sortablejs';
import PropTypes from 'prop-types';
import useCheckbox from '../../hooks/useCheckbox';
import './filters.css';
import ToggleButton from '../common/toggle-button';
import Checkbox from '../common/checkbox';
import { resetBoostingFields } from '../../actions/search';

function reorder(array, from, to) {
  array.splice(to, 0, array.splice(from, 1)[0]);
}

const itemsOrder = [
  'name',
  'genre',
  'directors',
  'actors',
  'annotation',
  'synopsis'
];

function Filters({ isHidden }) {
  const dispatch = useDispatch();
  /*const {
    checked: proiritySeachEnable,
    bind: proiritySeachEnableBind
  } = useCheckbox(false);*/
  const {
    checked: groupSearchEnable,
    bind: groupSeachEnableBind
  } = useCheckbox(false);

  const {
    checked: groupSearchByName,
    bind: groupSearchByNameBind
  } = useCheckbox(false, 'title');
  const {
    checked: groupSearchByGenre,
    bind: groupSearchByGenreBind
  } = useCheckbox(false, 'genres');
  const {
    checked: groupSearchByDirector,
    bind: groupSearchByDirectorBind
  } = useCheckbox(false, 'director');
  const {
    checked: groupSearchByActor,
    bind: groupSearchByActorBind
  } = useCheckbox(false, 'top3Cast');
  const {
    checked: groupSearchByAnnotation,
    bind: groupSeachByAnnotationBind
  } = useCheckbox(false, 'storyline');
  const {
    checked: groupSearchBySynopsis,
    bind: groupSearchBySynopsisBind
  } = useCheckbox(false, 'synopsis');

  useEffect(() => {
    if (!groupSearchEnable) dispatch(resetBoostingFields.request());
  }, [groupSearchEnable]);

  //const items = useRef();
  /*useEffect(() => {
    const sortable = Sortable.create(items.current, {
      animation: 150,

      onUpdate: function(e) {
        reorder(itemsOrder, e.oldIndex, e.newIndex);
      }
    });
    return () => {
      sortable.destroy();
    };
  }, []);*/

  return (
    <aside
      id="filters"
      className={`card ml-3 filters ${isHidden ? 'hidden' : ''}`}>
      <div className="card-header card-header-primary">
        <h6>Customise your filters</h6>
      </div>

      <form className="card-body">
        {/* Group by filters */}
        <div className="mb-2">
          <ToggleButton
            id="groupFiltersGroupControl"
            target="#groupFiltersGroup"
            controls="groupFiltersGroup"
            label="Enable fields group"
            bind={groupSeachEnableBind}
          />
          {groupSearchEnable ? (
            <fieldset id="groupFiltersGroup">
              <Checkbox
                bind={groupSearchByNameBind}
                label="Название"
                value="name"
              />
              <Checkbox
                bind={groupSearchByGenreBind}
                label="Жанр"
                value="genres"
              />
              <Checkbox
                bind={groupSearchByDirectorBind}
                label="Режиссер"
                value="director"
              />
              <Checkbox
                bind={groupSearchByActorBind}
                label="Актеры"
                value="actors"
              />
              <Checkbox
                bind={groupSeachByAnnotationBind}
                label="Аннотация"
                value="annotation"
              />
              <Checkbox
                bind={groupSearchBySynopsisBind}
                label="Синопсис"
                value="synopsis"
              />
            </fieldset>
          ) : null}
        </div>
      </form>
    </aside>
  );
}

Filters.propTypes = {
  isHidden: PropTypes.bool.isRequired
};

export default Filters;
