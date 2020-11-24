import React, {Fragment} from "react";

/**
  * <Fragment></Fragment> or <></>
  * Either will do
**/

const Glossary = (props) => {
  return (
    <dl>
      {props.items.map(item => {
        // Without the key, React will fire a key warning
       // It should be unique value
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </Fragment>
      })}
    </dl>
  );
};

