import React, {Component} from 'react'
import {
    Text,
    View,
    TextInput,
    BackAndroid,
    StatusBar,
    Image
} from 'react-native'
import {connect} from 'react-redux'

import Toolbar from '../lib/Toolbar'
import TickBtn from '../lib/TickBtn'
import BackBtn from '../lib/BackBtn'
import {styles} from './styles'
import {getColor} from '../lib/helpers'
import {Typo} from '../lib/Typography'
import {updateNote} from '../actions'

class SingleNote extends Component {
    constructor(props) {
        super(props)

        this._handleBackButton = this._handleBackButton.bind(this)

        this.state = {
            changed: false,
            id: this.props.noteId,
            title: this.props.title,
            desc: this.props.description,
            imageSource: this.props.imageSource,
        }
    }

    componentDidMount() {
        BackAndroid.addEventListener('backPressedSingleNote', this._handleBackButton)
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('backPressedSingleNote', this._handleBackButton)
    }

    _handleBackButton() {
        if (this.state.changed && this.state.title != '') {
            this.updateNote()
        } else {
            this.goBack()
        }
        return true
    }

    render() {
        console.log("Img src", this.props.imageSource);
        return (
            <View style={ styles.addNotesContainer }>
                <StatusBar
                    backgroundColor={getColor('paperTeal700')}
                    barStyle="light-content"
                    animated={true}
                />
                <Toolbar title="Edit Note" color={getColor('paperTeal')}/>

                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.inputTitleStyle}
                        placeholder='Note Title...'
                        placeholderTextColor='#aaa'
                        returnKeyType='next'
                        underlineColorAndroid="transparent"
                        selectionColor={getColor('paperTeal')}
                        onChangeText={(text) => this.setState({title: text, changed: true})}
                        value={this.state.title}
                    />

                    <TextInput
                        style={styles.inputDescriptionStyle}
                        multiline={true}
                        placeholder='Note Description...'
                        placeholderTextColor='#aaa'
                        returnKeyType='done'
                        underlineColorAndroid="transparent"
                        selectionColor={getColor('paperTeal')}
                        onChangeText={(text) => this.setState({desc: text, changed: true})}
                        value={this.state.desc}
                    />
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={this.props.imageSource}/>
                    </View>
                </View>

                <View style={styles.inputScreenBtnContainer}>
                    <TickBtn onBtnPress={this.updateNote.bind(this)}/>
                    <BackBtn onBtnPress={this.goBack.bind(this)}/>
                </View>

            </View>
        )
    }

    goBack(event) {
        this.props.navigator.pop()
    }

    updateNote() {
        if (this.state.changed) {
            this.props.updateNote({
                id: this.state.id,
                title: this.state.title,
                description: this.state.desc
            })
        }

        this.goBack()
    }
}

export default connect(null, {updateNote})(SingleNote)
