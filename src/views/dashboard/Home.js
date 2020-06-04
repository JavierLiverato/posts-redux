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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quod eaque consectetur sed vel omnis, nulla neque at culpa. Et magnam fuga eaque repellendus maiores sapiente dolores minus! Perferendis, nobis!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt numquam neque nesciunt ipsam odio quas debitis esse, asperiores dolorum repellat odit laboriosam quae quaerat aperiam, ut labore necessitatibus et aliquid!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dignissimos quos corporis eius quasi! Non deleniti voluptatum, consectetur sequi quae eum magni minus alias similique ipsum a laboriosam facere ratione.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi iusto repellendus quos facere maiores omnis. Nesciunt cupiditate explicabo earum eum libero inventore, maxime dolor qui magnam. Nam, voluptas eaque!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor minus voluptatibus sequi impedit quasi odio numquam laborum delectus, corrupti repellat saepe tenetur error quisquam asperiores cum, voluptates in fugiat nesciunt.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, fugit? Illum adipisci numquam ab repellat corporis. Magni nihil sapiente asperiores ipsum veritatis vero tenetur aspernatur. Doloremque quidem facere repudiandae laborum!
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
