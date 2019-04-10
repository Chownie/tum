import React, { Component } from 'react';
import Post from './post';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {postJSON: ''};
    }

    sanitizeJSON = (json) => {
        if(json.length > 0) {
            return `{"data":[${json.replace(/}\s{/gi, "},{")}]}`
        }
        return "";
    }

    handleChange(event) {
        this.setState({postJSON: this.sanitizeJSON(event.target.value)});
    }

    render() {
        console.log(this.state.postJSON);

        let posts = []
        if(this.state.postJSON.length > 0) {
            const postData = JSON.parse(this.state.postJSON);

            for (const [index, value] of postData.data.entries()) {
                value.index = index;
                posts.push(value);
            }
        }

        return (
            <div className="wrapper">
            <header>
                <h1>3 Column Responsive Layout</h1>
            </header>
            <section className="columns">
                <div className="column">
                    <h2>Tumblr JSON</h2>
                    <form>
                        <textarea value={this.state.value} onBlur={this.handleChange}></textarea>
                    </form>
                </div>
                <div className="column">
                    <h2>Posts</h2>
                    {posts.map((value) => {
                        return (
                        <Post postJSON={value} />)
                    })}
                </div>
                <div className="column navigation">
                    <h2>Navigation</h2>
                    {posts.map((value, index) => {
                        return (
                        <a href={"#" + index}>{index}</a>)
                    })}
                </div>
            </section>
            <footer>
                <h3>Footer</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, porro. Doloribus vitae non dolores modi
                    dolorum commodi perspiciatis dicta nostrum minus esse, totam officia, quibusdam amet quas tempora?
                    Voluptatibus, esse.</p>
            </footer>
            </div>
        );
    }
}

export default App;
