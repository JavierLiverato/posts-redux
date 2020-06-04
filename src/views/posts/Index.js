import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'

import CardBody from '../../components/CardBody/CardBody';
import Button from '../../components/Button/Button';

import { getPosts, deletePost } from "../../actions/postsActions";

/**
 * Posts Component ( full view for loggedIn users Postsp page )
 *
 * @export Class Component
 * @class Posts
 * @extends {Component}
 * @returns Redux connect
 */
export class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            filter: '',
            page: 1,
            hasNext: true
        };

        this.props.getPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.postsReducer.gotPosts) {
            this.setState({ posts: nextProps.postsReducer.posts });
            this.setState({ hasNext: nextProps.postsReducer.posts.length === 10 });
        }
        if (nextProps.postsReducer.deletedPost) {
            this.props.getPosts(`filter=${this.state.filter}&page=${this.state.page}`);
        }
    }

    onChangeFilter = () => e => {
        this.setState({ [e.target.id]: e.target.value });
        this.props.getPosts(`filter=${e.target.value}&page=${this.state.page}`);
    };

    prevPage = (e) => {
        e.preventDefault();
        const page = this.state.page === 1 ? 1 : this.state.page - 1 
        this.setState({ page: page });
        this.props.getPosts(`filter=${this.state.filter}&page=${page}`);
    };

    nextPage = (e) => {
        e.preventDefault();
        const page = this.state.hasNext ? this.state.page + 1 : this.state.page
        this.setState({ page: page });
        this.props.getPosts(`filter=${this.state.filter}&page=${page}`);
    };

    delete = (e, id) => {
        e.preventDefault();
        this.props.deletePost(id);
    };

    render() {
        return (
            <CardBody>
                <div className={this.props.className}>
                    <input
                        id={'filter'}
                        className={`form-control mb-3`}
                        value={this.state.filter}
                        placeholder={'Buscar'}
                        onChange={this.onChangeFilter()}
                    />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Título</th>
                                <th>Descripción</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.posts.map((post, key) =>
                                <tr>
                                    <td><img className="attach-file" src={post.image}></img></td>
                                    <td>{post.title}</td>
                                    <td>{post.content}</td>
                                    <td>
                                        <Button
                                            id={post._id}
                                            txtBtn={"borrar"}
                                            onPress={e => this.delete(e, post._id)}
                                            className={'btn-paginator bg-danger text-white'}
                                            sizeWidth={"5rem"}
                                        >
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    <Button txtBtn={"anterior"} onPress={this.prevPage} className={'btn-paginator'}></Button>
                    <div className="page-number">{this.state.page}</div>
                    <Button txtBtn={"siguiente"} onPress={this.nextPage} className={'btn-paginator'}></Button>
                </div>
            </CardBody>
        )
    }
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    postsReducer: PropTypes.object.isRequired,
    errorReducer: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    postsReducer: state.postsReducer,
    errorReducer: state.errorReducer
})

const mapDispatchToProps = {
    getPosts,
    deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
