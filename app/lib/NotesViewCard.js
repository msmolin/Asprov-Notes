//
// Toolbar Component
//
import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native'
import {Typo} from './Typography'
import {getColor} from './helpers'
let dateFormat = require('dateformat');

export default class NotesViewCard extends Component {
    render() {
        const {
            title,
            description,
            imageSource,
            id,
            date,
            keys
        } = this.props

        const background = (keys % 2 == 0) ? {backgroundColor: '#ffffff'} : {backgroundColor: '#f2f2f2'}

        return (
            <TouchableOpacity onPress={this.handleGoto.bind(this)} onLongPress={this.handleLongPress.bind(this)}>
                <View style={[styles.cardContainer, background]}>
                    <View style={styles.innerContainer}>
                        <View style={{flexDirection: 'row',  flex: 0.7}}>
                            <View style={styles.imageContainer}>
                                <Image source={imageSource} style={styles.image}/>
                            </View>
                            <View>
                                <View style={styles.cardTitleContainer}>
                                    <Text numberOfLines={1} style={[styles.cardTitle, Typo.cardTitle]}>
                                        {title.toUpperCase()}
                                    </Text>

                                </View>
                                <View style={styles.cardDescriptionContainer}>
                                    <Text numberOfLines={1} style={[styles.cardDescription, Typo.cardDescription]}>
                                        {(description.length > 150)
                                            ? description.slice(0, 150) + '...'
                                            : description}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flex: 0.3, alignItems: 'flex-end'}}>
                            <Text style={{color: getColor('paperBlue')}}>
                                {dateFormat(date, 'mediumDate')}
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
        justifyContent: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageContainer: {
        justifyContent: 'center',
        marginRight: 10,
    },
    cardTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
