import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import httpService from "./services/httpService";
import config from "./config.json";

class HttpComponent extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const { data: posts } = await httpService.get(config.apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "something to server!", body: "something to server!" };
    const { data: post } = await httpService.post(config.apiEndpoint, obj);
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await httpService.delete("sjgkgjv" + config.apiEndpoint + "/" + post.id);
      //throw new Error("");
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted. ");

      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add Something to Server!
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>

              <th>Log an Error!</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Log an Error!
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default HttpComponent;
