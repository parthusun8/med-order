import React from 'react';

class AddItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: 0,
        }
    }

    render() {
        return (
            <form className="row margin mb-5" onSubmit={(e)=> {
                e.preventDefault(); 
                this.props.add(this.state.name, this.state.price)}
            }>
                <div className="mb-3 col-4">
                    <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputText" 
                        name="productName" 
                        onChange={(e) => this.setState({name: e.currentTarget.value})} 
                        value={this.state.name} 
                    />
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="price" className="form-label">Price</label>
                        <input type="number" className="form-control" id="price" 
                        name="productPrice" 
                        onChange={(e) => this.setState({price: Number(e.currentTarget.value)})} 
                        value={this.state.price}
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-sm col-4" >Add</button>
            </form>
        );
    }
}

export default AddItem;