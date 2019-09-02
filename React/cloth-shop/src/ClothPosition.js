import React, { Component } from 'react';
import { Tag } from 'antd';
import 'antd/dist/antd.css';
import './App.css';


class ClothPosition extends Component {
    render() {
     
        const shopData = this.props.shopWarehouseData;
        const cloth = shopData.find(({ _id: { $oid } }) => $oid === this.props.match.params.clothId); 

        return (
            <div>
                <h1 className="detailed-title">{cloth.title}</h1>
                <p />
                <div className="detailed-main">
                    <div className="detailed-cloth">
                        {cloth.images.map(imageExample => {
                            return (
                                <img src={imageExample} />
                            );
                        })}
                    </div>

                    <div className="detailed-text">

                        <div>Description: {cloth.description}</div>
                        <p />
                        <div>Available size:
                {cloth.size.map(sizeLetter => {
                            return (
                                <Tag color={"green"} key={sizeLetter}>
                                    {sizeLetter}
                                </Tag>
                            );
                        })}
                        </div>
                        <p />
                        <div>Rating: {cloth.rating}</div>
                        <p />
                        <div>Tags:
                {cloth.tags.map(tag => {
                            let color;
                            switch (tag) {
                                case "Pants":
                                    color = '#D2B48C';
                                    break;
                                case "Jackets":
                                    color = '#2F4F4F';
                                    break;
                                case "Shirts":
                                    color = '#AFEEEE';
                                    break;
                                case "Dresses":
                                    color = '#FFE4E1';
                                    break;
                                case "Cardigans":
                                    color = '#FF00FF';
                                    break;
                                case "Polos":
                                    color = '#FF7F50';
                                    break;
                                case "Trench Coats":
                                    color = '#696969';
                                    break;
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                        </div>
                        <p />
                        <div>Available colors:

                {cloth.color.map(colorCode => {
                            let colour;
                            switch (colorCode) {
                                case "yellow":
                                    colour = '#fff566';
                                    break;
                                case "blue":
                                    colour = '#69c0ff';
                                    break;
                                case "purple":
                                    colour = '#b37feb';
                                    break;
                                case "green":
                                    colour = '#95de64';
                                    break;
                                case "black":
                                    colour = '#000000';
                                    break;
                                case "grey":
                                    colour = '#d9d9d9';
                                    break;
                                case "red":
                                    colour = '#f5222d';
                                    break;
                                case "pink":
                                    colour = '#ff85c0';
                                    break;
                                case "brown":
                                    colour = '#873800';
                                    break;
                                case "orange":
                                    colour = '#ffa940';
                                    break;
                            }

                            return (
                                <Tag color={colour} key={colorCode}>
                                    {colorCode + " "}
                                </Tag>
                            );
                        })}

                        </div>
                        <p />
                        <div className="detailed-price">Price: {cloth.price}</div>
                        <p />
                    </div>
                </div>
            </div>

        );
    }
}

export default ClothPosition;