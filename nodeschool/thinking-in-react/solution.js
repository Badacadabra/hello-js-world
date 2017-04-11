import React from 'react';

export class FilterableProductTable extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: 'off'
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput (event) {
    if (event.target.type === 'text') {
      this.setState({
        filterText: event.target.value,
        inStockOnly: this.state.inStockOnly
      }, () => console.log(this.state.filterText));
    }

    if (event.target.type === 'checkbox') {
      let stock = (this.state.inStockOnly === 'off') ? 'on' : 'off';
      this.setState({
        filterText: this.state.filterText,
        inStockOnly: stock
      }, () => console.log(this.state.inStockOnly));
    }
  }

  render () {
    return(
      <div id="filterableProductTable">
        <SearchBar callback={this.handleUserInput} />
        <ProductTable />
      </div>
    );
  }
}

export class SearchBar extends React.Component {
  render () {
    return (
      <form>
        <input type="text" placeholder="Search" onChange={this.props.callback} />
        <input type="checkbox" onChange={this.props.callback} />Only show products in stock
      </form>
    );
  }
}

export class ProductTable extends React.Component {
  render () {
    return (
      <table id="productTable">
        <tbody>
          <ProductCategoryRow name="Sporting Goods" />
          <ProductRow name="Football" price="$49.99" />
          <ProductRow name="Baseball" price="$9.99" />
          <ProductRow name="Basketball" price="$29.99" />
          <ProductCategoryRow name="Electronics" />
          <ProductRow name="iPod Touch" price="$99.99" />
          <ProductRow name="iPhone 5" price="$399.99" />
          <ProductRow name="Nexus 7" price="$199.99" />
        </tbody>
      </table>
    );
  }
}

export class ProductCategoryRow extends React.Component {
  render () {
    return (
      <tr>
        <td colSpan="2">{this.props.name}</td>
      </tr>
    );
  }
}

export class ProductRow extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}
