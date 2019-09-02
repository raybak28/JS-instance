import React from 'react';
import { Table, Tag, Button, Rate  } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';



class ShopStore extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      initialShopStore: null,
      renderShopStore: null,
      filteredInfo: null,
      sortedInfo: null,
    };
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.initialShopStore !== nextProps.shopWarehouseData) {
      return {
        initialShopStore: nextProps.shopWarehouseData,
        renderShopStore: nextProps.shopWarehouseData
      }
    }
    return null;
  }


  /*search mechanism   */
  dataSearch = (event) => {
    let filteredData;
    let filterValue;
    let newState = { ...this.state };
    let shopData = newState.initialShopStore;
    filterValue = event.target.value.toLowerCase();
    filteredData = shopData.filter(clothPosition => {
      return clothPosition.title.toLowerCase().includes(filterValue);
    });
    this.setState({ renderShopStore: filteredData });
  }

  /* filter and sorter mechanism */
  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  /* reset filters and sorters */
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };



  render() {

    let sortedInfo = this.state.sortedInfo;
    let filteredInfo = this.state.filteredInfo;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    /* Data table colomns description  */
    const columns = [      
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text, { _id: { $oid } }) => <Link to={`about/${$oid}`}>{text}</Link>,
        sorter: (a, b) => a.title.localeCompare(b.title),
        sortOrder: sortedInfo.columnKey === 'title' && sortedInfo.order,
      },

      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
        sortOrder: sortedInfo.columnKey === 'price' && sortedInfo.order,
        filters: [{ text: 'High price', value: '60' }, { text: 'Middle price', value: '30' }, { text: 'Low price', value: '1' }],
        filteredValue: filteredInfo.price || null,
        onFilter: (value, record) => {
          if (((record.price >= 60) && (value === 60)) || ((record.price < 60) && (record.price >= 30) && (value === 30)) || ((record.price < 30) && (value === 1)))
            return true;
        }
      },

      {
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
        filters: [{ text: 'L', value: 'L' }, { text: 'M', value: 'M' }, { text: 'S', value: 'S' }, { text: 'XL', value: 'XL' }, { text: 'XS', value: 'XS' },],
        filteredValue: filteredInfo.size || null,
        onFilter: (value, record) => record.size.includes(value),
        render: size => (
          <span>
            {size.map(sizeLetter => {
              return (
                <Tag color={"green"} key={sizeLetter}>
                  {sizeLetter}
                </Tag>
              );
            })}
          </span>
        ),
      },

      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },

      {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
        render: rating => (<Rate allowHalf style={{ fontSize: 12, width: "100px" }} value={rating} />),
        sorter: (a, b) => a.rating - b.rating,
        sortOrder: sortedInfo.columnKey === 'rating' && sortedInfo.order,
        filters: [{ text: 'High rating', value: '4.5' }, { text: 'Middle rating', value: '3' }, { text: 'Low rating', value: '1' }],
        filteredValue: filteredInfo.rating || null,
        onFilter: (value, record) => {
          if (((record.rating >= 4.5) && (value === 4.5)) || ((record.rating < 4.5) && (record.rating >= 3) && (value === 3)) || ((record.rating < 3) && (value === 1)))
            return true;
        }
      },

      {
        title: 'Image',
        dataIndex: 'images',
        key: 'images',
        render: images => (
          <img className="cloth" src={images[0]} />
        ),
      },

      {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
        sorter: (a, b) => a.tags[0].length - b.tags[0].length,
        sortOrder: sortedInfo.columnKey === 'tags' && sortedInfo.order,        
        render: tags => (
          <span>
            {tags.map(tag => {
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
          </span>
        ),
      },

      {
        title: 'Color',
        dataIndex: 'color',
        key: 'color',
        filters: [{ text: 'yellow', value: 'yellow' }, { text: 'blue', value: 'blue' }, { text: 'purple', value: 'purple' }, { text: 'green', value: 'green' }, { text: 'black', value: 'black' }, { text: 'grey', value: 'grey' }, { text: 'red', value: 'red' }, { text: 'pink', value: 'pink' }, { text: 'brown', value: 'brown' }, { text: 'orange', value: 'orange' }],
        filteredValue: filteredInfo.color || null,
        onFilter: (value, record) => record.color.includes(value),
        render: color => (
          <span>
            {color.map(colorCode => {
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
          </span>
        ),
      },
    ];


    return (
      <div>
        <h1 className="title">Cloth Shop</h1>
        <div className="main-bar-button ">
          <div className="clear-all-button">
            <Button onClick={this.clearAll}>Clear filters and sorters</Button>
          </div>
          <div className="searchbar">
            <input
              value={this.state.value}
              type="text"
              placeholder="Search..."
              onChange={this.dataSearch}
            />
          </div>
        </div>
        <Table columns={columns} dataSource={this.state.renderShopStore} rowKey="title" onChange={this.handleChange} />
      </div >
    );
  }
}

export default ShopStore;