import React, { Component } from 'react';

class Post extends Component {
    grabCorrectText = () => {
        const textObject = {
            answer: 
                <div>
                    <div className="Question" dangerouslySetInnerHTML={{ __html: this.props.postJSON["question"]}} />
                    <div className="Answer" dangerouslySetInnerHTML={{ __html: this.props.postJSON["answer"]}} />
                </div>,
            photo: 
                <div dangerouslySetInnerHTML={{ __html: this.props.postJSON["photo-caption"]}} />,
            regular: 
                <div>
                    <div className="Title" dangerouslySetInnerHTML={{ __html: this.props.postJSON["regular-title"]}} />
                    <div className="Body" dangerouslySetInnerHTML={{ __html: this.props.postJSON["regular-body"]}} />
                </div>
        }
        return (textObject[this.props.postJSON["type"]])
    }

    render() {
        return (
            <article>
            <header>
                <h3><a id={this.props.postJSON.index}>{this.props.postJSON.slug}</a></h3>
            </header>
            <img src={this.props.postJSON["photo-url-250"]} ></img>
            {this.grabCorrectText()}
            <footer>
                <p><small>{this.props.postJSON.tags.join(", ")}</small></p>
            </footer>
            </article>
        )
    }
}

export default Post;