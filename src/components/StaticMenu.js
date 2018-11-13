import React from "react";
import PropTypes from "prop-types";
import "./StaticMenu.css";
import classNames from "classnames";

const StaticMenu = props => {
  return (
    <div className={"static-menu"}>
      {props.items.map(item => {
        const itemClass = classNames("static-menu__item", {
          "static-menu__item--active": item.active
        });
        return (
          <div className={itemClass} key={item.id}>
            <a
              className={"link"}
              href={"."}
              onClick={e => props.onClickHandler(e, item.id)}
            >
              {item.text}
            </a>
          </div>
        );
      })}
    </div>
  );
};

StaticMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      code: PropTypes.string,
      text: PropTypes.string
    })
  ),
  onClickHandler: PropTypes.func
};

export default StaticMenu;
