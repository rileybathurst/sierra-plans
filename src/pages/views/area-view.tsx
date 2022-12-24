import * as React from "react"
import { Link } from "gatsby";

const AreaView = ({ area }) => {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Sierra Plans</Link>
        </h1>
      </header>
      <main>
        {area.name}

        <ul>
          {area.plans.map((plan) => (
            <li key={plan.id}>
              <Link to={`/plans/${plan.slug}`}>{plan.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default AreaView;
