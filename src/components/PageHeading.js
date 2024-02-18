import React from 'react';

function PageHeading({ title, subtitle }) {
  return (
    <div className="page-heading fade-in" role="region">
      <h2 className="subtitle">{title}</h2>
      <h3 className="lead-text">{subtitle}</h3>
    </div>
  );
}

export default PageHeading;
