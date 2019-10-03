import React, { useState, useEffect } from 'react';
import { directions } from '../config';

const Filter = (props) => {
  const { listings, currentFilters, setCurrentFilters } = props;

  const getCurrentPage = () => {
    const parts = window.location.pathname.split('/');
    return parts[parts.length - 1];
  };

  const currentPage = getCurrentPage();

  const [bedOptions, setBedOptions] = useState([]);
  const [viewOptions, setViewOptions] = useState([]);

  useEffect(() => {
    const getBedOptions = () => {
      const bedOptions = [];
      listings[currentPage].forEach((d) => {
        const beds = d.acf.beds;
        if (!bedOptions.includes(beds)) {
          bedOptions.push(beds);
        }
      });
      return bedOptions;
    };

    const getViewOptions = () => {
      const viewOptions = [];
      listings[currentPage].forEach((d) => {
        const viewsStr = d.acf.views;
        const views = viewsStr.split('').map(v => directions[v]);
        views.forEach((v) => {
          if (!viewOptions.includes(v)) {
            viewOptions.push(v);
          }
        });
      });
      return viewOptions;
    };

    setBedOptions(getBedOptions());
    setViewOptions(getViewOptions());
  }, [listings, currentPage]);

  const toggleFilter = (name, type) => {
    let filters = currentFilters[currentPage][type];
    let setFilters = setCurrentFilters[currentPage];

    if (filters.includes(name)) {
      let newFilters = filters.filter(f => f !== name)
      setFilters({ ...currentFilters[currentPage], [type]: newFilters })
    } else {
      setFilters({ ...currentFilters[currentPage], [type]: [...filters, name] })
    }
  };

  const isChecked = (name, type) => (
    currentFilters[currentPage][type].includes(name) ? 'checked' : ''
  );

  const renderFilterOption = (name, type, index) => (
    <li key={index}>
      <input type="checkbox" onChange={() => toggleFilter(name, type)} id={`${type}-${name}`} name={`${type}-${name}`} checked={isChecked(name, type)} />
      <label htmlFor={`${type}-${name}`}>{name}</label>
    </li>
  );

  return (
    <div>
      <div>
        <p>Beds</p>
        <ul>{bedOptions.map((opt, i) => renderFilterOption(opt, 'beds', i))}</ul>
      </div>
      <div>
        <p>Views</p>
        <ul>{viewOptions.map((opt, i) => renderFilterOption(opt, 'views', i))}</ul>
      </div>
    </div>
  );
};

export default Filter;
