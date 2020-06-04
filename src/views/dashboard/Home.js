import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardBody from '../../components/CardBody/CardBody';

/**
 * Home Component ( full view for loggedIn users homepage )
 *
 * @export Class Component
 * @class Home
 * @extends {Component}
 * @returns Redux connect
 */
export class Home extends Component {
    render() {
        return (
            <CardBody>
                <div className={this.props.className}>
                    <div className={'home-txt text-justify'}>
                        <div className="mb-3">
                        Esta es una aplicación basada en Redux, la cual hace posible lo siguiente:
                        </div>
                        
                        <ol className={'font-italic'}>Listar publicaciones creadas por un usuario</ol>
                        <ol className={'font-italic'}>Crear una nueva publicación</ol>
                        <ol className={'font-italic'}>Registrar a un usuario</ol>
                        <ol className={'font-italic'}>Hacer login</ol>
                        <ol className={'font-italic'}>Hacer logout</ol>

                        <div className="mb-3">
                        Conecta mediante API RestFul a un servidor Node, el cuál a su vez comunica con una base de datos en Atlas (MongoDB), maneja sesiones mediante JWT, donde se tiene una constante verificación del token y su respectiva dunción "refresh" para aumentar la caducidad siempre y cuando el usuario se encuentre activo, el tiempo de vencimiento de un token inactivo es de 1 hora.
                        </div>
                    </div>
                </div>
            </CardBody>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
