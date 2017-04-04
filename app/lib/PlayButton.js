import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { Typo } from './Typography'
import { getColor } from './helpers'
import Icon from './Icon'

export default class AddImageButton extends Component {
    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity onPress={this.handlePress.bind(this)}>
                    <Icon name="play-arrow" size={36} color={getColor('#ffffff')} />
                </TouchableOpacity>
            </View>
        )
    }

    handlePress() {
        this.props.onBtnPress()
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: getColor('black'),
        borderRadius: 50
    }
})