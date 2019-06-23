import React, { useRef, useEffect } from 'react';
import Sortable from 'sortablejs';
import PropTypes from 'prop-types';
import useCheckbox from '../../hooks/useCheckbox';
import './filters.css';

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
  const {
    checked: proiritySeachEnable,
    bind: proiritySeachEnableBind
  } = useCheckbox(false);
  const { checked: groupSeachEnable, bind: groupSeachEnableBind } = useCheckbox(
    false
  );

  const { checked: groupSeachByName, bind: groupSeachByNameBind } = useCheckbox(
    false
  );
  const {
    checked: groupSeachByGenre,
    bind: groupSeachByGenreBind
  } = useCheckbox(false);
  const {
    checked: groupSeachByDirector,
    bind: groupSeachByDirectorBind
  } = useCheckbox(false);
  const {
    checked: groupSeachByActor,
    bind: groupSeachByActorBind
  } = useCheckbox(false);
  const {
    checked: groupSeachByAnnotation,
    bind: groupSeachByAnnotationBind
  } = useCheckbox(false);
  const {
    checked: groupSeachBySynopsis,
    bind: groupSeachBySynopsisBind
  } = useCheckbox(false);

  const items = useRef();
  useEffect(() => {
    const sortable = Sortable.create(items.current, {
      animation: 150,

      onUpdate: function(e) {
        reorder(itemsOrder, e.oldIndex, e.newIndex);
      }
    });
    return () => {
      sortable.destroy();
    };
  }, []);

  return (
    <aside
      id="filters"
      className={`card ml-3 filters ${isHidden ? 'hidden' : ''}`}>
      <div className="card-header card-header-primary">
        <h6>Customise your filters</h6>
      </div>

      <form className="card-body">
        {/* Priority search filter */}
        <div className="mb-2">
          <div className="togglebutton">
            <label
              htmlFor="priorityFiltersGroupControl"
              data-toggle="collapse"
              data-target="#priorityFiltersGroup"
              aria-expanded="false"
              aria-controls="priorityFiltersGroup">
              Enable priority search{' '}
              <input
                {...proiritySeachEnableBind}
                id="priorityFiltersGroupControl"
                type="checkbox"
              />
              <span className="ml-1 toggle"></span>
            </label>
          </div>

          <fieldset className="collapse" id="priorityFiltersGroup">
            <ul ref={items}>
              <li>Название</li>
              <li>Жанр</li>
              <li>Режиссер</li>
              <li>Актеры</li>
              <li>Аннотация</li>
              <li>Синопсис</li>
            </ul>
          </fieldset>
        </div>

        {/* Group by filters */}
        <div className="mb-2">
          <div className="togglebutton">
            <label
              htmlFor="groupFiltersGroupControl"
              data-toggle="collapse"
              data-target="#groupFiltersGroup"
              aria-expanded="false"
              aria-controls="groupFiltersGroup">
              Enable fields group{' '}
              <input
                {...groupSeachEnableBind}
                id="groupFiltersGroupControl"
                type="checkbox"
              />
              <span className="ml-1 toggle"></span>
            </label>
          </div>

          <fieldset className="collapse" id="groupFiltersGroup">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  {...groupSeachByNameBind}
                  className="form-check-input"
                  type="checkbox"
                  value="name"
                />
                Название
                <span className="form-check-sign">
                  <span className="check"></span>
                </span>
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label">
                <input
                  {...groupSeachByGenreBind}
                  className="form-check-input"
                  type="checkbox"
                  value="genres"
                />
                Жанр
                <span className="form-check-sign">
                  <span className="check"></span>
                </span>
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label">
                <input
                  {...groupSeachByDirectorBind}
                  className="form-check-input"
                  type="checkbox"
                  value="director"
                />
                Режиссер
                <span className="form-check-sign">
                  <span className="check"></span>
                </span>
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label">
                <input
                  {...groupSeachByActorBind}
                  className="form-check-input"
                  type="checkbox"
                  value="actors"
                />
                Актеры
                <span className="form-check-sign">
                  <span className="check"></span>
                </span>
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label">
                <input
                  {...groupSeachByAnnotationBind}
                  className="form-check-input"
                  type="checkbox"
                  value="annotation"
                />
                Аннотация
                <span className="form-check-sign">
                  <span className="check"></span>
                </span>
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label">
                <input
                  {...groupSeachBySynopsisBind}
                  className="form-check-input"
                  type="checkbox"
                  value="synopsis"
                />
                Синопсис
                <span className="form-check-sign">
                  <span className="check"></span>
                </span>
              </label>
            </div>
          </fieldset>
        </div>
      </form>
    </aside>
  );
}

Filters.propTypes = {
  isHidden: PropTypes.bool.isRequired
};

export default Filters;
