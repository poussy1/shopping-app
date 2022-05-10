import { Component } from "react";
import "./BagItem.style.scss";
import Button from "../Button";
import PlusIcon from "../Icons/PlusIcon";
import MinusIcon from "../Icons/MinusIcon";
class BagItem extends Component {
  render = () => {
    var firstDescriptionWord = this.props.description.split(" ")[0];
    var restDescriptionWords =
      this.props.description.split(firstDescriptionWord)[1];
    console.log(this.props);
    return (
      <div className="bag-item-container">
        <div className="item-details">
          <span className="item-details-description">
            {this.props.description && (
              <>
                <span> {firstDescriptionWord}</span>
                <span>{restDescriptionWords}</span>
              </>
            )}
          </span>
          <span className="item-details-price">{this.props.price}</span>
          <span className="item-details-sizes">
            {this.props.sizes?.length > 0 &&
              this.props.sizes.map((size) => (
                <Button
                  text={size.size}
                  disabled={!size.available}
                  type={`${
                    this.props.selectedSize === size.size ? "selected" : ""
                  }`}
                />
              ))}
          </span>
        </div>
        <div className="item-count">
          <div className="item-counter">
            <Button icon={<PlusIcon />} type="has-icon" />
            <p>12</p>
            <Button icon={<MinusIcon />} type="has-icon" />
          </div>
          <img alt="product img" />
        </div>
      </div>
    );
  };
}

export default BagItem;
