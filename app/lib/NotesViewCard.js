//
// Toolbar Component
//
import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native'

import {Typo} from './Typography'
import {getColor} from './helpers'

export default class NotesViewCard extends Component {
    render() {
        const {
            title,
            description,
            imageSource,
            id,
            keys
        } = this.props

        const background = (keys % 2 == 0) ? {backgroundColor: '#ffffff'} : {backgroundColor: '#f2f2f2'}

        return (
            <TouchableOpacity onPress={this.handleGoto.bind(this)} onLongPress={this.handleLongPress.bind(this)}>
                <View style={[styles.cardContainer, background]}>
                    <View style={styles.imageContainer}>
                        <Image source={imageSource} style={styles.image}/>
                    </View>
                    <View>
                        <View style={styles.cardTitleContainer}>
                            <Text style={[styles.cardTitle, Typo.cardTitle]}>
                                {title.toUpperCase()}
                            </Text>
                        </View>
                        <View style={styles.cardDescriptionContainer}>
                            <Text style={[styles.cardDescription, Typo.cardDescription]}>
                                {(description.length > 150)
                                    ? description.slice(0, 150) + '...'
                                    : description}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    handleLongPress() {
        this.props.onLongPressBtn(this.props.id)
    }

    handleGoto() {
        this.props.onPressBtn(this.props.id, this.props.title, this.props.description, this.props.imageSource)
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15
    },
    imageContainer: {
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 10,
    },
    cardTitleContainer: {
        justifyContent: 'center'
    },
    cardTitle: {
        marginBottom: 10
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    cardDescriptionContainer: {},
    cardDescription: {}
});
