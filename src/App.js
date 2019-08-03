import React from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

class App extends React.Component {
    state = {
        items: [],
        item: '',
        editItemId: null
    };

    handleChange = (e) => {
      this.setState({
            item: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            items: [...this.state.items, {
              id: this.state.editItemId ? this.state.editItemId : uuid(),
              title: this.state.item
            }],
            item: "",
            editItem: null
        });
    };

    clearList = () => {
        this.setState({
            items: [],
            item: '',
            editItemId: null
        });
    };

    handleDelete = (id) => {
        const filteredItems = this.state.items.filter(item =>item.id !== id);
        this.setState({
            items:filteredItems
        });
    };

    handleEdit = async (id) => {
        if (this.state.editItemId) {
            this.setState({
                items: [...this.state.items, {
                    id: this.state.editItemId,
                    title: this.state.item
                }],
                item: "",
                editItem: null
            });
        }

        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id)
        this.setState({
            items:filteredItems,
            item:selectedItem.title,
            editItemId: id,
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center font-weight-bold">
                            Todo Input
                        </h3>

                        <TodoInput item={this.state.item}
                                   handleChange={this.handleChange}
                                   handleSubmit={this.handleSubmit}
                                   editItem={this.state.editItem}

                        />
                        <TodoList items={this.state.items}
                                  clearList={this.clearList}
                                  handleDelete={this.handleDelete}
                                  handleEdit={this.handleEdit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
