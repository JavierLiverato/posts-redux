import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SimpleReactValidator from 'simple-react-validator';

import CardBody from '../../components/CardBody/CardBody';
import InputForm from '../../components/InputForm/InputForm';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

import { storePost } from "../../actions/postsActions";
import { reactValidatorOptions } from '../../helpers/simpleReactValidator';

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
            title: '',
            content: '',
            image: null,
            b64image: null
        };

        this.validator = new SimpleReactValidator(reactValidatorOptions);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.postsReducer.gotPosts) {
            //alert('asdasdasdas')
        } else {
            if (!!nextProps.errorReducer && nextProps.errorReducer.hasErrors) {
                const firstKey = Object.keys(nextProps.errorReducer.errors)[0];
                if (nextProps.errorReducer.errors)
                    alert(firstKey + ': ' + nextProps.errorReducer.errors[firstKey]);
            }
        }
    }

    onChangeCustomFile = () => e => {
        const id = e.target.id
        this.setState({ [id]: e.target.value });
        
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => this.setState({ ['b64'+id]: reader.result });
    };

    onChangeCustomInput = () => e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    setPost = (e) => {
        e.preventDefault();
        if (this.validator.allValid()) {
            const { title, content, b64image } = this.state;
            let data = {
                title,
                content,
                image: b64image
            };
            this.props.storePost(this.props.history, data);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render() {
        return (
            <CardBody>
                <div className={this.props.className}>
                    <form action="" id="login-validation"
                        className="col-12"
                        onSubmit={this.setPost}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6 ">
                                <InputForm
                                    id="title"
                                    type={"text"}
                                    placeholder={"Título"}
                                    className="form-control large"
                                    onChange={this.onChangeCustomInput()}
                                    onKeyDown={'title'}
                                    value={this.state.title}
                                    validator={this.validator}
                                    validateOptions={'required|min:3'}
                                />
                            </div>
                            <div className="col-sm-12 col-md-6 ">
                                <InputForm
                                    id="content"
                                    type={"text"}
                                    placeholder={"Contenido"}
                                    className="form-control large"
                                    onChange={this.onChangeCustomInput()}
                                    onKeyDown={'content'}
                                    value={this.state.content}
                                    validator={this.validator}
                                    validateOptions={'required|min:10'}
                                />
                            </div>

                            <div className="col-sm-12 col-md-6 ">
                                <InputForm
                                    id="image"
                                    type={"file"}
                                    placeholder={"Imagen"}
                                    className="form-control large"
                                    onChange={this.onChangeCustomFile()}
                                    onKeyDown={'image'}
                                    value={this.state.image}
                                    validator={this.validator}
                                    validateOptions={'required'}
                                />
                            </div>

                            <div className="col col-12">
                                <PrimaryButton
                                    txtBtn={"Guardar"}
                                    sizeWidth={"10rem"}
                                >
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </CardBody>
        )
    }
}

Posts.propTypes = {
    storePost: PropTypes.func.isRequired,
    postsReducer: PropTypes.object.isRequired,
    errorReducer: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    postsReducer: state.postsReducer,
    errorReducer: state.errorReducer
})

const mapDispatchToProps = {
    storePost
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
