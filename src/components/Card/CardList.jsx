import React, { memo } from 'react';
import Card from './Card';
import './CardList.scss';

const CardList = memo(({ data, loading }) => {
  return (
    <div className="card">
      {loading ? (
        <div className="loading">로딩 중...</div>
      ) : (
        <ul className="card__list">
          <Card data={data} />
        </ul>
      )}
    </div>
  );
});

export default CardList;
